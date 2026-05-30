import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const loans = [
  {
    _id: '1', isbn: '978-0131103627',
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen, Charles E. Leiserson',
    status: 'on-time', dueDate: 'Oct 24, 2024', timeRemaining: '12 Days', timeClass: 'text-secondary',
    renewals: '0 / 2', layout: 'full',
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6gZEdetEv1GnpXy983f_gNBitG8zHdfw7WEVs-cQIwor-YS2QPcQdx62318sBKW3usVo6iZcnNvialK72-uJliw3LWpWLJpyOHWvPPnddqTUojOWh2KD7XA_gsbphIeEmjNEx253wi3AWlAOx7VRrXkQWzFtv6VoOPJU5IBtMaRgs2A4LPVc_XCFQP_YpUjUEC2KDDc4Rp8I7KlBvgQ8benXxj06Z4-G17PoZc4gkCr7uqTvLsDk1i4JqgcY-dDruL4JlD74p85s',
  },
  {
    _id: '2', isbn: '',
    title: 'Machine Learning',
    author: 'Kevin P. Murphy',
    status: 'urgent', dueDate: 'Oct 13, 2024', timeRemaining: 'Due Tomorrow', timeClass: 'text-error',
    location: 'Main Stacks, A-14', layout: 'half',
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdzWnAUnxuxzcneT5Vy8YOS2VZX6wvefVCYwSYEnO7DxVb4HAlrQgu2hjyXDFLUXTC8iBEJLU_oa1EhHz26ZchDR2X9t-S9XFaVZj2chfWEfXDTDRmfuX3Q-rAF7WleqSXe_9G8S5-VplUaJk41iXyHgHS-1RMU_V_zyOG7bxACH0n768WywW0y57CLU41u_Wz8XYh_0NZSncu_DJobTF9TZ9fQJI6O7mohRD-_V9W5fAF1U3hJWHuFUlfgc4maYWoAoTn9weS3Fo',
  },
  {
    _id: '3', isbn: '978-1107002173',
    title: 'Quantum Computation',
    author: 'Michael A. Nielsen, Isaac L. Chuang',
    status: 'on-time', dueDate: '', timeRemaining: '18 Days', timeClass: 'text-secondary',
    layout: 'half',
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkgmnsYrdzj4CODd6C8ng1SESDS0Kbjs4nWW4suk1_1oLDWAkHjyj70eJ02IP0NgRtrPLoQk9Jh7beqh1-70eKuIIYrP3Uq9zg0zMEm6XNSp-0GYFJj0wJpQVCEX-dm_ZmcS8iwOFIDzI9KZSuagpguOWvKp8LnYnRBeHI6v2r8SI_UqIjSe-IDBPsYzfSOuJ07HtJ_1PpLqQnZa3PtTNRX09lKZZocs7zwhcG_vO6v6uL69w_q4ziBhzv2ANDScpjd8y8cmLSsRY',
  },
  {
    _id: '4', isbn: '978-0132350884',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    status: 'on-time', dueDate: 'Nov 02, 2024', timeRemaining: '21 Days', timeClass: 'text-secondary',
    statusLabel: 'Standard Loan', layout: 'full',
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRV1cydS1RFQStcVZJPGzqIA4S1WSvycINny2TQWPrjPgZy0BRpCfdzv9gelhZYMJhKWVunyg1X34lLO1IfyBgz9xkf5tr4c-OQZern1djKAA-TFqlTj4qZlko-m5wobTOVxv1rpaIZz0ZimSHXjEJq21LpXijhJM9E_-JppskFJ0xoOy9tpU3JS1uv_jupEBKSf7QQf7-7PB_bVZ0KsDeTj1Obni2fbAbegrmsFdI7Q0caskkMezHVns25iGhDznVelo1ujp1POk',
  },
]

function renewBook(setStatuses, id) {
  setStatuses((prev) => ({ ...prev, [id]: 'processing' }))
  setTimeout(() => {
    setStatuses((prev) => ({ ...prev, [id]: 'renewed' }))
    setTimeout(() => {
      setStatuses((prev) => ({ ...prev, [id]: 'idle' }))
    }, 2000)
  }, 1500)
}

