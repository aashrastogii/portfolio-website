# Clean & Sleek Portfolio Template

This is a single-page, responsive portfolio template you can drop into a Git repo and share on LinkedIn or GitHub Pages. It includes:

- A hero section and quick CTA
- Project cards with detail pages
- Lightweight vanilla JS for navigation + theme toggle
- SVG placeholders for images (easy to replace)

## Quick customisation

1. Open `index.html` and replace "Your Name" with your name and update copy.
2. Replace the `images/*.svg` placeholders with your own screenshots and avatar.
	- Replace `images/me-placeholder.svg` with a properly cropped photo named `me.jpg` or `me.png` and update the `index.html` `img` `src` if you prefer another filename.
	- Replace `images/me-placeholder.svg` with a properly cropped photo named `me.jpg` or `me.png` and update the `index.html` `img` `src` if you prefer another filename.
3. Update project details in `projects/*.html` and links to demos / source.

## How to view locally (Windows PowerShell)

If you just want to preview locally, open `index.html` in your browser. For a local static server (recommended):

```powershell
# If you have Python installed
python -m http.server 8080
# Then open http://localhost:8080
```

## Deploy to GitHub Pages (easy)

1. Create a GitHub repo and push this project.
2. In your GitHub repo Settings → Pages, set the branch to `gh-pages` (or `main`/`docs/` depending on your preference).
3. Alternatively, use the `gh-pages` npm workflow or a GitHub Action to publish the site.

## Deploy to Vercel / Netlify

Both work great — connect the repo and deploy (both have free tiers and automatic previews).

## What's next / Tips for LinkedIn

- Add this URL to your LinkedIn's featured section so recruiters and peers can click through.
- Put 2–3 short sentences about the featured project(s) and a link to source code or a demo.

---
If you'd like, I can:

- Add a contact form integration (Netlify Functions / Formspree) — note: contact forms are currently removed from this template so links point to your email or external sites
- Export a ready-to-use GitHub Pages deploy workflow
- Replace the placeholder SVGs with your real screenshots if you upload them
	- Replace `images/me-placeholder.svg` with your own portrait image to personalize the top introduction.
