#!/bin/bash

echo "🎬 Nordic Pilates - Add Video or Image"
echo "======================================"
echo ""

# Check if file exists
if [ -f "public/studio.mp4" ]; then
    echo "✅ Video found: public/studio.mp4"
    ls -lh public/studio.mp4
elif [ -f "public/studio.jpg" ]; then
    echo "✅ Image found: public/studio.jpg"
    ls -lh public/studio.jpg
else
    echo "❌ No media file found"
    echo ""
    echo "To add your video or image:"
    echo ""
    echo "1️⃣  For VIDEO:"
    echo "   cp /path/to/your/video.mp4 public/studio.mp4"
    echo ""
    echo "2️⃣  For IMAGE:"
    echo "   cp /path/to/your/image.jpg public/studio.jpg"
    echo ""
    echo "3️⃣  Quick test with a sample (requires internet):"
    echo "   curl -L 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4' -o public/studio.mp4"
    echo ""
fi

echo ""
echo "📁 Current public folder contents:"
ls -la public/ 2>/dev/null || echo "public/ folder not found"

echo ""
echo "💡 TIP: After adding media, refresh your browser to see it!"
echo "🌐 Open: http://localhost:3000"
