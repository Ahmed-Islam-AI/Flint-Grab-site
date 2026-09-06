// Brand marks only. Every one is drawn monochrome in currentColor — DESIGN.md §8.2 forbids
// full-colour platform marks, for legibility, restraint, and trademark safety. UI icons come from
// lucide-react, not from here.

type Props = { className?: string }

// The knapped F: an F cut like struck flint, its stem carried past the baseline to a point.
export function Mark({ className }: Props) {
  return (
    <svg viewBox="12 6 43 56" fill="currentColor" aria-hidden className={className}>
      <path d="M12 6L55 6L47 20L28 20L28 28L48 28L41 41L28 41L28 51L20 62L12 51Z" />
    </svg>
  )
}

export function Windows({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
    </svg>
  )
}

const PATHS: Record<string, string> = {
  YouTube:
    'M23 7.5a3 3 0 0 0-2.1-2.1C19 4.8 12 4.8 12 4.8s-7 0-8.9.6A3 3 0 0 0 1 7.5 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.5a3 3 0 0 0 2.1 2.1c1.9.6 8.9.6 8.9.6s7 0 8.9-.6a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.5 31 31 0 0 0-.5-4.5zM9.8 15.3V8.7l5.8 3.3z',
  X: 'M18.9 2H22l-6.8 7.8L23 22h-6.3l-4.9-6.4L6.2 22H3l7.3-8.3L2.4 2h6.4l4.4 5.9zm-1.1 18h1.7L7.3 3.8H5.5z',
  Instagram:
    'M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.7-.1 4.9-.1zm0 3.9a5.9 5.9 0 1 0 0 11.8 5.9 5.9 0 0 0 0-11.8zm0 9.7a3.8 3.8 0 1 1 0-7.6 3.8 3.8 0 0 1 0 7.6zm7.5-9.9a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0z',
  TikTok:
    'M16.6 5.8a4.9 4.9 0 0 1-1.1-3.2h-3.3v13.2a2.8 2.8 0 1 1-2-2.7V9.7a6.1 6.1 0 1 0 5.3 6V9.1a8.2 8.2 0 0 0 4.8 1.5V7.3a4.8 4.8 0 0 1-3.7-1.5z',
  Reddit:
    'M22 12a2 2 0 0 0-3.4-1.4 9.8 9.8 0 0 0-5.3-1.7l.9-4.2 2.9.6a1.5 1.5 0 1 0 .2-1.1l-3.3-.7a.5.5 0 0 0-.6.4l-1 4.9a9.8 9.8 0 0 0-5.4 1.7A2 2 0 1 0 4.5 14a4 4 0 0 0 0 .6c0 3.1 3.4 5.6 7.5 5.6s7.5-2.5 7.5-5.6a4 4 0 0 0 0-.6A2 2 0 0 0 22 12zM8 13.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm7.9 3.9a4.9 4.9 0 0 1-3.9 1.3 4.9 4.9 0 0 1-3.9-1.3.4.4 0 0 1 .6-.6 4.2 4.2 0 0 0 3.3 1 4.2 4.2 0 0 0 3.3-1 .4.4 0 1 1 .6.6zm-.4-2.4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z',
  Facebook:
    'M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z',
  Twitch:
    'M4.3 2 2.5 6.5v14.2h4.9V24h2.7l2.7-3.3h4l5.2-5.2V2zm15.6 12.5-3 3h-4.9l-2.6 2.6v-2.6H5.7V4h14.2zM17 7.1h-1.8v5.3H17zm-4.9 0h-1.8v5.3h1.8z',
  Vimeo:
    'M23.9 6.4c-.1 2.3-1.7 5.5-4.8 9.5-3.2 4.2-5.9 6.3-8.1 6.3-1.4 0-2.5-1.3-3.5-3.8L5.6 12c-.7-2.5-1.4-3.8-2.2-3.8-.2 0-.7.3-1.6 1L1 8c1-.9 1.9-1.7 2.9-2.6 1.3-1.1 2.3-1.7 2.9-1.8 1.6-.2 2.6.9 3 3.3.4 2.6.7 4.2.9 4.8.5 2.3 1 3.4 1.6 3.4.5 0 1.2-.7 2.1-2.2.9-1.5 1.4-2.6 1.5-3.4.1-1.3-.4-2-1.5-2-.5 0-1 .1-1.6.4 1.1-3.5 3.1-5.2 6.2-5.1 2.2.1 3.3 1.6 3.2 4.4z',
}

export const PLATFORMS = Object.keys(PATHS)

export function PlatformMark({ name, className }: Props & { name: string }) {
  const d = PATHS[name]
  if (!d) return null
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d={d} />
    </svg>
  )
}
