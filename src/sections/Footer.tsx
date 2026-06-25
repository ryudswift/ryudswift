import GlitchButton from '../components/GlitchButton'

export default function Footer() {
  return (
    <footer className="border-t border-borderDefault py-8 px-4">
      <div className="max-w-[800px] mx-auto text-center">
        <div className="mb-4">
          <GlitchButton href="https://github.com/ryudswift">
            GITHUB
          </GlitchButton>
        </div>
        <div className="font-pixel text-pixel-xxs text-phosphor tracking-widest animate-blink-slow mb-2">
          SYSTEM ONLINE
        </div>
        <div className="font-data text-base text-warmMuted mb-4">
          © 2025 RYUDSWIFT // ALL SYSTEMS NOMINAL
        </div>
        <p className="font-mono text-xs text-borderHover italic">
          "Automation isn't just about workflows, it's about solving real problems."
        </p>
      </div>
    </footer>
  )
}
