import { Reveal } from '@/components/Reveal'
import { Headline, Section } from '@/components/Section'
import { QualityLadder } from '@/components/QualityLadder'
import { Mark, PlatformMark } from '@/components/glyphs'
import { SCENARIOS } from '@/content/platforms'
import { RELEASE } from '@/config'

const s = SCENARIOS[0]

export function Extension() {
  return (
    <Section className="border-t border-hairline bg-surface/40">
      <Headline title="One click on the page you’re already on" wide>
        <p>
          The extension puts a download button on video pages and hands the page’s own session to the
          app, so anything you can watch while signed in is something you can save. Those cookies
          stay in memory, scoped to that one download, and are never written to disk.
        </p>
      </Headline>

      <Reveal delay={0.1} className="mt-16 flex justify-center lg:mt-20">
        <div className="w-full max-w-[340px] overflow-hidden rounded-[--radius-md] border border-hairline bg-surface">
          <div className="flex items-center gap-2 border-b border-hairline px-3.5 py-2.5">
            <Mark className="h-3.5 w-[11px] text-spark" />
            <span className="text-[13px] font-medium text-ink">Flintgrab</span>
            <span className="ml-auto flex items-center gap-1.5 text-[11px] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-spark" />
              Connected
              <span className="tnum">{RELEASE.version}</span>
            </span>
          </div>

          <div className="px-3.5 py-3.5">
            <p className="truncate text-[13.5px] text-ink">{s.title}</p>
            <p className="mt-1 flex items-center gap-1.5 text-[11.5px] text-muted">
              <PlatformMark name={s.platform} className="h-3 w-3" />
              {s.platform}
              <span className="text-hairline">/</span>
              <span className="tnum">{s.duration}</span>
            </p>

            {/* Not a button. This is a picture of the extension, and a control that looks clickable
                but does nothing is worse than one that does not invite the click. */}
            <div
              aria-hidden
              className="mt-3.5 w-full rounded-[--radius-sm] bg-spark py-2.5 text-center text-[13px] font-medium text-spark-ink"
            >
              Download 1080p, 847 MB
            </div>

            <div className="mt-3.5 border-t border-hairline pt-3">
              <QualityLadder formats={s.formats.slice(0, 5)} pick={s.pick} />
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.16} className="mt-8 text-center">
        <p className="text-[13px] text-muted">
          The extension panel, built from the same stylesheet the real one uses.
        </p>
      </Reveal>
    </Section>
  )
}
