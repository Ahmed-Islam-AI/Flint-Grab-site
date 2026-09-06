# Changelog

All notable changes to Flintgrab are recorded here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and versions follow
[semantic versioning](https://semver.org/spec/v2.0.0.html).

Releases are cut with `npm run release` — see [.claude/skills/release/SKILL.md](.claude/skills/release/SKILL.md).
Write what changed under **Unreleased** as you go; the release script moves it into a dated version
section, stamps the installer, and pushes the new version through to the website.

Categories: `Added` · `Changed` · `Fixed` · `Removed` · `Security`

---

## [Unreleased]

<!-- Add entries here as you work. The release script requires this section to be non-empty. -->

---

## [0.1.0] — 2026-08-28

First packaged build. Windows 10 and 11, x64.

### Added

- Paste-a-link downloading — a single input that accepts a video page, a playlist, a direct file
  link, or a magnet link, and works out which it is before any bytes move.
- Segmented HTTP transport with byte-exact pause, resume, and crash recovery. Segments write
  straight to their own offset in a pre-allocated file, so there is no merge pass.
- Dynamic segment re-splitting — an idle worker takes half of the slowest remaining range, which
  removes the "stuck at 99%" tail.
- Adaptive stream handling for HLS and DASH, muxed with stream copy. Merging is its own visible
  state, so nothing reads as finished while it is still being assembled.
- Curated quality ladder — yt-dlp's fifty-three formats for a YouTube video reduced to one row per
  resolution, each with a size corrected for the audio track it will be merged with.
- Audio extraction to MP3, M4A and Opus, with ID3 tags, embedded cover art, and the source URL
  written into the comment field.
- Subtitle downloads as sidecar files or soft-embedded tracks, with auto-generated tracks labelled
  as such. A subtitle failure never fails the video it belongs to.
- Playlist and batch downloading, capped at 500 items, with per-item failure isolated from the rest
  of the batch and a retry action for what failed.
- Queue with scheduling, a global speed limit, per-host connection caps, and a post-completion
  action.
- Searchable history that detects a file which has since been moved or deleted.
- Clipboard detection — copying a link anywhere raises a non-modal toast that never steals focus
  and never starts a download on its own.
- Browser extension for Chrome, Edge and Brave: an in-page badge on every video, a toolbar popup
  with the quality ladder, media sniffing that catches `blob:` streams the address bar never shows,
  and a cookie bridge that hands the page's own session to the app.
- Download interception with a rules engine — domain and extension lists plus a size floor,
  evaluated in the app rather than the extension. Ships off by default.
- Torrent and magnet support through the same queue, with seeding controls and an explicit choice
  on the first torrent rather than a silent default.
- FTP, FTPS and SFTP transfers with byte-exact resume, and trust-on-first-use host-key pinning.
- yt-dlp auto-update — checked on startup and every 24 hours, verified by checksum, and self-tested
  against a known-good URL before it is promoted.
- Tray operation with aggregate progress drawn into the icon. Closing the window never cancels a
  transfer.
- Native Windows notifications on completion and on terminal failure.

### Security

- Cookies are held in memory, scoped to a single download, and discarded when it reaches a terminal
  state. Optional persistence is DPAPI-encrypted and capped at 24 hours.
- Credentials, `Authorization` headers and signed-URL parameters are redacted by a filter at the
  logger, not by remembering to redact them.
- Every subprocess is spawned with an argument array, so a URL containing shell metacharacters is
  inert by construction.
- The renderer never touches disk, network, or the database. Privileged IPC takes ids, never paths.

### Known limitations

- The installer is not code-signed, so Windows SmartScreen warns before it runs. The SHA-256 is
  published so the file can be verified instead.
- Live streams are refused before a download starts.
- DRM-protected services are not supported, and no version will add that.
- Dark theme only — the light palette is defined but not reachable.
