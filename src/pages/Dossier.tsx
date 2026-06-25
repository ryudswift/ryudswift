import { useInView } from '../hooks/useInView'
import ProjectCard from '../components/ProjectCard'

const PROJECTS = [
  {
    name: 'n8n startHERE',
    description: 'The starting point for anyone asking about n8n — video guides for Docker and Render setups, plus the 8-hour masterclass.',
    liveUrl: 'https://ryudswift.github.io/startHERE/',
    githubUrl: 'https://github.com/ryudswift/startHERE',
    tags: ['n8n', 'Education', 'Videos'],
    status: 'LIVE',
  },
  {
    name: 'LIVE REVIEW',
    description: 'Reddit legacy project — a review system built for the r/n8n and r/automation communities.',
    liveUrl: 'https://ryudswift.github.io/Profile-Review/',
    githubUrl: 'https://github.com/ryudswift/Profile-Review',
    tags: ['Community', 'Review System'],
    status: 'LIVE',
  },
]

export default function Dossier() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-24 px-4">
      <div className="max-w-[800px] mx-auto">
        <div className="mb-8">
          <span className="font-mono text-base text-phosphor">$ ls projects/ --detailed</span>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-opacity duration-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
