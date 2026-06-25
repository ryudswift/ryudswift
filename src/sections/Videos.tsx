import { useInView } from '../hooks/useInView'
import VideoCard from '../components/VideoCard'

const VIDEOS = [
  {
    title: 'n8n Local Setup — Docker + Ngrok',
    description: 'The ultimate guide to getting n8n running on your own machine for free. Best for long-running tasks and situations where maintaining control over private data is critical.',
    url: 'https://youtu.be/L9_kNsolv88',
    duration: 'Full tutorial',
    badge: 'FREE SELF-HOST',
  },
  {
    title: 'n8n Cloud Setup — Render',
    description: 'Learn how to self-host n8n in the cloud for free in just a few minutes. Note: data processed on third-party servers — understand AI regulations and data usage.',
    url: 'https://youtu.be/kk0nkfdmg5s',
    duration: 'Quick setup',
    badge: 'CLOUD FREE TIER',
  },
  {
    title: 'n8n ULTIMATE COURSE (8+ Hours)',
    description: 'A comprehensive course designed to take you from beginner to expert, covering everything you need to sell high-value AI workflows.',
    url: 'https://youtu.be/JFRmgIGVuMY',
    duration: '8+ hours',
    badge: 'MASTERCLASS',
  },
  {
    title: 'Build Your First AI Business in 6 Hours',
    description: 'The ultimate beginner guide to building and launching an AI-powered business from scratch using automation skills.',
    url: 'https://youtu.be/r0c7RhMFcww',
    duration: '6 hours',
    badge: 'BUSINESS',
  },
]

export default function Videos() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="videos" ref={ref as React.RefObject<HTMLElement>} className="py-24 px-4">
      <div className="max-w-[800px] mx-auto">
        <div className="mb-8">
          <span className="font-mono text-base text-phosphor">$ ls video_archive/</span>
        </div>

        <div className={`transition-opacity duration-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          {VIDEOS.map((video) => (
            <VideoCard key={video.title} {...video} />
          ))}
        </div>
      </div>
    </section>
  )
}
