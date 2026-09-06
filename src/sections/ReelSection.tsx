import { Reel } from '@/components/Reel'
import { Reveal } from '@/components/Reveal'
import { Headline, Section } from '@/components/Section'
import { PLATFORMS, PlatformMark } from '@/components/glyphs'

export function ReelSection() {
  return (
    <Section className="border-t border-hairline bg-surface/40">
      <Headline title="The sites change. So does Flintgrab." wide>
        <p>
          Extraction runs on yt-dlp, which maintains extractors for over a thousand sites. That
          matters more than the count: sites change how they serve video constantly, and a
          downloader that ships its extractors once is quietly broken a month later. Flintgrab
          updates its copy in the background.
        </p>
      </Headline>

      <Reveal delay={0.1} className="mt-16 lg:mt-20">
        <Reel />
      </Reveal>

      <Reveal delay={0.16} className="mt-14">
        <ul className="flex flex-wrap items-center justify-center gap-x-9 gap-y-5">
          {PLATFORMS.map((name) => (
            <li key={name} className="flex items-center gap-2 text-[13px] text-muted">
              <PlatformMark name={name} className="h-4 w-4" />
              {name}
            </li>
          ))}
          <li className="text-[13px] text-muted">and a thousand more</li>
        </ul>
      </Reveal>
    </Section>
  )
}
