# Flintgrab website

Static site. No build step, no dependencies, no `npm install`. Every file here is the file that ships.

```
index.html      the landing page
privacy.html    privacy policy — required before the extension can go on the Chrome Web Store
terms.html      terms of use
css/tokens.css  the palette. The only file with hex values in it.
css/site.css    layout, components, motion
js/config.js    version, download URL, size, checksum, domain — the swap points
js/scroll.js    the spine: fill and packet, both driven by one --progress value
js/mark.js      the hero diamond (three.js, loaded from a CDN, falls back to an SVG)
js/demo.js      the live segment demo
downloads/      the installer that the download button serves
assets/         screenshots and icons
```

## Running it locally

Open it through a web server, not by double-clicking `index.html` — ES modules are blocked on
`file://` by CORS and the page will load without any JavaScript.

```bash
npx serve .          # then open the URL it prints
# or
python -m http.server 8000
```

## Deploying

Drag this folder onto Netlify Drop, Cloudflare Pages, or any static host. There is nothing to build.

**One catch: the installer is 180 MB.** Several hosts will refuse it — Cloudflare Pages caps
individual files at 25 MB. Two ways round it:

1. **Recommended.** Host the installer on GitHub Releases and point `RELEASE.url` in
   `js/config.js` at that URL. Releases allow files up to 2 GB, the bandwidth is free, and
   `electron-updater` in the app can use the same repo. Then delete `downloads/` from this folder
   and the site is a couple of hundred kilobytes.
2. Host the site somewhere without a per-file cap and keep `downloads/` where it is.

## What to change when you publish

| Where | What |
|---|---|
| `js/config.js` → `RELEASE.url` | Point at the real download URL |
| `js/config.js` → `version`, `size`, `sha256` | Update for each release |
| `js/config.js` → `RELEASE.signed` | Set to `true` once the installer is code-signed. This removes the SmartScreen warning block automatically |
| `js/config.js` → `DOMAIN` | Your real domain. Also sets the contact address |
| `index.html` → `og:url`, `og:image` | **Second place the domain appears.** Meta tags cannot read JavaScript, so these two are hardcoded |

## Updating the checksum

```powershell
(Get-FileHash .\downloads\Flintgrab-Setup-0.1.0.exe -Algorithm SHA256).Hash.ToLower()
```

Paste the result into `RELEASE.sha256`. The page tells visitors to verify with
`certutil -hashfile <file> SHA256`, so this has to match or the trust argument backfires.

## The logo

The mark, the wordmark and every icon come from the brand kit at `../FlintGrab-Brand`. Nothing here
draws the logo — `assets/icons/` holds copies, and the header uses an inlined copy of the same path.

To change the logo: edit `build.mjs` in the brand kit, run `node build.mjs`, then copy the outputs
back over `assets/icons/` and update the inlined `<svg class="mark">` path in `index.html`,
`privacy.html` and `terms.html`. The app repo has `npm run brand` for the same job on its side.

## Design constraints

The palette, typefaces and copy rules come from `DESIGN.md` in the app repo, so the site and the
product look like one thing. Specifically:

- **Colours live only in `css/tokens.css`.** If you type `#` anywhere else, that is a bug.
- Mutating numbers use JetBrains Mono with `tabular-nums`, so nothing twitches as values change.
- Banned, per `DESIGN.md` §13: emoji, glassmorphism, neon glows, gradient buttons, bevels, three
  equal cards in a row, invented metrics, and marketing verbs like "seamless" or "unleash".
- Copy is sentence case. Buttons are verbs. No exclamation marks.

## Accessibility and performance notes

- Everything animated moves on `transform` and `opacity` only — no layout thrash.
- `prefers-reduced-motion: reduce` fills the spine, removes the packet, and stops the demo on a
  static frame.
- The three.js scene stops rendering when the hero scrolls out of view.
- If WebGL is unavailable or the CDN is blocked, the hero falls back to a static SVG mark.
