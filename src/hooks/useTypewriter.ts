import { useEffect, useState } from 'react'

interface UseTypewriterOptions {
  text: string
  speed?: number
  delay?: number
  startOnView?: boolean
  isInView?: boolean
}

export function useTypewriter(options: UseTypewriterOptions) {
  const { text, speed = 15, delay = 0, startOnView = false, isInView = true } = options
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (startOnView && !isInView) return
    if (hasStarted) return
    const startTimeout = setTimeout(() => setHasStarted(true), delay)
    return () => clearTimeout(startTimeout)
  }, [startOnView, isInView, delay, hasStarted])

  useEffect(() => {
    if (!hasStarted) return
    if (displayText.length >= text.length) {
      setIsComplete(true)
      return
    }
    const timeout = setTimeout(() => {
      setDisplayText(text.slice(0, displayText.length + 1))
    }, speed)
    return () => clearTimeout(timeout)
  }, [hasStarted, displayText, text, speed])

  return { displayText, isComplete, hasStarted }
}
