+++
title = "An Introduction to 3D Gaussian Splatting Fundamentals"
date = 2025-09-30
[taxonomies]
tags = ["fundamentals", "mathematics", "3dgs", "theory"]
[extra]
author = "kyjohnso"
read_time = 12
+++

A comprehensive introduction to the mathematical foundations and core concepts behind 3D Gaussian Splatting technology.

<!-- more -->

<div class="article-hero">
  <div class="progressive-image-wrapper">
    <img class="img-small" src="/images/pointcloud_portrait_small.png" alt="3D Gaussian Splatting Point Cloud Visualization" />
    <img class="img-large" data-src="/images/pointcloud_portrait_medium.png" alt="3D Gaussian Splatting Point Cloud Visualization" />
  </div>
</div>

3D Gaussian Splatting (3DGS) represents a paradigm shift in how we approach real-time rendering of photorealistic 3D scenes. This article explores the mathematical foundations and core concepts that make this technology so powerful.

## What Makes 3DGS Different?

The idea of 3DGS is actually not new, though it has gained in popularity in the last 2 years. 

### Key Advantages

- **Real-time Performance**: Renders at interactive frame rates
- **Photorealistic Quality**: Maintains high visual fidelity
- **View-dependent Effects**: Naturally handles reflections and lighting
- **Efficient Storage**: Compact representation of complex scenes

## Mathematical Foundation

### 3D Gaussian Functions

At its core, each Gaussian splat is defined by:

<div class="math-block">
\[
G(\mathbf{x}) = \exp\left(-\frac{1}{2} (\mathbf{x} - \boldsymbol{\mu})^T \boldsymbol{\Sigma}^{-1} (\mathbf{x} - \boldsymbol{\mu})\right)
\]
</div>

<!-- IMAGE PLACEHOLDER: gaussian_function_3d.png
Description: A 3D visualization showing a single Gaussian splat in 3D space. The image should display:
- A semi-transparent ellipsoid representing the Gaussian distribution
- The center point μ (mu) clearly marked with a dot or small sphere
- Coordinate axes (X, Y, Z) for spatial reference
- Color gradient from opaque at the center to transparent at the edges, showing the exponential falloff
- Annotations pointing to the center (μ) and showing the spread in different directions
- A cross-section view showing the bell curve profile
- Grid or reference plane to show 3D positioning
Style: Technical diagram with clean lines, using blue/cyan colors for the Gaussian, with mathematical annotations
-->

Where:
- \\(\boldsymbol{\mu}\\) is the 3D position (mean)
- \\(\boldsymbol{\Sigma}\\) is the 3×3 covariance matrix
- \\(\mathbf{x}\\) is any point in 3D space

### Covariance Matrix Decomposition

The covariance matrix \\(\boldsymbol{\Sigma}\\) is decomposed into:

<div class="math-block">
\[
\boldsymbol{\Sigma} = \mathbf{R} \mathbf{S} \mathbf{S}^T \mathbf{R}^T
\]
</div>

<!-- IMAGE PLACEHOLDER: covariance_decomposition.png
Description: A multi-panel diagram showing the covariance matrix decomposition process:
Panel 1: A sphere (identity covariance) labeled "Base Gaussian"
Panel 2: The sphere scaled along axes (S matrix applied) showing an ellipsoid with different axis lengths, with arrows indicating scale factors sx, sy, sz
Panel 3: The scaled ellipsoid rotated (R matrix applied) showing orientation change, with rotation arrows and angle indicators
Panel 4: Final positioned Gaussian showing all transformations combined
- Each panel should have the corresponding matrix notation (I, S, R, RSS^T R^T)
- Use different colors for each axis (red=X, green=Y, blue=Z)
- Show transformation arrows between panels
- Include small 3×3 matrix representations next to each panel
Style: Educational diagram with step-by-step transformation visualization, clean technical illustration
-->

Where:
- \\(\mathbf{R}\\) is a rotation matrix (3×3)
- \\(\mathbf{S}\\) is a scaling matrix (3×3 diagonal)

This decomposition allows independent control over:
- **Position** (\\(\boldsymbol{\mu}\\)): Where the Gaussian is located
- **Rotation** (\\(\mathbf{R}\\)): How it's oriented in space
- **Scale** (\\(\mathbf{S}\\)): Its size along each axis

