# 🎬 Video Not Loading? Here's How to Fix It

## Problem: Background video/image not showing

The page is currently showing a dark gradient fallback because no media file was found.

## Solution: Add Your Media File

### Option 1: Add from your computer

**If you have the studio image/video:**

1. Open Finder
2. Navigate to: `/Users/martin/repos/NordicPilates/public/`
3. Copy your file there and rename it to either:
   - `studio.mp4` (for video)
   - `studio.jpg` (for image)

**Or use Terminal:**
```bash
# For video:
cp ~/Downloads/your-video.mp4 /Users/martin/repos/NordicPilates/public/studio.mp4

# For image:
cp ~/Downloads/your-image.jpg /Users/martin/repos/NordicPilates/public/studio.jpg
```

### Option 2: Download a test video

To test with a sample video:

```bash
cd /Users/martin/repos/NordicPilates
curl -o public/studio.mp4 "https://assets.mixkit.co/videos/preview/mixkit-woman-doing-pilates-on-a-reformer-28665-large.mp4"
```

Or download from free stock sites:
- **Pexels**: https://www.pexels.com/search/videos/pilates%20studio/
- **Pixabay**: https://pixabay.com/videos/search/pilates/
- **Mixkit**: https://mixkit.co/free-stock-video/pilates/

### Option 3: Use the studio door image from the PRD

If you have the Nordic Pilates door image from your attachments:
1. Save it as `studio.jpg`
2. Place it in the `public/` folder

## After Adding the File:

1. **Refresh your browser** (Cmd+R or hard refresh with Cmd+Shift+R)
2. Check the browser console for messages (Right-click → Inspect → Console)
3. You should see "Video loaded successfully" or the image should appear

## Verify the File is There:

```bash
cd /Users/martin/repos/NordicPilates
ls -lh public/studio.*
```

Expected output:
```
-rw-r--r--  1 martin  staff   5.2M Sep 30 17:00 public/studio.mp4
```

## Common Issues:

### Issue 1: File is there but still not loading
- **Solution**: Hard refresh (Cmd+Shift+R)
- Clear browser cache
- Check file permissions: `chmod 644 public/studio.mp4`

### Issue 2: Video format not supported
- **Solution**: Convert to MP4 H.264
```bash
ffmpeg -i input.mov -vcodec h264 -acodec aac -movflags +faststart public/studio.mp4
```

### Issue 3: File is too large (slow loading)
- **Solution**: Compress the video
```bash
ffmpeg -i public/studio.mp4 -vcodec h264 -b:v 4M -vf "scale=1920:1080" -movflags +faststart public/studio-compressed.mp4
mv public/studio-compressed.mp4 public/studio.mp4
```

## Check Current Status:

Run the helper script:
```bash
./check-media.sh
```

This will show you if media files are detected.

## What You'll See:

- **With video**: Auto-playing, looping background video
- **With image**: Static background image
- **Without media**: Dark gradient (current state)

The page looks great in all three modes! But video gives the most premium feel.

## Need More Help?

Check these files:
- `VIDEO_SPECS.md` - Detailed video requirements
- `ADD_IMAGE_HERE.md` - Step-by-step media setup

---

**Current page**: http://localhost:3000 (refresh after adding media)
