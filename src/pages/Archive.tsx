import { marked } from 'marked'
import { useInView } from '../hooks/useInView'
import ArticleCard from '../components/ArticleCard'
import VideoCard from '../components/VideoCard'

interface ArticleMeta {
  title: string
  date: string
  tag: string
  summary: string
  slug: string
}

function parseFrontmatter(raw: string): { meta: Partial<ArticleMeta>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!match) return { meta: {}, body: raw }

  const header = match[1]
  const body = match[2].trim()
  const meta: Partial<ArticleMeta> = {}

  for (const line of header.split('\n')) {
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    const val = line.slice(idx + 1).trim()
    if (key in { title: 1, date: 1, tag: 1, summary: 1 }) {
      (meta as Record<string, string>)[key] = val
    }
  }

  return { meta, body }
}

const articleModules = import.meta.glob('/src/content/*.md', { query: '?raw', import: 'default', eager: true })

const articles: (ArticleMeta & { content: string })[] = Object.entries(articleModules)
  .map(([path, raw]) => {
    const slug = path.split('/').pop()!.replace('.md', '')
    const { meta, body } = parseFrontmatter(raw as string)
    return {
      title: meta.title || slug,
      date: meta.date || '',
      tag: meta.tag || '',
      summary: meta.summary || '',
      slug,
      content: marked.parse(body) as string,
    }
  })
  .sort((a, b) => (a.date > b.date ? -1 : 1))

const VIDEOS = [
  {
    title: 'n8n Local Setup - Docker + Ngrok',
    description: 'The ultimate guide to getting n8n running on your own machine for free.',
    url: 'https://youtu.be/L9_kNsolv88',
    duration: 'Full tutorial',
    badge: 'FREE SELF-HOST',
  },
  {
    title: 'n8n Cloud Setup - Render',
    description: 'Learn how to self-host n8n in the cloud for free in just a few minutes.',
    url: 'https://youtu.be/kk0nkfdmg5s',
    duration: 'Quick setup',
    badge: 'CLOUD FREE TIER',
  },
  {
    title: 'n8n ULTIMATE COURSE (8+ Hours)',
    description: 'A comprehensive course designed to take you from beginner to expert.',
    url: 'https://youtu.be/JFRmgIGVuMY',
    duration: '8+ hours',
    badge: 'MASTERCLASS',
  },
  {
    title: 'Build Your First AI Business in 6 Hours',
    description: 'The ultimate beginner guide to building and launching an AI-powered business.',
    url: 'https://youtu.be/r0c7RhMFcww',
    duration: '6 hours',
    badge: 'BUSINESS',
  },
]

export default function Archive() {
  const { ref: articlesRef, isInView: articlesInView } = useInView({ threshold: 0.1 })
  const { ref: videosRef, isInView: videosInView } = useInView({ threshold: 0.1 })

  return (
    <section className="py-24 px-4">
      <div className="max-w-[800px] mx-auto">
        <div ref={articlesRef as React.RefObject<HTMLDivElement>} className="mb-16">
          <div className="mb-8">
            <span className="font-mono text-base text-phosphor">$ cat field_notes.log</span>
          </div>
          <div className={`transition-opacity duration-500 ${articlesInView ? 'opacity-100' : 'opacity-0'}`}>
            {articles.length === 0 ? (
              <p className="font-mono text-sm text-warmMuted">No articles yet. Add .md files to src/content/.</p>
            ) : (
              articles.map((article) => (
                <ArticleCard key={article.slug} {...article} />
              ))
            )}
          </div>
        </div>

        <div ref={videosRef as React.RefObject<HTMLDivElement>}>
          <div className="mb-8">
            <span className="font-mono text-base text-phosphor">$ ls video_archive/</span>
          </div>
          <div className={`transition-opacity duration-500 ${videosInView ? 'opacity-100' : 'opacity-0'}`}>
            {VIDEOS.map((video) => (
              <VideoCard key={video.title} {...video} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
