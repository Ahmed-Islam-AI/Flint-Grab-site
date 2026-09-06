import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'

export function AppTour() {
  return (
    <Section>
      {/* The screenshot bleeds off the left edge so it renders large enough to actually read. A
          settings panel nobody can read is decoration, and the whole point of this section is that
          the explanations are there in the product. */}
      <div className="grid items-center gap-14 lg:grid-cols-[1.75fr_1fr] lg:gap-16">
        <Reveal className="-ml-6 lg:-ml-12">
          <div className="overflow-hidden rounded-r-[--radius-lg] border-y border-r border-hairline">
            <img
              src="/assets/screens/settings.png"
              alt="Flintgrab settings, showing the download folder, concurrent downloads, connections per download and speed limit, each with an explanation"
              width={1102}
              height={721}
              className="w-full"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="display text-[clamp(2rem,4.4vw,3.25rem)]">Every default explains itself</h2>
          <p className="mt-6 text-[17px] leading-relaxed text-muted">
            Settings that change how fast things go tell you what the number does and why it is what
            it is. Not “recommended”, but measured, with the measurement written next to it.
          </p>
          <p className="mt-5 text-[15px] leading-relaxed text-muted">
            Nothing here is a dark pattern waiting to be found. There is no upsell surface, no
            offers page, and no setting that quietly turns something on later.
          </p>
        </Reveal>
      </div>
    </Section>
  )
}
