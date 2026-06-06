+++
title = "The 3DGS Training Pipeline — A Native Blender Reference Map"
date = 2026-06-06
description = "An end-to-end reference map of the 3D Gaussian Splatting pipeline — from Structure-from-Motion through the optimization loop — annotated for which stages fall out of stock Blender geometry nodes and which remain irreducible custom kernels."
[taxonomies]
tags = ["3dgs", "blender", "geometry-nodes", "sfm", "pipeline", "reference"]
[extra]
author = "kyjohnso"
read_time = 10
+++

A detailed, end-to-end reference map of the 3D Gaussian Splatting training pipeline — annotated for what could run natively inside Blender's geometry nodes versus what stays an irreducible custom kernel.

<!-- more -->

One of the open questions behind SkySplat is how much of the full reconstruction stack — Structure-from-Motion (SfM) all the way through 3DGS optimization — could live *natively* inside Blender. Blender's geometry nodes already give us loop orchestration, point-cloud representation, and closed-form vector math for free. The interesting question is where that stops: which stages are genuinely irreducible kernels (feature matching, the robust geometric solvers, the differentiable rasterizer) that have to be written as a custom node, and which are just connective tissue that stock nodes already cover.

This reference lays out the entire pipeline as a single annotated build map. Each stage is tinted by whether it falls out of stock geometry nodes (native) or is an irreducible custom kernel (the fork), and every stage carries a precise statement of its fundamental operation, the shape of the data flowing in and out, and where the loops are.

## What the reference covers

- **Stage 00 — Structure-from-Motion** as the upstream preprocess: feature extraction, descriptor matching, robust geometric solvers, and bundle adjustment, and why in practice you call COLMAP / GLOMAP (or feed-forward neural methods like DUSt3R / MASt3R, VGGSfM) rather than building it from nodes.
- **A bird's-eye schematic** of the trainer — setup vs. the per-iteration loop.
- **The setup stages (S0–S1)** that run once.
- **The training loop (×K ≈ 30k iterations)** — projection, differentiable rasterization, loss, backprop, and the clone / split / prune densification logic.
- **A data-shape ledger** tracking what shape the data is in at every hop.
- **The three loop scopes** that structure the whole optimization.

<div class="cta-box">
  <h3>Open the interactive reference</h3>
  <p>The full pipeline map is a standalone, richly-annotated document with math, schematics, and per-stage data-shape notes — best viewed full-screen.</p>
  <a href="/reference/3dgs-training-pipeline.html" class="btn btn-primary btn-large" target="_blank" rel="noopener">View the 3DGS Training Pipeline →</a>
</div>

This is intended as a working reference for anyone thinking about a native SfM + 3DGS implementation in Blender — a map of the terrain before building it.