### Spherical Harmonics

Color information is encoded using spherical harmonics (SH), allowing view-dependent appearance:

<div class="math-block">
\[
C(\mathbf{d}) = \sum_{l=0}^{L} \sum_{m=-l}^{l} c_l^m \cdot Y_l^m(\mathbf{d})
\]
</div>

<!-- IMAGE PLACEHOLDER: spherical_harmonics_visualization.png
Description: A comprehensive visualization of spherical harmonics for view-dependent color:
- Central sphere showing a Gaussian splat with varying colors based on viewing angle
- Multiple viewing directions shown as arrows/camera icons around the sphere (top, bottom, left, right, front, back)
- Each viewing direction shows the resulting color appearance
- Inset showing the first few spherical harmonic basis functions (Y_0^0, Y_1^-1, Y_1^0, Y_1^1) as colored spheres
- Color gradient legend showing how SH coefficients blend to create view-dependent appearance
- Example showing a reflective/specular surface where color changes dramatically with view angle
- Annotations showing the viewing direction vector d and resulting color C(d)
Style: Technical illustration with multiple viewpoints, using a color-coded system to show view dependency, semi-transparent overlays
-->

Where:
- \\(\mathbf{d}\\) is the viewing direction
- \\(c_l^m\\) are the SH coefficients
- \\(Y_l^m\\) are the spherical harmonic basis functions

## Rendering Pipeline

### 1. Projection to 2D

Each 3D Gaussian is projected to screen space using the camera parameters:

<div class="math-block">
\[
\boldsymbol{\Sigma}' = \mathbf{J} \mathbf{W} \boldsymbol{\Sigma} \mathbf{W}^T \mathbf{J}^T
\]
</div>

<!-- IMAGE PLACEHOLDER: gaussian_projection_2d.png
Description: A side-by-side comparison showing 3D to 2D projection:
Left side (3D World Space):
- A 3D Gaussian ellipsoid in world coordinates
- Camera frustum showing the viewing volume
- World coordinate axes
- The covariance matrix Σ represented as the 3D ellipsoid shape
Right side (2D Screen Space):
- The projected 2D Gaussian ellipse on the screen/image plane
- Screen coordinate system (pixel coordinates)
- The projected covariance Σ' shown as a 2D ellipse
- Projection lines connecting the 3D Gaussian to its 2D projection
Center:
- Transformation matrices W (world-to-camera) and J (Jacobian) shown as matrix notation
- Arrows indicating the transformation flow
- Multiple Gaussians at different depths to show perspective effects
Style: Technical diagram with clear 3D-to-2D mapping, using perspective projection lines, dual-panel layout
-->

Where:
- \\(\mathbf{J}\\) is the Jacobian of the projection
- \\(\mathbf{W}\\) is the world-to-camera transformation

### 2. Alpha Blending

Gaussians are sorted by depth and blended using:

<div class="math-block">
\[
C = \sum_{i=1}^{N} c_i \cdot \alpha_i \cdot \prod_{j=1}^{i-1} (1 - \alpha_j)
\]
</div>

<!-- IMAGE PLACEHOLDER: alpha_blending_process.png
Description: A detailed visualization of the alpha blending process:
Top section: Depth-sorted Gaussians
- 4-5 overlapping Gaussian splats shown in depth order (back to front)
- Each labeled with index i (i=1, i=2, i=3, etc.)
- Depth values shown (z1 > z2 > z3...)
- Each Gaussian has a color (c_i) and alpha (α_i) value displayed

Middle section: Blending calculation
- Step-by-step visualization showing the accumulation process
- For each Gaussian, show: c_i × α_i × ∏(1-α_j)
- Visual representation of how each layer contributes to final color
- Transparency/opacity bars showing the (1-α) product term

Bottom section: Final result
- The final blended pixel color C
- Comparison showing: individual Gaussians → blending process → final result
- Color mixing visualization with contribution percentages

Style: Educational diagram with layered transparency effects, color-coded Gaussians, mathematical notation overlays, flow arrows showing the blending sequence
-->

Where:
- \\(c_i\\) is the color of Gaussian i
- \\(\alpha_i\\) is its alpha value
- The product term handles occlusion

