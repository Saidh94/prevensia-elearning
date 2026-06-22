# Architecture IA PREVENSIA FORMATION — Document CTO

> Version 1.0 — Juin 2026  
> Auteur : Direction Technique  
> Statut : Plan de développement validé

---

## 1. AUDIT DE L'ARCHITECTURE ACTUELLE

### 1.1 Ce qui existe et fonctionne

| Composant | Technologie | État |
|---|---|---|
| Site web | Next.js 16 / Vercel | ✅ Production |
| Base de données | Supabase (PostgreSQL) | ✅ Production |
| Authentification | Supabase Auth | ✅ Production |
| E-learning | Custom (Next.js) | ✅ Production |
| Quiz | TypeScript content.ts | ✅ 669 questions |
| Paiement | Stripe | ✅ Production |
| Emails | Resend | ✅ Production |
| PDF attestations | pdf-lib | ✅ Production |
| Chatbot | Claude Haiku 4.5 | ✅ Production |
| Blog | Next.js SSG | ✅ 7 articles |
| Admin dashboard | Next.js | ✅ Production |
| Calendrier | FullCalendar | ✅ Production |
| Audit logs | Supabase | ✅ Partiel |
| Sécurité CSRF | Origin check | ✅ Fait |
| Rate limiting | In-memory | ✅ Fait |

### 1.2 Ce qui manque (gaps critiques)

| Manque | Impact | Priorité |
|---|---|---|
| Automatisation n8n | Aucune automation | 🔴 P0 |
| Agent SEO | Zéro suivi GSC | 🔴 P0 |
| CRM prospects | Pertes de leads | 🔴 P0 |
| Analytics avancés | Décisions à l'aveugle | 🔴 P0 |
| Génération contenu | Blog 100% manuel | 🟠 P1 |
| Social media auto | Présence nulle | 🟠 P1 |
| Veille réglementaire | Risque conformité | 🟠 P1 |
| Google Business auto | GBP sous-exploité | 🟠 P1 |
| Dashboard KPI matin | Visibilité nulle | 🟡 P2 |
| Agent vidéo | Canal YouTube absent | 🟡 P2 |

### 1.3 Ce qui est inutile / à optimiser

- `app/api/test-mail/route.ts` et `app/api/test-supabase/route.ts` → désactivés en production ✅ déjà fait
- Rate limiting in-memory → à migrer vers Redis (Upstash) à volume > 1000 req/h
- `typescript: { ignoreBuildErrors: true }` → dette technique à résorber progressivement

---

## 2. ARCHITECTURE IA CIBLE

```
┌─────────────────────────────────────────────────────────────────┐
│                    PREVENSIA IA ECOSYSTEM                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐  │
│  │  Agent   │    │  Agent   │    │  Agent   │    │  Agent   │  │
│  │   SEO    │    │   Blog   │    │ LinkedIn │    │ GBusiness│  │
│  └────┬─────┘    └────┬─────┘    └────┬─────┘    └────┬─────┘  │
│       │               │               │               │          │
│  ┌────▼─────┐    ┌────▼─────┐    ┌────▼─────┐    ┌────▼─────┐  │
│  │  Agent   │    │  Agent   │    │  Agent   │    │  Agent   │  │
│  │ Veille   │    │Commercial│    │ Qualiopi │    │  Vidéo   │  │
│  └────┬─────┘    └────┬─────┘    └────┬─────┘    └────┬─────┘  │
│       │               │               │               │          │
│  ┌────▼───────────────▼───────────────▼───────────────▼─────┐   │
│  │                    n8n ORCHESTRATEUR                       │   │
│  │              (workflows + scheduling)                      │   │
│  └────────────────────────┬───────────────────────────────────┘  │
│                           │                                       │
│  ┌────────────────────────▼───────────────────────────────────┐  │
│  │                    SUPABASE (Hub central)                   │  │
│  │  profiles · enrollments · leads · blog_posts · kpis ·     │  │
│  │  audit_logs · regulatory_watch · social_queue              │  │
│  └────────────────────────────────────────────────────────────┘  │
│                                                                   │
│  APIs externes : GSC · GBP · LinkedIn · OpenAI · Claude · Gmail  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 3. TABLES SUPABASE À CRÉER

### 3.1 Table `leads` (prospects entrants)

```sql
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  email TEXT NOT NULL,
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  company TEXT,
  formation_interest TEXT,
  source TEXT, -- 'chatbot' | 'contact_form' | 'devis' | 'linkedin' | 'organic'
  status TEXT DEFAULT 'new', -- 'new' | 'contacted' | 'qualified' | 'converted' | 'lost'
  score INTEGER DEFAULT 0, -- lead scoring 0-100
  last_contact_at TIMESTAMPTZ,
  next_followup_at TIMESTAMPTZ,
  notes TEXT,
  metadata JSONB DEFAULT '{}'
);

