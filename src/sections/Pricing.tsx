import { Check } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { Headline, Section } from '@/components/Section'
import { DownloadButton } from '@/components/DownloadButton'
import { INCLUDED, STEPS, TIERS } from '@/content/pricing'
import { CONTACT, PRICE } from '@/config'

const MAILTO = `mailto:${CONTACT}?subject=${encodeURIComponent('Flintgrab activation key')}`

export function Pricing() {
  return (
    <Section id="pricing">
      <Headline title="Free with one advert. Ten dollars without." wide>
        <p>
          Nothing is held back from the free version — not resolution, not batch size, not torrents,
          not the scheduler. It is the whole application, with a single static sponsor panel above
          the status bar. Paying {PRICE.amount} once removes the panel and changes nothing else. New
          installs get {PRICE.trialDays} days without it, so you can see the quiet version first.
        </p>
      </Headline>

      {/* Two tiers side by side. The feature list sits below both rather than inside either, because
          it is identical for both and repeating it would imply it is not. */}
      <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-2 lg:gap-8">
        {TIERS.map((tier, i) => (
          <Reveal key={tier.name} delay={i * 0.08}>
            <div className="flex h-full flex-col rounded-[--radius-lg] border border-edge bg-surface p-8">
              <p className="text-[13px] uppercase tracking-[0.08em] text-faint">{tier.name}</p>

              <div className="mt-4 flex items-baseline gap-2.5">
                <span className="tnum text-[64px] leading-none text-ink">{tier.price}</span>
                <span className="text-[15px] text-muted">{tier.term}</span>
              </div>

              <p className="mt-5 text-[15px] leading-relaxed text-muted">{tier.line}</p>

              <ul className="mt-7 space-y-3">
                {tier.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-[14.5px] text-muted">
                    <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-spark" strokeWidth={2.4} />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-1">
                {i === 0 ? (
                  <DownloadButton />
                ) : (
                  <a
                    href={MAILTO}
                    className="inline-flex items-center gap-2 rounded-[--radius-md] border border-edge px-5 py-3 text-[15px] text-ink transition-colors duration-100 hover:border-spark hover:text-spark"
                  >
                    Email us for a key
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.16} className="mt-16">
        <p className="text-[13px] text-muted">In both, identically</p>
        <ul className="mt-5 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
          {INCLUDED.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-[15px] text-muted">
              <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-spark" strokeWidth={2.4} />
              {item}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.16} className="mt-20 border-t border-hairline pt-14">
        {/* 20px sat between 60px section headings and 15px body, which read it as body text.
            30px puts it on the scale as a real level. */}
        <h3 className="text-[30px] font-semibold tracking-tight text-ink">How you get a key</h3>
        <div className="mt-9 grid gap-10 sm:grid-cols-3 sm:gap-12">
          {STEPS.map((step) => (
            <div key={step.verb}>
              <p className="text-[17px] text-ink">{step.verb}</p>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
