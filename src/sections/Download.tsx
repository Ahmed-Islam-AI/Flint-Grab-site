import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { DownloadButton, ReleaseMeta } from '@/components/DownloadButton'
import { ReleaseNotes } from '@/components/ReleaseNotes'

export function Download() {
  return (
    <Section id="get" className="border-t border-hairline bg-surface/40">
      <Reveal className="mx-auto max-w-[640px] text-center">
        <h2 className="display text-[clamp(2rem,5.2vw,3.75rem)]">Download Flintgrab</h2>
        <p className="mx-auto mt-6 max-w-[46ch] text-[17px] leading-relaxed text-muted">
          Windows 10 and 11, 64-bit. The installer bundles everything it needs, so nothing is
          fetched on first run.
        </p>

        <div className="mt-10 flex flex-col items-center gap-5">
          <DownloadButton size="lg" />
          <ReleaseMeta />
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-20 max-w-[640px]">
        <ReleaseNotes />
      </Reveal>
    </Section>
  )
}
