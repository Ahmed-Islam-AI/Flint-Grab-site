import type { ReactNode } from 'react'
import { Footer } from './Footer'
import { Mark } from './glyphs'

// Shared shell for privacy and terms. They are legally required pages, not marketing, so they get
// one column, no motion, and nothing competing with the text.
export function DocPage({
  title,
  updated,
  children,
}: {
  title: string
  updated: string
  children: ReactNode
}) {
  return (
    <>
      <header className="border-b border-hairline">
        <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-6 lg:px-12">
          <a href="/" className="flex items-center gap-2.5 text-ink">
            <Mark className="h-[18px] w-[14px] text-spark" />
            <span className="text-[15px] font-semibold tracking-tight">Flintgrab</span>
          </a>
          <a
            href="/"
            className="text-[14px] text-muted transition-colors duration-100 hover:text-ink"
          >
            Back to the site
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-[68ch] px-6 py-20 lg:px-12 lg:py-28">
        <h1 className="display text-[clamp(2rem,5vw,3rem)]">{title}</h1>
        <p className="mt-4 text-[13px] text-muted">Last updated {updated}</p>
        <div className="mt-14 space-y-5 text-[16px] leading-relaxed text-muted [&_h2]:mb-4 [&_h2]:mt-14 [&_h2]:text-[20px] [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-ink [&_li]:ml-5 [&_li]:list-disc [&_li]:pl-1 [&_strong]:font-medium [&_strong]:text-ink [&_ul]:space-y-2.5">
          {children}
        </div>
      </main>

      <Footer />
    </>
  )
}
