# 🎬 Video Specifications for Nordic Pilates Hero

## Recommended Video Specs

### Technical Requirements:
- **Resolution**: 1920x1080px (Full HD) or 3840x2160px (4K)
- **Format**: MP4 (H.264 codec)
- **Duration**: 10-30 seconds (will loop seamlessly)
- **File Size**: Under 10MB (5-8MB ideal for fast loading)
- **Frame Rate**: 24fps or 30fps
- **Bitrate**: 5-8 Mbps for 1080p
- **Audio**: None required (video will be muted)

### Content Suggestions:
1. **Studio Walkthrough**: Slow pan through the space
2. **Reformer Close-ups**: Beautiful detail shots
3. **Atmospheric Shots**: Lighting, textures, minimalist design
4. **Motion**: People working out (slow, mindful movements)
5. **Entrance**: The iconic glass doors with branding

### Filming Tips:
- Use natural light or warm studio lighting
- Keep movements slow and smooth (matches Pilates aesthetic)
- Focus on Scandinavian design elements
- Maintain the calm, premium feel
- Consider adding subtle motion (curtains, light movement)

### Compression:
To optimize your video for web:

```bash
# Using FFmpeg (install from ffmpeg.org)
ffmpeg -i input.mp4 -vcodec h264 -acodec aac -vf "scale=1920:1080" -b:v 6M -movflags +faststart public/studio.mp4
```

### Current Behavior:
- ✅ Auto-plays on page load (muted for browser compliance)
- ✅ Loops seamlessly forever
- ✅ Responsive to all screen sizes
- ✅ Fallback to image if video doesn't load
- ✅ Smooth dark overlay for text readability

### File Location:
Save your video as:
```
/Users/martin/repos/NordicPilates/public/studio.mp4
```

The `HeroMedia` component will automatically detect and play it!

---

## Alternative: Using Stock Footage

If you don't have studio footage yet, consider:
- **Pexels** (free): pexels.com/search/pilates%20studio
- **Unsplash** (free): unsplash.com/s/photos/pilates
- **Artgrid** (paid): artgrid.io
- **Envato Elements** (paid): elements.envato.com

Search terms: "pilates studio", "reformer pilates", "minimalist gym", "scandinavian fitness"
