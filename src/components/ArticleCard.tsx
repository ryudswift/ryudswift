import { useState } from 'react'

interface ArticleCardProps {
  title: string
  date: string
  tag: string
  summary: string
  content: string
  expandedByDefault?: boolean
}

export default function ArticleCard({
  title, date, tag, summary, content, expandedByDefault = false,
}: ArticleCardProps) {
  const [isExpanded, setIsExpanded] = useState(expandedByDefault)

  return (
    <div className="bg-surface border border-borderDefault border-l-[3px] border-l-phosphor rounded-pixel mb-3 overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left p-4 sm:p-6 cursor-pointer hover:bg-elevated/30 transition-colors"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="font-mono text-base sm:text-lg text-warmWhite font-semibold mb-2">
              {title}
            </h3>
            <div className="flex items-center gap-3 flex-wrap mb-2">
              <span className="font-data text-base text-warmMuted">{date}</span>
              <span className="font-pixel text-pixel-xxs bg-phosphor/10 border border-phosphor/30 text-phosphor px-2 py-0.5">
                {tag}
              </span>
            </div>
            <p className="font-mono text-sm text-warmMuted">{summary}</p>
          </div>
          <span className="font-pixel text-pixel-xs text-phosphor flex-shrink-0 mt-1">
            {isExpanded ? '[-]' : '[+]'}
          </span>
        </div>
      </button>

      <div className={`article-content ${isExpanded ? 'expanded' : ''}`}>
        <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 border-t border-borderDefault">
          <div
            className="font-mono text-sm text-warmWhite leading-relaxed article-md"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </div>
  )
}
