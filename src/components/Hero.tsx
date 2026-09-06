import { motion, useReducedMotion } from 'motion/react'
import { DownloadButton, ReleaseMeta } from './DownloadButton'
import { PLATFORMS, PlatformMark } from './glyphs'

const LINES = ['Paste a link.', 'Get the file.']

export function Hero() {
  const still = useReducedMotion()

  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden pt-24">
      <Backdrop />

      <div className="relative mx-auto w-full max-w-[1180px] px-6 lg:px-12">
        <h1 className="display max-w-[16ch] text-[clamp(3.25rem,11vw,8.5rem)]">
          {LINES.map((line, i) => (
            <motion.span
              key={line}
              className={`block ${i === 1 ? 'text-faint' : ''}`}
              initial={still ? false : { opacity: 0, y: '0.18em' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.06 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.div
          className="mt-10 max-w-[46ch]"
          initial={still ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[19px] leading-relaxed text-muted">
            Your download manager can’t touch social video, and it isn’t its fault.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <DownloadButton size="lg" />
            <ReleaseMeta />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// The roster, drifting. It is the only marquee on the page, it sits at 6% so it reads as texture
// rather than content, and it answers "does it do the site I use" before the headline is finished.
function Backdrop() {
  const marks = [...PLATFORMS, ...PLATFORMS]

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Sits below the copy, not behind it. At the vertical middle the marks fight the lede for
          the same pixels and the paragraph stops being readable. */}
      <div className="absolute bottom-[6%] flex w-max gap-28 opacity-[0.05] drift">
        {marks.map((name, i) => (
          <PlatformMark key={`${name}-${i}`} name={name} className="h-44 w-44 shrink-0 text-ink" />
        ))}
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--color-canvas)_0%,transparent_55%,var(--color-canvas)_100%)]" />
    </div>
  )
}
