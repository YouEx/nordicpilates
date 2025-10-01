#!/bin/bash

echo "🎬 Creating a test placeholder image..."
echo ""

# Create a simple SVG placeholder that looks like the Nordic Pilates studio
cat > public/studio.jpg << 'EOF'
<svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
  <!-- Background gradient (warm interior) -->
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#8B7355;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#A0826D;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#6B5444;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Main background -->
  <rect width="1920" height="1080" fill="url(#bg)"/>
  
  <!-- Dark vignette -->
  <rect width="1920" height="1080" fill="black" opacity="0.3"/>
  
  <!-- Center text -->
  <text x="960" y="500" font-family="serif" font-size="120" font-style="italic" fill="white" opacity="0.9" text-anchor="middle">nordic</text>
  <text x="960" y="650" font-family="sans-serif" font-size="140" font-weight="bold" fill="white" opacity="0.9" text-anchor="middle" letter-spacing="20">PILATES</text>
  
  <!-- Bottom text -->
  <text x="960" y="950" font-family="sans-serif" font-size="24" fill="white" opacity="0.5" text-anchor="middle">Replace this with your studio.jpg or studio.mp4</text>
</svg>
EOF

echo "✅ Placeholder created at public/studio.jpg"
echo ""
echo "This is just a temporary placeholder SVG."
echo "Replace it with your actual studio photo or video!"
echo ""
echo "Refresh your browser to see it: http://localhost:3000"
