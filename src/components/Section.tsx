import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

export function Section({
  id,
  children,
  className = '',
}: {
  id?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={`py-28 lg:py-40 ${className}`}>
      <div className="mx-auto max-w-[1180px] px-6 lg:px-12">{children}</div>
    </section>
  )
}

export function Headline({
  title,
  children,
  wide = false,
}: {
  title: string
  children?: ReactNode
  wide?: boolean
}) {
  return (
    <Reveal>
      {/* The measure lives on each child. Putting it on the wrapper clamps the body copy to the
          headline's width, which reads as a broken column rather than a deliberate one. */}
      <h2 className={`display text-[clamp(2rem,5.2vw,3.75rem)] ${wide ? 'max-w-[18ch]' : 'max-w-[14ch]'}`}>
        {title}
      </h2>
      {children && (
        <div className="mt-7 max-w-[58ch] space-y-4 text-[17px] leading-relaxed text-muted">
          {children}
        </div>
      )}
    </Reveal>
  )
}
