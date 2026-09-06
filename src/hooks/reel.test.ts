import { describe, expect, it } from 'vitest'
import { CYCLE_MS, reelStateAt, stageReached } from './reel'
import { SCENARIOS } from '../content/platforms'

const COUNT = SCENARIOS.length

describe('reel sequence', () => {
  it('passes through every stage in order within one cycle', () => {
    const seen: string[] = []
    for (let t = 0; t < CYCLE_MS; t += 20) {
      const { stage } = reelStateAt(t, COUNT)
      if (seen[seen.length - 1] !== stage) seen.push(stage)
    }
    expect(seen).toEqual(['typing', 'reading', 'card', 'ladder', 'grabbing', 'saved'])
  })

  it('advances to the next scenario on the next cycle and wraps around', () => {
    expect(reelStateAt(0, COUNT).index).toBe(0)
    expect(reelStateAt(CYCLE_MS, COUNT).index).toBe(1)
    expect(reelStateAt(CYCLE_MS * (COUNT - 1), COUNT).index).toBe(COUNT - 1)
    // The wrap is the bit that silently breaks: one scenario short and the last one never shows.
    expect(reelStateAt(CYCLE_MS * COUNT, COUNT).index).toBe(0)
  })

  it('starts each cycle typing, never mid-sequence', () => {
    for (let i = 0; i < COUNT; i++) {
      expect(reelStateAt(CYCLE_MS * i, COUNT).stage).toBe('typing')
    }
  })

  it('keeps progress inside the beat', () => {
    for (let t = 0; t < CYCLE_MS * COUNT; t += 137) {
      const { progress } = reelStateAt(t, COUNT)
      expect(progress).toBeGreaterThanOrEqual(0)
      expect(progress).toBeLessThan(1)
    }
  })

  it('treats later stages as having reached earlier ones', () => {
    expect(stageReached('grabbing', 'card')).toBe(true)
    expect(stageReached('card', 'card')).toBe(true)
    expect(stageReached('typing', 'card')).toBe(false)
  })

  it('never produces a scenario index that is out of range', () => {
    for (let t = 0; t < CYCLE_MS * COUNT * 3; t += 511) {
      const { index } = reelStateAt(t, COUNT)
      expect(SCENARIOS[index]).toBeDefined()
    }
  })
})

describe('scenario data', () => {
  it('orders every ladder from largest to smallest, audio last', () => {
    for (const s of SCENARIOS) {
      const video = s.formats.filter((f) => f.label !== 'Audio only')
      const sorted = [...video].sort((a, b) => b.bytes - a.bytes)
      expect(video.map((f) => f.label)).toEqual(sorted.map((f) => f.label))
    }
  })

  it('picks a format that exists in its own ladder', () => {
    for (const s of SCENARIOS) {
      expect(s.formats.some((f) => f.label === s.pick)).toBe(true)
    }
  })
})
