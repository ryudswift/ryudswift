import { useEffect, useState } from 'react'

const BOOT_LINES = [
  '> INITIALIZING...',
  '> LOADING PROFILE MODULE...',
  '> CONNECTION ESTABLISHED',
  '> WELCOME, OPERATIVE',
]

interface BootSequenceProps {
  onComplete: () => void
}

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const [currentLine, setCurrentLine] = useState(0)
  const [showContent, setShowContent] = useState(false)
  const [flicker, setFlicker] = useState(false)

  useEffect(() => {
    if (currentLine < BOOT_LINES.length) {
      const timeout = setTimeout(() => setCurrentLine((prev) => prev + 1), 600)
      return () => clearTimeout(timeout)
    }

    const flickerTimeout = setTimeout(() => setFlicker(true), 400)
    const contentTimeout = setTimeout(() => {
      setShowContent(true)
      onComplete()
    }, 900)

    return () => {
      clearTimeout(flickerTimeout)
      clearTimeout(contentTimeout)
    }
  }, [currentLine, onComplete])

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center px-4 ${flicker ? 'animate-flicker' : ''}`}>
      <div className="w-full max-w-[800px] mb-8">
        {BOOT_LINES.slice(0, currentLine).map((line, i) => (
          <div
            key={i}
            className="font-mono text-sm sm:text-base text-phosphor mb-2 boot-line"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {line}
          </div>
        ))}
        {currentLine < BOOT_LINES.length && (
          <div className="font-mono text-sm sm:text-base text-phosphor">
            <span className="typing-cursor" />
          </div>
        )}
      </div>

      {showContent && (
        <div className="text-center animate-fade-in-up">
          <div className="mb-6 inline-block">
            <img
              src="https://github.com/ryudswift.png"
              alt="RyudSwift avatar"
              className="w-24 h-24 rounded-pixel border-2 border-phosphor pixelated hover:shadow-[0_0_20px_rgba(90,122,90,0.4)] transition-shadow"
            />
          </div>

          <h1 className="font-pixel text-pixel-hero text-phosphor glow-text mb-4">
            RYUDSWIFT
          </h1>

          <p className="font-mono text-body text-warmWhite mb-4">
            Automation Specialist // Systems Architect
          </p>

          <p className="font-mono text-sm text-warmMuted max-w-xl mx-auto leading-relaxed">
            Bridging the gap between technology and real-world outcomes. Building systems that solve actual problems — not automation for automation's sake.
          </p>

          <div className="mt-12 animate-bounce-subtle">
            <span className="font-pixel text-pixel-xs text-phosphor opacity-60">
              ▼ SCROLL
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
