import { Link, useLocation } from 'react-router-dom'

const NAV_ITEMS = [
  { label: 'STATUS', path: '/', icon: '■' },
  { label: 'ARCHIVE', path: '/archive', icon: '▶' },
  { label: 'DOSSIERS', path: '/dossier', icon: '◈' },
  { label: 'CONNECT', path: '/connect', icon: '☎' },
]

export default function NavBar() {
  const location = useLocation()

  return (
    <nav className="sticky top-0 z-50 bg-void/90 backdrop-blur-md border-b border-borderDefault">
      <div className="max-w-[800px] mx-auto px-4">
        <ul className="flex items-center justify-center gap-1 sm:gap-4 overflow-x-auto py-3 scrollbar-hide">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`
                    font-pixel text-pixel-xxs sm:text-pixel-xs uppercase tracking-widest
                    px-2 sm:px-3 py-2 transition-all duration-200 whitespace-nowrap
                    border-b-2 border-transparent no-underline
                    ${isActive ? 'text-phosphor nav-active' : 'text-warmMuted hover:text-warmHighlight'}
                  `}
                >
                  <span className="mr-1 hidden sm:inline">{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
