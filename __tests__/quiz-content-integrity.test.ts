/**
 * Tests d'intégrité du contenu quiz.
 * Vérifie que toutes les questions respectent les contraintes structurelles.
 */

import { quizContent } from "@/app/modules/[slug]/quiz/content";

type QuizQuestion = {
  question: string;
  choices: string[];
  answer: number[];
  explanation?: string;
  chapterLabel?: string;
  timeLimit?: number;
  multiple?: boolean;
};

const moduleKeys = Object.keys(quizContent) as Array<keyof typeof quizContent>;

describe("quizContent integrity", () => {
  it("exports at least one quiz module", () => {
    expect(moduleKeys.length).toBeGreaterThan(0);
  });

  it("all modules have at least 1 question", () => {
    for (const key of moduleKeys) {
      const questions = quizContent[key] as QuizQuestion[];
      expect(questions.length).toBeGreaterThan(0);
    }
  });
});

// Génère un describe par module (réparti dans le rapport)
for (const moduleKey of moduleKeys) {
  const questions = quizContent[moduleKey] as QuizQuestion[];

  describe(`module ${moduleKey}`, () => {
    it("every question has a non-empty question string", () => {
      const empty = questions
        .map((q, i) => ({ i, q: q.question }))
        .filter(({ q }) => !q || q.trim() === "");
      expect(empty).toHaveLength(0);
    });

    it("every question has at least 2 choices", () => {
      const bad = questions
        .map((q, i) => ({ i, n: q.choices.length }))
        .filter(({ n }) => n < 2);
      expect(bad).toHaveLength(0);
    });

    it("every choice is a non-empty string", () => {
      const bad: { qi: number; ci: number }[] = [];
      for (const [qi, q] of questions.entries()) {
        for (const [ci, choice] of q.choices.entries()) {
          if (!choice || choice.trim() === "") bad.push({ qi, ci });
        }
      }
      expect(bad).toHaveLength(0);
    });

    it("answer indices are valid (within choices array)", () => {
      const bad = questions
        .map((q, i) => ({
          i,
          invalid: q.answer.filter(
            (idx) => idx < 0 || idx >= q.choices.length
          ),
        }))
        .filter(({ invalid }) => invalid.length > 0);
      expect(bad).toHaveLength(0);
    });

    it("every question has at least 1 answer index", () => {
      const bad = questions
        .map((q, i) => ({ i, n: q.answer.length }))
        .filter(({ n }) => n === 0);
      expect(bad).toHaveLength(0);
    });

    it("single-answer questions have exactly 1 answer index", () => {
      const bad = questions
        .map((q, i) => ({ i, n: q.answer.length, multiple: q.multiple }))
        .filter(({ n, multiple }) => !multiple && n !== 1);
      expect(bad).toHaveLength(0);
    });

    it("multiple-answer questions have at least 2 answer indices", () => {
      const bad = questions
        .map((q, i) => ({ i, n: q.answer.length, multiple: q.multiple }))
        .filter(({ n, multiple }) => multiple && n < 2);
      expect(bad).toHaveLength(0);
    });

    it("timeLimit, when present, is a positive integer", () => {
      const bad = questions
        .map((q, i) => ({ i, tl: q.timeLimit }))
        .filter(({ tl }) => tl !== undefined && (!Number.isInteger(tl) || tl <= 0));
      expect(bad).toHaveLength(0);
    });

    it("chapterLabel, when present, is a non-empty string", () => {
      const bad = questions
        .map((q, i) => ({ i, cl: q.chapterLabel }))
        .filter(({ cl }) => cl !== undefined && (!cl || cl.trim() === ""));
      expect(bad).toHaveLength(0);
    });
  });
}
