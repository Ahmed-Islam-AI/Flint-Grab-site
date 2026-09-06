// Two tiers, one difference. The list below is what both of them get, which is the whole product —
// no feature is held back from the free version, and there is no cap on quality, count, or speed.
//
// That is deliberate and it is the pitch: capping resolution or batch size is exactly what the
// ad-laden downloader sites do, and refusing to is worth more than the handful of upgrades a
// capability paywall would have forced.

export const INCLUDED = [
  'Every resolution the source offers, up to 4K',
  'Segmented transfers with byte-exact resume',
  'Playlists and multi-link batches',
  'Torrents, magnet links, FTP, FTPS and SFTP',
  'Audio extraction with tags and cover art',
  'Subtitles as sidecar files or embedded tracks',
  'Scheduling and bandwidth limits',
  'The browser extension',
]

export const TIERS = [
  {
    name: 'Free',
    price: 'Free',
    term: 'forever',
    line: 'One sponsor panel above the status bar. Everything else, unrestricted.',
    points: [
      'Every feature on the list, with nothing withheld',
      'One static advert inside the window — never a popup',
      'No account, no expiry, no nagging',
    ],
  },
  {
    name: 'Pro',
    price: '$10',
    term: 'one time',
    line: 'The same application with the panel gone, on one machine, permanently.',
    points: [
      'No sponsor panel, ever again',
      'One payment — no renewal, no subscription',
      'Fifteen days of it free first, no key needed',
    ],
  },
] as const

export const STEPS = [
  {
    verb: 'Ask',
    body: 'Email us and say you want a key. No form, no account, no cart.',
  },
  {
    verb: 'Pay',
    body: 'We reply with payment details and your key. One payment, ten dollars, never again.',
  },
  {
    verb: 'Activate',
    body: 'Paste the key into Flintgrab once. It binds to that machine; replacing the machine is a reply to that email, at no charge.',
  },
]
