# 4Hope Kenya website

A fast, accessible, mobile-first static site. Plain HTML/CSS/vanilla JS —
no build step, no frameworks, no npm install. Live at
[4hopekenya.org](https://4hopekenya.org), hosted free on GitHub Pages.

## Editing content (no coding needed)

- **Impact numbers** (students / partner sites / volunteers / cost per bike):
  open `index.html`, find the "Impact" section, edit the four
  `<span class="stat-num">` values and the `<span class="stat-label">`
  text next to them.
- **Team names/roles**: open `index.html`, find the "Team" section,
  edit the `team-name` / `team-role` text in each card. To add someone,
  copy one whole `<div class="team-card">...</div>` block and edit it.
- **Open roles** (Get Involved section): open `script.js`, edit the
  `OPEN_ROLES` array near the top. Each entry looks like:
  ```js
  { title: "CAD Volunteer", commitment: "3 hrs/week, remote" }
  ```
  Leave the array empty (`[]`) if there are no open roles right now —
  the page automatically shows a "check back soon" message instead.
- **Social links / application form link**: search any HTML file for
  the word `TODO` — each one marks a placeholder `href="#"` that needs
  a real URL.
- **Partners & Supporters section**: currently commented out in
  `index.html` (search for "PARTNERS & SUPPORTERS TEMPLATE") because no
  partner has confirmed in writing yet. When one does, uncomment that
  block and list their name only — no logos, no addresses, and never
  the Kenya partner site names.
- **Curriculum units**: edit the "Units" grid in `curriculum.html`.

## Editing colors and fonts

All colors live as CSS variables at the very top of `styles.css`,
inside the `:root { ... }` block. Change a hex value there and it
updates everywhere on the site. There's a separate block for dark mode
right below it.

Fonts are loaded from Google Fonts in each HTML file's `<head>` and
referenced in `styles.css` as `--font-display` (Fraunces) and
`--font-body` (Inter). To swap fonts, change the Google Fonts `<link>`
and the two `--font-*` variables.

## File structure

```
index.html        Homepage (single page, anchor nav)
curriculum.html    Curriculum subpage
privacy.html       Privacy Policy
terms.html         Terms of Use
404.html           Custom not-found page
donate.html        Redirect stub → /#support (old URL, kept so links don't 404)
seniors.html       Redirect stub → / (retired program, unrelated to Kenya mission)
ai-services.html   Redirect stub → / (retired)
about.html         Redirect stub → /#about (old founder-bio page, folded into Team)
partners.html      Redirect stub → /#support (old URL, kept so links don't 404)
styles.css         All styles + color variables
script.js          Mobile nav toggle + open-roles rendering
sitemap.xml        Lists index.html and curriculum.html
robots.txt
assets/            Images + favicon.svg
```

## Analytics

Google Analytics (GA4) and Google Search Console verification are
wired into the `<head>` of every real page (not the redirect stubs'
content, though the stubs still load GA4 too). No other third-party
scripts or trackers are used. There's a one-line disclosure in the
footer of every page.

## Deploying to GitHub Pages with a custom domain

This repo is already configured and live — these steps are here for
reference if you ever need to redo the setup (e.g. moving to a new
repo or account):

1. **Push your changes** to the `main` branch on GitHub. GitHub Pages
   rebuilds automatically on every push (check progress under the
   repo's **Actions** tab — look for "pages build and deployment").
2. **Repo settings → Pages**: source should be set to deploy from the
   `main` branch, root folder.
3. **Custom domain**: the `CNAME` file in this repo already contains
   `4hopekenya.org`. In the same Pages settings, that domain should
   show as configured.
4. **DNS (at your domain registrar)**: point `4hopekenya.org` at
   GitHub Pages with these A records:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
   If you also want `www.4hopekenya.org` to work, add a CNAME record
   for `www` pointing to `<your-github-username>.github.io`.
5. **Enforce HTTPS**: in repo Settings → Pages, make sure "Enforce
   HTTPS" is checked once the certificate has provisioned (this can
   take a few minutes to a few hours after DNS first propagates).

That's it — no build step, no deploy key, no CI config needed.