CREATE INDEX ON leads(status);
CREATE INDEX ON leads(next_followup_at);
CREATE INDEX ON leads(email);
```

### 3.2 Table `blog_posts` (gestion blog IA)

```sql
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  meta_description TEXT,
  content_mdx TEXT,
  status TEXT DEFAULT 'draft', -- 'idea' | 'draft' | 'review' | 'published'
  seo_score INTEGER,
  target_keywords TEXT[],
  word_count INTEGER,
  reading_time_minutes INTEGER,
  internal_links JSONB DEFAULT '[]',
  published_at TIMESTAMPTZ,
  author TEXT DEFAULT 'IA PREVENSIA',
  formation_category TEXT, -- 'habilitation' | 'atex' | 'ssi' | 'sst' | 'incendie'
  image_url TEXT,
  image_alt TEXT,
  ai_generated BOOLEAN DEFAULT true,
  validated_by TEXT -- admin id
);

CREATE INDEX ON blog_posts(status);
CREATE INDEX ON blog_posts(slug);
CREATE INDEX ON blog_posts(formation_category);
```

### 3.3 Table `seo_tracking` (positions GSC)

```sql
CREATE TABLE seo_tracking (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  recorded_at TIMESTAMPTZ DEFAULT NOW(),
  keyword TEXT NOT NULL,
  page_url TEXT,
  position DECIMAL(5,1),
  impressions INTEGER,
  clicks INTEGER,
  ctr DECIMAL(5,4),
  country TEXT DEFAULT 'FRA',
  device TEXT, -- 'MOBILE' | 'DESKTOP' | 'TABLET'
  week_number INTEGER,
  year INTEGER
);

CREATE INDEX ON seo_tracking(keyword);
CREATE INDEX ON seo_tracking(recorded_at);
CREATE INDEX ON seo_tracking(page_url);
```

### 3.4 Table `social_queue` (file sociale)

```sql
CREATE TABLE social_queue (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  platform TEXT NOT NULL, -- 'linkedin' | 'facebook' | 'instagram' | 'x'
  content TEXT NOT NULL,
  image_url TEXT,
  hashtags TEXT[],
  status TEXT DEFAULT 'draft', -- 'draft' | 'scheduled' | 'published' | 'failed'
  scheduled_at TIMESTAMPTZ,
  published_at TIMESTAMPTZ,
  source_type TEXT, -- 'blog_post' | 'formation' | 'manual' | 'regulatory'
  source_id UUID,
  engagement_data JSONB DEFAULT '{}',
  error_message TEXT
);

CREATE INDEX ON social_queue(status, scheduled_at);
CREATE INDEX ON social_queue(platform);
```

### 3.5 Table `regulatory_watch` (veille réglementaire)

```sql
CREATE TABLE regulatory_watch (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  detected_at TIMESTAMPTZ DEFAULT NOW(),
  source TEXT NOT NULL, -- 'legifrance' | 'inrs' | 'afnor' | 'ineris' | 'manual'
  document_title TEXT NOT NULL,
  document_url TEXT,
  affected_formations TEXT[], -- ['h0b0', 'bsbe', 'atex']
  change_type TEXT, -- 'new_norm' | 'update' | 'repeal' | 'notice'
  severity TEXT DEFAULT 'info', -- 'critical' | 'major' | 'info'
  summary TEXT,
  action_required TEXT,
  status TEXT DEFAULT 'pending', -- 'pending' | 'reviewed' | 'applied' | 'dismissed'
  reviewed_by TEXT,
  reviewed_at TIMESTAMPTZ
);

CREATE INDEX ON regulatory_watch(status, severity);
CREATE INDEX ON regulatory_watch(affected_formations);
```

### 3.6 Table `kpi_daily` (indicateurs quotidiens)

```sql
CREATE TABLE kpi_daily (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  date DATE UNIQUE NOT NULL,
  -- Trafic
  sessions INTEGER DEFAULT 0,
  users INTEGER DEFAULT 0,
  pageviews INTEGER DEFAULT 0,
  bounce_rate DECIMAL(5,2),
  -- Conversions
  new_leads INTEGER DEFAULT 0,
  new_enrollments INTEGER DEFAULT 0,
  new_devis_requests INTEGER DEFAULT 0,
  -- Revenus
  revenue_stripe DECIMAL(10,2) DEFAULT 0,
  revenue_manual DECIMAL(10,2) DEFAULT 0,
  -- SEO
  gsc_clicks INTEGER DEFAULT 0,
  gsc_impressions INTEGER DEFAULT 0,
  avg_position DECIMAL(5,1),
  -- Blog
  articles_published INTEGER DEFAULT 0,
  -- Social
  linkedin_posts INTEGER DEFAULT 0,
  social_impressions INTEGER DEFAULT 0,
  -- Snapshot
  snapshot JSONB DEFAULT '{}'
);

