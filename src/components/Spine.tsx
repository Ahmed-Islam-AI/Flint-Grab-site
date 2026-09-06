import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react'

// The page's own progress bar. One scroll value drives a fill and a descending packet, so reading
// the page and watching a transfer are the same gesture. It is the only decoration on the site that
// earns the accent, because it is the only decoration that is actually moving.
export function Spine() {
  const still = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 26, restDelta: 0.001 })
  const packet = useTransform(progress, (v) => `${v * 100}%`)

  if (still) return null

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed left-6 top-0 z-30 hidden h-full w-px bg-hairline lg:block"
    >
      <motion.div
        className="absolute inset-x-0 top-0 origin-top bg-spark/45"
        style={{ height: '100%', scaleY: progress }}
      />
      <motion.div className="absolute -left-[3px] h-[7px] w-[7px]" style={{ top: packet }}>
        <div className="h-full w-full rotate-45 bg-spark" />
      </motion.div>
    </div>
  )
}
