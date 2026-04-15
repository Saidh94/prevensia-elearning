"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { quizContent, type QuizQuestion } from "./content";

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
  answers: number[];
  finished: boolean;
  timeLeft: number;
  updatedAt: string;
};

const QUESTION_TIME_LIMIT = 25;

export default function QuizPage() {
  const params = useParams();
  const slugParam = params.slug;

  const slug = useMemo(() => {
    if (Array.isArray(slugParam)) {
      return (slugParam[0] ?? "").toLowerCase();
    }
    return String(slugParam ?? "").toLowerCase();
  }, [slugParam]);

  const quiz: QuizQuestion[] = useMemo(() => {
    return quizContent[slug] ?? [];
  }, [slug]);

  const progressStorageKey = useMemo(() => {
    return slug ? `quiz-progress-${slug}` : "";
  }, [slug]);

  const resultStorageKey = useMemo(() => {
    return slug ? `quiz-result-${slug}` : "";
  }, [slug]);

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME_LIMIT);

  const [progressData, setProgressData] = useState<ChapterProgress[]>([]);
  const [loadingProgress, setLoadingProgress] = useState(true);
  const [savingResult, setSavingResult] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  const [savedProgress, setSavedProgress] = useState<SavedQuizProgress | null>(
    null
  );
  const [restoreChoicePending, setRestoreChoicePending] = useState(false);
  const [progressRestored, setProgressRestored] = useState(false);

  useEffect(() => {
    if (!slug) {
      setProgressData([]);
      setLoadingProgress(false);
      return;
    }

    const loadProgress = async () => {
      try {
        const res = await fetch(`/api/chapter-progress/${slug}`, {
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
  }, [slug]);

  const requiredChapterCount = useMemo(() => {
    switch (slug) {
      case "h0b0":
        return 16;
      default:
        return 0;
    }
  }, [slug]);

  const completedChapterCount = useMemo(() => {
    return progressData.filter((item) => item.is_completed).length;
  }, [progressData]);

  const allChaptersCompleted =
    requiredChapterCount > 0 &&
    completedChapterCount >= requiredChapterCount;

  const currentQuestion = quiz[current];

  const score = useMemo(() => {
    return quiz.reduce((acc, q, i) => {
      return acc + (answers[i] === q.answer ? 1 : 0);
    }, 0);
  }, [quiz, answers]);

  const passingScore = useMemo(() => {
    return quiz.length > 0 ? Math.ceil(quiz.length * 0.7) : 0;
  }, [quiz.length]);

  const success = quiz.length > 0 && score >= passingScore;

  const scorePercent = useMemo(() => {
    return quiz.length > 0 ? Math.round((score / quiz.length) * 100) : 0;
  }, [score, quiz.length]);

  useEffect(() => {
    if (!slug || !progressStorageKey || quiz.length === 0) return;

    try {
      const savedRaw = localStorage.getItem(progressStorageKey);

      if (!savedRaw) return;

      const saved = JSON.parse(savedRaw) as SavedQuizProgress;

      const isValid =
        saved &&
        saved.version === 1 &&
        saved.totalQuestions === quiz.length &&
        Array.isArray(saved.answers) &&
        typeof saved.current === "number" &&
        typeof saved.finished === "boolean";

      if (!isValid) {
        localStorage.removeItem(progressStorageKey);
        return;
      }

      if (saved.finished) {
        localStorage.removeItem(progressStorageKey);
        return;
      }

      if (saved.answers.length === 0 && saved.current === 0) {
        localStorage.removeItem(progressStorageKey);
        return;
      }

      setSavedProgress(saved);
      setRestoreChoicePending(true);
    } catch (error) {
      console.error("Erreur lecture sauvegarde quiz :", error);
      localStorage.removeItem(progressStorageKey);
    }
  }, [slug, quiz.length, progressStorageKey]);

  useEffect(() => {
    if (!slug || !progressStorageKey || quiz.length === 0) return;
    if (restoreChoicePending) return;
    if (finished) return;

    const payload: SavedQuizProgress = {
      version: 1,
      totalQuestions: quiz.length,
      current,
      answers,
      finished,
      timeLeft,
      updatedAt: new Date().toISOString(),
    };

    localStorage.setItem(progressStorageKey, JSON.stringify(payload));
  }, [
    slug,
    quiz.length,
    current,
    answers,
    finished,
    timeLeft,
    progressStorageKey,
    restoreChoicePending,
  ]);

  useEffect(() => {
    if (restoreChoicePending || finished || quiz.length === 0) return;

    const interval = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          window.clearInterval(interval);

          if (current < quiz.length - 1) {
            setCurrent((value) => value + 1);
            return QUESTION_TIME_LIMIT;
          }

          setFinished(true);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [current, finished, quiz.length, restoreChoicePending]);

  useEffect(() => {
    if (!finished) {
      setTimeLeft(QUESTION_TIME_LIMIT);
    }
  }, [current, finished]);

  useEffect(() => {
    if (!finished || !slug || quiz.length === 0) return;

    const saveQuizResult = async () => {
      try {
        setSavingResult(true);
        setSaveError(null);

        const nowIso = new Date().toISOString();
        const payload = {
          slug,
          score,
          total: quiz.length,
          passingScore,
          success,
          completedAt: nowIso,
        };

        localStorage.setItem(resultStorageKey, JSON.stringify(payload));
        localStorage.removeItem(progressStorageKey);

        if (!success) {
          return;
        }

        const response = await fetch("/api/quiz/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            formationSlug: slug,
            score,
            total: quiz.length,
            passingScore,
            passed: true,
            completedAt: nowIso,
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
    slug,
    score,
    quiz.length,
    passingScore,
    success,
    resultStorageKey,
    progressStorageKey,
  ]);

  const handleRestoreProgress = () => {
    if (!savedProgress || quiz.length === 0) {
      setRestoreChoicePending(false);
      return;
    }

    const safeCurrent = Math.max(
      0,
      Math.min(savedProgress.current, quiz.length - 1)
    );
    const safeAnswers = savedProgress.answers.slice(0, quiz.length);
    const safeTimeLeft =
      typeof savedProgress.timeLeft === "number" &&
      savedProgress.timeLeft > 0 &&
      savedProgress.timeLeft <= QUESTION_TIME_LIMIT
        ? savedProgress.timeLeft
        : QUESTION_TIME_LIMIT;

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
    setTimeLeft(QUESTION_TIME_LIMIT);
    setSaveError(null);
  };

  const handleAnswer = (index: number) => {
    setAnswers((prev) => {
      const nextAnswers = [...prev];
      nextAnswers[current] = index;
      return nextAnswers;
    });
  };

  const next = () => {
    if (current < quiz.length - 1) {
      setCurrent((prev) => prev + 1);
      return;
    }

    setFinished(true);
  };

  const restartQuiz = () => {
    setCurrent(0);
    setAnswers([]);
    setFinished(false);
    setTimeLeft(QUESTION_TIME_LIMIT);
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

  if (loadingProgress) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-10">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Quiz
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Vérification du parcours
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Vérification de la validation des chapitres en cours…
          </p>
        </div>
      </main>
    );
  }

  if (!allChaptersCompleted) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-10">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-amber-200 bg-white p-8 shadow-sm">
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
      <main className="min-h-screen bg-slate-50 px-4 py-10">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Quiz
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
      <main className="min-h-screen bg-slate-50 px-4 py-10">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Quiz
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
                  (value) => value !== undefined && value !== null
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
      <main className="min-h-screen bg-slate-50 px-4 py-10">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Quiz
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
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        {!finished ? (
          <>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Quiz de validation
            </p>

            {progressRestored && answers.length > 0 ? (
              <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-medium text-blue-700">
                Votre progression précédente a été restaurée.
              </div>
            ) : null}

            <div className="mt-4 flex items-center justify-between gap-4">
              <p className="text-sm text-slate-600">
                Question {current + 1} sur {quiz.length}
              </p>
              <p className="text-sm font-medium text-slate-500">
                Seuil requis : {passingScore}/{quiz.length}
              </p>
            </div>

            <div className="mt-4 flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
              <span className="text-sm font-medium text-slate-700">
                Temps restant pour cette question
              </span>
              <span className="text-lg font-bold text-slate-900">
                {timeLeft}s
              </span>
            </div>

            <div className="mt-4 h-3 w-full rounded-full bg-slate-200">
              <div
                className="h-3 rounded-full bg-slate-900 transition-all duration-1000"
                style={{ width: `${(timeLeft / QUESTION_TIME_LIMIT) * 100}%` }}
              />
            </div>

            <h1 className="mt-6 text-2xl font-bold text-slate-900">
              {currentQuestion.question}
            </h1>

            <div className="mt-6 space-y-3">
              {currentQuestion.choices.map((choice: string, i: number) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleAnswer(i)}
                  className={`w-full rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${
                    answers[current] === i
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-200 bg-white text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  {choice}
                </button>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/modules/${slug}/cours`}
                className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Retour au cours
              </Link>

              <button
                type="button"
                onClick={next}
                disabled={answers[current] === undefined}
                className="rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {current < quiz.length - 1
                  ? "Question suivante"
                  : "Terminer le quiz"}
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Résultat
            </p>

            <h1 className="mt-3 text-3xl font-bold text-slate-900">
              Quiz terminé
            </h1>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-base leading-7 text-slate-700">
                Votre score est de{" "}
                <span className="font-semibold text-slate-900">{score}</span>{" "}
                bonne(s) réponse(s) sur{" "}
                <span className="font-semibold text-slate-900">
                  {quiz.length}
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
                  {passingScore} / {quiz.length}
                </span>
              </p>

              {success ? (
                <p className="mt-4 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
                  Validation réussie. Vous pouvez désormais planifier l’entretien avec le formateur pour finaliser votre parcours.
                </p>
              ) : (
                <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                  Score insuffisant. Vous devez recommencer le quiz pour valider
                  la formation.
                </p>
              )}

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

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={restartQuiz}
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

              {success && !saveError && (
                <Link
                  href="/booking"
                  className="inline-flex items-center rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
                >
                  Planifier l’entretien
                </Link>
              )}
            </div>
          </>
        )}
      </div>
    </main>
  );
}