function FullCard({ book, s, setStatuses }) {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-48 h-64 md:h-auto overflow-hidden">
        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={book.title} src={book.cover} />
      </div>
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <span className={`px-3 py-1 text-label-sm font-label-sm rounded-full ${book.status === 'on-time' ? 'bg-success/10 text-success' : 'bg-error/10 text-error'}`}>
              {book.status === 'on-time' ? 'On Time' : 'Urgent'}
            </span>
            {book.isbn && <span className="font-label-md text-label-md text-on-surface-variant">ISBN: {book.isbn}</span>}
          </div>
          <h3 className="font-headline-md text-headline-md text-primary mb-1">{book.title}</h3>
          <p className="text-on-surface-variant font-body-sm text-body-sm mb-4">{book.author}</p>
          <div className="flex flex-wrap gap-8">
            {book.dueDate && (
              <div className="flex flex-col">
                <span className="text-label-sm font-label-sm text-on-surface-variant uppercase mb-1">Due Date</span>
                <span className="font-label-md text-body-md font-bold">{book.dueDate}</span>
              </div>
            )}
            <div className="flex flex-col">
              <span className="text-label-sm font-label-sm text-on-surface-variant uppercase mb-1">{book.status === 'urgent' ? 'Due' : 'Time Remaining'}</span>
              <span className={`font-label-md text-body-md font-bold ${book.timeClass}`}>{book.timeRemaining}</span>
            </div>
            {book.renewals !== undefined && (
              <div className="flex flex-col">
                <span className="text-label-sm font-label-sm text-on-surface-variant uppercase mb-1">Renewals</span>
                <span className="font-label-md text-body-md font-bold">{book.renewals}</span>
              </div>
            )}
            {book.statusLabel && (
              <div className="flex flex-col">
                <span className="text-label-sm font-label-sm text-on-surface-variant uppercase mb-1">Status</span>
                <span className="font-label-md text-body-md font-bold">{book.statusLabel}</span>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-end mt-6 gap-3">
          <button className="px-6 py-2 border border-outline text-on-surface-variant rounded-lg font-bold hover:bg-surface-container-low transition-colors active:scale-95" onClick={() => console.log('View details:', book.title)}>View Details</button>
          <button
            className={`px-8 py-2 rounded-lg font-bold transition-all active:scale-95 ${s === 'renewed' ? 'bg-success text-white' : 'bg-secondary text-on-secondary hover:opacity-90'}`}
            onClick={() => renewBook(setStatuses, book._id)}
            disabled={s === 'processing'}
          >
            {s === 'processing' ? (
              <><span className="material-symbols-outlined animate-spin text-[18px] align-middle">sync</span> Processing</>
            ) : s === 'renewed' ? (
              <><span className="material-symbols-outlined text-[18px] align-middle">check_circle</span> Renewed</>
            ) : 'Renew'}
          </button>
        </div>
      </div>
    </div>
  )
}

function HalfCard({ book, s, setStatuses }) {
  return (
    <div className="flex flex-col h-full">
      <div className="h-48 overflow-hidden relative">
        <div className="absolute top-4 right-4 z-10">
          <span className={`px-3 py-1 text-label-sm font-label-sm rounded-full ${book.status === 'on-time' ? 'bg-success/10 text-success' : 'bg-error/10 text-error'}`}>
            {book.status === 'on-time' ? 'On Time' : 'Urgent'}
          </span>
        </div>
        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={book.title} src={book.cover} />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-6">
          <h3 className="font-headline-md text-headline-md text-primary mb-1">{book.title}</h3>
          <p className="text-on-surface-variant font-body-sm text-body-sm">{book.author}</p>
        </div>
        <div className="space-y-4 mb-8">
          <div className="flex justify-between items-center border-b border-outline-variant/20 pb-2">
            <span className="text-label-sm font-label-sm text-on-surface-variant uppercase">{book.status === 'urgent' ? 'Due Tomorrow' : 'Due In'}</span>
            <span className={`font-label-md text-body-md font-bold ${book.timeClass}`}>{book.dueDate || book.timeRemaining}</span>
          </div>
          <div className="flex justify-between items-center border-b border-outline-variant/20 pb-2">
            <span className="text-label-sm font-label-sm text-on-surface-variant uppercase">Location</span>
            <span className="font-label-md text-body-md">{book.location || 'Main Stacks'}</span>
          </div>
        </div>
        <div className="mt-auto">
          <button
            className={`w-full py-3 rounded-lg font-bold transition-all active:scale-[0.98] ${s === 'renewed' ? 'bg-success text-white' : book.status === 'urgent' ? 'bg-brand-red-legacy text-white hover:brightness-110' : 'bg-secondary text-on-secondary hover:opacity-90'}`}
            onClick={() => renewBook(setStatuses, book._id)}
            disabled={s === 'processing'}
          >
            {s === 'processing' ? (
              <><span className="material-symbols-outlined animate-spin text-[18px] align-middle">sync</span> Processing</>
            ) : s === 'renewed' ? (
              <><span className="material-symbols-outlined text-[18px] align-middle">check_circle</span> Renewed</>
            ) : book.status === 'urgent' ? 'Renew Immediately' : 'Renew'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function MyLoans() {
  const [statuses, setStatuses] = useState({})
  const { toggleDarkMode } = useTheme()

  return (
    <div className="bg-background text-on-surface min-h-screen font-body-md">
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-sm border-b border-outline-variant/30 h-16">
        <div className="flex justify-between items-center px-margin-desktop h-full w-full max-w-container-max mx-auto">
          <div className="flex items-center gap-4">
            <span className="font-headline-md text-headline-md font-bold text-primary">Central Library</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-6">
              <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-sm text-body-sm" to="/dashboard">Dashboard</Link>
              <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-sm text-body-sm" to="/catalog">Catalog</Link>
              <Link className="text-secondary border-b-2 border-secondary pb-1 font-body-sm text-body-sm" to="/my-loans">My Loans</Link>
              <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-sm text-body-sm" to="/checkout">Fines</Link>
              <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-sm text-body-sm" to="/settings">Settings</Link>
            </nav>
            <div className="flex items-center gap-4 border-l border-outline-variant/30 pl-8">
              <button className="material-symbols-outlined p-2 hover:bg-surface-container-low rounded-full transition-all duration-200 active:scale-95" onClick={() => console.log('Notifications')}>notifications</button>
              <button className="material-symbols-outlined p-2 hover:bg-surface-container-low rounded-full transition-all duration-200 active:scale-95" onClick={toggleDarkMode}>dark_mode</button>
              <div className="flex items-center gap-3">
                <span className="font-label-md text-label-md">Alex Rivera</span>
                <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-white overflow-hidden">
                  <img className="w-full h-full object-cover" alt="Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3N1-sLByRyS7IyigDaH6RmI4mjivG68oBxLkdZWdjQcMYvX1bdawBtSsMjYD30iZzIHNi-EXLZgNQOu8U4naUPDhdNBrLEQMCpMaT1uzy6eqyzTmFcdCV6AN51nEkt-fK2NMaN9Co78lfUpevhQlvZJ4XtaLMhUUDFfkg07Z5TTKvEKFsEh3NG9rRMRdijqYcLVgXZ_raT2y5QtfAYKMZ2Fcp80veg7zohWTJ7SGxyt9FHw4Ixj2CE_ZhyBw6xe5m00779WWm29M" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex min-h-screen pt-16">
        <aside className="hidden md:flex h-[calc(100vh-64px)] w-64 fixed left-0 top-16 bg-surface border-r border-outline-variant/20 flex-col p-4 space-y-2">
          <div className="pb-6 pt-2 px-2">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-white">school</span>
              </div>
              <div>
                <h2 className="font-headline-md text-label-md font-bold text-primary">NSEC Portal</h2>
                <p className="text-[10px] text-on-surface-variant font-label-sm">Academic Nexus</p>
              </div>
            </div>
          </div>
          <nav className="space-y-1">
            <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-transform duration-200 hover:translate-x-1 font-label-md text-label-md" to="/dashboard">
              <span className="material-symbols-outlined">dashboard</span> Dashboard
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-transform duration-200 hover:translate-x-1 font-label-md text-label-md" to="/catalog">
              <span className="material-symbols-outlined">menu_book</span> Catalog
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 bg-secondary-container text-on-secondary-container rounded-lg font-bold font-label-md text-label-md" to="/my-loans">
              <span className="material-symbols-outlined">history_edu</span> My Loans
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-transform duration-200 hover:translate-x-1 font-label-md text-label-md" to="/checkout">
              <span className="material-symbols-outlined">account_balance_wallet</span> Fines
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-transform duration-200 hover:translate-x-1 font-label-md text-label-md" to="/settings">
              <span className="material-symbols-outlined">settings</span> Settings
            </Link>
          </nav>
          <div className="mt-auto space-y-1 border-t border-outline-variant/10 pt-4">
            <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low rounded-lg font-label-md text-label-md" href="#">
              <span className="material-symbols-outlined">help</span> Help
            </a>
            <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low rounded-lg font-label-md text-label-md" to="/">
              <span className="material-symbols-outlined">logout</span> Logout
            </Link>
          </div>
        </aside>

        <main className="flex-1 md:ml-64 p-margin-mobile md:p-margin-desktop max-w-container-max mx-auto w-full">
          <div className="mb-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <nav className="flex items-center gap-2 text-on-surface-variant mb-2 font-label-sm text-label-sm">
                  <span>Library</span>
                  <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                  <span className="text-primary font-bold">My Loans</span>
                </nav>
                <h1 className="font-headline-xl text-headline-xl text-primary mb-2">My Loans</h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Manage your active checkouts, track due dates, and extend your reading time with a single click.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="glass-card rounded-xl p-4 flex items-center gap-4 min-w-[200px]">
                  <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-secondary-container">library_books</span>
                  </div>
                  <div>
                    <p className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Active Loans</p>
                    <p className="text-headline-md font-headline-md text-primary">04 <span className="text-body-sm font-body-sm font-normal text-on-surface-variant">/ 06</span></p>
                  </div>
                </div>
                <button
                  className="bg-primary text-on-primary h-14 px-8 rounded-lg font-bold hover:opacity-90 transition-all active:scale-95 flex items-center gap-2"
                  onClick={() => loans.forEach((l) => renewBook(setStatuses, l._id))}
                >
                  <span className="material-symbols-outlined">sync</span> Renew All
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            {loans.map((book) => {
              const s = statuses[book._id] || 'idle'
              return (
                <div key={book._id} className={`${book.layout === 'full' ? 'lg:col-span-12' : 'lg:col-span-6'} glass-card rounded-xl overflow-hidden hover:shadow-md transition-shadow group`}>
                  {book.layout === 'full' ? (
                    <FullCard book={book} s={s} setStatuses={setStatuses} />
                  ) : (
                    <HalfCard book={book} s={s} setStatuses={setStatuses} />
                  )}
                </div>
              )
            })}
          </div>
        </main>
      </div>

      <footer className="w-full py-8 bg-surface-container-lowest border-t border-outline-variant/10">
        <div className="flex flex-col md:flex-row justify-between items-center px-margin-desktop max-w-container-max mx-auto gap-4">
          <p className="font-body-sm text-body-sm text-on-surface-variant">&copy; 2024 Netaji Subhash Engineering College Central Library</p>
          <div className="flex gap-6">
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Contact Librarian</a>
          </div>
        </div>
      </footer>

      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-surface/90 backdrop-blur-lg border-t border-outline-variant/20 h-16 flex items-center justify-around px-4 z-50">
        <Link className="flex flex-col items-center gap-1 text-on-surface-variant" to="/dashboard">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px] font-label-sm">Home</span>
        </Link>
        <Link className="flex flex-col items-center gap-1 text-on-surface-variant" to="/catalog">
          <span className="material-symbols-outlined">menu_book</span>
          <span className="text-[10px] font-label-sm">Catalog</span>
        </Link>
        <Link className="flex flex-col items-center gap-1 text-secondary" to="/my-loans">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>history_edu</span>
          <span className="text-[10px] font-label-sm font-bold">My Loans</span>
        </Link>
        <Link className="flex flex-col items-center gap-1 text-on-surface-variant" to="/checkout">
          <span className="material-symbols-outlined">account_balance_wallet</span>
          <span className="text-[10px] font-label-sm">Fines</span>
        </Link>
        <Link className="flex flex-col items-center gap-1 text-on-surface-variant" to="/settings">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-[10px] font-label-sm">Settings</span>
        </Link>
      </div>
    </div>
  )
}
