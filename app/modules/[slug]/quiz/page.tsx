"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { quizContent, type QuizQuestion } from "./content";
import { formatFrenchDisplayText } from "@/lib/french-display";
import {
  getModuleLabelBySlug,
  getRequiredChapterCount as getRequiredModuleChapterCount,
  resolveModuleSlug,
} from "@/lib/supabase/elearning/module-registry";

type ChapterProgress = {
  chapter_key: string;
  seconds_spent: number;
  min_seconds_required: number;
  is_completed: boolean;
};

type SavedQuizProgress = {
  version: number;
  totalQuestions: number;
  current: number;
  answers: number[][];
  finished: boolean;
  timeLeft: number;
  shuffleSeed: number;
  updatedAt: string;
};

function seededShuffle<T>(arr: T[], seed: number): T[] {
  const out = [...arr];
  let s = seed >>> 0;
  const rng = () => {
    s = Math.imul(s, 1664525) + 1013904223;
    return (s >>> 0) / 4294967296;
  };
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

type QuizContext = {
  enrollmentId: string;
  employeeFirstName: string;
  employeeLastName: string;
  companyName: string;
  managerEmail: string;
  orderedByEmployer: boolean;
  isAdmin: boolean;
};

const DEFAULT_QUESTION_TIME_LIMIT = 60;

function arraysEqual(a: number[] = [], b: number[] = []) {
  if (a.length !== b.length) return false;

  const sortedA = [...a].sort((x, y) => x - y);
  const sortedB = [...b].sort((x, y) => x - y);

  return sortedA.every((value, index) => value === sortedB[index]);
}

const defaultQuizContext: QuizContext = {
  enrollmentId: "",
  employeeFirstName: "",
  employeeLastName: "",
  companyName: "",
  managerEmail: "",
  orderedByEmployer: false,
  isAdmin: false,
};

export default function QuizPage() {
  const params = useParams();
  const slugParam = params.slug;

  const slug = useMemo(() => {
    if (Array.isArray(slugParam)) {
      return (slugParam[0] ?? "").toLowerCase();
    }
    return String(slugParam ?? "").toLowerCase();
  }, [slugParam]);
  const canonicalSlug = useMemo(() => resolveModuleSlug(slug) ?? slug, [slug]);

  const formationLabel = useMemo(
    () => getModuleLabelBySlug(canonicalSlug),
    [canonicalSlug]
  );
  const formattedFormationLabel = formatFrenchDisplayText(formationLabel);

  const quiz: QuizQuestion[] = useMemo(() => {
    return quizContent[canonicalSlug] ?? [];
  }, [canonicalSlug]);

  const [shuffleSeed, setShuffleSeed] = useState<number>(() => Date.now());

  const shuffledQuiz = useMemo((): QuizQuestion[] => {
    if (!quiz.length) return [];
    const questionOrder = seededShuffle(
      Array.from({ length: quiz.length }, (_, i) => i),
      shuffleSeed
    );
    return questionOrder.map((origIdx) => {
      const q = quiz[origIdx];
      const choiceSeed = shuffleSeed + origIdx * 7919;
      const choiceOrder = seededShuffle(
        Array.from({ length: q.choices.length }, (_, i) => i),
        choiceSeed
      );
      return {
        ...q,
        choices: choiceOrder.map((ci) => q.choices[ci]),
        answer: q.answer.map((origA) => choiceOrder.indexOf(origA)),
      };
    });
  }, [quiz, shuffleSeed]);

  const progressStorageKey = useMemo(() => {
    return canonicalSlug ? `quiz-progress-${canonicalSlug}` : "";
  }, [canonicalSlug]);

  const resultStorageKey = useMemo(() => {
    return canonicalSlug ? `quiz-result-${canonicalSlug}` : "";
  }, [canonicalSlug]);

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[][]>([]);
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(DEFAULT_QUESTION_TIME_LIMIT);

  const [progressData, setProgressData] = useState<ChapterProgress[]>([]);
  const [loadingProgress, setLoadingProgress] = useState(true);
  const [savingResult, setSavingResult] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  const [savedProgress, setSavedProgress] = useState<SavedQuizProgress | null>(
    null
  );
  const [restoreChoicePending, setRestoreChoicePending] = useState(false);
  const [progressRestored, setProgressRestored] = useState(false);

  const [quizContext, setQuizContext] = useState<QuizContext>(defaultQuizContext);
  const [loadingQuizContext, setLoadingQuizContext] = useState(true);

  const currentQuestion = shuffledQuiz[current];
  const currentQuestionTimeLimit =
    currentQuestion?.timeLimit ?? DEFAULT_QUESTION_TIME_LIMIT;

  useEffect(() => {
    if (!canonicalSlug) {
      setProgressData([]);
      setLoadingProgress(false);
      return;
    }

    const loadProgress = async () => {
      try {
        const res = await fetch(`/api/chapter-progress/${canonicalSlug}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Impossible de charger la progression");
        }

        const data = await res.json();
        setProgressData(Array.isArray(data) ? data : []);
      } catch {
        setProgressData([]);
      } finally {
        setLoadingProgress(false);
      }
    };

    loadProgress();
  }, [canonicalSlug]);

  useEffect(() => {
    if (!canonicalSlug) {
      setQuizContext(defaultQuizContext);
      setLoadingQuizContext(false);
      return;
    }

    const loadQuizContext = async () => {
      try {
        setLoadingQuizContext(true);

        const response = await fetch(`/api/quiz/context/${canonicalSlug}`, {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Impossible de charger le contexte quiz");
        }

        const data = await response.json();

        setQuizContext({
          enrollmentId: data?.enrollmentId ?? "",
          employeeFirstName: data?.employeeFirstName ?? "",
          employeeLastName: data?.employeeLastName ?? "",
          companyName: data?.companyName ?? "",
          managerEmail: data?.managerEmail ?? "",
          orderedByEmployer: Boolean(data?.orderedByEmployer),
          isAdmin: Boolean(data?.isAdmin),
        });
      } catch (error) {
        console.error("Erreur chargement contexte quiz :", error);
        setQuizContext(defaultQuizContext);
      } finally {
        setLoadingQuizContext(false);
      }
    };

    loadQuizContext();
  }, [canonicalSlug]);

  const requiredChapterCount = useMemo(() => {
    return getRequiredModuleChapterCount(canonicalSlug);
  }, [canonicalSlug]);

  const completedChapterCount = useMemo(() => {
    return progressData.filter((item) => item.is_completed).length;
  }, [progressData]);

  const isAdminPreview = quizContext.isAdmin;

  const allChaptersCompleted =
    isAdminPreview ||
    requiredChapterCount > 0 &&
    completedChapterCount >= requiredChapterCount;

  const score = useMemo(() => {
    return shuffledQuiz.reduce((acc, question, index) => {
      const selectedAnswers = answers[index] ?? [];
      return acc + (arraysEqual(selectedAnswers, question.answer) ? 1 : 0);
    }, 0);
  }, [shuffledQuiz, answers]);

  const passingScore = useMemo(() => {
    return quiz.length > 0 ? Math.ceil(quiz.length * 0.7) : 0;
  }, [quiz.length]);

  const success = quiz.length > 0 && score >= passingScore;

  const scorePercent = useMemo(() => {
    return quiz.length > 0 ? Math.round((score / quiz.length) * 100) : 0;
  }, [score, quiz.length]);

  const reviewItems = useMemo(() => {
    return shuffledQuiz.map((question, index) => {
      const selectedAnswers = answers[index] ?? [];
      const correct = arraysEqual(selectedAnswers, question.answer);

      return {
        index,
        question,
        correct,
        selectedAnswers,
        correctChoices: question.answer.map(
          (choiceIndex) => question.choices[choiceIndex] ?? ""
        ),
        selectedChoices: selectedAnswers.map(
          (choiceIndex) => question.choices[choiceIndex] ?? ""
        ),
      };
    });
  }, [answers, shuffledQuiz]);

  useEffect(() => {
    if (!canonicalSlug || !progressStorageKey || quiz.length === 0) return;

    try {
      const savedRaw = localStorage.getItem(progressStorageKey);

      if (!savedRaw) return;

      const saved = JSON.parse(savedRaw) as SavedQuizProgress;

      const isValid =
        saved &&
        saved.version === 3 &&
        saved.totalQuestions === quiz.length &&
        Array.isArray(saved.answers) &&
        typeof saved.current === "number" &&
        typeof saved.finished === "boolean" &&
        typeof saved.timeLeft === "number" &&
        typeof saved.shuffleSeed === "number";

      if (!isValid) {
        localStorage.removeItem(progressStorageKey);
        return;
      }

      if (saved.finished) {
        localStorage.removeItem(progressStorageKey);
        return;
      }

      const hasAnyAnswer = saved.answers.some(
        (entry) => Array.isArray(entry) && entry.length > 0
      );

      if (!hasAnyAnswer && saved.current === 0) {
        localStorage.removeItem(progressStorageKey);
        return;
      }

      setSavedProgress(saved);
      setRestoreChoicePending(true);
    } catch (error) {
      console.error("Erreur lecture sauvegarde quiz :", error);
      localStorage.removeItem(progressStorageKey);
    }
  }, [canonicalSlug, quiz.length, progressStorageKey]);

  useEffect(() => {
    if (!canonicalSlug || !progressStorageKey || quiz.length === 0) return;
    if (restoreChoicePending) return;
    if (finished) return;
    if (isAdminPreview) return;

    const payload: SavedQuizProgress = {
      version: 3,
      totalQuestions: quiz.length,
      current,
      answers,
      finished,
      timeLeft,
      shuffleSeed,
      updatedAt: new Date().toISOString(),
    };

    localStorage.setItem(progressStorageKey, JSON.stringify(payload));
  }, [
    canonicalSlug,
    quiz.length,
    current,
    answers,
    finished,
    timeLeft,
    shuffleSeed,
    progressStorageKey,
    restoreChoicePending,
    isAdminPreview,
  ]);

  useEffect(() => {
    if (
      isAdminPreview ||
      restoreChoicePending ||
      finished ||
      quiz.length === 0 ||
      !currentQuestion
    )
      return;

    const interval = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          window.clearInterval(interval);

          if (current < shuffledQuiz.length - 1) {
            const nextIndex = current + 1;
            setCurrent(nextIndex);
            return shuffledQuiz[nextIndex]?.timeLimit ?? DEFAULT_QUESTION_TIME_LIMIT;
          }

          setFinished(true);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [
    current,
    finished,
    shuffledQuiz,
    shuffledQuiz.length,
    restoreChoicePending,
    currentQuestion,
    isAdminPreview,
  ]);

  useEffect(() => {
    if (!finished) {
      setTimeLeft(currentQuestionTimeLimit);
    }
  }, [current, finished, currentQuestionTimeLimit]);

  useEffect(() => {
    if (!finished || !canonicalSlug || quiz.length === 0) return;

    const saveQuizResult = async () => {
      try {
        setSavingResult(true);
        setSaveError(null);

        const nowIso = new Date().toISOString();
        const payload = {
          slug: canonicalSlug,
          score,
          total: quiz.length,
          passingScore,
          success,
          completedAt: nowIso,
        };

        localStorage.setItem(resultStorageKey, JSON.stringify(payload));
        localStorage.removeItem(progressStorageKey);

        // Résultats par question : extrait court du texte + correct/incorrect
        const questionResults = shuffledQuiz.map((q, idx) => ({
          q: q.question.slice(0, 80),
          correct: arraysEqual(answers[idx] ?? [], q.answer),
        }));

        if (isAdminPreview) {
          return;
        }

        const response = await fetch("/api/quiz/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            formationSlug: canonicalSlug,
            score,
            total: quiz.length,
            passingScore,
            passed: success,
            completedAt: nowIso,
            questionResults,
          }),
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || "Erreur d’enregistrement du quiz");
        }
      } catch (error) {
        console.error("Erreur mise à jour résultat quiz :", error);
        setSaveError(
          "Le quiz est validé localement, mais la mise à jour du statut a échoué."
        );
      } finally {
        setSavingResult(false);
      }
    };

    saveQuizResult();
  }, [
    finished,
    canonicalSlug,
    score,
    quiz.length,
    passingScore,
    success,
    resultStorageKey,
    progressStorageKey,
    isAdminPreview,
    shuffledQuiz,
    answers,
  ]);

  const handleRestoreProgress = () => {
    if (!savedProgress || quiz.length === 0) {
      setRestoreChoicePending(false);
      return;
    }

    const restoredSeed = savedProgress.shuffleSeed ?? Date.now();
    setShuffleSeed(restoredSeed);

    const safeCurrent = Math.max(
      0,
      Math.min(savedProgress.current, quiz.length - 1)
    );

    const safeAnswers = savedProgress.answers
      .slice(0, quiz.length)
      .map((entry) => (Array.isArray(entry) ? entry : []));

    const maxTime =
      quiz[safeCurrent]?.timeLimit ?? DEFAULT_QUESTION_TIME_LIMIT;

    const safeTimeLeft =
      typeof savedProgress.timeLeft === "number" &&
      savedProgress.timeLeft > 0 &&
      savedProgress.timeLeft <= maxTime
        ? savedProgress.timeLeft
        : maxTime;

    setAnswers(safeAnswers);
    setCurrent(safeCurrent);
    setFinished(false);
    setTimeLeft(safeTimeLeft);
    setProgressRestored(true);
    setRestoreChoicePending(false);
  };

  const handleDiscardSavedProgress = () => {
    if (progressStorageKey) {
      localStorage.removeItem(progressStorageKey);
    }

    setSavedProgress(null);
    setRestoreChoicePending(false);
    setProgressRestored(false);
    setCurrent(0);
    setAnswers([]);
    setFinished(false);
    setTimeLeft(DEFAULT_QUESTION_TIME_LIMIT);
    setSaveError(null);
  };

  const handleSingleAnswer = (index: number) => {
    setAnswers((prev) => {
      const nextAnswers = [...prev];
      nextAnswers[current] = [index];
      return nextAnswers;
    });
  };

  const handleMultipleAnswer = (index: number) => {
    setAnswers((prev) => {
      const nextAnswers = [...prev];
      const currentAnswers = Array.isArray(nextAnswers[current])
        ? [...nextAnswers[current]]
        : [];

      if (currentAnswers.includes(index)) {
        nextAnswers[current] = currentAnswers.filter((value) => value !== index);
      } else {
        nextAnswers[current] = [...currentAnswers, index];
      }

      return nextAnswers;
    });
  };

  const next = () => {
    if (current < shuffledQuiz.length - 1) {
      setCurrent((prev) => prev + 1);
      return;
    }

    setFinished(true);
  };

  const restartQuiz = () => {
    setShuffleSeed(Date.now());
    setCurrent(0);
    setAnswers([]);
    setFinished(false);
    setTimeLeft(DEFAULT_QUESTION_TIME_LIMIT);
    setSaveError(null);
    setProgressRestored(false);
    setSavedProgress(null);
    setRestoreChoicePending(false);

    if (progressStorageKey) {
      localStorage.removeItem(progressStorageKey);
    }

    if (resultStorageKey) {
      localStorage.removeItem(resultStorageKey);
    }
  };

  const hasAnsweredCurrentQuestion =
    Array.isArray(answers[current]) && answers[current].length > 0;

  if (loadingProgress || loadingQuizContext) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-8">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Quiz de validation
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Vérification du parcours
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Vérification de la validation des chapitres et du contexte de formation en cours…
          </p>
        </div>
      </main>
    );
  }

  if (!allChaptersCompleted) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-8">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-amber-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
            Quiz verrouillé
          </p>

          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Vous devez d’abord terminer le cours
          </h1>

          <p className="mt-4 text-base leading-7 text-slate-600">
            L’accès au quiz est autorisé uniquement lorsque tous les chapitres du
            module ont été validés.
          </p>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-900">
              Progression actuelle
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Chapitres validés :{" "}
              <span className="font-semibold text-slate-900">
                {completedChapterCount}
              </span>{" "}
              /{" "}
              <span className="font-semibold text-slate-900">
                {requiredChapterCount}
              </span>
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`/modules/${slug}/cours`}
              className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Retour au cours
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (!quiz.length) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-8">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Quiz de validation
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Quiz indisponible
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Aucun quiz n’est encore configuré pour cette formation.
          </p>

          <div className="mt-6">
            <Link
              href={`/modules/${slug}/cours`}
              className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Retour au cours
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (restoreChoicePending && savedProgress) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-8">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Quiz de validation
          </p>

          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Une tentative précédente a été trouvée
          </h1>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Vous avez déjà commencé ce quiz. Souhaitez-vous reprendre à la
            dernière question atteinte ou recommencer depuis le début ?
          </p>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
            <p>
              Dernière question atteinte :{" "}
              <span className="font-semibold text-slate-900">
                {savedProgress.current + 1}
              </span>{" "}
              sur{" "}
              <span className="font-semibold text-slate-900">
                {savedProgress.totalQuestions}
              </span>
            </p>
            <p className="mt-2">
              Réponses déjà enregistrées :{" "}
              <span className="font-semibold text-slate-900">
                {savedProgress.answers.filter(
                  (entry) => Array.isArray(entry) && entry.length > 0
                ).length}
              </span>
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleRestoreProgress}
              className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Reprendre ma tentative
            </button>

            <button
              type="button"
              onClick={handleDiscardSavedProgress}
              className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Recommencer depuis le début
            </button>

            <Link
              href={`/modules/${slug}/cours`}
              className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Retour au cours
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (!currentQuestion && !finished) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-8">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Quiz de validation
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Erreur de chargement du quiz
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Le questionnaire n’a pas pu être affiché correctement.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={restartQuiz}
              className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Recharger le quiz
            </button>

            <Link
              href={`/modules/${slug}/cours`}
              className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Retour au cours
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <section className="mb-6 overflow-hidden rounded-[1.75rem] border border-slate-900 bg-slate-900 text-white shadow-sm">
          <div className="border-b border-white/10 px-6 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
              Quiz de validation
            </p>
            <h1 className="mt-2 text-3xl font-bold">
              {formattedFormationLabel}
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
              Cette étape permet de valider les acquis théoriques du module avant
              finalisation du parcours.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 bg-white/5 px-6 py-4">
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="rounded-full bg-white/10 px-3 py-1 font-semibold text-white">
                {shuffledQuiz.length} question{shuffledQuiz.length > 1 ? "s" : ""}
              </span>
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 font-semibold text-emerald-200">
                Seuil : {passingScore}/{shuffledQuiz.length}
              </span>
            </div>

            <Link
              href={`/modules/${slug}/cours`}
              className="inline-flex items-center rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Retour au cours
            </Link>
          </div>
        </section>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          {!finished ? (
            <>
              {progressRestored && answers.length > 0 ? (
                <div className="mb-5 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-medium text-blue-700">
                  Votre progression précédente a été restaurée.
                </div>
              ) : null}

              {isAdminPreview ? (
                <div className="mb-5 rounded-xl border border-fuchsia-200 bg-fuchsia-50 px-4 py-3 text-sm font-medium text-fuchsia-700">
                  Mode admin : passage libre entre les questions, sans blocage de
                  timer ni obligation de réponse.
                </div>
              ) : null}

              <div
                aria-live="polite"
                aria-atomic="true"
                className="sr-only"
              >
                Question {current + 1} sur {shuffledQuiz.length}.{" "}
                {currentQuestion.multiple
                  ? "Plusieurs réponses possibles."
                  : "Une seule réponse."}
              </div>

              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Session en cours
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">
                    Question {current + 1} sur {shuffledQuiz.length}
                  </h2>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span
                    className={`rounded-full px-3 py-1 font-semibold ${
                      currentQuestion.multiple
                        ? "bg-amber-100 text-amber-800"
                        : "bg-emerald-100 text-emerald-800"
                    }`}
                  >
                    {currentQuestion.multiple
                      ? "Plusieurs réponses possibles"
                      : "Une seule réponse"}
                  </span>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-medium text-slate-700">
                    Temps restant pour cette question
                  </span>
                  <span className="text-lg font-bold text-slate-900">
                    {timeLeft}s
                  </span>
                </div>

                <div
                  role="progressbar"
                  aria-valuenow={timeLeft}
                  aria-valuemin={0}
                  aria-valuemax={currentQuestionTimeLimit}
                  aria-label={`Temps restant : ${timeLeft} secondes`}
                  className="mt-4 h-3 w-full rounded-full bg-slate-200"
                >
                  <div
                    aria-hidden="true"
                    className="h-3 rounded-full bg-emerald-600 transition-all duration-1000"
                    style={{
                      width: `${(timeLeft / currentQuestionTimeLimit) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-1">
                <h3 className="rounded-[1rem] bg-slate-50 px-5 py-5 text-2xl font-bold leading-9 text-slate-900">
                  {formatFrenchDisplayText(currentQuestion.question)}
                </h3>
              </div>

              {currentQuestion.contextLabel ? (
                <div className="mt-4 rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
                    Contexte
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {formatFrenchDisplayText(currentQuestion.contextLabel)}
                  </p>
                </div>
              ) : null}

              {currentQuestion.imagePath ? (
                <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 p-3">
                  <div className="overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white">
                    <Image
                      src={currentQuestion.imagePath}
                      alt={formatFrenchDisplayText(
                        currentQuestion.imageAlt ?? currentQuestion.question
                      )}
                      width={1200}
                      height={800}
                      className="mx-auto max-h-[440px] h-auto w-full object-contain"
                      unoptimized={currentQuestion.imagePath.toLowerCase().endsWith(".svg")}
                    />
                  </div>
                </div>
              ) : null}

              <div
                role={currentQuestion.multiple ? "group" : "radiogroup"}
                aria-label={
                  currentQuestion.multiple
                    ? "Choisissez une ou plusieurs réponses"
                    : "Choisissez une réponse"
                }
                aria-required="true"
                className="mt-6 space-y-3"
                onKeyDown={(e) => {
                  if (currentQuestion.multiple) return;
                  const choices = currentQuestion.choices;
                  const selected = answers[current]?.[0] ?? -1;
                  if (e.key === "ArrowDown" || e.key === "ArrowRight") {
                    e.preventDefault();
                    const next = (selected + 1) % choices.length;
                    handleSingleAnswer(next);
                    (e.currentTarget.children[next] as HTMLElement)?.focus();
                  } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
                    e.preventDefault();
                    const prev =
                      (selected - 1 + choices.length) % choices.length;
                    handleSingleAnswer(prev);
                    (e.currentTarget.children[prev] as HTMLElement)?.focus();
                  }
                }}
              >
                {currentQuestion.choices.map((choice: string, i: number) => {
                  const isSelected = (answers[current] ?? []).includes(i);

                  if (currentQuestion.multiple) {
                    return (
                      <button
                        key={i}
                        type="button"
                        role="checkbox"
                        aria-checked={isSelected}
                        onClick={() => handleMultipleAnswer(i)}
                        onKeyDown={(e) => { if (e.key === " ") { e.preventDefault(); handleMultipleAnswer(i); } }}
                        className={`flex w-full items-start gap-3 rounded-xl border px-4 py-4 text-left text-sm font-medium transition ${
                          isSelected
                            ? "border-emerald-600 bg-emerald-600 text-white"
                            : "border-slate-200 bg-white text-slate-800 hover:bg-slate-50"
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border text-xs font-bold ${
                            isSelected
                              ? "border-white bg-white text-emerald-700"
                              : "border-slate-300 text-slate-500"
                          }`}
                        >
                          {isSelected ? "✓" : ""}
                        </span>
                        <span>{formatFrenchDisplayText(choice)}</span>
                      </button>
                    );
                  }

                  return (
                    <button
                      key={i}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      tabIndex={isSelected || (i === 0 && (answers[current] ?? []).length === 0) ? 0 : -1}
                      onClick={() => handleSingleAnswer(i)}
                      className={`w-full rounded-xl border px-4 py-4 text-left text-sm font-medium transition ${
                        isSelected
                          ? "border-emerald-600 bg-emerald-600 text-white"
                          : "border-slate-200 bg-white text-slate-800 hover:bg-slate-50"
                      }`}
                    >
                      {formatFrenchDisplayText(choice)}
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`/modules/${slug}/cours`}
                  aria-label="Retour au cours — quitter le quiz"
                  className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  Retour au cours
                </Link>

                <button
                  type="button"
                  aria-label={`Question précédente — revenir à la question ${current}`}
                  onClick={() => setCurrent((prev) => Math.max(0, prev - 1))}
                  disabled={current === 0}
                  className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Question précédente
                </button>

                <button
                  type="button"
                  onClick={next}
                  disabled={!isAdminPreview && !hasAnsweredCurrentQuestion}
                  aria-label={
                    current < shuffledQuiz.length - 1
                      ? `Question suivante — passer à la question ${current + 2} sur ${shuffledQuiz.length}`
                      : "Terminer le quiz et voir les résultats"
                  }
                  className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {current < shuffledQuiz.length - 1
                    ? "Question suivante"
                    : "Terminer le quiz"}
                </button>
              </div>
            </>
          ) : (
            <>
              <div aria-live="assertive" aria-atomic="true" className="sr-only">
                Quiz terminé. Score : {score} sur {shuffledQuiz.length}, soit {scorePercent}%.{" "}
                {success ? "Validation réussie." : "Score insuffisant — recommencez le quiz."}
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Résultat
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Quiz terminé
              </h2>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-base leading-7 text-slate-700">
                  Votre score est de{" "}
                  <span className="font-semibold text-slate-900">{score}</span>{" "}
                  bonne(s) réponse(s) sur{" "}
                  <span className="font-semibold text-slate-900">
                    {shuffledQuiz.length}
                  </span>
                  .
                </p>

                <p className="mt-2 text-base leading-7 text-slate-700">
                  Pourcentage obtenu :{" "}
                  <span className="font-semibold text-slate-900">
                    {scorePercent}%
                  </span>
                </p>

                <p className="mt-2 text-base leading-7 text-slate-700">
                  Seuil de validation :{" "}
                  <span className="font-semibold text-slate-900">
                    {passingScore} / {shuffledQuiz.length}
                  </span>
                </p>

                {success ? (
                  <p className="mt-4 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
                    Validation réussie. Votre dossier passe maintenant à l’étape entretien.
                  </p>
                ) : (
                  <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                    Score insuffisant. Vous devez recommencer le quiz pour valider
                    la formation.
                  </p>
                )}

                {quizContext.orderedByEmployer && success && !saveError ? (
                  <p className="mt-4 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700">
                    Cette formation a été commandée par votre employeur. Le gestionnaire
                    pourra planifier l’entretien puis récupérer l’attestation après validation finale.
                  </p>
                ) : null}

                {savingResult && (
                  <p className="mt-4 text-sm text-slate-500">
                    Enregistrement du résultat en cours…
                  </p>
                )}

                {saveError && (
                  <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-700">
                    {saveError}
                  </p>
                )}
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Débrief pédagogique
                </p>
                <ol className="mt-4 space-y-4" aria-label="Correction détaillée des questions">
                  {reviewItems.map((item) => (
                    <li
                      key={`review-${item.index}`}
                      className={`rounded-2xl border p-4 ${
                        item.correct
                          ? "border-green-200 bg-green-50"
                          : "border-red-200 bg-white"
                      }`}
                      aria-label={`Question ${item.index + 1} : ${item.correct ? "correcte" : "incorrecte"}`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <p className="text-sm font-semibold text-slate-900">
                          Question {item.index + 1}
                        </p>
                        <span
                          aria-hidden="true"
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            item.correct
                              ? "bg-green-600 text-white"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {item.correct ? "Bon réflexe" : "À retravailler"}
                        </span>
                      </div>

                      <p className="mt-3 text-base font-medium leading-7 text-slate-800">
                        {formatFrenchDisplayText(item.question.question)}
                      </p>

                      <div className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
                        <p>
                          <span className="font-semibold text-slate-900">
                            Votre réponse :
                          </span>{" "}
                          {item.selectedChoices.length
                            ? item.selectedChoices
                                .map((choice) => formatFrenchDisplayText(choice))
                                .join(" | ")
                            : "Aucune réponse enregistrée"}
                        </p>
                        <p>
                          <span className="font-semibold text-slate-900">
                            Réponse attendue :
                          </span>{" "}
                          {item.correctChoices
                            .map((choice) => formatFrenchDisplayText(choice))
                            .join(" | ")}
                        </p>
                        {item.question.explanation ? (
                          <p className="rounded-xl border border-white/70 bg-white/80 px-4 py-3">
                            <span className="font-semibold text-slate-900">
                              À retenir :
                            </span>{" "}
                            {formatFrenchDisplayText(item.question.explanation)}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </ol>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={restartQuiz}
                  aria-label="Recommencer le quiz depuis le début"
                  className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Recommencer le quiz
                </button>

                <Link
                  href={`/modules/${slug}/cours`}
                  className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  Retour au cours
                </Link>

                {success && !saveError && !quizContext.orderedByEmployer && (
                  <>
                    <Link
                      href="/booking"
                      className="inline-flex items-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                    >
                      Planifier l’entretien
                    </Link>
                    <Link
                      href={`/modules/${slug}/attestation`}
                      className="inline-flex items-center rounded-xl border border-emerald-600 px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
                    >
                      Télécharger l’attestation
                    </Link>
                  </>
                )}

                {success && !saveError && quizContext.orderedByEmployer && (
                  <>
                    <Link
                      href="/booking"
                      className="inline-flex items-center rounded-xl border border-emerald-600 px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
                    >
                      Planifier l’entretien
                    </Link>
                    <Link
                      href={`/modules/${slug}/attestation`}
                      className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                    >
                      Télécharger l’attestation
                    </Link>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
