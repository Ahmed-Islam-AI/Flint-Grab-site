import { motion, useReducedMotion } from 'motion/react'
import { Reveal } from '@/components/Reveal'
import { Headline, Section } from '@/components/Section'

// Four ranges of one 847 MB file. The widths are the shape of a real transfer: segments start
// together and finish apart, which is exactly why the fourth one gets re-split near the end.
const SEGMENTS = [
  { range: '0 – 211 MB', fill: 1 },
  { range: '211 – 423 MB', fill: 0.88 },
  { range: '423 – 635 MB', fill: 0.95 },
  { range: '635 – 847 MB', fill: 0.71 },
]

export function Segments() {
  const still = useReducedMotion()

  return (
    <Section>
      <Headline title="It arrives in four pieces at once" wide>
        <p>
          A single connection leaves most of your bandwidth idle. Flintgrab opens four at once, each
          pulling a different byte range of the same file, then stitches them back together and
          checks the size before it will call anything finished.
        </p>
      </Headline>

      <Reveal delay={0.1} className="mt-16 lg:mt-20">
        <div className="rounded-[--radius-lg] border border-hairline bg-surface p-6 lg:p-9">
          <div className="flex items-baseline justify-between">
            <p className="text-[14px] text-ink">Sintel — Blender Open Movie</p>
            <p className="tnum text-[13px] text-muted">847 MB</p>
          </div>

          <ul className="mt-7 space-y-4">
            {SEGMENTS.map((seg, i) => (
              <li key={seg.range} className="flex items-center gap-4">
                <span className="tnum w-[104px] shrink-0 text-[11.5px] text-muted">{seg.range}</span>
                <span className="h-[5px] flex-1 overflow-hidden rounded-full bg-active">
                  <motion.span
                    className="block h-full rounded-full bg-spark"
                    initial={still ? { width: `${seg.fill * 100}%` } : { width: '0%' }}
                    whileInView={{ width: `${seg.fill * 100}%` }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 1.6, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  />
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap justify-between gap-4 border-t border-hairline pt-5 text-[12.5px] text-muted">
            <span>Pause and close the app, it picks up from the same byte</span>
            <span className="tnum">4 connections</span>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.16} className="mt-12 max-w-[62ch]">
        <p className="text-[15px] leading-relaxed text-muted">
          Four, not eight. Benchmarking put four connections at{' '}
          <span className="tnum text-ink">8.2 MB/s</span>, about 1.8 times a single connection, while
          eight and sixteen measured slower and risk being rate limited. The app says as much in its
          own settings, next to the number.
        </p>
      </Reveal>
    </Section>
  )
}
