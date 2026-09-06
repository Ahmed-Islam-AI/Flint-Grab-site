import { Minus } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { Headline, Section } from '@/components/Section'
import { PROMISES } from '@/content/trust'

export function Trust() {
  return (
    <Section id="trust" className="border-t border-hairline bg-surface/40">
      <Headline title="What it won’t do" wide>
        <p>
          This category is full of software that treats the download as an excuse to install
          something else. Here is what Flintgrab does not do, written down so you can hold it to
          them.
        </p>
      </Headline>

      <ul className="mt-14 divide-y divide-hairline border-y border-hairline lg:mt-20">
        {PROMISES.map((p, i) => (
          <Reveal as="li" key={p.claim} delay={Math.min(i, 5) * 0.05}>
            <div className="grid items-start gap-3 py-7 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
              <div className="flex items-start gap-3">
                <Minus className="mt-1 h-4 w-4 shrink-0 text-faint" strokeWidth={2.2} />
                <span className="text-[17px] text-ink">{p.claim}</span>
              </div>
              <p className="pl-7 text-[15px] leading-relaxed text-muted lg:pl-0">{p.detail}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
