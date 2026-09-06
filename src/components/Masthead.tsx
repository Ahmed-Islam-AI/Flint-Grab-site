import { useEffect, useState } from 'react'
import { RELEASE } from '@/config'
import { Mark, Windows } from './glyphs'

const LINKS = [
  { href: '#how', label: 'How it works' },
  { href: '#trust', label: 'What it won’t do' },
  { href: '#pricing', label: 'Pricing' },
]

export function Masthead() {
  const [solid, setSolid] = useState(false)

  // IntersectionObserver on a zero-height sentinel rather than a scroll listener, which would run a
  // handler on every frame to answer one boolean.
  useEffect(() => {
    const sentinel = document.getElementById('masthead-sentinel')
    if (!sentinel) return
    const io = new IntersectionObserver(([entry]) => setSolid(!entry.isIntersecting), {
      rootMargin: '-8px 0px 0px 0px',
    })
    io.observe(sentinel)
    return () => io.disconnect()
  }, [])

  return (
    <>
      <div id="masthead-sentinel" className="absolute top-0 h-2 w-full" />
      <header
        className={`fixed inset-x-0 top-0 z-40 h-16 transition-colors duration-200 ${
          solid ? 'border-b border-hairline bg-canvas/92 backdrop-blur-sm' : ''
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1180px] items-center justify-between px-6 lg:px-12">
          <a href="/" className="-mx-2 flex min-h-11 items-center gap-2.5 px-2 text-ink">
            <Mark className="h-[18px] w-[14px] text-spark" />
            <span className="text-[15px] font-semibold tracking-tight">Flintgrab</span>
          </a>

          <nav className="flex items-center gap-7">
            <div className="hidden items-center gap-7 md:flex">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-[14px] text-muted transition-colors duration-100 hover:text-ink"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <a
              href={RELEASE.url}
              download
              className="inline-flex min-h-11 items-center gap-2 rounded-[--radius-sm] border border-edge px-4 text-[14px] text-ink transition-colors duration-100 hover:border-spark hover:text-spark"
            >
              <Windows className="h-3.5 w-3.5" />
              Download
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}
