# Changelog — website

Notable changes to the Flintgrab **website**: the marketing pages, the download page, and the two
legal documents.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and versions follow
[semantic versioning](https://semver.org/spec/v2.0.0.html).

> **This file is not the application's changelog.** The app has its own in the Flintgrab repo, and
> `npm run release` there copies it to `public/CHANGELOG.md` for the download page to render. Do not
> record app changes here, and do not record site changes there.

Categories: `Added` · `Changed` · `Fixed` · `Removed` · `Security`

---

## [Unreleased]

<!-- Add entries here as you work. -->

---

## [1.1.0] — 2026-09-07

Rewritten for the ad-supported free tier. **This release must go live before the application build
that introduces adverts**, because the privacy policy commits to announcing new data collection
before it ships rather than after.

### Changed

- **Privacy policy**, dated 7 September 2026 and rewritten in four places. The summary no longer
  claims "There is no Flintgrab server, no account, and no analytics". The activation section no
  longer claims "No part of it contacts a server" and instead describes what the licence check
  sends, what the machine identifier is, and that a network failure never revokes a paid licence.
  The network list gains the advert-manifest and count-reporting requests. The analytics section now
  separates advert counts from usage tracking and states that unique users are deliberately not
  measured.
- **Privacy policy** gains an "About IP addresses" paragraph. An IP cannot be made to disappear, and
  claiming otherwise would have been the one falsifiable statement on the page.
- **Trust section**: "No ads, no bundled offers, no changed search engine" is replaced by "No ad
  network, no third-party code, nothing outside the window", plus two new promises covering what
  leaves the machine and what an advertiser can see. Eight promises now, all still phrased as
  boundaries so they fit the "What it won't do" heading.
- **Terms**: the clause saying Flintgrab "stops starting new downloads" when the trial ends was
  already untrue against the shipped application and is now definitively wrong. Replaced with a
  statement that nothing stops.
- **Pricing section** rebuilt as two tiers, free and Pro, replacing the "Fifteen days, then ten
  dollars" framing. The feature list sits below both cards rather than inside either, because it is
  now genuinely identical for both.
- **FAQ**: the trial-expiry answer was factually wrong and is corrected. The "no server of ours for
  it to reach" answer is narrowed to the extension, which still has no network connection to us.
- Meta descriptions: `og:description` no longer sells "Fifteen days free, then $10 once", and the
  privacy page no longer describes our data handling as "which is nothing".

### Added

- **Terms** gain an "Advertising in the free version" section, which commits in writing to never
  running adverts for system cleaners, driver updaters, antivirus software, cryptocurrency,
  gambling, adult content, or competing download managers.
- **Terms** gain a refund clause noting that a revoked key stops working within about a week, and
  that the application continues as the free version rather than being disabled.
- **FAQ** gains two questions answered directly rather than buried at the bottom: whether there are
  adverts now, and what an advertiser learns about the reader.

---

## [1.0.0] — 2026-08-28

Initial public site, published alongside Flintgrab 0.1.0.

### Added

- Landing page: hero, the problem, segmented transfers, an application tour, the browser extension,
  the quality ladder, pricing, the trust list, an FAQ, and the download panel.
- Download page driven by a generated `RELEASE` block in `src/config.ts`, carrying the version,
  date, size and SHA-256 of the installer so the file can be verified before it is run.
- Privacy policy and terms of use as separately routed pages.
