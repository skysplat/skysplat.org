+++
title = "SkySplat Blender Installation"
description = "Complete installation guide for the SkySplat Blender addon, COLMAP, and Brush"
weight = 1
[taxonomies]
tags = ["installation", "blender", "setup", "colmap", "brush"]
+++

This guide will walk you through installing the SkySplat Blender addon and all required dependencies for 3D Gaussian Splatting support.

<!-- more -->

<div class="cta-box">
  <h3>⭐ Support the Project</h3>
  <p>If you find SkySplat useful, please star the repository on GitHub! It helps others discover the project.</p>
  <a href="https://github.com/kyjohnso/skysplat_blender" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
    ⭐ Star on GitHub
  </a>
  <div style="margin-top: 1rem;">
    <a href="https://github.com/kyjohnso/skysplat_blender/stargazers" target="_blank" rel="noopener noreferrer">
      <img src="https://img.shields.io/github/stars/kyjohnso/skysplat_blender?style=social" alt="GitHub stars">
    </a>
  </div>
</div>

## Requirements

- **Blender 5.0.0 or newer** (also compatible with Blender 4.0+)
- COLMAP (for reconstruction features)
- [Brush App](https://github.com/ArthurBrussee/brush) from Arthur Brussee

**Note**: The [Brush App](https://github.com/ArthurBrussee/brush) is bundled with the addon.

**New in v0.4.0:**
- Blender 5.0 compatibility
- Multi-instance workflow
- Animated camera creation

## Installation

### 1. Download and Install SkySplat

1. Download the latest release zip file from [SkySplat Releases](https://github.com/kyjohnso/skysplat_blender/releases/latest)
   
   **OR**
   
   Download the latest development version via the GitHub Download ZIP link under the code button at [skysplat_blender](https://github.com/kyjohnso/skysplat_blender)

   <img src="/images/download_zip.png" alt="Download ZIP" style="max-width: 60%; height: auto;">

2. Open Blender and navigate to Edit → Preferences → Add-ons
3. Click "Install..." and select the downloaded ZIP file
4. Enable the addon by checking the box next to "3D View: SkySplat: 3DGS Blender Toolkit"

### 2. Install COLMAP

[COLMAP](https://colmap.github.io/) is required for the Structure from Motion reconstruction features. Choose the installation method for your operating system:

#### macOS (Recommended: Homebrew)
```bash
brew install colmap
```
The executable will be installed to `/opt/homebrew/bin/colmap` (Apple Silicon) or `/usr/local/bin/colmap` (Intel).

#### Linux (Package Manager)
**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install colmap
```

**Fedora/RHEL:**
```bash
sudo dnf install colmap
```

**Arch Linux:**
```bash
sudo pacman -S colmap
```

The executable will typically be installed to `/usr/bin/colmap`.

#### Windows (Pre-compiled Binary)
1. Download the latest Windows release from [COLMAP GitHub Releases](https://github.com/colmap/colmap/releases)
2. Extract the ZIP file to a location like `C:\Program Files\COLMAP\`
3. The executable will be at `C:\Program Files\COLMAP\bin\colmap.exe`
4. Optionally, add the `bin` directory to your system PATH for easier access

**Note:** For SkySplat to work properly, you'll need to know the path to the COLMAP executable. The addon will attempt to auto-detect common installation paths, but you can manually specify the path in the COLMAP panel if needed.

### 3. Install Brush app

The brush app from [brush app](https://github.com/ArthurBrussee/brush#) is needed for the 3DGS training of the scene. The brush binaries for all mac/linux/windows are included with this addon, however, when Blender installs an addon via a zip file, it changes the permissions on the extracted files (this is for everyone's benefit), and these cannot be executed by default.

You have 3 options for running brush from this addon:

#### Option 1: Fix Permissions on Bundled Binaries (Recommended)

After installing the SkySplat addon, you'll need to make the bundled brush binaries executable:

**macOS/Linux:**
1. Open Terminal
2. Navigate to your Blender addons directory:
   - **macOS (Blender 5.0)**: `~/Library/Application Support/Blender/5.0/scripts/addons/skysplat_blender/binaries/`
   - **macOS (Blender 4.0)**: `~/Library/Application Support/Blender/4.0/scripts/addons/skysplat_blender/binaries/`
   - **Linux (Blender 5.0)**: `~/.config/blender/5.0/scripts/addons/skysplat_blender/binaries/`
   - **Linux (Blender 4.0)**: `~/.config/blender/4.0/scripts/addons/skysplat_blender/binaries/`
3. Make the binary executable:
   ```bash
   # For macOS
   chmod +x brush_app_mac
   ```


   ```bash
   # For Linux
   chmod +x brush_app_linux
   ```

**Windows:**
Windows executables should work without permission changes, but if you encounter issues, right-click on `brush_app_windows.exe` → Properties → Security → and ensure your user has "Full control" permissions.

#### Option 2: Download Pre-compiled Binaries

If you prefer to download the binaries separately, you can get them directly from the Brush repository releases:

1. **Windows**: Download [brush_app_windows.exe](https://github.com/ArthurBrussee/brush/releases/latest) from Brush Releases
2. **macOS**: Download [brush_app_macos](https://github.com/ArthurBrussee/brush/releases/latest) from Brush Releases

  On macos, if you get an error something to the effect of "Apple could not verify "brush_app_mac" you may need to remove the quarantine from the downloaded file. This applies to downloads from the brush repo as well as the skysplat repo.

   ```bash
   xattr -d com.apple.quarantine /path/to/brush_app_mac
   ```
3. **Linux**: Download [brush_app_linux](https://github.com/ArthurBrussee/brush/releases/latest) from Brush Releases

You can also get the compiled binaries in the skysplat_blender repo
1. **Windows**: [brush_app_windows.exe](https://github.com/kyjohnso/skysplat_blender/blob/main/binaries/brush_app_windows.exe)
2. **macOS (Apple silicon)**: [brush_app_mac](https://github.com/kyjohnso/skysplat_blender/blob/main/binaries/brush_app_mac)
3. **linux**: [brush_app_linux](https://github.com/kyjohnso/skysplat_blender/blob/main/binaries/brush_app_linux)

**Important**: You will need to know the full path to where you downloaded these binaries, as you'll need to specify this path in the SkySplat 3DGS panel's "Brush Executable" field.

#### Option 3: Clone and Build Brush from Source

For the most up-to-date version or if you want to modify the source code:

1. **Install Rust** (if not already installed):
   ```bash
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   source ~/.cargo/env
   ```

2. **Clone and build Brush**:
   ```bash
   git clone https://github.com/ArthurBrussee/brush.git
   cd brush
   cargo build --release
   ```

3. **Locate the executable**:
   - **Windows**: `target/release/brush_app.exe`
   - **macOS/Linux**: `target/release/brush_app`

**Important**: You will need to know the full path to the compiled executable (e.g., `/home/username/brush/target/release/brush_app`) as you'll need to specify this path in the SkySplat 3DGS panel's "Brush Executable" field.

**Note**: The SkySplat addon will automatically attempt to detect the bundled binaries first, then fall back to common build locations like `~/projects/brush/target/release/brush_app`. If none are found, you can manually specify the path in the 3DGS panel.

---

## Running Blender from Command Line

To monitor the detailed output of COLMAP processing, Brush training, and other operations, it's recommended to run Blender from the command line. This allows you to see real-time console output and debug information that isn't visible in the Blender GUI.

### Command Line Usage

**macOS:**
```bash
/Applications/Blender.app/Contents/MacOS/Blender
```

**Linux:**
```bash
blender
```

**Windows:**
```cmd
"C:\Program Files\Blender Foundation\Blender 5.0\blender.exe"
```
Or for Blender 4.0:
```cmd
"C:\Program Files\Blender Foundation\Blender 4.0\blender.exe"
```

### Benefits of CLI Usage

- **COLMAP Output**: See detailed reconstruction progress, feature detection statistics, and any error messages
- **Brush Training**: Monitor training iterations, loss values, and performance metrics in real-time
- **Debug Information**: View Python error traces and addon-specific logging
- **Process Monitoring**: Track subprocess execution and completion status

When running operations like "Run COLMAP" or "Run Brush Training", the detailed output will appear in the terminal where you launched Blender, making it much easier to troubleshoot issues or monitor progress.

## Verification

After installation, verify the addon is working:

1. **Check the panel**
   - Open the sidebar in the 3D View (press N)
   - Look for the "SkySplat" tab

2. **Test the tools**
   - Try loading a video file in the Video Loader panel
   - Verify COLMAP path is detected in the COLMAP panel

## Troubleshooting

### Common Issues

**Addon doesn't appear after installation**
- Ensure you're using Blender 5.0 or Blender 4.0+
- Check that the addon is enabled in Preferences
- Restart Blender

**COLMAP not found**
- Verify COLMAP is installed correctly
- Manually set the COLMAP executable path in the COLMAP panel
- Check the console for error messages

**Brush executable permission denied (macOS/Linux)**
- Follow Option 1 instructions to fix permissions with `chmod +x`
- Or download binaries separately and specify the path

**Performance issues**
- Ensure your GPU supports the required features
- Try reducing image resolution in training parameters
- Monitor system resources during processing

### Getting Help

- [Report issues on GitHub](https://github.com/kyjohnso/skysplat_blender/issues)
- [Join community discussions](https://github.com/kyjohnso/skysplat_blender/discussions)
- Check the [SkySplat website](https://skysplat.org) for updates

## Next Steps

- [Complete Workflow Walkthrough](/docs/skysplat-blender-walkthrough/)
- Explore the example videos and datasets
- Join the community and share your results!