import { useState } from 'react'

interface ChannelButtonProps {
  platform: string
  handle: string
  url: string
  copyText: string
}

export default function ChannelButton({ platform, handle, url, copyText }: ChannelButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(copyText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="card-hover flex items-center justify-between bg-surface border border-borderDefault rounded-pixel p-4 sm:p-5 mb-3 group"
    >
      <div className="flex-1 min-w-0">
        <div className="font-pixel text-pixel-xs text-phosphor tracking-widest mb-1">
          {platform}
        </div>
        <div className="font-mono text-base text-warmWhite truncate">
          {handle}
        </div>
      </div>

      <button
        onClick={handleCopy}
        className="font-pixel text-pixel-xxs text-warmMuted hover:text-warmWhite transition-colors ml-4 px-3 py-2 border border-borderDefault rounded-pixel hover:border-phosphor"
      >
        {copied ? 'COPIED!' : 'COPY'}
      </button>
    </a>
  )
}
