import { useInView } from '../hooks/useInView'
import ArticleCard from '../components/ArticleCard'

const ARTICLES = [
  {
    title: 'Set Up Your Own n8n Instance for FREE (Yes, Really)',
    date: '2025-07-03',
    tag: 'GUIDE',
    summary: "A complete system for running n8n without paying a cent. You need a small activation deposit (around $100) that gets sent back same-day — it's a human verification check, not a fee.",
    content: `Here's the full system to get n8n running at zero cost:

**The Activation Deposit**
Most platforms require a small deposit to verify you're a real human with a real bank account. As of my last check, it's around $100. The key: they send it back to you, usually same-day. It's NOT a fee — it's a verification hold.

**Option 1: Local with Docker + Ngrok (Recommended for Privacy)**
Run n8n on your own machine. Your data never leaves your hardware. Perfect for sensitive workflows.
- Install Docker Desktop
- Pull the n8n image
- Configure Ngrok for external webhooks
- Your data stays LOCAL

**Option 2: Cloud with Render (Recommended for 24/7 Uptime)**
Host in the cloud for free on Render's tier.
- Sign up for Render
- Deploy n8n using their blueprint
- Configure your domain
- Instance runs 24/7 on free tier

**The Real Cost**
Time. That's it. Both options above are genuinely free to run. What you're really investing is the time to learn the system — and that pays dividends.

**Next Steps**
Watch the video guides in the Archive section above.`,
    expandedByDefault: true,
  },
  {
    title: 'Why I Automate: Philosophy of Systems Over Scripts',
    date: '2025-06-20',
    tag: 'THOUGHTS',
    summary: "Automation isn't about workflows — it's about solving real problems. Start with the challenge, not the tool.",
    content: 'Automation isn\'t just about workflows, it\'s about solving real problems. Start with the challenge/outcome… learning to share who you are as well and not be another bot in the industry of… "Life."',
    expandedByDefault: false,
  },
  {
    title: 'From Vibe Coding to Understanding: My Dev Journey',
    date: '2025-06-10',
    tag: 'JOURNAL',
    summary: 'I\'m too impatient to learn from books. I build to learn — servers, frontends, backends, and everything between.',
    content: 'Honestly, I\'m too impatient to formally "learn" a language from a book. My real passion is hands-on development and systems work. I build servers, frontends, backends, and everything between — learning framework by framework as I go.',
    expandedByDefault: false,
  },
  {
    title: 'Building a Lead Gen System That Actually Works',
    date: '2025-05-28',
    tag: 'PROJECT',
    summary: 'The anatomy of a proper lead generation setup — from capture to nurture to conversion.',
    content: 'The SuOS Lead Gen Dashboard is a custom frontend I built for my own backend — fast, understood framework-by-framework, and designed to convert. It captures leads, nurtures them through automated sequences, and tracks conversion metrics in real-time.',
    expandedByDefault: false,
  },
]

export default function Blog() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="blog" ref={ref as React.RefObject<HTMLElement>} className="py-24 px-4">
      <div className="max-w-[800px] mx-auto">
        <div className="mb-8">
          <span className="font-mono text-base text-phosphor">$ cat field_notes.log</span>
        </div>

        <div className={`transition-opacity duration-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          {ARTICLES.map((article) => (
            <ArticleCard key={article.title} {...article} />
          ))}
        </div>
      </div>
    </section>
  )
}
