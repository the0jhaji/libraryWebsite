import { NavLink } from 'react-router-dom'

const links = [
  { to: '/dashboard', icon: 'book_4', label: 'Books' },
  { to: '#', icon: 'search', label: 'Search' },
  { to: '/checkout', icon: 'payments', label: 'Fines' },
  { to: '#', icon: 'person', label: 'Account' },
]

export default function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface/90 backdrop-blur-md border-t border-outline-variant/20 shadow-lg flex justify-around items-center px-margin-mobile py-2 z-50">
      {links.map((link) => (
        <NavLink
          key={link.label}
          to={link.to}
          end
          className={({ isActive }) =>
            `flex flex-col items-center justify-center ${
              isActive
                ? 'bg-secondary-container text-on-secondary-container rounded-full px-4 py-1'
                : 'text-on-surface-variant'
            }`
          }
        >
          <span className="material-symbols-outlined">{link.icon}</span>
          <span className="font-label-sm text-[10px]">{link.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
