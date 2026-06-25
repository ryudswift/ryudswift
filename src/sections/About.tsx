import { useInView } from '../hooks/useInView'
import { useGitHubStats } from '../hooks/useGitHubStats'
import TypewriterText from '../components/TypewriterText'
import CountUp from '../components/CountUp'

const CAPABILITIES = [
  { icon: '⚙️', label: 'Workflow Automation', detail: 'n8n, Make.com, custom pipelines' },
  { icon: '🤖', label: 'AI Integration', detail: 'LLM orchestration, AI agents' },
  { icon: '📈', label: 'SaaS Strategy', detail: 'Lean GTM, business automation' },
  { icon: '🐍', label: 'Development', detail: 'Python, JS/TS, full-stack systems' },
  { icon: '🔒', label: 'Systems & Security', detail: 'Server admin, secure deployments' },
  { icon: '✍️', label: 'Content & Strategy', detail: 'Copywriting, community building' },
]

export default function About() {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.2 })
  const { stats, loading } = useGitHubStats()

  return (
    <section id="about" ref={sectionRef as React.RefObject<HTMLElement>} className="py-24 px-4">
      <div className="max-w-[800px] mx-auto">
        <div className="mb-8">
          <span className="font-mono text-base text-phosphor">$ whoami</span>
        </div>

        <div className="mb-12 min-h-[120px]">
          <TypewriterText
            text="I'm an automation specialist and business strategist passionate about bridging the gap between technology and real-world outcomes. My focus is on building efficient systems and workflows that solve actual problems, not just for the sake of automation itself."
            speed={12}
            startOnView={true}
            isInView={isInView}
            className="font-mono text-body text-warmWhite leading-relaxed"
          />
        </div>

        <div className="mb-12">
          <div className="mb-6">
            <span className="font-mono text-base text-phosphor">$ cat capabilities.txt</span>
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-opacity duration-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
            {CAPABILITIES.map((cap, i) => (
              <div
                key={cap.label}
                className="card-hover bg-surface border border-borderDefault rounded-pixel p-4"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">{cap.icon}</span>
                  <div>
                    <h3 className="font-mono text-base text-warmWhite font-semibold mb-1">
                      {cap.label}
                    </h3>
                    <p className="font-mono text-sm text-warmMuted">{cap.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-6">
            <span className="font-mono text-base text-phosphor">$ fetch github_stats --live</span>
          </div>

          <div className={`grid grid-cols-3 gap-4 transition-opacity duration-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-surface border border-borderDefault rounded-pixel p-4 text-center">
              <div className="font-data text-data-lg text-phosphor mb-1">
                {loading ? '...' : <CountUp end={stats.repos} />}
              </div>
              <div className="font-pixel text-pixel-xxs text-warmMuted tracking-widest">
                REPOSITORIES
              </div>
            </div>
            <div className="bg-surface border border-borderDefault rounded-pixel p-4 text-center">
              <div className="font-data text-data-lg text-phosphor mb-1">
                {loading ? '...' : <CountUp end={stats.stars} suffix="+" />}
              </div>
              <div className="font-pixel text-pixel-xxs text-warmMuted tracking-widest">
                STARS EARNED
              </div>
            </div>
            <div className="bg-surface border border-borderDefault rounded-pixel p-4 text-center">
              <div className="font-data text-data-lg text-phosphor mb-1">
                {loading ? '...' : <CountUp end={stats.followers} />}
              </div>
              <div className="font-pixel text-pixel-xxs text-warmMuted tracking-widest">
                FOLLOWERS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
