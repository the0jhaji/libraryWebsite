import { Link, NavLink } from 'react-router-dom'

export default function CatalogTopNav() {
  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-margin-desktop h-16 bg-surface-container-lowest/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm z-50">
      <div className="flex items-center gap-gutter">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr8iA1tWQhR0uh0x3rIllnUe09Dubv8scuvYVTog0YDhF4EYfDJ0JufmwChyRqfhsTD6UTby_dgKJsSF_fiB40IHGOt12uVKTKiWgEy3aoev_vtZ-C2WPXlWK9H7SpJ12vvogBm9zH4EmMD94IfLV_s-2V5DK8m0pOTzxQGXr1ii1sRMXw-692wgK_201ZwUoNojFhApZnqm8zKnUhOwjHGmg30hU47t40tg_99WuerBTLQozGGvYZGFJdEttnNZm0td5JQHSA3UM"
          alt="NSEC Logo"
          className="h-10 w-auto object-contain"
        />
        <nav className="hidden md:flex gap-6">
          <NavLink className="text-secondary font-bold border-b-2 border-secondary pb-1 font-body-md text-body-md" to="/catalog">Catalog</NavLink>
          <Link className="text-on-surface-variant hover:text-on-surface transition-colors font-body-md text-body-md" to="#">Collections</Link>
          <Link className="text-on-surface-variant hover:text-on-surface transition-colors font-body-md text-body-md" to="#">Resources</Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-surface-container-high/50 rounded-lg transition-all" title="Notifications">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="p-2 hover:bg-surface-container-high/50 rounded-lg transition-all" title="Toggle Theme">
          <span className="material-symbols-outlined">dark_mode</span>
        </button>
        <Link to="/dashboard">
          <img
            alt="Student avatar"
            className="w-8 h-8 rounded-full border border-outline-variant cursor-pointer"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtsnfq1rhVMK7qhKtuZdybNO4ySqAhG5cf17UBvIh1VWmupHFr5Qv1-wlycHYjR9Y6QGirhyRkHZaLcuYkR5-IUJvwsLgFv5IiOZ0tCzKR77cBb-9zmmbiqtRbOViLPObFfcHu_qQ6_ulWVkjfo-V_UVBeK5Y8jhUpMJj2UgOQNVXbxRXLb0HmW6EUIuy8XUA5eKNnI6s-ziFzypEW6-LoE-X6pFB-u5N1WK90DDApDYoIjQggoz8LAt496EXjiBIj9yJSas-bBn0"
          />
        </Link>
      </div>
    </header>
  )
}
