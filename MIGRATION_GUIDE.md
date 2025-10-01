# 🔄 Quick Migration: File Storage → Supabase

## What Changes

**Before (File-based):**
- Data stored in `waitlist-data.json`
- Logs in `waitlist-submissions.log`
- Lost on server restart (unless files preserved)
- Manual backups needed

**After (Supabase):**
- Data in Supabase PostgreSQL database
- Never lost, automatic backups
- Scales to millions of submissions
- GDPR compliant (EU region)

## Migration Steps

### 1️⃣ Set up Supabase (5 minutes)
Follow `SUPABASE_SETUP.md` to create your project and database.

### 2️⃣ Migrate Existing Data (if you have any)

If you already have submissions in `waitlist-data.json`:

```bash
# You can import them via Supabase SQL Editor:
# 1. Open your waitlist-data.json
# 2. For each submission, run:

INSERT INTO waitlist_submissions (name, email, email_hash, locale, created_at)
VALUES ('Name', 'email@example.com', 'hash', 'da', '2025-10-01T12:00:00Z');
```

Or use the Supabase Table Editor:
1. Go to Table Editor → waitlist_submissions
2. Click "Insert row"
3. Fill in the values
4. Repeat for each submission

### 3️⃣ Switch to Supabase API

```bash
# Backup the old file-based version
mv app/api/waitlist/route.ts app/api/waitlist/route-file-based.ts

# Use the Supabase version
cp app/api/waitlist/route-supabase.ts app/api/waitlist/route.ts
```

### 4️⃣ Add Environment Variables

Create `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
SUPABASE_SERVICE_ROLE_KEY=your-service-key
```

### 5️⃣ Restart and Test

```bash
npm run dev
```

Test the form at http://localhost:3000

### 6️⃣ Verify

Check Supabase Table Editor to see your submission!

## 🎉 Done!

You're now using Supabase! Your data is:
- ✅ Persistent
- ✅ Backed up automatically
- ✅ Scalable
- ✅ GDPR compliant
- ✅ Queryable with SQL

## Keep or Delete Old Files?

You can delete these (they're not used anymore):
- `waitlist-data.json`
- `waitlist-submissions.log`
- `app/api/waitlist/route-file-based.ts` (backup)

Or keep them as backups for a while!
