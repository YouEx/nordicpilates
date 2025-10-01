# 🚀 Supabase Backend Setup Guide

Your Nordic Pilates waitlist is now configured to use **Supabase** as the backend! This guide will help you set it up.

## 📋 What You'll Need

- A Supabase account (free tier works great!)
- 10 minutes to set everything up

---

## 🎯 Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Click "Start your project" (or "New Project" if you have an account)
3. Sign up / Log in with GitHub
4. Create a new project:
   - **Name:** `nordic-pilates-waitlist`
   - **Database Password:** Choose a strong password (save it!)
   - **Region:** Choose `Europe (EU Central)` for GDPR compliance
   - **Pricing:** Free tier is perfect for getting started
5. Wait 1-2 minutes for your database to spin up ☕

---

## 🗄️ Step 2: Set Up the Database

1. In your Supabase project, click **SQL Editor** (left sidebar)
2. Click **"New query"**
3. Copy the entire contents of `/supabase/schema.sql`
4. Paste it into the SQL editor
5. Click **"Run"** (or press Cmd+Enter)
6. You should see success messages! ✅

**What this creates:**
- `waitlist_submissions` table with all fields
- Indexes for performance
- Row Level Security (RLS) policies
- Helper functions for stats
- A dashboard view

---

## 🔑 Step 3: Get Your API Keys

1. In Supabase, go to **Settings** → **API** (left sidebar)
2. You'll see two important things:

### Project URL
```
https://your-project-ref.supabase.co
```

### API Keys
- **anon (public)** key - for client-side (not needed for now)
- **service_role (secret)** key - for server-side ⚠️ Keep this SECRET!

---

## ⚙️ Step 4: Configure Your App

1. Create a `.env.local` file in your project root:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
   ```

3. Replace with your actual values from Step 3

⚠️ **Important:** Never commit `.env.local` to git! (It's already in `.gitignore`)

---

## 🔄 Step 5: Update the API Route

Replace the current file-based API with the Supabase version:

```bash
# Backup the old version
mv app/api/waitlist/route.ts app/api/waitlist/route-old.ts

# Use the Supabase version
mv app/api/waitlist/route-supabase.ts app/api/waitlist/route.ts
```

Or manually update `app/api/waitlist/route.ts` with the Supabase code.

---

## 🧪 Step 6: Test It!

1. **Restart your dev server:**
   ```bash
   npm run dev
   ```

2. **Fill out the form** at http://localhost:3000

3. **Check your terminal** for the success message:
   ```
   🎉 NEW WAITLIST SUBMISSION!
   ═══════════════════════════
   👤 Name:     Martin Hansen
   📧 Email:    martin@example.com
   ```

4. **Verify in Supabase:**
   - Go to **Table Editor** → `waitlist_submissions`
   - You should see your submission! 🎉

---

## 📊 Features You Get with Supabase

### ✅ Automatic Benefits
- **Persistent storage** - Data never lost, even if server restarts
- **GDPR compliant** - EU data centers available
- **Scalable** - Handles thousands of submissions
- **Backups** - Automatic daily backups
- **Real-time** - Can add live updates later
- **SQL access** - Run custom queries
- **API** - RESTful API automatically generated

### 🎨 Built-in Dashboard
Go to **Table Editor** in Supabase to:
- View all submissions
- Search and filter
- Export to CSV
- Edit/delete entries
- See statistics

---

## 🔐 Security Best Practices

### ✅ DO:
- Use **service_role** key only in API routes (server-side)
- Keep your `.env.local` file secret
- Enable Row Level Security (RLS) - already done! ✅
- Choose EU region for GDPR compliance
- Use strong database password

### ❌ DON'T:
- Expose service_role key in client-side code
- Commit `.env.local` to git
- Share API keys publicly
- Use test keys in production

---

## 📈 View Your Data

### Option 1: Supabase Dashboard
1. Go to **Table Editor** in Supabase
2. Click `waitlist_submissions`
3. View, search, filter, export!

### Option 2: Your Admin Page
Visit http://localhost:3000/admin
- Password: `nordicpilates2025`
- View submissions in a nice table
- Export to CSV

### Option 3: SQL Queries
In Supabase SQL Editor:

```sql
-- View all submissions
SELECT * FROM waitlist_submissions ORDER BY created_at DESC;

-- Count by locale
SELECT locale, COUNT(*) FROM waitlist_submissions GROUP BY locale;

-- Today's submissions
SELECT * FROM waitlist_submissions WHERE created_at::date = CURRENT_DATE;

-- Get statistics
SELECT * FROM get_waitlist_stats();
```

---

## 🚀 Going Live (Production)

### For Vercel:
1. Go to your Vercel project → **Settings** → **Environment Variables**
2. Add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
3. Redeploy your app

### For Netlify:
1. Go to **Site settings** → **Build & deploy** → **Environment**
2. Add the same variables
3. Trigger a redeploy

---

## 🎯 What's Next?

### Recommended Enhancements:
1. **Email Confirmation**
   - Use [Resend](https://resend.com) or [Sendgrid](https://sendgrid.com)
   - Send double opt-in emails
   - Update `confirmed_at` field

2. **Email Service Integration**
   - Sync to Mailchimp/Customer.io
   - Send welcome series
   - Segment by locale

3. **Analytics**
   - Track UTM parameters (already captured!)
   - See conversion sources
   - A/B test different copy

4. **Admin Authentication**
   - Replace simple password with Supabase Auth
   - Add role-based access
   - Secure the admin panel

---

## 📞 Need Help?

### Supabase Resources:
- [Documentation](https://supabase.com/docs)
- [Discord Community](https://discord.supabase.com)
- [GitHub Discussions](https://github.com/supabase/supabase/discussions)

### Check Your Setup:
```bash
# Verify environment variables
cat .env.local

# Check if Supabase is imported correctly
grep -r "supabase" app/api/

# Test the API
curl http://localhost:3000/api/waitlist
```

---

## 🎉 You're All Set!

Your waitlist is now powered by Supabase! 

**Quick checklist:**
- [ ] Supabase project created
- [ ] Database schema applied
- [ ] API keys added to `.env.local`
- [ ] API route updated
- [ ] Form tested successfully
- [ ] Data visible in Supabase dashboard

**Next:** Start collecting those email addresses! 🚀

---

## 📊 Current Features

✅ Supabase backend integration  
✅ Persistent database storage  
✅ Duplicate email detection  
✅ GDPR-compliant EU hosting  
✅ Automatic backups  
✅ Real-time dashboard  
✅ CSV export capability  
✅ UTM tracking ready  
✅ Email confirmation ready  
✅ Scalable architecture  

Your waitlist is production-ready! 🎊
