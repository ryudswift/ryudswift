interface VideoCardProps {
  title: string
  description: string
  url: string
  duration: string
  badge: string
}

export default function VideoCard({ title, description, url, duration, badge }: VideoCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="card-hover block bg-surface border border-borderDefault rounded-pixel p-4 sm:p-6 mb-4 group"
    >
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="vhs-placeholder w-full sm:w-40 h-24 flex items-center justify-center border border-borderDefault rounded-pixel flex-shrink-0 group-hover:border-phosphor transition-colors">
          <span className="font-pixel text-pixel-xs text-phosphor group-hover:animate-blink">
            ▶ PLAY
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-mono text-body text-warmWhite font-semibold mb-1 group-hover:text-phosphor transition-colors">
            {title}
          </h3>
          <p className="font-mono text-sm text-warmMuted mb-2 line-clamp-2">
            {description}
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-data text-lg text-warmMuted">{duration}</span>
            <span className="font-pixel text-pixel-xxs bg-phosphor/15 border border-phosphor text-phosphor px-2 py-1 tracking-wider">
              {badge}
            </span>
          </div>
        </div>
      </div>
    </a>
  )
}
