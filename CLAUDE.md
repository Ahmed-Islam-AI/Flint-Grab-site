# Flintgrab website — engineering conventions

The marketing site, download page, and legal documents for Flintgrab. Vite + React + TypeScript +
Tailwind. Static, no backend, no build step beyond `vite build`.

The application itself lives in `../Desktop_Downloader` and has its own `CLAUDE.md`. Read that one
before touching anything that describes how the app behaves, because this site makes claims the app
has to keep.

---

## The changelog is updated in the same change

Any change a visitor could notice goes into `CHANGELOG.md` under `## [Unreleased]`, **in the same
commit as the code**. Not afterwards — by then nobody remembers why.

```md
## [Unreleased]

### Changed
- Pricing section rebuilt as two tiers, replacing the "fifteen days, then ten dollars" framing.
```

Rules:
- **Format is `### Kind` then `- bullet`.** Kinds: `Added` · `Changed` · `Fixed` · `Removed` ·
  `Security`.
- **Cut a version by moving `Unreleased` into a dated `## [x.y.z]` heading and bumping
  `package.json` to match.** There is no release script here; do both by hand, together.
- **Pick the bump by what moved:** copy or layout changes are `minor`, a typo or broken link is
  `patch`, a change to what the legal documents promise is `minor` at least.
- **This is not the application's changelog.** App changes belong in
  `../Desktop_Downloader/CHANGELOG.md`. `npm run release` in that repo copies it here as
  `public/CHANGELOG.md` for the download page to render — **that file is generated, never edit it.**
- **Skip it only for changes with no observable effect** — a rename, a comment, a dependency bump
  that changes nothing. If unsure, it counts.

---

## The site makes promises the application has to keep

This is the rule that matters most here, and the reason this file exists.

`src/privacy.tsx`, `src/terms.tsx` and `src/content/trust.ts` are not marketing copy. They are
statements about what the software does, published under our name, that a reader is entitled to
rely on and a journalist is entitled to check.

- **Never write a claim you have not verified in the application's source.** "No telemetry" and "no
  server" were both true once and later were not. If you cannot point at the code, do not write it.
- **Narrow a claim rather than deleting it.** When something stops being true, the honest move is a
  smaller true statement, not silence. "No ads" became "no ad network, no third-party code, nothing
  outside the window" — which is checkable, and still worth something.
- **The privacy policy commits to announcing new data collection *before* it ships.** That sentence
  has a sequence in it. Publish the policy update first, then the build. Not the same day.
- **Date every change to `privacy.tsx` and `terms.tsx`** in the `updated` prop, and record it in the
  changelog. An undated change to a legal document is worse than no change.

---

## Content lives in `src/content/`, not in components

`faq.ts`, `pricing.ts`, `platforms.ts` and `trust.ts` hold the words. Sections in `src/sections/`
render them. Editing copy should not mean opening a component, and a component should not carry a
sentence that belongs in a content file.

`src/config.ts` holds everything that changes at publish time — domain, contact, price, and the
generated `RELEASE` block.

**The `RELEASE` block is written by `npm run release` in the application repo.** Everything between
`// release:start` and `// release:end` is generated: version, date, installer URL, size, SHA-256.
Never edit it by hand — the next release will overwrite you, and a wrong checksum on a download page
is a security problem, not a typo.

---

## Style

- **TypeScript strict.** No `any`.
- **Named exports only.** No `export default`.
- **Design tokens, never hex.** Use the Tailwind theme classes; typing `#` in a `.tsx` is a bug.
- **No em dashes in body copy.** Sentence case for headings. No exclamation marks.
- **British spelling** in user-facing copy, matching the application.

## Commands

```bash
npm run dev        # vite dev server
npm run build      # tsc --noEmit && vite build
npm run typecheck  # tsc --noEmit
npm run test       # vitest
npm run preview    # serve the built site
```
