import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'li' | 'section'
}

// One reveal, used everywhere, so the whole page enters with the same hand. Transform and opacity
// only, and it collapses to a plain render when the machine asks for reduced motion.
export function Reveal({ children, delay = 0, className, as = 'div' }: Props) {
  const still = useReducedMotion()
  const Tag = motion[as]

  return (
    <Tag
      className={className}
      initial={still ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  )
}
