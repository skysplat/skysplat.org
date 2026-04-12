+++
title = "Updates on SkySplat"
date = 2026-04-12
[taxonomies]
categories = ["update", "blender", "3dgs"]
tags = ["skysplat", "blender", "gaussian-splatting"]
[extra]
author = "SkySplat Team"
+++

This is a quick blog post to update everyone on the current state and future directions of SkySplat. Since the BlenderCon tutorial there has been a ton of activity and interest in the project. We've been getting great bug reports, feature requests, and even a tutorial from a popular Blender youtuber. On the development side, I'm looking ahead to version 0.5 with some exciting features like multi-camera support and smarter frame selection. Read on for the details!

<!-- more -->

## Current State

Since the [SkySpat Tutorial at BlenderCon](https://www.youtube.com/watch?v=Q5FISs0gkiE) there has been a bunch of activity and interest in SkySplat. The community seems particularly interested in how it brings together different disparate pieces of software into one interface or launcher (Blender). A popular blender youtuber [Nicko16](https://www.youtube.com/@Nicko16) even created a [video tutorial](https://youtu.be/iO48fxcsAys?si=NcWsvgeMCdirQyfM) using SkySplat that shows a complete walkthrough.

<img src="/images/Nicko16_tutorial_splash_screen.png" alt="Nicko16 Tutorial" style="max-width: 100%; height: auto;">

Thanks also to all of you for submitting bug reports. There was a big change to how Blender 5.0 handles video editing scenes and [danielraziel](https://github.com/danielraziel) discovered and reported this bug. I am also getting quite a few issues with the differences in COLMAP versions but constantly trying to stay on top of these. Also GLOMAP was merged into COLMAP and so I plan to include this algorithm in future versions of SkySplat.

As more and more creators find SkySplat useful we will likely get more and more bug reports and issues (and feature requests!). It would be amazing if people want to take on testing of fixes or even submitting pull requests for these bugs. I can't pay anything (yet) but I will heap as much praise on you as I can in the videos, blog posts, and presentations, and hopefully there will be much more of these in 2026.

## Future Work

I introduced multiple video support in version 0.4.0 and this was primarily targeted at cleaning up naming conflicts with multiple difference splat scenes in a single blender file. One of the features I want to explore in version 0.5 is having multiple videos of the same scene but with different cameras, different aspect ratios, different videos. We recently returned from some overseas travel and I have a bunch of really interesting video (but from different cameras) that I want to combine in a single splat.

<img src="/images/dubrovnik_frame_1.png" alt="dubrovnik 1" style="max-width: 100%; height: auto;">
<img src="/images/dubrovnik_frame_2.JPG" alt="dubrovnik 2" style="max-width: 100%; height: auto;">

As part of this, I want take another look at the SRT file that accompanies DJI drone video, and the embedded Gopro GPS data (along with alot of other action cams), to help manage different videos and frames in the 3d viewport before even the COLMAP step. I also want to take a look at a smarter frame selection; this might be something like auto detection of differences between frames or information content in a video (possibly using the features of MP4 encoding!) to extract "high information content" frames.

I have started a discussion at [SkySplat 0.5 features](https://github.com/kyjohnso/skysplat_blender/discussions/42) so if you have feature requests or want to comment on any of these features above please go there and comment!

Finally, I will likely submit a BlenderCon 2026 talk about these updates to SkySplat but presented as a usecase of Blender for general purpose 3D data management.

## Thank you!

Thanks to everyone who has commented on Reddit or filed issues on [github](https://github.com/kyjohnso/skysplat_blender/issues). The GH Issue Tracker really is the best way to communicate with me if you are having trouble with any aspect of SkySplat. Keep em' coming! Finally, if you have found SkySplat useful for anything you are creating, it would be great if you include links to the [github project](https://github.com/kyjohnso/skysplat_blender), or include a tag on [reddit](https://www.reddit.com/user/kyjohnso/) as this really increases the project visibility and "many eyes make for shallow bugs [and better features]"