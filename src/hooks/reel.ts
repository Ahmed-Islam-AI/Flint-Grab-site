import { useEffect, useRef, useState } from 'react'

export type Stage = 'typing' | 'reading' | 'card' | 'ladder' | 'grabbing' | 'saved'

// One pass of the reel, in milliseconds. Kept as data so the sequence can be reasoned about and
// tested without rendering anything.
const BEATS: [Stage, number][] = [
  ['typing', 2000],
  ['reading', 2600],
  ['card', 1100],
  ['ladder', 2800],
  ['grabbing', 3400],
  ['saved', 900],
]

export const CYCLE_MS = BEATS.reduce((sum, [, ms]) => sum + ms, 0)

export type ReelState = {
  index: number
  stage: Stage
  /** 0 to 1 through the current beat. */
  progress: number
  /** How far the reel is through the whole pass, for beats that need to know what came before. */
  elapsed: number
}

// Pure: the same elapsed time always yields the same frame. This is what makes the reel resumable,
// testable, and immune to a dropped interval tick.
export function reelStateAt(elapsedMs: number, scenarioCount: number): ReelState {
  const t = Math.max(0, elapsedMs)
  const index = Math.floor(t / CYCLE_MS) % scenarioCount
  const local = t % CYCLE_MS

  let start = 0
  for (const [stage, duration] of BEATS) {
    if (local < start + duration) {
      return { index, stage, progress: (local - start) / duration, elapsed: local }
    }
    start += duration
  }

  // Only reachable on a floating-point edge at the very end of a pass.
  return { index, stage: 'saved', progress: 1, elapsed: local }
}

export function stageReached(stage: Stage, target: Stage): boolean {
  return BEATS.findIndex(([s]) => s === stage) >= BEATS.findIndex(([s]) => s === target)
}

type Options = { count: number; running: boolean; still: boolean }

export function useReel({ count, running, still }: Options): ReelState {
  // Reduced motion gets one complete frame with the ladder fully drawn, rather than nothing.
  const frozen = reelStateAt(BEATS[0][1] + BEATS[1][1] + BEATS[2][1] + BEATS[3][1] - 1, count)
  const [state, setState] = useState<ReelState>(() => (still ? frozen : reelStateAt(0, count)))
  const elapsed = useRef(0)

  useEffect(() => {
    if (still || !running) return

    let last = performance.now()
    // 60ms is fast enough for the typewriter and slow enough to stay off the render-per-frame path.
    // The bars interpolate between ticks with a CSS transition rather than more React work.
    const id = window.setInterval(() => {
      const now = performance.now()
      elapsed.current += now - last
      last = now
      setState(reelStateAt(elapsed.current, count))
    }, 60)

    return () => window.clearInterval(id)
  }, [count, running, still])

  return state
}