### 3. Optimization

The system is trained end-to-end using gradient descent on:

<div class="math-block">
\[
\mathcal{L} = \mathcal{L}_{\text{color}} + \lambda_{\text{ssim}} \cdot \mathcal{L}_{\text{ssim}}
\]
</div>

<!-- IMAGE PLACEHOLDER: optimization_loss_visualization.png
Description: A comprehensive visualization of the optimization process:
Top row: Training comparison
- Left: Ground truth image (reference photograph)
- Middle: Current rendered output from Gaussians
- Right: Difference/error map highlighting discrepancies

Middle section: Loss components
- Panel 1: L1 color loss visualization (pixel-wise color differences shown as heatmap)
- Panel 2: SSIM loss visualization (structural similarity map showing texture/pattern matching)
- Combined loss graph showing how both terms contribute

Bottom section: Optimization progress
- Graph showing loss decreasing over iterations
- Multiple rendered outputs at different training stages (iteration 100, 1000, 5000, 10000)
- Visual improvement progression from blurry to sharp
- Gaussian count evolution (showing densification/pruning)

Annotations:
- Mathematical notation for each loss term
- Lambda weight indicator showing the balance between losses
- Gradient flow arrows indicating parameter updates

Style: Multi-panel technical diagram with before/after comparisons, heatmaps for loss visualization, training progress graphs, clean academic paper style
-->

Where:
- \\(\mathcal{L}_{\text{color}}\\) is the L1 color loss
- \\(\mathcal{L}_{\text{ssim}}\\) is the structural similarity loss
- \\(\lambda_{\text{ssim}}\\) balances the two terms

## Implementation Considerations

### Memory Management

Each Gaussian requires storage for:
- Position: 3 floats (12 bytes)
- Rotation: 4 floats (16 bytes, quaternion)
- Scale: 3 floats (12 bytes)
- Opacity: 1 float (4 bytes)
- SH coefficients: 48 floats (192 bytes, degree 3)

Total: ~236 bytes per Gaussian

### GPU Optimization

Efficient rendering requires:
- **Tile-based rendering**: Divide screen into tiles
- **Frustum culling**: Skip invisible Gaussians
- **Level-of-detail**: Reduce complexity at distance
- **Memory coalescing**: Optimize GPU memory access

## Practical Applications

### Scene Reconstruction

3DGS excels at reconstructing scenes from:
- Multi-view photographs
- Video sequences
- LIDAR point clouds
- Photogrammetry data

### Real-time Rendering

Applications include:
- **Virtual Reality**: Immersive environments
- **Gaming**: Photorealistic backgrounds
- **Architecture**: Walkthrough visualizations
- **Film**: Digital set extensions

## Limitations and Challenges

### Current Limitations

- **Dynamic scenes**: Limited support for moving objects
- **Transparency**: Complex transparent materials are challenging
- **Editing**: Difficult to modify reconstructed scenes
- **Storage**: Large datasets require significant memory

### Active Research Areas

- **Temporal consistency**: Handling video sequences
- **Semantic understanding**: Object-level editing
- **Compression**: Reducing storage requirements
- **Hybrid approaches**: Combining with traditional rendering

## Getting Started with 3DGS

### Tools and Software

- **Original Implementation**: [3D Gaussian Splatting](https://github.com/graphdeco-inria/gaussian-splatting)
- **SkySplat Blender**: Our Blender integration
- **Viewers**: Web-based and standalone viewers
- **Conversion Tools**: Format converters and utilities

### Learning Resources

- [Official Paper](https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/)
- Video Tutorials
- Community Examples
- Research Papers

## Conclusion

3D Gaussian Splatting represents a fundamental shift in 3D rendering technology. By understanding its mathematical foundations and implementation details, developers and artists can better leverage this powerful technique for their projects.

The combination of real-time performance and photorealistic quality makes 3DGS particularly exciting for interactive applications, while its efficient representation opens new possibilities for content creation and distribution.

As the technology continues to evolve, we can expect to see even more innovative applications and improvements in the coming years.

---

*Want to dive deeper? Try the [SkySplat Blender addon](/docs/skysplat-blender-installation/) to start experimenting with 3DGS today.*