CREATE INDEX ON kpi_daily(date DESC);
```

### 3.7 Table `qualiopi_docs` (documents Qualiopi)

```sql
CREATE TABLE qualiopi_docs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  enrollment_id UUID REFERENCES enrollments(id),
  doc_type TEXT NOT NULL, -- 'attestation' | 'emargement' | 'evaluation' | 'programme' | 'convocation'
  doc_url TEXT,
  generated_at TIMESTAMPTZ DEFAULT NOW(),
  sent_at TIMESTAMPTZ,
  sent_to TEXT,
  indicator TEXT, -- indicateur Qualiopi concerné ex: '1.1' | '2.3'
  metadata JSONB DEFAULT '{}'
);

CREATE INDEX ON qualiopi_docs(enrollment_id);
CREATE INDEX ON qualiopi_docs(doc_type);
```

### 3.8 Table `agent_logs` (logs des agents IA)

```sql
CREATE TABLE agent_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  executed_at TIMESTAMPTZ DEFAULT NOW(),
  agent_name TEXT NOT NULL,
  workflow_id TEXT,
  status TEXT, -- 'success' | 'partial' | 'error'
  duration_ms INTEGER,
  tokens_used INTEGER,
  cost_usd DECIMAL(8,6),
  output_summary TEXT,
  error_message TEXT,
  metadata JSONB DEFAULT '{}'
);

CREATE INDEX ON agent_logs(agent_name, executed_at DESC);
```

---

## 4. ARCHITECTURE N8N

### 4.1 Installation recommandée

**Option A — n8n Cloud** : $20/mois, zéro maintenance  
**Option B — Self-hosted sur VPS** : $5-8/mois (Hetzner CX21 2 vCPU / 4 Go RAM)  
**Recommandation CTO** : Commencer par n8n Cloud, migrer si > 10 000 executions/mois

```bash
# Option B — Docker sur VPS
version: '3'
services:
  n8n:
    image: n8nio/n8n
    ports:
      - "5678:5678"
    environment:
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=admin
      - N8N_BASIC_AUTH_PASSWORD=${N8N_PASSWORD}
      - DB_TYPE=postgresdb
      - DB_POSTGRESDB_HOST=${SUPABASE_HOST}
      - DB_POSTGRESDB_DATABASE=n8n
      - N8N_ENCRYPTION_KEY=${ENCRYPTION_KEY}
      - WEBHOOK_URL=https://n8n.prevensia-formation.fr
    volumes:
      - n8n_data:/home/node/.n8n
```

### 4.2 Variables d'environnement n8n requises

```env
# Supabase
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=xxx

# Claude API
ANTHROPIC_API_KEY=xxx

# OpenAI (images DALL-E)
OPENAI_API_KEY=xxx

# Google
GOOGLE_SERVICE_ACCOUNT_EMAIL=xxx
GOOGLE_PRIVATE_KEY=xxx
GSC_PROPERTY_URL=https://prevensia-formation.fr/
GBP_ACCOUNT_ID=accounts/xxx

# Social
LINKEDIN_ACCESS_TOKEN=xxx
LINKEDIN_ORGANIZATION_ID=xxx

# Communication
RESEND_API_KEY=xxx
ADMIN_EMAIL=contact@prevensia-formation.fr

# Monitoring
VERCEL_TOKEN=xxx
```

---

## 5. LES 10 AGENTS IA — DÉTAIL COMPLET

---

### AGENT 1 — SEO

**Fréquence** : Chaque lundi à 7h + analyse en temps réel  
**Technologies** : Google Search Console API v3, Claude Sonnet, Supabase

#### Workflow n8n :

```
[CRON Lundi 07:00]
    → [HTTP] GSC API: searchAnalytics.query (30 derniers jours)
    → [Supabase] INSERT seo_tracking (toutes les positions)
    → [Claude] Analyser les variations > ±5 positions
    → [Claude] Identifier opportunités mots-clés manquants
    → [Supabase] SELECT blog_posts WHERE status='published'
    → [Claude] Suggérer optimisations on-page
    → [Resend] Rapport email à admin
    → [Supabase] INSERT kpi_daily (colonnes GSC)
```

#### Prompt Agent SEO :

```
Tu es l'expert SEO de PREVENSIA FORMATION, organisme de formation certifié Qualiopi 
spécialisé en Habilitation électrique NF C 18-510, ATEX, SSI, SST, SSIAP.

