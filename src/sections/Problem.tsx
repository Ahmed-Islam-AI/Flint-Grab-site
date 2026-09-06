import { Reveal } from '@/components/Reveal'
import { Headline, Section } from '@/components/Section'

export function Problem() {
  return (
    <Section id="how">
      <Headline title="One box takes anything" wide>
        <p>
          Those aren’t files sitting on a server, they’re streaming manifests assembled in the
          browser. Flintgrab reads the manifest, pulls every piece in parallel, and hands you one
          finished file.
        </p>
        <p>
          A video page, a playlist, a direct file link, a magnet link. It works out what it is
          looking at and shows you every quality it can actually reach, with real file sizes, before
          a single byte moves.
        </p>
      </Headline>

      <Reveal delay={0.1} className="mt-16 lg:mt-24">
        <figure>
          <div className="overflow-hidden rounded-[--radius-lg] border border-hairline">
            <img
              src="/assets/screens/queue.png"
              alt="The Flintgrab queue mid-transfer, showing four downloads with their speed, percentage and time remaining"
              width={1102}
              height={721}
              className="w-full"
            />
          </div>
          <figcaption className="mt-4 text-[13px] text-muted">
            The queue, mid-transfer. No mockup, this is the app.
          </figcaption>
        </figure>
      </Reveal>
    </Section>
  )
}
