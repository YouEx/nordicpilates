# 🔐 Push to GitHub - Authentication Setup

Your repository is ready at: **https://github.com/YouEx/nordicpilates**

GitHub requires authentication via Personal Access Token (PAT) or SSH. Choose one method:

---

## ✅ **Option 1: Personal Access Token (Easiest)**

### Step 1: Create a GitHub Token

1. Go to: https://github.com/settings/tokens/new
2. **Note:** `NordicPilates - Push access`
3. **Expiration:** 90 days (or your preference)
4. **Scopes:** Check `repo` (Full control of private repositories)
5. Click **"Generate token"**
6. **Copy the token immediately** (you won't see it again!)

### Step 2: Push with Token

```bash
cd /Users/martin/repos/NordicPilates

# Use your token as password when prompted
git push -u origin main
```

When prompted:
- **Username:** `YouEx`
- **Password:** Paste your token (not your GitHub password!)

---

## ✅ **Option 2: GitHub CLI (Recommended)**

### Install and Authenticate

```bash
# Install GitHub CLI (if not installed)
brew install gh

# Login to GitHub
gh auth login

# Follow prompts to authenticate via browser

# Then push
cd /Users/martin/repos/NordicPilates
git push -u origin main
```

---

## ✅ **Option 3: SSH (Most Secure)**

### Step 1: Check for Existing SSH Key

```bash
ls -la ~/.ssh
```

If you see `id_ed25519.pub` or `id_rsa.pub`, skip to Step 3.

### Step 2: Generate SSH Key (if needed)

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
# Press Enter for default location
# Press Enter for no passphrase (or set one)
```

### Step 3: Add SSH Key to GitHub

```bash
# Copy your public key
cat ~/.ssh/id_ed25519.pub
# Or for RSA:
# cat ~/.ssh/id_rsa.pub
```

1. Go to: https://github.com/settings/ssh/new
2. **Title:** `MacBook Pro`
3. **Key:** Paste the key you just copied
4. Click **"Add SSH key"**

### Step 4: Update Remote URL to SSH

```bash
cd /Users/martin/repos/NordicPilates

# Change from HTTPS to SSH
git remote set-url origin git@github.com:YouEx/nordicpilates.git

# Push
git push -u origin main
```

---

## 🚀 **Quick Commands Summary**

### After Authentication Setup:

```bash
cd /Users/martin/repos/NordicPilates
git push -u origin main
```

---

## 🔍 **Verify After Push**

Once pushed successfully:

```bash
# Check remote status
git remote -v

# View repository
open https://github.com/YouEx/nordicpilates
```

---

## 💡 **Recommended: Use GitHub CLI**

The easiest method is GitHub CLI:

```bash
brew install gh
gh auth login
cd /Users/martin/repos/NordicPilates
git push -u origin main
```

This handles all authentication automatically! ✨

---

**Once you're authenticated, just run:**
```bash
git push -u origin main
```

And your code will be live at: **https://github.com/YouEx/nordicpilates** 🎉
