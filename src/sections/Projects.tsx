import { useInView } from '../hooks/useInView'
import ProjectCard from '../components/ProjectCard'

const PROJECTS = [
  {
    name: 'Profile v1.21',
    description: 'The original multi-themed profile page with live GitHub stats, 3D badge, particle effects, and 6 switchable themes.',
    liveUrl: 'https://ryudswift.github.io/Profile/',
    githubUrl: 'https://github.com/ryudswift/Profile',
    tags: ['HTML', 'Particles.js', 'Live API'],
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
  {
    name: 'SuOS Lead Gen Dash',
    description: 'Lead generation dashboard with automation pipeline. The frontend I built for my own backend — custom, fast, and understood framework-by-framework.',
    liveUrl: 'https://ryudswift.github.io/SuOS/',
    githubUrl: 'https://github.com/ryudswift/SuOS',
    tags: ['React', 'Dashboard', 'Automation'],
    status: 'LIVE',
  },
  {
    name: 'WebDev Showcase',
    description: 'Development showcase — experiments in frontend frameworks, custom components, and speed optimization.',
    liveUrl: 'https://ryudswift.github.io/devDash/',
    githubUrl: 'https://github.com/ryudswift/devDash',
    tags: ['Frontend', 'Showcase'],
    status: 'LIVE',
  },
  {
    name: 'n8n startHERE',
    description: 'The starting point for anyone asking about n8n — video guides for Docker and Render setups, plus the 8-hour masterclass.',
    liveUrl: 'https://ryudswift.github.io/startHERE/',
    githubUrl: 'https://github.com/ryudswift/startHERE',
    tags: ['n8n', 'Education', 'Videos'],
    status: 'LIVE',
  },
]

export default function Projects() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="projects" ref={ref as React.RefObject<HTMLElement>} className="py-24 px-4">
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