DONNÉES REÇUES :
- Positions GSC semaine passée: {{gsc_data}}
- Pages du site: {{pages}}
- Articles de blog existants: {{blog_posts}}

TES MISSIONS :
1. Identifier les 5 mots-clés avec la meilleure progression
2. Identifier les 5 mots-clés en perte (> -3 positions)
3. Repérer les "position 4 à 10" : opportunités de passer en top 3
4. Proposer 3 sujets d'articles blog à fort potentiel
5. Lister les pages avec CTR < 2% malgré impressions > 100
6. Vérifier la présence pour les requêtes prioritaires:
   - "habilitation electrique NF C 18-510"
   - "formation ATEX directive 99/92"
   - "formation SSI exploitation"
   - "SST sauveteur secouriste"
   - "SSIAP1 formation initiale"

FORMAT DE SORTIE : JSON structuré avec clés : 
progressions, pertes, opportunites, sujets_blog, pages_ctr, alertes_prioritaires
```

#### Code Next.js — Endpoint GSC proxy :

```typescript
// app/api/admin/seo/gsc/route.ts
import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function GET(req: Request) {
  const auth = new google.auth.JWT(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    undefined,
    process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    ['https://www.googleapis.com/auth/webmasters.readonly']
  );
  
  const searchconsole = google.searchconsole({ version: 'v1', auth });
  const { data } = await searchconsole.searchanalytics.query({
    siteUrl: 'https://prevensia-formation.fr/',
    requestBody: {
      startDate: new Date(Date.now() - 30 * 86400000).toISOString().split('T')[0],
      endDate: new Date().toISOString().split('T')[0],
      dimensions: ['query', 'page', 'device', 'country'],
      rowLimit: 500,
    },
  });
  
  return NextResponse.json(data);
}
```

---

### AGENT 2 — BLOG

**Fréquence** : Mercredi et vendredi à 9h  
**Technologies** : Claude Sonnet, DALL-E 3, Supabase, Vercel  
**Validation** : Admin approuve avant publication (jamais auto-publié)

#### Workflow n8n :

```
[CRON Mer/Ven 09:00]
    → [Supabase] SELECT seo_tracking (opportunités mots-clés)
    → [Claude] Choisir le meilleur sujet d'article
    → [Claude] Rédiger l'article complet SEO (1500-2500 mots)
    → [Claude] Générer meta_description + title tag
    → [Claude] Calculer maillage interne (liens vers formations)
    → [OpenAI] DALL-E 3: générer image hero
    → [Supabase] INSERT blog_posts (status='review')
    → [Resend] Notifier admin : "Article prêt pour validation"
    
[WEBHOOK] Admin valide via dashboard
    → [Supabase] UPDATE blog_posts SET status='published'
    → [Vercel] Deploy hook (rebuild SSG)
    → [Agent LinkedIn] Déclencher post LinkedIn
    → [Agent Social] Déclencher posts multicanaux
```

#### Prompt Agent Blog :

```
Tu es le rédacteur SEO expert de PREVENSIA FORMATION.

SUJET DU JOUR : {{sujet}}
MOT-CLÉ PRINCIPAL : {{mot_cle}}
CATÉGORIE : {{categorie_formation}}

FORMATIONS PREVENSIA À MENTIONNER :
- Habilitation électrique H0B0 (129€ HT) → /formation-habilitation-electrique
- BS/BE Manœuvre (199€ HT) → /formation-habilitation-electrique
- ATEX Niveau 1 (129€ HT) → /formation-atex
- SST initial (240€ HT) → /formation-sst
- SSIAP1 initial (1490€ HT) → /formation-ssiap1

CONSIGNES :
1. Structure : H1 → intro 150 mots → 4 à 6 H2 → conclusion + CTA
2. Longueur : 1800 à 2500 mots
3. Densité mot-clé principal : 1 à 2%
4. Mentionner NF C 18-510 / Code du travail / normes selon sujet
5. Intégrer 2 à 3 liens internes vers formations PREVENSIA
6. Terminer par un encadré : "Formation PREVENSIA sur ce sujet"
7. Écrire en français professionnel, ton pédagogique
8. Chaque H2 commence par la problématique de l'employeur/apprenant

FORMAT SORTIE : JSON avec clés :
title, meta_description, slug, content_mdx, target_keywords, internal_links, reading_time
```

---

### AGENT 3 — LINKEDIN

**Fréquence** : Lundi / Mercredi / Vendredi à 8h30  
**Technologies** : LinkedIn API v2, Claude, Supabase

#### Prompt Agent LinkedIn :

```
Tu es le community manager LinkedIn de PREVENSIA FORMATION.

CONTENU SOURCE : {{source}} (article de blog OU actualité réglementaire)
TYPE DE POST : {{type}} (insight | conseil | question | actu réglementation)

