interface ProjectCardProps {
  name: string
  description: string
  liveUrl: string
  githubUrl: string
  tags: string[]
  status: string
}

export default function ProjectCard({
  name, description, liveUrl, githubUrl, tags, status,
}: ProjectCardProps) {
  return (
    <div className="card-hover-up bg-surface border border-borderDefault rounded-pixel p-6 relative">
      <span className="absolute top-4 right-4 font-pixel text-pixel-xxs text-phosphor tracking-widest">
        {status}
      </span>

      <div className="font-pixel text-2xl text-phosphor mb-4">◈</div>

      <h3 className="font-mono text-lg text-warmWhite font-semibold mb-2">{name}</h3>

      <p className="font-mono text-sm text-warmMuted leading-relaxed mb-4">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-pixel text-pixel-xxs bg-warmHighlight/10 text-warmHighlight border border-warmHighlight/30 px-2 py-1 tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a href={liveUrl} target="_blank" rel="noopener noreferrer"
          className="font-mono text-sm text-warmLink hover:text-warmWhite transition-colors">
          → LIVE
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer"
          className="font-mono text-sm text-warmLink hover:text-warmWhite transition-colors">
          → SOURCE
        </a>
      </div>
    </div>
  )
}
