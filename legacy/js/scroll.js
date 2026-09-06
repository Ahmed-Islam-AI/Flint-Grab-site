// The spine. Scroll position drives one --progress value; the rail fill and the descending packet
// both read it, so they can never disagree about how far down the page you are.

const root = document.documentElement
const rail = document.querySelector('.rail')
const masthead = document.querySelector('.masthead')

let railHeight = 0
let queued = false

function measure() {
  railHeight = rail ? rail.offsetHeight : 0
}

function paint() {
  queued = false

  const scrollable = root.scrollHeight - window.innerHeight
  const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0

  root.style.setProperty('--progress', progress.toFixed(4))
  // Translated, never positioned with `top` — the compositor handles transforms without a reflow.
  root.style.setProperty('--packet-y', `${(progress * railHeight).toFixed(1)}px`)

  if (masthead) masthead.classList.toggle('scrolled', window.scrollY > 8)
}

function onScroll() {
  if (queued) return
  queued = true
  requestAnimationFrame(paint)
}

// Sections light as they arrive, and stay lit — the packet has passed them, so the download is done.
const lighting = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue
      entry.target.classList.add('lit')
      lighting.unobserve(entry.target)
    }
  },
  { rootMargin: '0px 0px -22% 0px', threshold: 0.04 }
)

for (const section of document.querySelectorAll('section')) lighting.observe(section)

window.addEventListener('scroll', onScroll, { passive: true })
window.addEventListener('resize', () => {
  measure()
  paint()
})

// Fonts and the screenshots both land after first paint and both change the document height, which
// would otherwise leave the packet mapped against a stale rail.
new ResizeObserver(() => {
  measure()
  paint()
}).observe(document.body)

measure()
paint()
