-- Mochis table
CREATE TABLE IF NOT EXISTS mochis (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  tagline TEXT NOT NULL,
  content TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('prompt', 'skill')),
  flavor TEXT NOT NULL,
  flavor_emoji TEXT NOT NULL DEFAULT '🍡',
  tags TEXT[] DEFAULT '{}',
  compatible_with TEXT[] DEFAULT '{}',
  feed_count INTEGER DEFAULT 0,
  is_house_special BOOLEAN DEFAULT true,
  preview_description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_mochis_flavor ON mochis(flavor);
CREATE INDEX idx_mochis_slug ON mochis(slug);
CREATE INDEX idx_mochis_type ON mochis(type);

-- Row Level Security
ALTER TABLE mochis ENABLE ROW LEVEL SECURITY;

-- Public read access (no auth needed for Phase 1)
CREATE POLICY "Public read access" ON mochis
  FOR SELECT USING (true);

-- Updated at trigger
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER mochis_updated_at
  BEFORE UPDATE ON mochis
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- Feed count increment function (called via RPC)
CREATE OR REPLACE FUNCTION increment_feed_count(mochi_slug TEXT)
RETURNS VOID AS $$
BEGIN
  UPDATE mochis SET feed_count = feed_count + 1 WHERE slug = mochi_slug;
END;
$$ LANGUAGE plpgsql;
