# SkySplat.org

The official website for SkySplat - bringing 3D Gaussian Splatting to Blender and beyond.

## About

SkySplat.org serves as the central hub for the SkySplat ecosystem, featuring:

- **Blog Posts** - Latest updates, tutorials, and community content
- **Documentation** - Comprehensive guides for all SkySplat tools
- **Technical Articles** - In-depth analysis of 3DGS technology
- **Project Information** - Details about SkySplat Blender and related tools

## Quick Start

### Prerequisites

- [Zola](https://www.getzola.org/) 0.17.0 or higher
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/kyjohnso/skysplat.org.git
   cd skysplat.org
   ```

2. **Install Zola**
   
   Follow the [Zola installation guide](https://www.getzola.org/documentation/getting-started/installation/) for your platform:
   
   - **macOS**: `brew install zola`
   - **Linux**: Download from [releases](https://github.com/getzola/zola/releases)
   - **Windows**: `choco install zola` or `scoop install zola`

3. **Start the development server**
   ```bash
   zola serve
   ```

4. **View the site**
   Open your browser to `http://127.0.0.1:1111`

### Building for Production

```bash
zola build
```

The built site will be in the `public` directory.

## Site Structure

```
├── config.toml          # Zola configuration
├── content/             # All content files
│   ├── _index.md        # Homepage
│   ├── about.md         # About page
│   ├── blog/            # Blog posts
│   │   ├── _index.md
│   │   └── *.md
│   ├── docs/            # Documentation pages
│   │   ├── _index.md
│   │   └── *.md
│   └── articles/        # Technical articles
│       ├── _index.md
│       └── *.md
├── templates/           # HTML templates
│   ├── base.html
│   ├── index.html
│   ├── blog.html
│   ├── blog-page.html
│   ├── docs.html
│   ├── docs-page.html
│   ├── articles.html
│   └── article-page.html
├── static/              # Static assets (CSS, JS, images)
│   ├── css/
│   ├── images/
│   └── CNAME
└── sass/                # Sass stylesheets (if used)
```

## Content Management

### Adding Blog Posts

Create a new file in `content/blog/` with the format `YYYY-MM-DD-title.md`:

```markdown
+++
title = "Your Post Title"
date = 2024-01-20
[taxonomies]
categories = ["category1", "category2"]
tags = ["tag1", "tag2"]
[extra]
author = "kyjohnso"
+++

Your content here...
```

### Adding Documentation

Create a new file in `content/docs/` with appropriate front matter:

```markdown
+++
title = "Documentation Title"
description = "Brief description"
[taxonomies]
tags = ["tag1", "tag2"]
[extra]
order = 1
+++

Your documentation content...
```

### Adding Articles

Create a new file in `content/articles/` with front matter:

```markdown
+++
title = "Article Title"
date = 2024-01-20
[taxonomies]
tags = ["tag1", "tag2"]
[extra]
author = "kyjohnso"
read_time = 10
+++

Your article content...
```

## Customization

### Styling

The site uses custom CSS located in `static/css/`. Modify these files to customize:

- Colors and branding
- Layout and spacing
- Component styles
- Responsive design

### Configuration

Edit `config.toml` to modify:

- Site metadata
- Base URL
- Navigation menu
- Taxonomies (tags, categories)
- Build options

## Deployment

### GitHub Pages

This site can be deployed to GitHub Pages using GitHub Actions. The workflow will automatically build and deploy when you push to the `main` branch.

Example GitHub Actions workflow (`.github/workflows/deploy.yml`):

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: shalzz/zola-deploy-action@v0.17.2
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### Netlify/Vercel

The site works with modern static site hosts. Use these build settings:

- **Build command**: `zola build`
- **Publish directory**: `public`
- **Zola version**: 0.17.0 or higher

### Manual Deployment

1. Build the site: `zola build`
2. Upload the `public` directory to your web server

## Contributing

We welcome contributions to improve the website! Here's how you can help:

### Content Contributions

- **Blog Posts**: Share tutorials, workflows, or project updates
- **Documentation**: Improve existing docs or add new guides
- **Articles**: Write technical deep-dives or research summaries

### Code Contributions

- **Bug Fixes**: Report and fix issues
- **Features**: Add new functionality or improve existing features
- **Design**: Enhance the visual design and user experience

### Contribution Process

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes and test locally with `zola serve`
4. Commit with clear messages: `git commit -m "Add: new feature description"`
5. Push to your fork: `git push origin feature/your-feature`
6. Create a Pull Request

## Development Guidelines

### Writing Style

- Use clear, concise language
- Include code examples where appropriate
- Add screenshots for UI-related content
- Follow markdown best practices

### Technical Content

- Test all code examples
- Include prerequisites and dependencies
- Provide troubleshooting information
- Link to related resources

### SEO and Accessibility

- Use descriptive titles and headings
- Include alt text for images
- Ensure good contrast ratios
- Test with screen readers

## Support

- **Issues**: [GitHub Issues](https://github.com/kyjohnso/skysplat.org/issues)
- **Discussions**: [GitHub Discussions](https://github.com/kyjohnso/skysplat.org/discussions)
- **Main Project**: [SkySplat Blender](https://github.com/kyjohnso/skysplat_blender)

## License

This website content is licensed under [CC0 1.0 Universal](LICENSE) - you can freely use, modify, and distribute the content.

The site code and templates are available under the MIT License.

## Acknowledgments

- Built with [Zola](https://www.getzola.org/) - A fast static site generator
- Hosted on [GitHub Pages](https://pages.github.com/)
- Thanks to all contributors and the 3DGS research community

---

*For questions about the SkySplat project itself, visit the [main repository](https://github.com/kyjohnso/skysplat_blender).*