import { NavLink } from 'react-router-dom'

const links = [
  { to: '#', icon: 'book_4', label: 'My Books' },
  { to: '#', icon: 'history_edu', label: 'Renewals' },
  { to: '#', icon: 'payments', label: 'Fine History' },
  { to: '#', icon: 'group', label: 'Student Records' },
  { to: '/admin/analytics', icon: 'analytics', label: 'Fine Analytics' },
  { to: '#', icon: 'inventory_2', label: 'Inventory' },
  { to: '#', icon: 'settings', label: 'Settings' },
]

export default function AdminSidebar() {
  return (
    <aside className="h-screen w-64 fixed left-0 top-16 bg-surface-container-low flex flex-col py-base shadow-md z-40">
      <div className="px-6 py-4 border-b border-outline-variant/20 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined">admin_panel_settings</span>
          </div>
          <div>
            <h2 className="font-headline-md text-label-md font-bold text-primary">Admin Portal</h2>
            <p className="text-xs text-on-surface-variant">NSEC</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 px-4 space-y-1">
        {links.map((link) => (
          <NavLink
            key={link.label}
            to={link.to}
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-secondary-container text-on-secondary-container font-bold'
                  : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface hover:translate-x-1'
              }`
            }
          >
            <span className="material-symbols-outlined">{link.icon}</span>
            <span className="font-label-md text-label-md uppercase tracking-wider">{link.label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="mt-auto px-4 py-6 border-t border-outline-variant/20 space-y-1">
        <button className="w-full mb-4 py-3 bg-secondary text-white rounded-xl font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform" onClick={() => console.log('Advanced search')}>
          <span className="material-symbols-outlined">search</span>
          Advanced Search
        </button>
        <a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-primary transition-colors" href="#">
          <span className="material-symbols-outlined">help</span>
          <span className="font-label-md text-label-md uppercase tracking-wider">Help Center</span>
        </a>
        <NavLink className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-primary transition-colors" to="/">
          <span className="material-symbols-outlined">logout</span>
          <span className="font-label-md text-label-md uppercase tracking-wider">Log Out</span>
        </NavLink>
      </div>
    </aside>
  )
}
