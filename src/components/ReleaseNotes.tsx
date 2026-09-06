import { motion, useReducedMotion } from 'motion/react'
import { RELEASE } from '@/config'

// The release drawn on a rail, the same device the page itself scrolls on. The line draws down and
// each note lights its node as it arrives, so a release reads as something that happened in order
// rather than a box of bullet points. The accent is earned here: the nodes are moving.
export function ReleaseNotes() {
  const still = useReducedMotion()
  const notes = RELEASE.notes.slice(0, 6)
  const ease = [0.16, 1, 0.3, 1] as const

  return (
    <div>
      <div className="flex items-end justify-between gap-6 border-b border-hairline pb-7">
        <div>
          <p className="text-[13px] text-muted">Latest release</p>
          <div className="mt-2.5 flex items-baseline gap-3">
            <motion.p
              className="tnum text-[46px] leading-none text-ink"
              initial={still ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, ease }}
            >
              {RELEASE.version}
            </motion.p>
            <span className="text-[13px] text-muted">{RELEASE.date}</span>
          </div>
        </div>

        <a
          href="/CHANGELOG.md"
          className="-my-2.5 inline-flex min-h-11 items-center text-[13px] text-muted transition-colors duration-100 hover:text-spark"
        >
          Full changelog
        </a>
      </div>

      <ul className="relative -mb-7 mt-8">
        <motion.span
          aria-hidden
          className="absolute bottom-7 left-[3.5px] top-[7px] w-px origin-top bg-spark/35"
          initial={still ? false : { scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease }}
        />

        {notes.map((note, i) => (
          <motion.li
            key={i}
            className="relative flex gap-5 pb-7"
            initial={still ? false : { opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: 0.18 + i * 0.11, ease }}
          >
            <motion.span
              aria-hidden
              className="mt-[5px] h-2 w-2 shrink-0 rotate-45 bg-spark"
              initial={still ? false : { scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.34, delay: 0.24 + i * 0.11, ease }}
            />
            <div className="min-w-0">
              <p className="text-[11px] uppercase tracking-wide text-muted">{note.kind}</p>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink">{note.text}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
