# Progressive Image Loading Implementation

This document describes the progressive image loading system implemented for the SkySplat website.

## Overview

Progressive image loading improves page load performance by:
1. Loading small placeholder images first (blurred)
2. Lazy loading full-resolution images as they come into view
3. Smooth transitions between placeholder and full images

## Hero Images Selected

The following images were chosen as hero shots and resized:

### Primary Hero Images
- **sky_island_1.png** - Dramatic 3D scene (homepage hero)
- **lighthouse_rendered1.png** - 3D rendered lighthouse scene
- **lighthouse_rendered2.png** - Alternative lighthouse view
- **pumproom_7000.png** - Interior architectural shot

### Secondary Hero Images
- **sky_island_2.png** - Additional sky island view
- **sky_island_3.png** - Third sky island perspective
- **silo_and_splat.png** - Technical/artistic combination
- **pointcloud_portrait.png** - Technical visualization (article hero)

### Branding
- **puente_nuevo_bridge.png** - Architectural scene
- **skysplat_blender_logo.png** - Logo with variations

## Image Sizes

Each hero image has three versions:
- **Original**: Full resolution (varies by image)
- **Medium**: 800px width (for desktop/tablet viewing)
- **Small**: 400px width (placeholder, heavily compressed)

## File Structure

```
static/
├── css/
│   └── progressive-images.css    # Styles for progressive loading
├── js/
│   └── progressive-images.js     # JavaScript for image loading
└── images/
    ├── sky_island_1.png          # Original
    ├── sky_island_1_medium.png   # 800px version
    ├── sky_island_1_small.png    # 400px placeholder
    └── ... (other images)

templates/
└── shortcodes/
    └── progressive_image.html    # Reusable shortcode
```

## Usage

### Method 1: Direct HTML (in Markdown)

```html
<div class="hero-image-container">
  <div class="progressive-image-wrapper">
    <img class="img-small" src="/images/sky_island_1_small.png" alt="Description" />
    <img class="img-large" data-src="/images/sky_island_1_medium.png" alt="Description" />
  </div>
</div>
```

### Method 2: With Lazy Loading

Add `data-lazy="true"` to load images only when they enter the viewport:

```html
<div class="hero-image-container">
  <div class="progressive-image-wrapper" data-lazy="true">
    <img class="img-small" src="/images/lighthouse_rendered1_small.png" alt="Description" />
    <img class="img-large" data-src="/images/lighthouse_rendered1_medium.png" alt="Description" />
  </div>
</div>
```

### Method 3: Using Shortcode (Future)

```
{{ progressive_image(src="sky_island_1.png", alt="Sky Island Scene", lazy=true) }}
```

## CSS Classes

- `.progressive-image-wrapper` - Container for the progressive image
- `.img-small` - Placeholder image (blurred)
- `.img-large` - Full resolution image
- `.hero-image-container` - Wrapper for hero images (adds styling)
- `.article-hero` - Wrapper for article hero images (different aspect ratio)

## JavaScript Behavior

The `progressive-images.js` script:
1. Detects all `.progressive-image-wrapper` elements
2. Loads the full image specified in `data-src`
3. Fades in the full image when loaded
4. Fades out the placeholder
5. Supports lazy loading with Intersection Observer API

## Creating New Resized Images

To add new hero images, run:

```bash
cd static/images

# For a single image
sips -Z 800 original.png --out original_medium.png
sips -Z 400 original.png --out original_small.png

# Or use the provided script
./resize_images.sh
```

## Performance Benefits

- **Faster Initial Load**: Small placeholders load quickly
- **Better UX**: Users see content immediately (blurred)
- **Reduced Bandwidth**: Only loads full images when needed
- **SEO Friendly**: Images have proper alt text and load progressively

## Browser Support

- Modern browsers: Full support with smooth transitions
- Older browsers: Falls back to loading full images directly
- No JavaScript: Small images display (graceful degradation)

## Strategic Placement

### Homepage (`content/_index.md`)
1. **Above the fold**: `sky_island_1` - Immediate load, no lazy loading
2. **Mid-page**: `lighthouse_rendered1` - Lazy loaded
3. **Bottom section**: `pumproom_7000` - Lazy loaded

### Articles
- **Article hero**: `pointcloud_portrait` - Loads immediately for visual impact

### Future Enhancements
- Add more hero images to blog posts
- Implement in documentation pages
- Add to gallery/showcase sections

## Maintenance

When adding new images:
1. Choose high-quality, visually striking images
2. Run the resize script to create medium/small versions
3. Add to appropriate pages with progressive loading markup
4. Test on various devices and connection speeds

## Testing

To test the implementation:
1. Open browser DevTools Network tab
2. Throttle connection to "Slow 3G"
3. Observe placeholder images loading first
4. Watch full images fade in smoothly
5. Scroll to test lazy loading behavior