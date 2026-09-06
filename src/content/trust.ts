// The promises, narrowed again. The free version now shows one sponsor panel, so "No ads" is gone —
// keeping it in the one section whose entire job is trust would undo the section.
//
// What replaces it is narrower and still true: no ad network, no third-party code, nothing outside
// the window. Everything here has to survive someone with a packet capture, so each claim is written
// to be checkable rather than reassuring. The section heading is "What it won't do", so every entry
// stays a boundary — the panel's existence is sold openly on the pricing section, not buried here.

export const PROMISES = [
  {
    claim: 'No bundled offers, no toolbars, no changed search engine',
    detail:
      'The installer installs one thing. There is no second product, nothing opt-out, and nothing that touches your homepage, your default search, or your browser settings.',
  },
  {
    claim: 'No ad network, no third-party code, nothing outside the window',
    detail:
      'The free version shows one sponsor panel above the status bar: an image, a line of text, a link, served by us. No ad network is involved and no third-party script ever runs inside Flintgrab. Nothing pops up, nothing appears outside the app, nothing interrupts a download. Ten dollars removes it permanently.',
  },
  {
    claim: 'Nothing you download is ever reported',
    detail:
      'No URL, filename, site, or file you touch leaves your machine, in any version, with or without a licence. The app asks us for a list of adverts and tells us how many times each was shown. That is the whole conversation.',
  },
  {
    claim: 'The advert cannot see you',
    detail:
      'The request that fetches it carries no account, no device ID, no cookie, no identifier of any kind — every copy of Flintgrab downloads the same file. We host the images ourselves, so the advertiser never receives a request from your computer and cannot count you or follow you anywhere else.',
  },
  {
    claim: 'No account, no sign-up, no profile',
    detail:
      'There is nothing to register. Buying a key means we hold your email address so we can send it and reissue it, and nothing else about you is stored.',
  },
  {
    claim: 'No telemetry, no analytics, no crash reporting',
    detail:
      'Nothing measures which features you use, how often you open it, or what fails. Absent, not merely off by default. There is no setting to turn any on, because there is nothing to turn on.',
  },
  {
    claim: 'Nothing is routed through a server',
    detail: 'Every byte moves between your machine and the source. There is no middle.',
  },
  {
    claim: 'Uninstalling does not touch your files',
    detail: 'Your downloads stay where they are. It asks before removing its own history.',
  },
]
