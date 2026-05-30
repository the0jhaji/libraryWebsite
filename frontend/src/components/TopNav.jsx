import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

export default function TopNav() {
  const { toggleDarkMode } = useTheme()
  return (
    <header className="fixed top-0 right-0 left-0 md:left-64 h-16 flex justify-between items-center px-6 md:px-margin-desktop bg-surface-container-lowest/80 backdrop-blur-xl z-30 border-b border-outline-variant/30 shadow-sm">
      <div className="flex items-center gap-8">
        <span className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight">Central Library</span>
        <div className="hidden lg:flex gap-6">
          <Link className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" to="#">Catalog</Link>
          <Link className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" to="#">Collections</Link>
          <Link className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" to="#">Resources</Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative group">
          <button className="p-2 rounded-lg hover:bg-surface-container-high/50 transition-all active:scale-95" onClick={() => console.log('Notifications')}>
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <span className="absolute top-2 right-2 w-2 h-2 bg-brand-red-legacy rounded-full" />
        </div>
        <button className="p-2 rounded-lg hover:bg-surface-container-high/50 transition-all active:scale-95" onClick={toggleDarkMode}>
          <span className="material-symbols-outlined">dark_mode</span>
        </button>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-secondary/20">
          <img
            className="w-full h-full object-cover"
            alt="Student avatar"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd0CXkLczKQEMsmxO3ezAKSbvtA-HipCoyrRnX5RALxjFjsIe2xe_X9frbFnN87dBuO38JKcTgTq7Z6nuWxjt0jZyMJ3cO8LnE2xx_fz2PGUcyk3TYwCTwe2DcCGt3YSdOyiebgvx2QpMozr-xEg8NmpVRwPRcLMD-UavSCjVeIJ4qx9h1hfq-S13jUqTEsvsMaJaXx78o0PFp6Dj24TOcLRUPDhcU5G5hvU6I6XE78kdrBulpIxzQKUk3VF8_YUsBrAjKAu_ExME"
          />
        </div>
      </div>
    </header>
  )
}
