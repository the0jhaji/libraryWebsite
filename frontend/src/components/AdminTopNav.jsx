import { Link } from 'react-router-dom'

export default function AdminTopNav() {
  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-margin-desktop h-16 bg-surface-container-lowest/80 backdrop-blur-xl z-50 border-b border-outline-variant/30 shadow-sm">
      <div className="flex items-center gap-gutter">
        <div className="flex items-center gap-3">
          <img
            className="h-10 w-auto object-contain"
            alt="NSEC Logo"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr8iA1tWQhR0uh0x3rIllnUe09Dubv8scuvYVTog0YDhF4EYfDJ0JufmwChyRqfhsTD6UTby_dgKJsSF_fiB40IHGOt12uVKTKiWgEy3aoev_vtZ-C2WPXlWK9H7SpJ12vvogBm9zH4EmMD94IfLV_s-2V5DK8m0pOTzxQGXr1ii1sRMXw-692wgK_201ZwUoNojFhApZnqm8zKnUhOwjHGmg30hU47t40tg_99WuerBTLQozGGvYZGFJdEttnNZm0td5JQHSA3UM"
          />
          <span className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight">NSEC Library</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" to="/catalog">Catalog</Link>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="#">Collections</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="#">Resources</a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-surface-container-high/50 rounded-lg transition-all text-secondary">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="p-2 hover:bg-surface-container-high/50 rounded-lg transition-all text-secondary">
          <span className="material-symbols-outlined">dark_mode</span>
        </button>
        <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant">
          <img
            alt="Admin avatar"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMRn8H4tGZUX_X3ApDkHAjdC8hjuC8P56eM1rkY0Pnw-8MGVjb-rXA2_FCZqOp4vpzF-Eu98PpL43jJ5jcknf3Pb5qlJHq1d_PHJQkuutId2O3P3Lu_yjTdNvhM4e9nPZKNNw8nYMEIiEz-Byz68suXcw09y4SoBkKHjKGkLWsVyMaE2MtaaM6swFw0cDhvQw3uD5GvulQ4MwUEPqsv9hhovCrU_LP3ahPa9DlCJICY9NAW82lQrv6Viqre7m6bT8daffK0e2FZvo"
          />
        </div>
      </div>
    </header>
  )
}
