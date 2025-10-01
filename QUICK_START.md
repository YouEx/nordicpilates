# 🎬 Quick Start: Add Your Background Video/Image

## Current Status
✅ Landing page is live at http://localhost:3000
⏳ Background media is missing (showing gradient fallback)
📝 In development mode, you'll see a helpful hint at the bottom of the page

## 3 Ways to Add Media (Choose One)

### 🎥 Option 1: Add Your Studio Video
```bash
# Copy your video file:
cp /path/to/your-video.mp4 /Users/martin/repos/NordicPilates/public/studio.mp4

# Then refresh your browser!
```

### 📸 Option 2: Add Your Studio Image  
```bash
# Copy your image file:
cp /path/to/your-image.jpg /Users/martin/repos/NordicPilates/public/studio.jpg

# Then refresh your browser!
```

### 🧪 Option 3: Download a Test Video (requires internet)
```bash
cd /Users/martin/repos/NordicPilates

# Download a sample fitness video (5MB):
curl -o public/studio.mp4 "https://assets.mixkit.co/videos/preview/mixkit-woman-doing-pilates-on-a-reformer-28665-large.mp4"

# Or download from Pexels (free, no signup):
# Visit: https://www.pexels.com/search/videos/pilates/
# Download any video you like and save as public/studio.mp4
```

## After Adding the File

1. **Refresh your browser**: Cmd+R (or Cmd+Shift+R for hard refresh)
2. **Check the console** (optional): Right-click → Inspect → Console tab
   - Look for "Video loaded successfully" message
3. **Enjoy!** Your video/image should now fill the background

## Verify It Worked

```bash
# Check if file exists:
ls -lh /Users/martin/repos/NordicPilates/public/studio.*

# Should show something like:
# -rw-r--r--  1 martin  staff   5.2M Sep 30 17:00 studio.mp4
```

## File Requirements

### Video:
- **Format**: MP4 (H.264 codec)
- **Size**: 1920x1080px recommended
- **Duration**: 10-30 seconds (will loop)
- **File size**: Under 10MB preferred

### Image:
- **Format**: JPG, PNG, or WebP
- **Size**: 1920x1080px or larger
- **Quality**: High resolution

## Troubleshooting

**Video still not showing after adding file?**
- Hard refresh: Cmd+Shift+R
- Check filename is exactly: `studio.mp4` or `studio.jpg` (lowercase)
- Check file is in the right location: `/Users/martin/repos/NordicPilates/public/`
- Check browser console for errors

**Need to convert video format?**
```bash
ffmpeg -i input.mov -vcodec h264 -acodec aac public/studio.mp4
```

## What's Happening Behind the Scenes

The `HeroMedia` component:
1. Checks for `/studio.mp4` first
2. If not found, checks for `/studio.jpg`
3. If neither found, shows the gradient fallback
4. All happens automatically - no code changes needed!

---

**See also:**
- `TROUBLESHOOTING.md` - Detailed debugging help
- `VIDEO_SPECS.md` - Video optimization tips
- `check-media.sh` - Run to check current status

**Your site**: http://localhost:3000
