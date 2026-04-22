import { existsSync, rmSync } from "node:fs";
import { join } from "node:path";
import { spawn } from "node:child_process";

const projectRoot = process.cwd();
const nextDir = join(projectRoot, ".next");
const command = process.argv[2] ?? "clean";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function removeNextDirWithRetry() {
  if (!existsSync(nextDir)) {
    return;
  }

  let lastError = null;

  for (let attempt = 1; attempt <= 6; attempt += 1) {
    try {
      rmSync(nextDir, { recursive: true, force: true, maxRetries: 2, retryDelay: 150 });
      return;
    } catch (error) {
      lastError = error;
      await sleep(250 * attempt);
    }
  }

  throw lastError;
}

function runNext(args) {
  const nextCli = join(projectRoot, "node_modules", "next", "dist", "bin", "next");

  const child = spawn(process.execPath, [nextCli, ...args], {
    stdio: "inherit",
    cwd: projectRoot,
    shell: false,
  });

  child.on("exit", (code) => {
    process.exit(code ?? 0);
  });
}

async function main() {
  try {
    await removeNextDirWithRetry();

    if (command === "clean") {
      console.log(".next nettoye.");
      return;
    }

    if (command === "build") {
      runNext(["build"]);
      return;
    }

    if (command === "dev") {
      runNext(["dev", "--webpack"]);
      return;
    }

    console.error(`Commande inconnue: ${command}`);
    process.exit(1);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(
      `Impossible de nettoyer le cache Next localement. Fermez les serveurs Next en cours ou laissez OneDrive terminer sa synchronisation, puis relancez.\n${message}`
    );
    process.exit(1);
  }
}

await main();