RÈGLES :
- Longueur : 150 à 250 mots
- Commencer par une phrase d'accroche forte (pas "Bonjour")
- 3 à 5 émojis pertinents (pas décoratifs)
- 1 question engageante à la fin
- 5 à 8 hashtags professionnels dont : #HabilitationElectrique #FormationProfessionnelle #Qualiopi
- CTA naturel vers le site (pas commercial forcé)
- Ton : expert bienveillant, concret, terrain

CIBLES : Responsables HSE, Directeurs formation, RH, Managers sécurité

FORMAT SORTIE : JSON avec clés : content, hashtags, image_prompt
```

---

### AGENT 4 — GOOGLE BUSINESS

**Fréquence** : Tous les mardis à 10h  
**Technologies** : Google My Business API, Claude

#### Types de publications à générer :

1. **OFFER** : Promotion formation du moment
2. **EVENT** : Prochaine session planifiée
3. **WHAT'S NEW** : Nouveau contenu / mise à jour formation

#### Prompt réponse aux avis :

```
Tu es le responsable client de PREVENSIA FORMATION.

AVIS CLIENT :
- Note : {{note}}/5
- Texte : {{review_text}}
- Auteur : {{author_name}}

RÈGLES DE RÉPONSE :
- Toujours remercier l'auteur par son prénom
- Note 5/5 : chaleureuse, personnalisée (30-50 mots)
- Note 4/5 : reconnaître le retour, inviter à revenir
- Note < 4 : empathie, prendre contact en privé (ne pas se justifier publiquement)
- Signer : "L'équipe PREVENSIA FORMATION"
- Ne JAMAIS mentionner de tarifs ou concurrents

FORMAT : réponse directe (pas de JSON)
```

---

### AGENT 5 — VEILLE RÉGLEMENTAIRE

**Fréquence** : Tous les jours à 6h  
**Technologies** : RSS feeds, Claude, Supabase, Resend

#### Sources à surveiller :

```json
{
  "sources": [
    {"name": "Légifrance", "rss": "https://legifrance.gouv.fr/rss/last_publi.xml", "keywords": ["18-510", "ATEX", "SST", "SSI", "incendie", "travaux électriques"]},
    {"name": "INRS", "rss": "https://www.inrs.fr/rss/actualites.xml", "keywords": ["habilitation", "électrique", "sécurité incendie"]},
    {"name": "AFNOR", "url": "https://www.boutique.afnor.org/rss/norme-NF-C.xml", "keywords": ["NF C 18-510", "NF S 61"]},
    {"name": "INERIS", "rss": "https://www.ineris.fr/rss.xml", "keywords": ["ATEX", "zones explosibles"]},
    {"name": "Journal Officiel", "rss": "https://www.legifrance.gouv.fr/rss/jo.xml", "keywords": ["formation professionnelle", "Qualiopi", "OPCO"]}
  ]
}
```

#### Prompt analyse veille :

```
Tu es le référent réglementaire de PREVENSIA FORMATION.

NOUVELLES DÉTECTÉES : {{news_items}}

FORMATIONS PREVENSIA : H0B0, BS/BE, B1/B2/BR/BC, ATEX niveaux 1-3, 
SSI Exploitation, Sprinkler, SST, SSIAP1, Recyclage SSIAP1

ANALYSE REQUISE :
1. Ce texte affecte-t-il une de nos formations ? OUI/NON
2. Si OUI : quelle(s) formation(s) et pourquoi ?
3. Niveau de criticité : critique (changement obligatoire immédiat) | majeur (mise à jour < 6 mois) | info
4. Action recommandée : mise à jour contenu | nouveau quiz | révision programme | information aux formateurs
5. Résumé en 3 lignes pour email dirigeant

FORMAT SORTIE : JSON avec clés :
affected_formations, severity, action_required, summary, source_url
```

---

### AGENT 6 — COMMERCIAL

**Déclencheurs** : Nouveau lead entrant, 24h sans réponse, 7 jours sans conversion

#### Séquence de relance automatique :

```
J0 → Email de bienvenue personnalisé (Resend)
J1 → Si pas d'ouverture : relance légère
J3 → Si pas de réponse : email contenu à valeur (guide PDF)
J7 → Si pas converti : proposition d'entretien découverte
J14 → Dernière relance + offre spéciale
J21 → Archivage lead "nurturing passif"
```

#### Lead scoring automatique (0 à 100) :

```
+30 → Formation spécifiée dans la demande
+20 → Email professionnel (domaine entreprise)
+20 → Téléphone renseigné
+15 → Entreprise renseignée
+10 → A consulté une page formation (via analytics)
+5  → A ouvert un email précédent
-10 → Email générique (gmail/hotmail sans contexte)
```

#### Prompt génération devis :

```
Tu es le commercial de PREVENSIA FORMATION.

