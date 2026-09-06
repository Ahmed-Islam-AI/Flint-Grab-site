import { useRef } from 'react'
import { useInView, useReducedMotion } from 'motion/react'
import { Link2 } from 'lucide-react'
import { SCENARIOS } from '@/content/platforms'
import { useReel, stageReached } from '@/hooks/reel'
import { QualityLadder } from './QualityLadder'
import { PlatformMark } from './glyphs'

// Four segments, each pulling a different byte range, so they never finish together. Fixed rates
// rather than random ones — the reel must look the same on every pass.
const RATES = [1, 0.86, 0.94, 0.72]

export function Reel() {
  const box = useRef<HTMLDivElement>(null)
  const inView = useInView(box, { amount: 0.4 })
  const still = useReducedMotion()
  const { index, stage, progress } = useReel({
    count: SCENARIOS.length,
    running: inView,
    still: !!still,
  })

  const s = SCENARIOS[index]
  const typed = stage === 'typing' ? Math.ceil(progress * s.url.length) : s.url.length
  const rows = stage === 'ladder' ? Math.ceil(progress * s.formats.length) : s.formats.length

  return (
    <div
      ref={box}
      className="mx-auto w-full max-w-[560px] rounded-[--radius-lg] border border-hairline bg-surface"
    >
      <div className="flex items-center gap-2.5 border-b border-hairline px-4 py-3">
        <Link2 className="h-4 w-4 shrink-0 text-faint" strokeWidth={1.5} />
        <span className="tnum truncate text-[13px] text-ink">
          {s.url.slice(0, typed)}
          {stage === 'typing' && <span className="ml-px inline-block w-px bg-spark">&nbsp;</span>}
        </span>
      </div>

      <div className="relative min-h-[330px] px-4 py-4">
        {!stageReached(stage, 'card') && <Waiting reading={stage === 'reading'} />}

        {stageReached(stage, 'card') && (
          <>
            <div className="flex gap-3.5">
              <div className="h-[63px] w-[112px] shrink-0 overflow-hidden rounded-[4px] bg-raised">
                <img
                  src={s.poster}
                  alt=""
                  loading="lazy"
                  width={640}
                  height={360}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0 pt-0.5">
                <p className="truncate text-[14px] text-ink">{s.title}</p>
                <p className="mt-1 flex items-center gap-1.5 text-[12px] text-muted">
                  <PlatformMark name={s.platform} className="h-3 w-3" />
                  {s.platform}
                  <span className="text-hairline">/</span>
                  <span className="tnum">{s.duration}</span>
                </p>
              </div>
            </div>

            <div className="mt-4">
              <QualityLadder
                formats={s.formats}
                pick={s.pick}
                shown={rows}
                chosen={stageReached(stage, 'grabbing')}
              />
            </div>
          </>
        )}

        {stageReached(stage, 'grabbing') && (
          <Grabbing done={stage === 'saved'} progress={stage === 'saved' ? 1 : progress} />
        )}
      </div>
    </div>
  )
}

// The shape of the answer before the answer arrives, which is what the app itself draws. A spinner
// would say "wait"; this says what is about to be there, and it keeps the box from sitting empty
// for the first two seconds of every pass.
function Waiting({ reading }: { reading: boolean }) {
  return (
    <div>
      <div className="flex gap-3.5">
        <div className="h-[63px] w-[112px] shrink-0 rounded-[4px] bg-raised" />
        <div className="w-full space-y-2 pt-1.5">
          <div className="h-[9px] w-3/5 rounded-full bg-raised" />
          <div className="h-[9px] w-1/4 rounded-full bg-raised" />
        </div>
      </div>

      <div className="mt-6 space-y-[11px]">
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="h-[9px] w-[74px] shrink-0 rounded-full bg-raised" />
            <div className="h-[3px] flex-1 rounded-full bg-raised" />
            <div className="h-[9px] w-[52px] shrink-0 rounded-full bg-raised" />
          </div>
        ))}
      </div>

      <div className="mt-7 border-t border-hairline pt-3.5">
        <p className="text-[13px] text-muted">
          {reading ? 'Reading this video' : 'Waiting for a link'}
        </p>
        <span className="mt-2.5 block h-[3px] overflow-hidden rounded-full bg-active">
          {reading ? (
            <span className="sweep block h-full w-1/3 rounded-full bg-spark" />
          ) : (
            <span className="block h-full w-0" />
          )}
        </span>
      </div>
    </div>
  )
}

function Grabbing({ progress, done }: { progress: number; done: boolean }) {
  return (
    <div className="mt-4 border-t border-hairline pt-3.5">
      <div className="flex gap-1">
        {RATES.map((rate, i) => (
          <span key={i} className="h-[3px] flex-1 overflow-hidden rounded-full bg-active">
            <span
              className={`block h-full rounded-full transition-[width] duration-200 ease-linear ${
                done ? 'bg-done' : 'bg-spark'
              }`}
              style={{ width: `${Math.min(1, progress * rate) * 100}%` }}
            />
          </span>
        ))}
      </div>
      <p className="mt-2.5 text-[12px] text-muted">
        {done ? 'Saved to Downloads' : '4 connections, one file'}
      </p>
    </div>
  )
}
