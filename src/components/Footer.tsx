import { CONTACT } from '@/config'
import { Mark } from './glyphs'

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-6 px-6 py-10 lg:px-12">
        <div className="flex items-center gap-2.5 text-[13px] text-muted">
          <Mark className="h-4 w-[13px] text-muted" />
          Flintgrab, for Windows 10 and 11
        </div>
        {/* -my-2.5 keeps the visual spacing while the padding gives each link a 44px tap target. */}
        <nav className="-my-2.5 flex items-center gap-6 text-[13px]">
          <a
            href="/privacy.html"
            className="inline-flex min-h-11 items-center px-1 text-muted transition-colors duration-100 hover:text-ink"
          >
            Privacy
          </a>
          <a
            href="/terms.html"
            className="inline-flex min-h-11 items-center px-1 text-muted transition-colors duration-100 hover:text-ink"
          >
            Terms
          </a>
          <a
            href={`mailto:${CONTACT}`}
            className="inline-flex min-h-11 items-center px-1 text-muted transition-colors duration-100 hover:text-ink"
          >
            {CONTACT}
          </a>
        </nav>
      </div>
    </footer>
  )
}