LEAD : {{lead_data}}
FORMATION DEMANDÉE : {{formation}}
CONTEXTE ENTREPRISE : {{company_context}}

GÉNÈRE UN DEVIS PERSONNALISÉ :
- Salutation professionnelle avec prénom
- Récapitulatif besoin compris (montrer qu'on a lu)
- Proposition formation avec tarif HT
- Avantages spécifiques pour leur secteur
- Prochaines dates disponibles (depuis Supabase sessions)
- Conditions prise en charge OPCO si pertinent
- CTA clair : lien de réservation ou numéro direct

FORMATS DISPONIBLES : e-learning | présentiel | intra-entreprise
TARIFS : H0B0 129€HT | BS/BE 199€HT | B1/B2/BR sur devis | 
         ATEX N1 129€HT | ATEX N2 490€HT | ATEX N3 790€HT+ | 
         SST 240€HT | SSIAP1 1490€HT | SSI 350€HT

FORMAT : Email HTML professionnel (pas de JSON)
```

---

### AGENT 7 — QUALIOPI

**Déclencheurs** : Fin de formation, validation admin, demande manuelle

#### Documents à générer automatiquement :

| Document | Déclencheur | Destinataires |
|---|---|---|
| Convocation | J-7 avant session | Apprenant + employeur |
| Programme pédagogique | À la demande | Employeur / OPCO |
| Feuille d'émargement | Début session | Formateur |
| Évaluation des acquis | Fin formation | Apprenant |
| Attestation de formation | Quiz validé | Apprenant + RH |
| Attestation Qualiopi | Fin session | Employeur |
| Bilan de satisfaction | J+7 | Apprenant |

#### Indicateurs Qualiopi à suivre automatiquement :

```
1.1 → Informations sur les prestations
1.2 → Identification des objectifs
2.1 → Processus d'admission
2.2 → Adaptation aux publics
2.3 → Ressources pédagogiques
3.1 → Réalisation des prestations
5.1 → Évaluation des acquis
6.1 → Satisfaction apprenants
7.1 → Réclamations et recours
```

---

### AGENT 8 — RÉSEAUX SOCIAUX

**Fréquence** : Après chaque publication blog + Lundi / Jeudi  
**Plateformes** : LinkedIn, Facebook, Instagram, X

#### Stratégie de contenu par plateforme :

```
LinkedIn : Article long format, conseil expert, actualité réglementaire
Facebook : Post court + image, ciblage employeurs PME
Instagram : Visuel infographie, astuce, citation réglementaire
X : Thread court, actu sécurité, mention @INRS @AFNOR
```

#### Outil recommandé : **Ayrshare API** (~$29/mois)

```javascript
// n8n HTTP node — publication multicanal
const response = await fetch('https://app.ayrshare.com/api/post', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${AYRSHARE_API_KEY}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    post: "{{generated_content}}",
    platforms: ["facebook", "instagram", "twitter", "linkedin"],
    mediaUrls: ["{{image_url}}"],
    scheduleDate: "{{scheduled_at}}"
  })
});
```

---

### AGENT 9 — VIDÉO

**Fréquence** : 1 vidéo par semaine (vendredi)  
**Technologies** : Claude (script), ElevenLabs (voix), Creatomate / JSON2Video (montage), YouTube API

#### Pipeline de production :

```
[Article blog validé]
    → [Claude] Transformer en script vidéo 90-120 secondes
    → [Claude] Générer sous-titres SRT
    → [ElevenLabs] Text-to-speech voix professionnelle
    → [DALL-E] Générer 5 visuels slides
    → [Creatomate API] Assembler vidéo verticale (Reels/Shorts)
    → [Creatomate API] Assembler vidéo YouTube (16:9)
    → [YouTube API] Upload + titre + description + tags
    → [Supabase] Mettre à jour blog_post avec youtube_url
```

#### Prompt script vidéo :

```
Tu es le réalisateur de PREVENSIA FORMATION.

ARTICLE SOURCE : {{article_content}}

GÉNÈRE UN SCRIPT VIDÉO YOUTUBE (90-120 secondes) :
- Accroche : question ou stat choc (5 secondes)
- Problème : situation de l'employeur / salarié (20 secondes)
- Solution : que fait la formation PREVENSIA (40 secondes)
- Preuves : Qualiopi, NF C 18-510, témoignages (20 secondes)
- CTA : "Lien en description, premier contact offert" (15 secondes)

RÈGLES :
- Langue parlée naturelle, pas de jargon technique complexe
- Chaque phrase < 15 mots (optimisé sous-titres)
- Prévoir [VISUEL: description image] entre chaque section
- Ton : expert rassurant, pas commercial agressif

