import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  // Ignorer les fichiers Next.js, Supabase et node_modules
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  // Traiter les imports TypeScript path aliases (@/)
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  // Fichiers de test
  testMatch: ["**/__tests__/**/*.test.ts", "**/__tests__/**/*.test.tsx"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: {
          // Éviter les erreurs sur les modules Next.js non disponibles en test
          jsx: "react",
          esModuleInterop: true,
        },
      },
    ],
  },
};

export default config;
