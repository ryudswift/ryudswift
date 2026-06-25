interface GlitchButtonProps {
  href: string
  children: React.ReactNode
}

export default function GlitchButton({ href, children }: GlitchButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="glitch-btn inline-block font-pixel text-pixel-xs sm:text-pixel-sm tracking-widest text-phosphor border border-phosphor rounded-pixel px-6 py-3 no-underline hover:text-white transition-colors duration-100"
      data-text={typeof children === 'string' ? children : ''}
    >
      {children}
    </a>
  )
}
