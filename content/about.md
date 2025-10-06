+++
title = "About SkySplat - 3D Gaussian Splatting for Blender & Drone Photogrammetry"
description = "Learn about SkySplat's mission to make 3D Gaussian Splatting (3DGS) accessible through Blender integration. Open-source tools for drone photogrammetry, COLMAP, and neural rendering."
+++

# About SkySplat: 3D Gaussian Splatting for Blender

SkySplat is an open-source initiative dedicated to making **3D Gaussian Splatting (3DGS)** technology accessible to artists, researchers, and developers worldwide. We started with a vision: bring drone-based video and aerial photogrammetry to 3DGS entirely within the Blender 3D viewport. Our core mission is to bridge the gap between cutting-edge Gaussian splatting research and practical creative tools for Blender users.

## What is 3D Gaussian Splatting (3DGS)?

3D Gaussian Splatting (3DGS) is a revolutionary neural rendering technique for real-time photorealistic 3D scene reconstruction. Unlike traditional polygon mesh rendering or NeRF (Neural Radiance Fields), 3DGS represents scenes as collections of 3D Gaussian primitives, enabling:

- **Real-time Rendering**: Photorealistic quality at 60+ FPS
- **Novel View Synthesis**: Generate new camera perspectives from sparse drone footage or photos
- **Efficient Workflow**: Seamless integration with COLMAP structure-from-motion
- **Blender Native**: Work directly in Blender's familiar 3D viewport
- **Drone Photogrammetry**: Ideal for processing aerial and ground-based captures
- **Compact Storage**: Efficient representation for streaming and distribution

## Our Projects

### SkySplat Blender Addon
Our flagship project is a comprehensive Blender addon that brings the complete 3D Gaussian Splatting workflow into Blender. Perfect for drone operators, 3D artists, and researchers working with photogrammetry and neural rendering. Features include:

- **Video Processing**: Load drone footage and extract frames for 3DGS training
- **COLMAP Integration**: Configure and run structure-from-motion directly in Blender
- **Point Cloud Editing**: Import, scale, rotate, and transform COLMAP reconstructions
- **Camera Management**: Visualize and adjust camera positions from photogrammetry
- **Brush Training**: Configure and run [Brush](https://github.com/ArthurBrussee/brush), a high-performance Rust-based 3DGS training engine
- **Real-time Preview**: View Gaussian splatting results in Blender's viewport

[View on GitHub](https://github.com/kyjohnso/skysplat_blender)

### Future Projects
We are actively *exploring* (not yet developing necessarily) these future projects to advanced the state of the art - 
- 3DGS support native to Blender - I gave a [talk about this at bcon25](https://youtu.be/gU8oR7vqfRg?si=5s5JSeQkmGtwRvwE&t=3637) and look forward to exploring this more 
- SkySplat CLI - I think there is huge potential for a CLI "shell" that provides smart interactions between all of the emerging 3DGS technologies

## Community

SkySplat is built by and for the community. We believe in:

- **Open Source** - All our tools are freely available under permissive licenses
- **Collaboration** - We welcome contributions from developers, artists, and researchers
- **Education** - Sharing knowledge through documentation, tutorials, and articles
- **Innovation** - Pushing the boundaries of what's possible with 3DGS technology

## Get Involved

There are many ways to contribute to the SkySplat ecosystem:

- **Code Contributions** - Help develop and improve our tools
- **Documentation** - Write guides, tutorials, and API documentation
- **Testing** - Report bugs and test new features
- **Community Support** - Help other users in discussions and forums
- **Content Creation** - Share your work and workflows with the community

## Contact

- **GitHub**: [github.com/kyjohnso](https://github.com/kyjohnso)
- **Issues**: [Report bugs or request features](https://github.com/kyjohnso/skysplat_blender/issues)
- **Discussions**: [Join community discussions](https://github.com/kyjohnso/skysplat_blender/discussions)

## Acknowledgments

SkySplat builds upon the groundbreaking research in 3D Gaussian Splatting. We're grateful to the research community and the original authors of the 3DGS papers for their innovative work.

Special thanks to:
- The Blender Foundation for creating an amazing open-source platform
- The 3DGS research community for their continued innovations
- Arthur Brussee for his Brush App
- All contributors and users who help make SkySplat better

<div class="hero-image-container">
  <div class="progressive-image-wrapper" data-lazy="true">
    <img class="img-small" src="/images/pumproom_7000_small.png" alt="3D Gaussian Splatting Interior Reconstruction" />
    <img class="img-large" data-src="/images/pumproom_7000_medium.png" alt="3D Gaussian Splatting Interior Reconstruction" />
  </div>
</div>

---

*SkySplat is an independent open-source project and is not affiliated with any commercial entity.*