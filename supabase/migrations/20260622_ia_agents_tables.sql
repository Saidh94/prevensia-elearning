-- ============================================================
-- PREVENSIA FORMATION — Tables agents IA
-- Migration : 20260622_ia_agents_tables.sql
-- À exécuter dans Supabase > SQL Editor
-- ============================================================

-- ────────────────────────────────────────────────────────────
-- 1. leads — Prospects entrants
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS leads (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at        TIMESTAMPTZ DEFAULT NOW(),
  email             TEXT NOT NULL,
  first_name        TEXT,
  last_name         TEXT,
  phone             TEXT,
  company           TEXT,
  formation_interest TEXT,
  source            TEXT, -- 'chatbot' | 'contact_form' | 'devis' | 'linkedin' | 'organic'
  status            TEXT DEFAULT 'new', -- 'new' | 'contacted' | 'qualified' | 'converted' | 'lost'
  score             INTEGER DEFAULT 0,  -- lead scoring 0-100
  last_contact_at   TIMESTAMPTZ,
  next_followup_at  TIMESTAMPTZ,
  notes             TEXT,
  metadata          JSONB DEFAULT '{}'
);

CREATE INDEX IF NOT EXISTS idx_leads_status          ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_next_followup   ON leads(next_followup_at);
CREATE INDEX IF NOT EXISTS idx_leads_email           ON leads(email);

-- RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admin only" ON leads
  USING (auth.role() = 'service_role');

-- ────────────────────────────────────────────────────────────
-- 2. blog_posts — Gestion blog IA
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS blog_posts (
  id                     UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at             TIMESTAMPTZ DEFAULT NOW(),
  updated_at             TIMESTAMPTZ DEFAULT NOW(),
  title                  TEXT NOT NULL,
  slug                   TEXT UNIQUE NOT NULL,
  meta_description       TEXT,
  content_mdx            TEXT,
  status                 TEXT DEFAULT 'draft', -- 'idea' | 'draft' | 'review' | 'published'
  seo_score              INTEGER,
  target_keywords        TEXT[],
  word_count             INTEGER,
  reading_time_minutes   INTEGER,
  internal_links         JSONB DEFAULT '[]',
  published_at           TIMESTAMPTZ,
  author                 TEXT DEFAULT 'IA PREVENSIA',
  formation_category     TEXT, -- 'habilitation' | 'atex' | 'ssi' | 'sst' | 'incendie'
  image_url              TEXT,
  image_alt              TEXT,
  ai_generated           BOOLEAN DEFAULT true,
  validated_by           TEXT  -- admin user id
);

CREATE INDEX IF NOT EXISTS idx_blog_status    ON blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_blog_slug      ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_category  ON blog_posts(formation_category);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admin only" ON blog_posts
  USING (auth.role() = 'service_role');

-- ────────────────────────────────────────────────────────────
-- 3. seo_tracking — Positions Google Search Console
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS seo_tracking (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  recorded_at  TIMESTAMPTZ DEFAULT NOW(),
  keyword      TEXT NOT NULL,
  page_url     TEXT,
  position     DECIMAL(5,1),
  impressions  INTEGER,
  clicks       INTEGER,
  ctr          DECIMAL(5,4),
  country      TEXT DEFAULT 'FRA',
  device       TEXT, -- 'MOBILE' | 'DESKTOP' | 'TABLET'
  week_number  INTEGER,
  year         INTEGER
);

CREATE INDEX IF NOT EXISTS idx_seo_keyword     ON seo_tracking(keyword);
CREATE INDEX IF NOT EXISTS idx_seo_recorded_at ON seo_tracking(recorded_at);
CREATE INDEX IF NOT EXISTS idx_seo_page_url    ON seo_tracking(page_url);

ALTER TABLE seo_tracking ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admin only" ON seo_tracking
  USING (auth.role() = 'service_role');

-- ────────────────────────────────────────────────────────────
-- 4. social_queue — File d'attente publications sociales
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS social_queue (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at    TIMESTAMPTZ DEFAULT NOW(),
  platform      TEXT NOT NULL, -- 'linkedin' | 'google_business' | 'facebook' | 'instagram'
  content       TEXT NOT NULL,
  image_url     TEXT,
  hashtags      TEXT[],
  status        TEXT DEFAULT 'draft', -- 'draft' | 'scheduled' | 'published' | 'failed'
  scheduled_at  TIMESTAMPTZ,
  published_at  TIMESTAMPTZ,
  source_type   TEXT,  -- 'blog_post' | 'formation' | 'manual' | 'regulatory' | 'gbp'
  source_id     UUID,
  engagement_data JSONB DEFAULT '{}',
  error_message TEXT
);

CREATE INDEX IF NOT EXISTS idx_social_status   ON social_queue(status, scheduled_at);
CREATE INDEX IF NOT EXISTS idx_social_platform ON social_queue(platform);

ALTER TABLE social_queue ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admin only" ON social_queue
  USING (auth.role() = 'service_role');

