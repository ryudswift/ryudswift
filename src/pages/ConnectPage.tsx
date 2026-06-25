import { useInView } from '../hooks/useInView'
import ChannelButton from '../components/ChannelButton'

const CHANNELS = [
  {
    platform: 'REDDIT',
    handle: 'u/RyudSwift',
    url: 'https://www.reddit.com/user/ryudswift/',
    copyText: 'u/RyudSwift',
  },
  {
    platform: 'GITHUB',
    handle: 'ryudswift',
    url: 'https://github.com/ryudswift',
    copyText: 'ryudswift',
  },
]

export default function ConnectPage() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-24 px-4">
      <div className="max-w-[600px] mx-auto">
        <div className="mb-8">
          <span className="font-mono text-base text-phosphor">$ open transmission_channel</span>
        </div>

        <p className="font-mono text-body text-warmMuted mb-8 leading-relaxed">
          I'm always open to discussing new ideas, projects, or just chatting about the future of automation and SaaS. Send a transmission:
        </p>

        <div className={`transition-opacity duration-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          {CHANNELS.map((channel) => (
            <ChannelButton key={channel.platform} {...channel} />
          ))}
        </div>
      </div>
    </section>
  )
}
