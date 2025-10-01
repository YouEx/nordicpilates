# 🖼️ Add Your Studio Media (Image or Video)

## ⚠️ Current Status: No Media Found

The page is currently using a gradient fallback. Add your media to see the full design!

## Quick Setup

### Method 1: Add Your Own Video
```bash
# Copy your video to the public folder:
cp /path/to/your/video.mp4 /Users/martin/repos/NordicPilates/public/studio.mp4

# Then refresh your browser!
```

### Method 2: Add Your Own Image
```bash
# Copy your image to the public folder:
cp /path/to/your/image.jpg /Users/martin/repos/NordicPilates/public/studio.jpg

# Then refresh your browser!
```

### Method 3: Test with a Sample Video (requires internet)
```bash
cd /Users/martin/repos/NordicPilates
curl -L 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4' -o public/studio.mp4
```

Or download a free Pilates/fitness video from:
- **Pexels**: https://www.pexels.com/search/videos/pilates/
- **Pixabay**: https://pixabay.com/videos/search/fitness/

## Troubleshooting

### Video Not Playing?

1. **Check the file exists:**
   ```bash
   ls -la public/studio.mp4
   ```

2. **Check browser console** (Right-click → Inspect → Console tab)
   - Look for "Video loaded successfully" message
   - Or check for error messages

3. **Verify video format:**
   - Must be MP4 with H.264 codec
   - If your video is in another format, convert it:
   ```bash
   ffmpeg -i input.mov -vcodec h264 -acodec aac public/studio.mp4
   ```

4. **Clear browser cache:**
   - Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

5. **Check file size:**
   - Keep under 10MB for fast loading
   - Compress if needed using HandBrake or FFmpeg

### Image Not Showing?

1. **Check the file exists:**
   ```bash
   ls -la public/studio.jpg
   ```

2. **Supported formats:** JPG, JPEG, PNG, WebP

3. **File naming:** Must be exactly `studio.jpg` (lowercase)

## Check Status

Run this command to check what media is detected:
```bash
./check-media.sh
```