-- ────────────────────────────────────────────────────────────
-- 5. regulatory_watch — Veille réglementaire
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS regulatory_watch (
  id                   UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  detected_at          TIMESTAMPTZ DEFAULT NOW(),
  source               TEXT NOT NULL, -- 'legifrance' | 'inrs' | 'afnor' | 'ineris' | 'manual'
  document_title       TEXT NOT NULL,
  document_url         TEXT,
  affected_formations  TEXT[], -- ['h0b0', 'bsbe', 'atex', 'ssiap', 'sst']
  change_type          TEXT,   -- 'new_norm' | 'update' | 'repeal' | 'notice'
  severity             TEXT DEFAULT 'info', -- 'critical' | 'major' | 'info'
  summary              TEXT,
  action_required      TEXT,
  status               TEXT DEFAULT 'pending', -- 'pending' | 'reviewed' | 'applied' | 'dismissed'
  reviewed_by          TEXT,
  reviewed_at          TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_reg_status   ON regulatory_watch(status, severity);
CREATE INDEX IF NOT EXISTS idx_reg_affected ON regulatory_watch USING GIN(affected_formations);

ALTER TABLE regulatory_watch ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admin only" ON regulatory_watch
  USING (auth.role() = 'service_role');

-- ────────────────────────────────────────────────────────────
-- 6. kpi_daily — Indicateurs quotidiens
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS kpi_daily (
  id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  date                  DATE UNIQUE NOT NULL,
  -- Trafic
  sessions              INTEGER DEFAULT 0,
  users                 INTEGER DEFAULT 0,
  pageviews             INTEGER DEFAULT 0,
  bounce_rate           DECIMAL(5,2),
  -- Conversions
  new_leads             INTEGER DEFAULT 0,
  new_enrollments       INTEGER DEFAULT 0,
  new_devis_requests    INTEGER DEFAULT 0,
  -- Revenus
  revenue_stripe        DECIMAL(10,2) DEFAULT 0,
  revenue_manual        DECIMAL(10,2) DEFAULT 0,
  -- SEO
  gsc_clicks            INTEGER DEFAULT 0,
  gsc_impressions       INTEGER DEFAULT 0,
  avg_position          DECIMAL(5,1),
  -- Contenu
  articles_published    INTEGER DEFAULT 0,
  -- Social
  linkedin_posts        INTEGER DEFAULT 0,
  gbp_posts             INTEGER DEFAULT 0,
  social_impressions    INTEGER DEFAULT 0,
  -- Snapshot JSON libre
  snapshot              JSONB DEFAULT '{}'
);

CREATE INDEX IF NOT EXISTS idx_kpi_date ON kpi_daily(date DESC);

ALTER TABLE kpi_daily ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admin only" ON kpi_daily
  USING (auth.role() = 'service_role');

-- ────────────────────────────────────────────────────────────
-- 7. qualiopi_docs — Documents Qualiopi générés
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS qualiopi_docs (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at     TIMESTAMPTZ DEFAULT NOW(),
  enrollment_id  UUID REFERENCES enrollments(id) ON DELETE CASCADE,
  doc_type       TEXT NOT NULL, -- 'attestation' | 'emargement' | 'evaluation' | 'programme' | 'convocation'
  doc_url        TEXT,
  generated_at   TIMESTAMPTZ DEFAULT NOW(),
  sent_at        TIMESTAMPTZ,
  sent_to        TEXT,
  indicator      TEXT, -- indicateur Qualiopi ex: '1.1' | '2.3' | '6.1'
  metadata       JSONB DEFAULT '{}'
);

CREATE INDEX IF NOT EXISTS idx_qualiopi_enrollment ON qualiopi_docs(enrollment_id);
CREATE INDEX IF NOT EXISTS idx_qualiopi_doc_type   ON qualiopi_docs(doc_type);

ALTER TABLE qualiopi_docs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admin only" ON qualiopi_docs
  USING (auth.role() = 'service_role');

-- ────────────────────────────────────────────────────────────
-- 8. agent_logs — Logs d'exécution des agents IA
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS agent_logs (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  executed_at     TIMESTAMPTZ DEFAULT NOW(),
  agent_name      TEXT NOT NULL, -- 'seo' | 'blog' | 'gbp' | 'dashboard' | 'commercial' | 'veille'
  workflow_id     TEXT,
  status          TEXT, -- 'success' | 'partial' | 'error'
  duration_ms     INTEGER,
  tokens_used     INTEGER,
  cost_usd        DECIMAL(8,6),
  output_summary  TEXT,
  error_message   TEXT,
  metadata        JSONB DEFAULT '{}'
);

CREATE INDEX IF NOT EXISTS idx_agent_logs_name ON agent_logs(agent_name, executed_at DESC);

ALTER TABLE agent_logs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admin only" ON agent_logs
  USING (auth.role() = 'service_role');

-- ────────────────────────────────────────────────────────────
-- Trigger updated_at sur blog_posts
-- ────────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================================
-- FIN DE LA MIGRATION
-- Vérification : SELECT table_name FROM information_schema.tables
-- WHERE table_schema = 'public' ORDER BY table_name;
-- ============================================================
