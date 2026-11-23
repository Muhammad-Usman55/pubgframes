-- ==============================================================================
-- PUBGFRAMES — COMPLETE SUPABASE DATABASE SCHEMA
-- Execute this entire script in your Supabase SQL Editor (Dashboard -> SQL Editor)
-- ==============================================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Devices Table (For Custom Added & Edited Smartphones)
CREATE TABLE IF NOT EXISTS public.devices (
    id TEXT PRIMARY KEY,
    brand TEXT NOT NULL,
    model TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    brand_slug TEXT NOT NULL,
    release_year INTEGER DEFAULT 2024,
    chipset TEXT NOT NULL,
    gpu TEXT NOT NULL,
    ram_options JSONB DEFAULT '[]'::jsonb,
    display_refresh_rate INTEGER DEFAULT 60,
    screen_size TEXT,
    battery_capacity INTEGER,
    antutu_score INTEGER,
    gyroscope TEXT DEFAULT 'Hardware Gyro',
    cooling_system TEXT,
    pubg_official_partner BOOLEAN DEFAULT false,
    max_supported_fps INTEGER DEFAULT 60,
    overall_gaming_rating NUMERIC(3, 1) DEFAULT 8.0,
    popularity_rank INTEGER DEFAULT 100,
    benchmark_date DATE DEFAULT CURRENT_DATE,
    benchmark_source TEXT DEFAULT 'PUBGFrames Lab Benchmarks',
    graphics_modes JSONB DEFAULT '{}'::jsonb,
    pros JSONB DEFAULT '[]'::jsonb,
    cons JSONB DEFAULT '[]'::jsonb,
    verdict TEXT,
    image_url TEXT,
    is_unsupported_hardware BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Indexing for fast search
CREATE INDEX IF NOT EXISTS idx_devices_brand ON public.devices (brand_slug);
CREATE INDEX IF NOT EXISTS idx_devices_slug ON public.devices (slug);
CREATE INDEX IF NOT EXISTS idx_devices_fps ON public.devices (max_supported_fps);

-- 3. Analytics / Visitor Page Views Table
CREATE TABLE IF NOT EXISTS public.analytics_page_views (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    path TEXT NOT NULL,
    user_agent TEXT,
    device_type TEXT DEFAULT 'mobile', -- 'mobile', 'tablet', 'desktop'
    country TEXT DEFAULT 'Pakistan',
    referrer TEXT,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_page_views_timestamp ON public.analytics_page_views (timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_page_views_path ON public.analytics_page_views (path);

-- 4. Search Queries Log Table
CREATE TABLE IF NOT EXISTS public.search_queries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    query TEXT NOT NULL,
    result_count INTEGER DEFAULT 0,
    selected_device_id TEXT,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_search_queries_query ON public.search_queries (query);

-- 5. Admin Users Table (For Credentials & Role Management)
CREATE TABLE IF NOT EXISTS public.admin_users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT UNIQUE NOT NULL,
    role TEXT DEFAULT 'admin',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. Row Level Security (RLS) Setup
ALTER TABLE public.devices ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics_page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.search_queries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Allow public read access to devices
CREATE POLICY "Allow public read access to devices" 
    ON public.devices FOR SELECT USING (true);

-- Allow public insert of analytics and searches
CREATE POLICY "Allow public insert of analytics" 
    ON public.analytics_page_views FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public insert of search queries" 
    ON public.search_queries FOR INSERT WITH CHECK (true);

-- Allow public read of analytics stats for admin dashboard
CREATE POLICY "Allow public read of analytics" 
    ON public.analytics_page_views FOR SELECT USING (true);

-- Allow authenticated/admin write access to devices
CREATE POLICY "Allow write access to devices" 
    ON public.devices FOR ALL USING (true);

-- 7. Seed Initial Sample Analytics Data (Optional Demo Visits)
INSERT INTO public.analytics_page_views (path, device_type, country, timestamp)
VALUES 
    ('/', 'mobile', 'Pakistan', now() - interval '1 hour'),
    ('/fps-checker', 'mobile', 'Pakistan', now() - interval '45 minutes'),
    ('/devices/poco/poco-x6-pro-5g', 'mobile', 'India', now() - interval '30 minutes'),
    ('/devices/apple/apple-iphone-16-pro-max', 'mobile', 'Saudi Arabia', now() - interval '20 minutes'),
    ('/compare', 'desktop', 'Pakistan', now() - interval '10 minutes')
ON CONFLICT DO NOTHING;