FORMAT SORTIE : JSON avec clés : script, subtitles_srt, visuals_prompts, youtube_title, youtube_description, youtube_tags
```

---

### AGENT 10 — TABLEAU DE BORD MATIN

**Fréquence** : Tous les jours à 8h00  
**Format** : Email HTML + mise à jour dashboard admin Supabase

#### Workflow complet :

```
[CRON 08:00 tous les jours]
    → [Supabase] Agréger KPIs J-1
    → [Google Analytics] Fetch sessions / users / pageviews
    → [Supabase] COUNT new leads J-1
    → [Supabase] SUM revenue Stripe J-1
    → [GSC] Impressions / clicks J-1
    → [Supabase] Blog posts publiés J-1
    → [Supabase] Sessions à venir J+7
    → [Supabase] INSERT kpi_daily
    → [Claude] Générer analyse narrative des chiffres
    → [Resend] Email rapport à Said
```

#### Format du rapport email :

```html
PREVENSIA — Rapport du [DATE]

📊 TRAFIC
Sessions : {{sessions}} | Δ vs J-7 : {{delta}}%
Utilisateurs : {{users}}
Pages vues : {{pageviews}}

🎯 CONVERSIONS
Nouveaux leads : {{new_leads}}
Inscriptions : {{new_enrollments}}
Demandes devis : {{new_devis}}

💶 REVENUS
Stripe J-1 : {{revenue_stripe}}€ HT
Cumul mois : {{revenue_month}}€ HT

🔍 SEO
Clics GSC : {{gsc_clicks}}
Impressions : {{gsc_impressions}}
Position moyenne : {{avg_position}}

✍️ CONTENU
Articles publiés : {{articles_published}}
Prochaine publication : {{next_article}}

📅 AGENDA
Sessions J+7 : {{upcoming_sessions}}
Leads à relancer : {{leads_to_followup}}

💡 ANALYSE IA
{{claude_narrative}}

Tâches prioritaires du jour :
{{priority_tasks}}
```

---

## 6. COÛTS MENSUELS ESTIMÉS

| Service | Usage | Coût mensuel |
|---|---|---|
| n8n Cloud Starter | < 5000 exec/mois | 20$ |
| Claude API (Haiku 4.5) | 10M tokens agents | ~15$ |
| Claude API (Sonnet 4.6) | 2M tokens rédaction | ~30$ |
| OpenAI DALL-E 3 | 60 images/mois | ~6$ |
| ElevenLabs | 30 min audio/mois | 5$ |
| Ayrshare API | Publication multi-réseau | 29$ |
| Creatomate / JSON2Video | 4 vidéos/mois | 15$ |
| Vercel Pro | Déjà en place | 20$ |
| Supabase Pro | Déjà en place | 25$ |
| Google APIs | GSC, GBP (gratuit) | 0$ |
| VPS monitoring | Uptime Robot | 0$ |
| **TOTAL** | | **~165$/mois** |

**ROI estimé :** 1 lead qualifié converti = 129 à 1490€ HT. L'investissement est rentabilisé dès 1 inscription supplémentaire par mois générée par les agents.

---

## 7. RISQUES ET MITIGATIONS

| Risque | Probabilité | Impact | Mitigation |
|---|---|---|---|
| Contenu IA mal validé publié | Moyen | Fort | Workflow validation admin obligatoire |
| Fausse alerte veille réglementaire | Fort | Moyen | Double vérification humaine sur `severity=critical` |
| Tokens API dépassement budget | Faible | Moyen | Alertes Anthropic à $50/mois |
| LinkedIn API révocation token | Moyen | Moyen | Refresh token automatique n8n |
| n8n down (si self-hosted) | Faible | Fort | Utiliser n8n Cloud ou Docker healthcheck |
| Données RGPD leads | Certain | Fort | Consentement explicite + chiffrement Supabase |
| Dépendance OpenAI / Anthropic | Moyen | Moyen | Abstraire dans une lib IA, pouvoir switcher |

---

## 8. PRIORITÉS ET PLANNING

### Phase 1 — Fondations (Semaines 1-3) — 🔴 Critique

**Objectif : bases techniques + premiers gains rapides**

- [ ] Créer les 8 tables Supabase
- [ ] Installer et configurer n8n
- [ ] Connecter Google Search Console API
- [ ] Agent Dashboard matin (quick win visible dès J3)
- [ ] Agent SEO — rapport hebdo (impact SEO mesurable)
- [ ] CRM leads basique dans Supabase

### Phase 2 — Contenu (Semaines 4-7) — 🟠 Important

**Objectif : automatiser la production de contenu**

- [ ] Agent Blog (2 articles/semaine)
- [ ] Agent LinkedIn (3 posts/semaine)
- [ ] Agent Google Business (1 publication/semaine)
- [ ] Connecter Ayrshare pour multi-réseau

### Phase 3 — Commercial (Semaines 8-11) — 🟠 Important

**Objectif : ne plus perdre de leads**

- [ ] Agent Commercial + lead scoring
- [ ] Séquences email automatiques
- [ ] Agent Qualiopi (documents auto)
- [ ] Dashboard commercial dans l'admin Next.js

### Phase 4 — Avancé (Semaines 12-18) — 🟡 Opportuniste

**Objectif : différenciation et croissance**

- [ ] Agent Veille réglementaire
- [ ] Agent Vidéo (ElevenLabs + Creatomate)
- [ ] YouTube automatisé
- [ ] Analytics prédictifs (prédire conversions)

---

## 9. FICHIERS À MODIFIER DANS LE PROJET

### Nouveaux fichiers à créer :

```
app/api/admin/seo/gsc/route.ts          → Proxy GSC API
app/api/admin/seo/report/route.ts       → Rapport SEO
app/api/admin/leads/route.ts            → CRUD leads
app/api/admin/leads/[id]/route.ts       → Lead individuel
app/api/admin/kpi/route.ts              → Indicateurs
app/api/webhooks/n8n/route.ts           → Webhook n8n → app
app/admin/leads/page.tsx                → Interface CRM
app/admin/seo/page.tsx                  → Dashboard SEO
app/admin/kpi/page.tsx                  → KPIs
lib/agents/seo.ts                       → Prompt factory SEO
lib/agents/blog.ts                      → Prompt factory Blog
lib/agents/commercial.ts                → Prompt factory Commercial
lib/supabase/leads.ts                   → Queries leads
lib/supabase/kpi.ts                     → Queries KPIs
```

### Fichiers à modifier :

```
lib/supabase/audit.ts                   → Ajouter types agent_logs
app/admin/layout.tsx                    → Ajouter liens nouveaux menus
```

---

## 10. ARCHITECTURE TECHNIQUE — WEBHOOK N8N → NEXT.JS

```typescript
// app/api/webhooks/n8n/route.ts
import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';

