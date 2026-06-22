#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

# Brand SVG logo/icon
cat > public/brand/icon.svg <<'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <rect width="64" height="64" rx="12" fill="#7B1D2A"/>
  <text x="32" y="44" text-anchor="middle" font-family="Georgia,serif" font-size="36" fill="#D4AF37">A</text>
</svg>
EOF

cat > public/brand/logo.svg <<'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 48" fill="none">
  <text x="8" y="36" font-family="Georgia,serif" font-size="28" font-weight="700" fill="#7B1D2A">Ada</text>
  <text x="62" y="36" font-family="Georgia,serif" font-size="28" font-weight="400" fill="#D4AF37">Undangan</text>
</svg>
EOF

make_placeholder() {
  local path="$1" label="$2" color="${3:-#D4AF37}"
  cat > "$path" <<EOF2
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
  <rect width="800" height="600" fill="#f9e9eb"/>
  <rect x="300" y="220" width="200" height="160" rx="8" fill="${color}" opacity="0.3"/>
  <text x="400" y="320" text-anchor="middle" font-family="Georgia,serif" font-size="20" fill="#7B1D2A">${label}</text>
</svg>
EOF2
}

make_placeholder public/images/invitations/demo-hero.svg "Foto Hero Demo" "#7B1D2A"
make_placeholder public/images/invitations/demo-groom.svg "Foto Pengantin Pria" "#D4AF37"
make_placeholder public/images/invitations/demo-bride.svg "Foto Pengantin Wanita" "#D4AF37"
make_placeholder public/images/invitations/demo-gallery-1.svg "Galeri 1"
make_placeholder public/images/invitations/demo-gallery-2.svg "Galeri 2"
make_placeholder public/images/invitations/demo-gallery-3.svg "Galeri 3"
make_placeholder public/images/invitations/demo-gallery-4.svg "Galeri 4"
make_placeholder public/images/invitations/demo-gallery-5.svg "Galeri 5"
make_placeholder public/images/invitations/demo-gallery-6.svg "Galeri 6"
make_placeholder public/images/landing/hero-preview.svg "Preview Undangan"

echo "gen3 assets done"
