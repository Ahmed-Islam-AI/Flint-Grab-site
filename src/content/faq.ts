// Answers to the things a careful person asks before installing an unsigned exe from a site they
// have not heard of. Every one of these is answerable honestly, so it is — including the two about
// the advert, which go near the top rather than buried at the bottom where they would look hidden.

export const FAQ = [
  {
    q: 'There are adverts now?',
    a: 'One. The free version shows a single sponsor panel above the status bar — a picture, a line of text and a link, which we serve ourselves. No ad network is involved, no third-party code runs inside Flintgrab, nothing pops up, and nothing appears outside the app. It is how the free version pays for itself now that the free version is the entire product rather than a cut-down one. Ten dollars removes it permanently. If you would rather we had held features back instead, that is a fair opinion and we considered it — we would rather everybody had the whole thing.',
  },
  {
    q: 'What do the advertisers learn about me?',
    a: 'Nothing. They never receive a request from your computer at all, because we host their images ourselves — there is no pixel, no beacon, and no IP address for them to see. We tell them how many times an advert was shown and clicked, as daily totals by country. We do not know who you are either: the request that fetches the advert list carries no identifier of any kind and is the same file for everybody.',
  },
  {
    q: 'What happens when the trial ends?',
    a: 'Nothing stops. Every feature keeps working, your files, history and settings are untouched, and the sponsor panel appears in the window. The trial is fifteen days without the panel, not fifteen days of a product that then locks.',
  },
  {
    q: 'Why does Windows warn me about the installer?',
    a: 'Because it is not code-signed yet. A signing certificate is a recurring cost we have not taken on, and pretending otherwise would be worse than saying it. Choose More info, then Run anyway. If you would rather check the file before running it, write to us and we will send you the checksum for the build you downloaded so you can verify it yourself.',
  },
  {
    q: 'Can I move it to a new machine?',
    a: 'A key binds to the machine it activates on. If you replace that machine, email us from the address you bought with and we will reissue at no charge. Renaming a PC or reinstalling Windows can also look like a new machine, and the same applies.',
  },
  {
    q: 'Does it work on Netflix, Spotify or Prime Video?',
    a: 'No, and no version will. Those services protect their content with DRM, and Flintgrab does not circumvent DRM. This is a permanent boundary, not a missing feature.',
  },
  {
    q: 'What is the browser extension actually doing?',
    a: 'It watches for video on the page you are on, and when you click download it hands that page’s own session to the app so anything you can watch signed in is something you can save. Those cookies are scoped to the one download, held in memory, and discarded when it finishes.',
  },
  {
    q: 'Why does it want permission for every site?',
    a: 'Because video lives on every site, and the extension cannot know in advance which page you will be on. It reads nothing until you click a download button, and it sends nothing anywhere — the extension has no network connection to us at all.',
  },
  {
    q: 'Is there a macOS or Linux version?',
    a: 'Not yet. Windows is the whole product today, and shipping a half-working port would be a worse answer than this one.',
  },
  {
    q: 'What happens if a site changes and breaks extraction?',
    a: 'Extraction runs on yt-dlp, and Flintgrab updates its copy in the background rather than shipping it once and going stale. When a platform breaks, the fix usually arrives without you doing anything.',
  },
]
