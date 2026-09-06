import { Plus } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { FAQ } from '@/content/faq'

export function Faq() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[0.6fr_1fr] lg:gap-20">
        <Reveal>
          <h2 className="display text-[clamp(2rem,4.4vw,3.25rem)]">Before you install it</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="divide-y divide-hairline border-y border-hairline">
            {FAQ.map((item) => (
              <li key={item.q}>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-start gap-4 py-5 text-[16.5px] text-ink transition-colors duration-100 hover:text-spark [&::-webkit-details-marker]:hidden">
                    <Plus
                      className="mt-1 h-4 w-4 shrink-0 text-faint transition-transform duration-200 group-open:rotate-45"
                      strokeWidth={2}
                    />
                    {item.q}
                  </summary>
                  <p className="pb-6 pl-8 text-[15px] leading-relaxed text-muted">{item.a}</p>
                </details>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
