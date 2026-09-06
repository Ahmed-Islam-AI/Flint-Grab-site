// The segment demo: eight connections pulling different byte ranges of one file.
//
// The arithmetic is honest — 847 MB across roughly fourteen seconds really is about 60 MB/s, which
// is what a fast connection gives you. Nothing here is a number invented to look impressive.

const demo = document.querySelector('.demo')
if (demo) start()

function start() {
  const bars = [...demo.querySelectorAll('.seg > i')]
  const field = (name) => demo.querySelector(`[data-demo="${name}"]`)
  const pctOut = field('pct')
  const speedOut = field('speed')
  const etaOut = field('eta')

  const TOTAL_MB = 847
  const PER_SEGMENT_MB = TOTAL_MB / bars.length
  const HOLD_MS = 1600

  const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  let fills = bars.map(() => 0)
  let rates = []
  let holdUntil = 0
  let last = 0
  let frame = 0

  function reseed() {
    // Segments finish at different times because hosts throttle unevenly — that unevenness is the
    // whole reason the app rebalances, so the demo should show it rather than hide it.
    rates = bars.map(() => 0.055 + Math.random() * 0.05)
    fills = bars.map(() => 0)
  }

  function paint(speedMbs) {
    const done = fills.reduce((sum, f) => sum + f, 0) / bars.length

    bars.forEach((bar, i) => bar.style.setProperty('--fill', fills[i].toFixed(4)))
    pctOut.textContent = `${(done * 100).toFixed(1)}%`
    speedOut.textContent = speedMbs > 0 ? `${speedMbs.toFixed(1)} MB/s` : '—'

    const remainingMb = TOTAL_MB * (1 - done)
    if (speedMbs > 0 && remainingMb > 0) {
      const seconds = Math.round(remainingMb / speedMbs)
      etaOut.textContent = seconds < 60 ? `${seconds}s left` : `${Math.round(seconds / 60)} min left`
    } else {
      etaOut.textContent = done >= 1 ? 'done' : '—'
    }
  }

  function tick(now) {
    frame = requestAnimationFrame(tick)

    const dt = Math.min((now - last) / 1000, 0.05) // Clamped, or a background tab resumes with a jump.
    last = now

    if (now < holdUntil) return
    if (fills.every((f) => f >= 1)) {
      holdUntil = now + HOLD_MS
      reseed()
      return
    }

    let speedMbs = 0
    for (let i = 0; i < fills.length; i++) {
      if (fills[i] >= 1) continue
      fills[i] = Math.min(1, fills[i] + rates[i] * dt)
      speedMbs += rates[i] * PER_SEGMENT_MB
    }

    paint(speedMbs)
  }

  if (still) {
    fills = [1, 1, 0.82, 1, 0.64, 0.91, 1, 0.73]
    paint(58.4)
    return
  }

  reseed()

  new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (!frame) {
          last = performance.now()
          frame = requestAnimationFrame(tick)
        }
      } else {
        cancelAnimationFrame(frame)
        frame = 0
      }
    },
    { threshold: 0.2 }
  ).observe(demo)
}
