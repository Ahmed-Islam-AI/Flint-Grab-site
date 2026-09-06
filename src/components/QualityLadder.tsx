import type { Format } from '@/content/platforms'

type Props = {
  formats: Format[]
  pick: string
  /** How many rows have written in so far. Omit to show all of them. */
  shown?: number
  /** Highlight the picked row as chosen rather than merely recommended. */
  chosen?: boolean
}

// Fifty-three formats reduced to one row per resolution, each with a bar showing its size against
// the others. The bar is the point: it makes the trade-off legible without reading four numbers and
// doing the arithmetic yourself.
export function QualityLadder({ formats, pick, shown, chosen = false }: Props) {
  const visible = shown === undefined ? formats.length : shown
  const largest = Math.max(...formats.map((f) => f.bytes))

  return (
    <ul className="space-y-px">
      {formats.map((f, i) => {
        const isPick = f.label === pick
        const on = i < visible
        return (
          <li
            key={f.label}
            className={`flex items-center gap-3 rounded-[4px] px-2 py-[7px] transition-all duration-300 ${
              isPick && chosen ? 'bg-spark/10' : ''
            }`}
            style={{
              opacity: on ? 1 : 0,
              transform: on ? 'none' : 'translateY(6px)',
              transitionDelay: `${Math.min(i, 8) * 20}ms`,
            }}
          >
            <span
              className={`w-[74px] shrink-0 text-[12.5px] ${
                isPick && chosen ? 'text-spark' : 'text-ink'
              }`}
            >
              {f.label}
            </span>

            <span className="h-[3px] flex-1 overflow-hidden rounded-full bg-active">
              <span
                className={`block h-full rounded-full transition-[width] duration-500 ease-out ${
                  isPick && chosen ? 'bg-spark' : 'bg-done'
                }`}
                style={{ width: on ? `${(f.bytes / largest) * 100}%` : '0%' }}
              />
            </span>

            <span className="tnum w-[68px] shrink-0 text-right text-[12px] text-muted">
              {f.estimated ? '≈' : ''}
              {f.size}
            </span>
          </li>
        )
      })}
    </ul>
  )
}
