import { useState } from 'react'
import BootSequence from '../components/BootSequence'

export default function Hero() {
  const [bootComplete, setBootComplete] = useState(false)

  return (
    <section id="hero" className="min-h-screen relative">
      {!bootComplete ? (
        <BootSequence onComplete={() => setBootComplete(true)} />
      ) : (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 animate-fade-in-up">
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

          <p className="font-mono text-sm text-warmMuted max-w-xl mx-auto leading-relaxed text-center">
            Bridging the gap between technology and real-world outcomes. Building systems that solve actual problems — not automation for automation's sake.
          </p>

          <div className="mt-12 animate-bounce-subtle">
            <span className="font-pixel text-pixel-xs text-phosphor opacity-60">
              ▼ SCROLL
            </span>
          </div>
        </div>
      )}
    </section>
  )
}
