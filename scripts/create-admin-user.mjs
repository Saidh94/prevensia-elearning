import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { createClient } from "@supabase/supabase-js";

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Fichier introuvable: ${filePath}`);
  }

  const content = fs.readFileSync(filePath, "utf8");
  const env = {};

  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;

    const separatorIndex = line.indexOf("=");
    if (separatorIndex <= 0) continue;

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();
    env[key] = value;
  }

  return env;
}

function readOption(args, name) {
  const prefix = `--${name}=`;
  const match = args.find((arg) => arg.startsWith(prefix));
  return match ? match.slice(prefix.length).trim() : "";
}

function buildTemporaryPassword() {
  const token = crypto.randomBytes(6).toString("base64url");
  return `Prevensia!${token}2026`;
}

async function main() {
  const args = process.argv.slice(2);
  const email = readOption(args, "email").toLowerCase();
  const firstName = readOption(args, "first-name");
  const lastName = readOption(args, "last-name");
  const providedPassword = readOption(args, "password");

  if (!email) {
    throw new Error("Usage: node scripts/create-admin-user.mjs --email=<email>");
  }

  const projectRoot = process.cwd();
  const env = loadEnvFile(path.join(projectRoot, ".env.local"));

  const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const serviceRoleKey = env.SUPABASE_SERVICE_ROLE_KEY?.trim();

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error(
      "NEXT_PUBLIC_SUPABASE_URL ou SUPABASE_SERVICE_ROLE_KEY manquante dans .env.local"
    );
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  const { data: usersPage, error: listUsersError } =
    await supabase.auth.admin.listUsers({
      page: 1,
      perPage: 1000,
    });

  if (listUsersError) {
    throw new Error(`Erreur lecture utilisateurs auth: ${listUsersError.message}`);
  }

  const existingUser =
    usersPage?.users.find((user) => user.email?.toLowerCase() === email) ?? null;

  const temporaryPassword = providedPassword || buildTemporaryPassword();

  let userId = existingUser?.id ?? "";
  let created = false;

  if (!existingUser) {
    const { data: createdUserData, error: createUserError } =
      await supabase.auth.admin.createUser({
        email,
        password: temporaryPassword,
        email_confirm: true,
        user_metadata: {
          first_name: firstName || undefined,
          last_name: lastName || undefined,
        },
      });

    if (createUserError || !createdUserData.user) {
      throw new Error(
        `Erreur creation utilisateur auth: ${createUserError?.message || "creation impossible"}`
      );
    }

    userId = createdUserData.user.id;
    created = true;
  }

  if (!userId) {
    throw new Error("Impossible de determiner l'identifiant utilisateur.");
  }

  const profilePayload = {
    id: userId,
    email,
    role: "admin",
    first_name: firstName || null,
    last_name: lastName || null,
  };

  const { error: profileError } = await supabase
    .from("profiles")
    .upsert(profilePayload, { onConflict: "id" });

  if (profileError) {
    throw new Error(`Erreur upsert profil admin: ${profileError.message}`);
  }

  console.log(
    JSON.stringify(
      {
        ok: true,
        created,
        email,
        userId,
        temporaryPassword: created ? temporaryPassword : null,
      },
      null,
      2
    )
  );
}

main().catch((error) => {
  console.error(
    JSON.stringify(
      {
        ok: false,
        error: error instanceof Error ? error.message : String(error),
      },
      null,
      2
    )
  );
  process.exit(1);
});
