# Guide d'installation n8n + Google Business Profile
## PREVENSIA FORMATION — Phase 1 IA

> Durée estimée : 45 min  
> Coût : ~4-6€/mois (serveur Hetzner) — n8n logiciel = GRATUIT

---

## ÉTAPE 1 — Créer un serveur Hetzner (5 min)

1. Aller sur [hetzner.com](https://www.hetzner.com/cloud) → créer un compte
2. Nouveau projet : **"prevensia-n8n"**
3. Créer un serveur :
   - **Type** : CX21 (2 vCPU / 4 Go RAM / 40 Go SSD) → **5.83€/mois**
   - **Image** : Ubuntu 22.04 LTS
   - **Localisation** : Nuremberg (Allemagne, RGPD)
   - **SSH Key** : Ajouter ta clé publique SSH (ou utiliser mot de passe)
4. Nom du serveur : `prevensia-n8n`
5. Créer → noter l'adresse IP publique (ex: `65.21.XX.XX`)

---

## ÉTAPE 2 — Installer Docker + n8n (15 min)

### 2.1 Connexion SSH

```bash
ssh root@65.21.XX.XX
```

### 2.2 Installer Docker

```bash
apt-get update
apt-get install -y docker.io docker-compose curl
systemctl enable docker
systemctl start docker
```

### 2.3 Créer le dossier n8n

```bash
mkdir -p /opt/n8n
cd /opt/n8n
```

### 2.4 Créer le fichier docker-compose.yml

```bash
cat > docker-compose.yml << 'EOF'
version: '3'
services:
  n8n:
    image: n8nio/n8n:latest
    restart: always
    ports:
      - "5678:5678"
    environment:
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=admin
      - N8N_BASIC_AUTH_PASSWORD=${N8N_PASSWORD}
      - N8N_ENCRYPTION_KEY=${N8N_ENCRYPTION_KEY}
      - WEBHOOK_URL=http://65.21.XX.XX:5678
      - GENERIC_TIMEZONE=Europe/Paris
      - TZ=Europe/Paris
    volumes:
      - n8n_data:/home/node/.n8n

volumes:
  n8n_data:
EOF
```

### 2.5 Créer le fichier .env

```bash
cat > .env << 'EOF'
N8N_PASSWORD=MotDePasseFortnb2026!
N8N_ENCRYPTION_KEY=CleSecrete32CaracteresMinimumHere
EOF
```

> ⚠️ Remplace les valeurs par tes propres mots de passe sécurisés

### 2.6 Lancer n8n

```bash
docker-compose up -d
docker-compose logs -f   # Vérifier que ça démarre (Ctrl+C pour quitter)
```

### 2.7 Accéder à n8n

Ouvrir dans le navigateur : `http://65.21.XX.XX:5678`

→ Compte admin avec les identifiants du .env

---

## ÉTAPE 3 — Variables d'environnement n8n (10 min)

Dans n8n → **Settings → Variables**, ajouter :

| Nom | Valeur | Description |
|-----|--------|-------------|
| `SUPABASE_URL` | `https://xxx.supabase.co` | Dashboard Supabase → Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY` | `eyJhbG...` | Clé service_role (pas anon!) |
| `ANTHROPIC_API_KEY` | `sk-ant-...` | console.anthropic.com |
| `RESEND_API_KEY` | `re_...` | resend.com → API Keys |
| `ADMIN_EMAIL` | `contact@prevensia-formation.fr` | Email rapports |
| `SITE_WEBHOOK_URL` | `https://prevensia-formation.fr/api/webhooks/n8n` | URL webhook Next.js |
| `N8N_WEBHOOK_SECRET` | `SecretPartage2026!` | Même valeur que dans Vercel |

---

## ÉTAPE 4 — Ajouter N8N_WEBHOOK_SECRET dans Vercel (2 min)

1. Vercel → prevensia-formation → **Settings → Environment Variables**
2. Ajouter : `N8N_WEBHOOK_SECRET` = `SecretPartage2026!` (même valeur que dans n8n)
3. Redéployer

---

## ÉTAPE 5 — Connecter Google Business Profile (15 min)

### 5.1 Créer un projet Google Cloud

1. Aller sur [console.cloud.google.com](https://console.cloud.google.com)
2. Créer un projet : **"prevensia-automation"**
3. Activer les APIs :
   - **Google Business Profile API** → Chercher "My Business" → Activer
   - **Google Search Console API** → Activer (pour l'agent SEO)

### 5.2 Créer un compte de service

1. IAM & Admin → Comptes de service → **Créer**
2. Nom : `n8n-agent`
3. Rôle : **Éditeur** (ou rôle personnalisé)
4. Créer une clé JSON → Télécharger le fichier

### 5.3 Autoriser le compte de service sur GBP

1. Aller sur [business.google.com](https://business.google.com)
2. Paramètres → Utilisateurs → Ajouter l'email du compte de service
3. Rôle : **Responsable** (pour pouvoir publier des posts)

### 5.4 Dans n8n — Ajouter les credentials Google

1. n8n → **Credentials → New → Google Service Account**
2. Email : (l'email du compte de service)
3. Private Key : (le contenu du JSON téléchargé)
4. Sauvegarder

---

## ÉTAPE 6 — Premier workflow : Agent GBP hebdomadaire

Dans n8n → **New Workflow** → importer ce JSON :

```json
{
  "name": "Agent GBP — Publication hebdomadaire",
  "nodes": [
    {
      "name": "Déclencheur lundi 9h",
      "type": "n8n-nodes-base.cron",
      "parameters": {
        "triggerTimes": {
          "item": [{ "mode": "everyWeek", "hour": 9, "minute": 0, "weekday": 1 }]
        }
      }
    },
    {
      "name": "Claude — Générer post GBP",
      "type": "n8n-nodes-base.httpRequest",
      "parameters": {
        "url": "https://api.anthropic.com/v1/messages",
        "method": "POST",
        "headers": {
          "x-api-key": "={{ $vars.ANTHROPIC_API_KEY }}",
          "anthropic-version": "2023-06-01",
          "Content-Type": "application/json"
        },
        "body": {
          "model": "claude-haiku-4-5-20251001",
          "max_tokens": 300,
          "messages": [{
            "role": "user",
            "content": "Génère un post Google Business de 150 mots pour PREVENSIA FORMATION (organisme Qualiopi, Paris 11e). Thème cette semaine : formation Habilitation Électrique NF C 18-510. Ton professionnel, mentionne l'éligibilité CPF. Termine par un appel à l'action pour demander un devis."
          }]
        }
      }
    },
    {
      "name": "Sauvegarder dans social_queue",
      "type": "n8n-nodes-base.httpRequest",
      "parameters": {
        "url": "={{ $vars.SITE_WEBHOOK_URL }}",
        "method": "POST",
        "headers": {
          "x-n8n-signature": "={{ $vars.N8N_WEBHOOK_SECRET }}",
          "Content-Type": "application/json"
        },
        "body": {
          "action": "queue_social_post",
          "payload": {
            "platform": "google_business",
            "content": "={{ $json.content[0].text }}",
            "status": "scheduled",
            "scheduled_at": "={{ $now.toISO() }}",
            "source_type": "gbp",
            "agent_name": "gbp"
          }
        }
      }
    }
  ]
}
```

---

## ÉTAPE 7 — Vérification finale

```bash
# Sur le serveur Hetzner
cd /opt/n8n
docker-compose ps          # Statut : Up
docker-compose logs --tail=20  # Pas d'erreurs

# Test webhook depuis ton terminal local
curl -X POST https://prevensia-formation.fr/api/webhooks/n8n \
  -H "Content-Type: application/json" \
  -H "x-n8n-signature: SecretPartage2026!" \
  -d '{"action":"update_kpi","payload":{"date":"2026-06-22","new_leads":1,"agent_name":"test"}}'

# Réponse attendue : {"ok":true,"action":"update_kpi"}
```

---

## Récapitulatif des coûts Phase 1

| Service | Coût |
|---------|------|
| Hetzner CX21 (serveur n8n) | ~5.83€/mois |
| n8n logiciel | GRATUIT |
| Google Business Profile API | GRATUIT |
| Google Search Console API | GRATUIT |
| Claude Haiku API (estimé) | ~5€/mois |
| **TOTAL nouveau coût** | **~11€/mois** |

---

## Support

- n8n docs : [docs.n8n.io](https://docs.n8n.io)
- Google Business Profile API : [developers.google.com/my-business](https://developers.google.com/my-business)
- Supabase : [supabase.com/docs](https://supabase.com/docs)
