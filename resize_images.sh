#!/bin/bash

# Create medium and small versions of hero images using sips (macOS native)
# Medium: 800px width, Small: 400px width

cd static/images

# Hero images to resize
images=(
  "puente_nuevo_bridge.png"
  "lighthouse_rendered1.png"
  "lighthouse_rendered2.png"
  "sky_island_1.png"
  "sky_island_2.png"
  "sky_island_3.png"
  "pumproom_7000.png"
  "silo_and_splat.png"
  "pointcloud_portrait.png"
  "skysplat_blender_logo.png"
)

for img in "${images[@]}"; do
  if [ -f "$img" ]; then
    base="${img%.*}"
    ext="${img##*.}"
    
    # Create medium version (800px width)
    echo "Creating medium version of $img..."
    sips -Z 800 "$img" --out "${base}_medium.${ext}"
    
    # Create small version (400px width)
    echo "Creating small version of $img..."
    sips -Z 400 "$img" --out "${base}_small.${ext}"
  else
    echo "Warning: $img not found"
  fi
done

echo "Image resizing complete!"
