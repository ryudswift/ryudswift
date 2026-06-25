import { useEffect, useRef, useState } from 'react'
import { useInView } from '../hooks/useInView'

interface CountUpProps {
  end: number
  duration?: number
  suffix?: string
  className?: string
}

export default function CountUp({ end, duration = 1500, suffix = '', className = '' }: CountUpProps) {
  const [count, setCount] = useState(0)
  const { ref, isInView } = useInView({ threshold: 0.3 })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    const startTime = performance.now()
    let animationFrame: number

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, end, duration])

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className={className}>
      {count}{suffix}
    </span>
  )
}
