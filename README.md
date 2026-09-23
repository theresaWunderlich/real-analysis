# Real Analysis directed study site

Static site for GitHub Pages. No build step: edit `content.js`, push, done.

## Put it online
1. Create a new public repo on GitHub, e.g. `real-analysis`.
2. Upload everything in this folder (keep the folder structure).
3. Repo Settings > Pages > Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
4. Site appears at `https://theresawunderlich.github.io/real-analysis/` in a minute or two.

## Add content
- Files go in `assets/unit-N/`.
- List them in `content.js` under that unit's `pdfs` or `notes`.
- Delete the placeholder files in `assets/unit-1/` once you have real ones.

## Tips
- iPhone photos are HEIC and large. Export as JPG around 1600px wide (under ~500 KB) so the wall loads fast.
- Keep individual PDFs under 25 MB (GitHub's web-upload limit). Scanner apps' "compress" option helps.
- Math in typed notes uses LaTeX between `$...$` (inline) or `$$...$$` (display). Double every backslash: `\\sup`, `\\varepsilon`.
- To preview locally: `python3 -m http.server` in this folder, then open http://localhost:8000.
