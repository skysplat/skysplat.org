+++
title = "SkySplat 0.4.0: Multi-Instance Workflow & Blender 5.0 Support"
date = 2025-11-27
description = "Multi-instance support, animated camera creation from COLMAP, and Blender 5.0 compatibility"
[taxonomies]
tags = ["release", "blender", "colmap", "gaussian-splatting", "multi-instance"]
+++

[SkySplat 0.4.0](https://github.com/kyjohnso/skysplat_blender/releases/tag/v0.4.0) is now available! New features include:
* Blender 5.0 Support
* Multi-instance implementation for videos, COLMAP models, and brush runs (more on this below)
* A camera animation button that syncs a camera position, rotation, and keyframes with the COLMAP model cameras

<!-- more -->

## What's New

### Multi-Instance Workflow

Each panel (Video, COLMAP, and Brush) now supports multiple independent instances with automatic path management. This was driven by trying to create a single blend file or scene that has multiple skysplat 3dgs instances. In previous versions, there were significant file collisions and the first models would be over written. In 0.4.0 we implemented instancing for all three panels, now when models, objects videos etc are added to the scene, there are no collisions but you still have complete control over your directories and naming conventions.

<img src="/images/video_panel_multi_instance.png" alt="Video Panel Multi-Instance" style="max-width: 40%; height: auto;">

### Animated Camera Creation

During the process of creating the SkySplat heroshot for Blender Con, I found myself spending hours copying the transforms from a COLMAP camera to my scene camera, and then setting a key frame at the frame number that matched up with the camera. This allows me to blend between the two different clips (real and rendered 3dgs) to create the effect I wanted. 

<iframe width="100%" height="400" src="https://www.youtube.com/embed/39VUruI8R1A?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="max-width: 100%;"></iframe>

Since this is a common work flow with 3dgs and skysplat, for the 0.4.0 release I put a button on the COLMAP panel that does this automatically. During the development of this I also gained a better appreciation for quaternion based rotations. Using Euler angles can create gimbal lock and phase unwrapping issues especially when the camera goes through several cycles of rotation (like ideal videos for 3dgs). The result of this work is a simple 1-click creation of an animated camera that follows the individual cameras of your COLMAP model. 

<img src="/images/animated_camera_perspective.gif" alt="Camera Animation from COLMAP" style="max-width: 100%; height: auto;">

*Animated Camera Feature*

### Blender 5.0 Compatibility

With the release of Blender 5.0 and the massive updates to the video sequencer, we had to tweak skysplat a bit. The main difference is the choice of a scene for the video sequencer because it doesn't assume the default scene. This change has also been tested with Blender 4.5 and should be backward compatible with all versions newer than 4.0.

## Other Bug and Issue Fixes

Thanks to those who posted issues on the github repo - it is truly appreciated. The macOS binary for brush was not a git lfs and was just in the repo as a normal file. I fixed this in the 0.4.0 release and also took the chance to update how we think of binaries. Now there is a new github action CI/CD file that with a new version tag, will create a new release artifact [SkySplat/latest](https://github.com/kyjohnso/skysplat_blender/releases/latest) that has 4 different zip files:

<img src="/images/release_artifacts.png" alt="Release Artifacts" style="max-width: 40%; height: auto;">

The top 4 zip files are directly installable in Blender via drag and drop or Preferences->Addons - the first one has no included binaries, and then there are 3 that include a single binary for each supported OS. Of course you still have the option of selecting a different Brush binary, building from source or downloading the official builds at [Brush](https://github.com/ArthurBrussee/brush/releases/latest).

## What's Next 

In future releases, I really want to take a look at better integration of Rust code with Blender Addons. I met the guys from [Algebraic](https://github.com/Algebraic-UG/squishy_volumes) at BlenderCon and they have done some really nice work to integrate Rust code with Blender Addons. For SkySplat, I think a tighter integration of Brush with Blender and maybe even implementations of Structure from Motion or COLMAP free 3DGS would be pretty compelling. 

There was also a release of a new way to import 3DGS into Blender [SplatForge](https://splatforge.cloud/). It is a paid addon but it is really well implemented and after using SkySplat to train the 3dgs, it allowed me to import this 3dgs of the William Rex at the Rijksmuseum (note I did not use a drone for this!). It renders in realtime in the view port and can be used to create animations as well. It would be great to integrate this capability into SkySplat in future releases.

<img src="/images/William_Rex_3dgs.gif" alt="William Rex" style="max-width: 100%; height: auto;">

And finally, as I mentioned in my Blender Lightning Talk, I am tinkering with how to do 3dgs training entirely in Blender. I am not sure yet if this will be part of SkySplat blender addon or if it will be its own thing; but rest assured it will be open source and free for people to use, change, implement, improve on, and always free to create cool art - 

Happy Splatting Everyone!

