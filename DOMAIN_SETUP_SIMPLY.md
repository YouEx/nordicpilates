# 🌍 Setting Up nordicpilates.dk with Vercel

## 📍 Your Domain Setup

**Domain:** nordicpilates.dk  
**Provider:** Simply.com (unoeuro.com)  
**Current Status:** Adding to Vercel...

---

## 🎯 **What You Need to Do**

### Step 1: Login to Simply.com DNS Settings

1. Go to: https://www.simply.com/dk/controlpanel/
2. Login to your account
3. Find **nordicpilates.dk** in your domain list
4. Click on **DNS settings** or **Navneservere/DNS**

---

### Step 2: Add DNS Records

You'll need to add these records in Simply.com:

#### **A Record** (Point root domain to Vercel)
```
Type: A
Name: @ (or leave blank for root domain)
Value: 76.76.21.21
TTL: 3600 (or automatic)
```

#### **CNAME Record** (Point www subdomain)
```
Type: CNAME  
Name: www
Value: cname.vercel-dns.com
TTL: 3600 (or automatic)
```

---

### Step 3: Wait for Propagation

- DNS changes take 5-30 minutes to propagate
- Sometimes up to 48 hours (rare)
- You can check status at: https://www.whatsmydns.net/#A/nordicpilates.dk

---

## 📋 **Detailed Simply.com Instructions**

### Finding DNS Settings at Simply.com:

1. **Login** to https://www.simply.com/dk/controlpanel/
2. Click on **"Domæner"** (Domains) in the menu
3. Find **nordicpilates.dk** in the list
4. Click **"Administrer"** (Manage)
5. Look for **"DNS"** or **"Avancerede indstillinger"** (Advanced settings)
6. Click **"Rediger DNS-records"** (Edit DNS records)

### Adding the Records:

#### For the A Record:
- Click **"Tilføj record"** (Add record)
- Type: **A**
- Name/Host: **@** (or leave blank)
- Points to/Value: **76.76.21.21**
- TTL: **3600** (default is fine)
- Save

#### For the CNAME Record:
- Click **"Tilføj record"** (Add record)
- Type: **CNAME**
- Name/Host: **www**
- Points to/Value: **cname.vercel-dns.com**
- TTL: **3600** (default is fine)
- Save

---

## ⚠️ **Important Notes**

### If Simply.com Has Existing Records:
- **Remove** or **replace** any existing A records for `@` or root
- **Remove** or **replace** any existing CNAME for `www`
- Keep MX records (email) if you have any

### If You See "Nameservers" Instead:
Some providers use nameservers instead of DNS records. If Simply.com asks about nameservers, you have two options:

**Option A: Keep Simply.com DNS** (Recommended)
- Just add the A and CNAME records above
- Leave nameservers as they are

**Option B: Use Vercel Nameservers** (Alternative)
- Change nameservers to Vercel's
- I'll provide these if needed

---

## 🔍 **After Adding DNS Records**

### Verify in Vercel:
1. Go to: https://vercel.com/stelzigdanty-6595s-projects/nordicpilates/settings/domains
2. You should see `nordicpilates.dk` listed
3. Status will change from "Pending" → "Valid" when DNS propagates
4. SSL certificate will auto-generate (takes 5-10 minutes)

### Check DNS Propagation:
- Visit: https://www.whatsmydns.net/#A/nordicpilates.dk
- Should show: **76.76.21.21** globally
- Wait until most locations show the correct IP

### Test Your Domain:
- Visit: http://nordicpilates.dk (then https after SSL)
- Should redirect to your Nordic Pilates site!
- Both `nordicpilates.dk` and `www.nordicpilates.dk` will work

---

## 🆘 **Need Help?**

If you get stuck at Simply.com:
1. Take a screenshot of their DNS settings page
2. Share it with me
3. I'll guide you through the exact clicks

---

## ✅ **Summary**

**DNS Records to Add at Simply.com:**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 76.76.21.21 | 3600 |
| CNAME | www | cname.vercel-dns.com | 3600 |

**Where:** Simply.com Control Panel → Domains → nordicpilates.dk → DNS Settings

**Wait Time:** 5-30 minutes for DNS propagation

**Result:** Your site will be live at nordicpilates.dk! 🎉

---

*Note: FTP is not needed for this setup. We're only changing DNS records to point your domain to Vercel's servers.*
