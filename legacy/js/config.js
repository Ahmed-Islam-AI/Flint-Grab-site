// Everything that changes at publish time lives here. Nothing else in the site hardcodes a URL,
// a version, or a file size.

export const DOMAIN = 'flintgrab.com'

export const CONTACT = `hello@${DOMAIN}`

export const RELEASE = {
  version: '0.1.0',

  // Served from this folder today so the button works before anything is hosted. Swap to the
  // release URL when you publish — e.g. https://github.com/<owner>/flintgrab-releases/releases/…
  url: 'downloads/Flintgrab-Setup-0.1.0.exe',

  size: '180 MB',
  sha256: 'd30ea14dd08ed808dbf61e75a09fada183e320c4108b5c30695c4af62dea4778',
  requires: 'Windows 10 or 11, 64-bit',

  // Set to true once the installer is code-signed; this hides the SmartScreen warning block.
  signed: false
}

/** Fills every [data-release] element from RELEASE, so the numbers exist in exactly one place. */
export function applyRelease(root = document) {
  for (const node of root.querySelectorAll('[data-release]')) {
    const value = RELEASE[node.dataset.release]
    if (value !== undefined) node.textContent = String(value)
  }

  for (const link of root.querySelectorAll('[data-download]')) {
    link.setAttribute('href', RELEASE.url)
  }

  for (const node of root.querySelectorAll('[data-contact]')) {
    node.textContent = CONTACT
    if (node.tagName === 'A') node.setAttribute('href', `mailto:${CONTACT}`)
  }

  if (RELEASE.signed) {
    for (const node of root.querySelectorAll('[data-unsigned-only]')) node.remove()
  }
}
