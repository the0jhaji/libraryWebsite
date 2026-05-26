import { NavLink } from 'react-router-dom'

const links = [
  { to: '/dashboard', icon: 'book_4', label: 'My Books' },
  { to: '/dashboard', icon: 'history_edu', label: 'Renewals' },
  { to: '/checkout', icon: 'payments', label: 'Fine History' },
  { to: '#', icon: 'group', label: 'Student Records' },
  { to: '#', icon: 'analytics', label: 'Fine Analytics' },
  { to: '#', icon: 'inventory_2', label: 'Inventory' },
  { to: '/settings', icon: 'settings', label: 'Settings' },
]

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 bg-surface-container-low shadow-md z-40 py-base">
      <div className="px-6 py-8">
        <h1 className="font-headline-md text-headline-md font-bold text-primary tracking-tight">Dashboard</h1>
        <p className="text-on-surface-variant text-sm">NSEC</p>
      </div>
      <nav className="flex-1 px-4 space-y-1">
        {links.map((link) => (
          <NavLink
            key={link.label}
            to={link.to}
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-r-full font-bold transition-all active:scale-98 ${
                isActive
                  ? 'bg-secondary-container text-on-secondary-container'
                  : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface hover:translate-x-1'
              }`
            }
          >
            <span className="material-symbols-outlined">{link.icon}</span>
            <span className="font-label-md text-label-md uppercase tracking-wider">{link.label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="px-4 mt-auto space-y-1 mb-8">
        <button className="w-full mb-6 py-3 px-4 bg-primary text-on-primary rounded-lg font-bold text-sm shadow-sm transition-all hover:opacity-90 active:scale-95">
          Advanced Search
        </button>
        <a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-on-surface transition-all" href="#">
          <span className="material-symbols-outlined">help</span>
          <span className="font-label-md text-label-md uppercase tracking-wider">Help Center</span>
        </a>
        <NavLink
          to="/"
          className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-on-surface transition-all"
        >
          <span className="material-symbols-outlined">logout</span>
          <span className="font-label-md text-label-md uppercase tracking-wider">Log Out</span>
        </NavLink>
      </div>
    </aside>
  )
}