const N8N_SECRET = process.env.N8N_WEBHOOK_SECRET;

export async function POST(req: Request) {
  // Vérification signature
  const signature = req.headers.get('x-n8n-signature');
  if (signature !== N8N_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  const { action, payload } = body;

  const supabase = createAdminClient();
  if (!supabase) return NextResponse.json({ error: 'DB error' }, { status: 500 });

  switch (action) {
    case 'publish_blog_post':
      await supabase.from('blog_posts')
        .update({ status: 'published', published_at: new Date().toISOString() })
        .eq('id', payload.id);
      break;

    case 'insert_lead':
      await supabase.from('leads').insert(payload);
      break;

    case 'update_kpi':
      await supabase.from('kpi_daily').upsert(payload, { onConflict: 'date' });
      break;

    case 'insert_seo_data':
      await supabase.from('seo_tracking').insert(payload.rows);
      break;

    case 'regulatory_alert':
      await supabase.from('regulatory_watch').insert(payload);
      break;

    default:
      return NextResponse.json({ error: 'Unknown action' }, { status: 400 });
  }

  await supabase.from('agent_logs').insert({
    agent_name: payload.agent_name ?? 'n8n',
    status: 'success',
    output_summary: action,
    metadata: payload,
  });

  return NextResponse.json({ ok: true });
}
```

---

## 11. RECOMMANDATIONS FINALES DU CTO

### À faire en priorité absolue cette semaine :

1. **Créer les tables Supabase** (SQL ci-dessus, 2h)
2. **Ouvrir un compte n8n Cloud** (20$/mois, 15 min)
3. **Activer Google Search Console API** + créer service account (1h)
4. **Configurer le webhook n8n → Next.js** (le code est prêt, 30 min)
5. **Déployer l'Agent Dashboard** → premier rapport matin dès demain

### Technologies à éviter :

- ❌ Zapier (trop cher pour le volume)
- ❌ Make.com (moins adapté que n8n pour le code custom)
- ❌ Bubble (lock-in propriétaire)
- ❌ WordPress (régression vs Next.js actuel)

### KPIs de succès à 3 mois :

| Indicateur | Objectif |
|---|---|
| Articles blog publiés | +8 articles/mois (IA) |
| Positions GSC top 10 | +15 mots-clés |
| Leads capturés | +40% |
| Temps admin formation | -60% |
| Taux conversion devis | > 25% |
| Publications LinkedIn | 3/semaine |

---

*Document généré par la Direction Technique PREVENSIA FORMATION*  
*Mise à jour : dès qu'un agent est déployé, ce document est mis à jour*
