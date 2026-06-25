import { useEffect, useRef } from 'react'
import { useTypewriter } from '../hooks/useTypewriter'

interface TypewriterTextProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  showCursor?: boolean
  startOnView?: boolean
  isInView?: boolean
  onComplete?: () => void
  as?: keyof JSX.IntrinsicElements
}

export default function TypewriterText({
  text, speed = 15, delay = 0, className = '',
  showCursor = true, startOnView = false, isInView = true,
  onComplete, as: Component = 'span',
}: TypewriterTextProps) {
  const { displayText, isComplete } = useTypewriter({ text, speed, delay, startOnView, isInView })
  const calledRef = useRef(false)

  useEffect(() => {
    if (isComplete && onComplete && !calledRef.current) {
      calledRef.current = true
      onComplete()
    }
  }, [isComplete, onComplete])

  return (
    <Component className={className}>
      {displayText}
      {showCursor && <span className="typing-cursor" aria-hidden="true" />}
    </Component>
  )
}
