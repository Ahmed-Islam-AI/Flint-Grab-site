import { RELEASE } from '@/config'
import { Windows } from './glyphs'

type Props = { size?: 'lg' | 'md' }

// Windows mark first, because the platform is the first thing someone needs to know and finding out
// after the click is a worse way to learn it.
export function DownloadButton({ size = 'md' }: Props) {
  const lg = size === 'lg'
  return (
    <a
      href={RELEASE.url}
      download
      className={`group inline-flex items-center gap-3 rounded-[--radius-md] bg-spark font-medium text-spark-ink transition-colors duration-100 hover:bg-spark-hover active:translate-y-px ${
        lg ? 'px-7 py-4 text-[17px]' : 'px-5 py-3 text-[15px]'
      }`}
    >
      <Windows className={lg ? 'h-[18px] w-[18px]' : 'h-4 w-4'} />
      Download for Windows
    </a>
  )
}

export function ReleaseMeta({ className = '' }: { className?: string }) {
  return (
    // Muted, not faint: this is the version and system requirement, which is information someone
    // needs before clicking. The faint tone is for de-emphasis, not for real content.
    <p className={`text-[13px] text-muted ${className}`}>
      <span className="tnum">{RELEASE.version}</span>
      <span className="mx-2 text-edge">/</span>
      <span className="tnum">{RELEASE.size}</span>
      <span className="mx-2 text-edge">/</span>
      {RELEASE.requires}
    </p>
  )
}
