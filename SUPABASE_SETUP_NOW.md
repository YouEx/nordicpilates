# 🎯 Supabase Setup - Quick Action Guide

## ✅ Step 1: Environment Variables Configured

Your `.env.local` file has been created with:
- **Project URL:** `https://mljtanhoevfvmkwuiorg.supabase.co`
- **Service Role Key:** Configured ✓

---

## 🗄️ Step 2: Run Database Schema (DO THIS NOW)

I've opened your Supabase SQL Editor. Follow these steps:

### In the SQL Editor (already open):

1. Click **"New query"** button
2. Copy the ENTIRE contents below
3. Paste into the SQL editor
4. Click **"Run"** (or press Cmd+Enter)

### SQL Schema to Run:

```sql
-- Nordic Pilates Waitlist Database Schema
-- Run this in your Supabase SQL Editor

-- Create the waitlist_submissions table
CREATE TABLE IF NOT EXISTS waitlist_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL CHECK (char_length(name) >= 1 AND char_length(name) <= 80),
  email TEXT NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  email_hash TEXT NOT NULL UNIQUE,
  consent_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  confirmed_at TIMESTAMPTZ,
  locale TEXT NOT NULL DEFAULT 'da' CHECK (locale IN ('da', 'en')),
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_content TEXT,
  ip_country TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_waitlist_email_hash ON waitlist_submissions(email_hash);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_waitlist_locale ON waitlist_submissions(locale);
CREATE INDEX IF NOT EXISTS idx_waitlist_confirmed ON waitlist_submissions(confirmed_at) WHERE confirmed_at IS NOT NULL;

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist_submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy for service role (API) to insert and read
CREATE POLICY "Enable insert for service role" ON waitlist_submissions
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Enable read for service role" ON waitlist_submissions
  FOR SELECT
  USING (true);

-- Create a function to get submission statistics
CREATE OR REPLACE FUNCTION get_waitlist_stats()
RETURNS JSON AS $$
  SELECT json_build_object(
    'total', COUNT(*),
    'confirmed', COUNT(*) FILTER (WHERE confirmed_at IS NOT NULL),
    'pending', COUNT(*) FILTER (WHERE confirmed_at IS NULL),
    'today', COUNT(*) FILTER (WHERE created_at::date = CURRENT_DATE),
    'this_week', COUNT(*) FILTER (WHERE created_at > NOW() - INTERVAL '7 days'),
    'this_month', COUNT(*) FILTER (WHERE created_at > NOW() - INTERVAL '30 days'),
    'by_locale', json_object_agg(locale, locale_count)
  )
  FROM waitlist_submissions,
  LATERAL (
    SELECT locale, COUNT(*) as locale_count
    FROM waitlist_submissions
    GROUP BY locale
  ) locale_stats
$$ LANGUAGE SQL STABLE;

-- Create a view for admin dashboard (without sensitive data)
CREATE OR REPLACE VIEW waitlist_dashboard AS
SELECT 
  id,
  name,
  email,
  locale,
  consent_at,
  confirmed_at,
  created_at,
  utm_source,
  utm_medium,
  utm_campaign
FROM waitlist_submissions
ORDER BY created_at DESC;

-- Grant permissions
GRANT SELECT ON waitlist_dashboard TO service_role;
GRANT EXECUTE ON FUNCTION get_waitlist_stats TO service_role;

-- Optional: Create a function for email confirmation
CREATE OR REPLACE FUNCTION confirm_email(submission_id UUID)
RETURNS BOOLEAN AS $$
  UPDATE waitlist_submissions
  SET confirmed_at = NOW()
  WHERE id = submission_id AND confirmed_at IS NULL
  RETURNING TRUE;
$$ LANGUAGE SQL;

GRANT EXECUTE ON FUNCTION confirm_email TO service_role;

-- Success message
DO $$ 
BEGIN 
  RAISE NOTICE 'Nordic Pilates waitlist database setup complete! ✅';
  RAISE NOTICE 'Table created: waitlist_submissions';
  RAISE NOTICE 'Indexes created: 4';
  RAISE NOTICE 'RLS policies: enabled';
  RAISE NOTICE 'Functions created: 2';
  RAISE NOTICE 'Ready to accept submissions!';
END $$;
```

### What This Creates:

✅ `waitlist_submissions` table with 14 columns  
✅ 4 indexes for performance  
✅ Row Level Security (RLS) policies  
✅ `get_waitlist_stats()` function  
✅ `confirm_email()` function  
✅ `waitlist_dashboard` view  

---

## ⚡ Step 3: Verify Database Setup

After running the SQL:

1. Check for success messages in the output
2. Go to **Table Editor** → You should see `waitlist_submissions` table
3. Click on the table to see the schema

---

## 🔄 Next Steps (I'll do automatically):

Once you confirm the SQL ran successfully, I'll:

1. ✅ Switch to Supabase API route
2. ✅ Restart the dev server
3. ✅ Test a form submission
4. ✅ Verify data in Supabase

---

## 📍 Quick Links

- **Your SQL Editor:** https://supabase.com/dashboard/project/mljtanhoevfvmkwuiorg/editor
- **Table Editor:** https://supabase.com/dashboard/project/mljtanhoevfvmkwuiorg/editor
- **API Settings:** https://supabase.com/dashboard/project/mljtanhoevfvmkwuiorg/settings/api

---

**👉 Run the SQL schema now, then let me know when it's done!**
