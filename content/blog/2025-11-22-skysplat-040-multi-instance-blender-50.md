+++
title = "SkySplat 0.4.0: Multi-Instance Workflow & Blender 5.0 Support"
date = 2025-11-22
description = "Multi-instance support, animated camera creation from COLMAP, and Blender 5.0 compatibility"
[taxonomies]
tags = ["release", "blender", "colmap", "gaussian-splatting", "multi-instance"]
+++

SkySplat 0.4.0 is now available with multi-instance support, automated camera animation from COLMAP reconstructions, and Blender 5.0 compatibility.

<!-- more -->

## What's New

### Multi-Instance Workflow

Each panel (Video, COLMAP, and Brush) now supports multiple independent instances with automatic path management.

Features:
- No file collisions - each instance maintains separate output folders
- Independent settings per instance
- All projects coexist in one .blend file

<img src="/images/video_panel_multi_instance.png" alt="Video Panel Multi-Instance" style="max-width: 100%; height: auto;">

### Animated Camera Creation

Automatically create animated cameras from COLMAP reconstructions:

- Parses frame numbers from COLMAP camera names
- Creates animated camera with keyframes at each frame
- Uses quaternion interpolation for smooth rotation
- Sets camera resolution from COLMAP data

<img src="/images/animated_camera_perspective.gif" alt="Camera Animation from COLMAP" style="max-width: 100%; height: auto;">

### Blender 5.0 Compatibility

Compatible with Blender 5.0 and maintains backward compatibility with Blender 4.0+.

Changes:
- Video sequencer scene handling for Blender 5.0
- Updated panel layouts
- Proper default scene selection in video sequencer

## Multi-Instance Panels

### Video Panel
- Load multiple drone videos
- Extract frames with different settings per video
- Separate output folders per instance

### COLMAP Panel
- Multiple COLMAP instances with independent paths
- Different camera models per instance
- Each reconstruction loads into its own collection

<img src="/images/colmap_panel_transformation_and_dataset.png" alt="COLMAP Transformation Panel" style="max-width: 100%; height: auto;">

### Brush Panel
- Multiple splat instances with independent parameters
- Prepare datasets for each COLMAP instance
- No file conflicts between training sessions

<img src="/images/brush_panel_training_parameters.png" alt="Brush Training Parameters" style="max-width: 100%; height: auto;">

## Technical Details

### Camera Interpolation
- Quaternion-based rotation interpolation
- Automatic hemisphere selection prevents 180° flips
- Smooth motion through camera positions

### File Organization
```
project_folder/
├── video1_frames/
├── video1_colmap_output/
├── video1_brush_dataset/
├── video2_frames/
├── video2_colmap_output/
└── video2_brush_dataset/
```

### Scene Organization
- COLMAP models load into separate collections
- Animated cameras created per instance

## Installation

Download from [GitHub releases](https://github.com/kyjohnso/skysplat_blender/releases/latest).

Blender 5.0 addon paths:
- **macOS**: `~/Library/Application Support/Blender/5.0/scripts/addons/`
- **Linux**: `~/.config/blender/5.0/scripts/addons/`
- **Windows**: `%APPDATA%\Blender Foundation\Blender\5.0\scripts\addons\`

## Usage

### Multi-Instance
1. Open SkySplat panel (N key → SkySplat tab)
2. Click **"+"** to add video instances
3. Each instance manages its own paths

### Camera Animation
1. Load COLMAP model
2. Click **"Create Camera Animation"** in Camera Animation section
3. Animated camera is created with keyframes

## Resources

- [Documentation](https://skysplat.org/docs/)
- [Installation Guide](https://skysplat.org/docs/skysplat-blender-installation/)
- [GitHub Repository](https://github.com/kyjohnso/skysplat_blender)
- [Issues](https://github.com/kyjohnso/skysplat_blender/issues)

## Credits

- [Blender](https://www.blender.org/)
- [COLMAP](https://colmap.github.io/)
- [Brush](https://github.com/ArthurBrussee/brush) by Arthur Brussee
