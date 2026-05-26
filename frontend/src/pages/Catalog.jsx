import { useState } from 'react'
import { Link } from 'react-router-dom'

const books = [
  {
    _id: '1', code: '294.5924/SRI,C-8,P-1',
    title: 'Srimad Bhagavatam Eighth Canto: Withdrawal of the cosmic creations',
    author: 'A.C. Bhaktivedanta Swami Prabhupada',
    status: 'Available',
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYk0ZjKf3ITQ2sc-PpweznyCZqzlOahkvNvdg1ACSh5_npJAE1J3wXxD_5EVkjI4TQvNtJ83fag7D_L87jmj3ewfr-xRzDUoMG9kkNcN58aFSzKtaMu0Pi7iJV6afh8XFidAErYV7L9UhkoWJZ8VYIfZ1x-0RZMFDWvLrnlqRaw_FqEXrRk7tYepkbXnL-NuXtmgU6tb2ok-KHaOsJhK8z1vlGmunYBJCIrSK55u8XB0vspAsMSapS76HtxZGi4t89nMySxaoOfFY',
  },
  {
    _id: '2', code: '530.12/PLA,C-1',
    title: 'Quantum Mechanics: A New Perspective',
    author: 'Richard Feynman',
    status: 'Borrowed',
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAC0tdS50goNequ-XKwTGc3QJmr2sJOQNz5rzqRTeh0ypgbDedszia02oDWskCBwMMS8nEoOhoKSpAV1s-uyZXXomr-0hu5uXF-D4wIbr-xa4WNgFJI2HAYe8BwzGz4OXXAaq3GPuIXU3QeMK6C12D4SyNyy-eywl050kx_16oYBGQ2O9RyCTT5mPbWXOOiDEMULjMdQGmxeQMNnIHwPgYBp9PfpHeqGRKfh69xyS9xKP2347_vXGRt17s1KpfRPbj0p0HlVoEEc9I',
  },
  {
    _id: '3', code: '294.5924/SRI,C-9,P-2',
    title: 'Srimad Bhagavatam Ninth Canto: Liberation (Part Two)',
    author: 'A.C. Bhaktivedanta Swami Prabhupada',
    status: 'Available',
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJ9ByLQOoCAK59MtdDMZzHNJIM53u6zDCxwONPL7DhvELBPnEUDQPpLqqytuA03HVaz2YQyD7zpBDup6-d7bz86Ws8xNgeD5Ea5PtqbWdjYx3SfxHZRBDnzea5wFlz4fFQ32M29Kjb2Z5HNDwbzHpqN91xLSooRuaESsG1_oc7Oc0eQ72uYiS6-8xhrBdApk-qN1EK5g3gG512zYvND8Sdw8dUsqMRVA5SmKzroWoDNlWco53FHv5vbe1R6gsK9kZeiR5AOId7cuw',
  },
  {
    _id: '4', code: 'ONLINE/RESR-402',
    title: 'Advanced Structural Engineering: Digital Edition',
    author: 'Dr. Arnab Kumar',
    status: 'E-Resource',
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3UUdqnBdHIUJBhGwJYe3ho-3qYz7qYcDgWFPzTNpmU2UpwYa7faEr5I3m8AH3KGondUiTXAPmtqYUbMMewBynZBoD78vo2jSn19239EQDNyVstax3k-d1t-vbJl2LVvBuCH3-1AyYgWJ2ElPoFEgwyVJumXhoHUEIBb4mqVsoLpgPSrup-cXhs3a4EOTfoS2lcOhRd_jjbz3tKaNOeGTPvBQG-eB4QKkMYbiHct054qTqAvuevU8ocbO7hvqFiozrXqcjd-1St_g',
  },
]

const statusStyles = {
  Available: 'bg-success text-white',
  Borrowed: 'bg-error text-white',
  'E-Resource': 'bg-tertiary-fixed text-on-tertiary-fixed',
}

export default function Catalog() {
  const [view, setView] = useState('grid')
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    if (!query.trim()) return
    console.log('Searching for:', query)
  }

  const handleReserve = (title) => {
    console.log('Reserved:', title)
  }

  const handleAccessPdf = (title) => {
    console.log('Accessing PDF:', title)
  }

  const handleAddToCart = (title) => {
    console.log('Added to cart:', title)
  }

  const handleAddToWishlist = (title) => {
    console.log('Added to wishlist:', title)
  }

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col">
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm">
        <div className="flex justify-between items-center px-margin-desktop h-16 w-full max-w-container-max mx-auto">
          <div className="flex items-center gap-4">
            <img
              alt="NSEC Logo"
              className="h-10 w-10 object-contain rounded-md"
              src="https://lh3.googleusercontent.com/aida/ADBb0ugdZr919kDZqf9790PMglg0u0VtR-ofMiJ9jj2jw1FZV7h892rEWU8OgoCoMXLChGIonmtZbN2uYcMkmOFsnuSy4rePQHcgo68JatZjgO011fQtq0vdnEeAGou6oOZCUzGNOYeDW7fWFR3kVobujUy1w5rWZflVxT1cGHoaTdobfxqsfo_35QT8K6nmxR_iSHgE5oMIWAGAwzY3y1v5W0NsuE095U_7hVcL8zaCYhNKZiyiCqc6H0vaROI"
            />
            <span className="font-headline-md text-headline-md font-bold text-primary">Central Library</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/dashboard">Dashboard</Link>
            <Link className="font-label-md text-label-md text-secondary border-b-2 border-secondary pb-1" to="/catalog">Catalog</Link>
            <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/my-loans">My Loans</Link>
            <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/checkout">Fines</Link>
            <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/settings">Settings</Link>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-surface-container-low transition-all duration-200 active:scale-95" onClick={() => console.log('Notifications')}>
              <span className="material-symbols-outlined text-primary">notifications</span>
            </button>
            <button className="p-2 rounded-full hover:bg-surface-container-low transition-all duration-200 active:scale-95" onClick={() => console.log('Account')}>
              <span className="material-symbols-outlined text-primary">account_circle</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="mt-16 flex-grow flex flex-col max-w-container-max mx-auto w-full px-margin-desktop py-8">
        <header className="mb-10 text-center md:text-left">
          <h1 className="font-headline-xl text-headline-xl mb-6 text-primary">Academic Repository</h1>
          <form
            onSubmit={handleSearch}
            className={`max-w-4xl mx-auto md:mx-0 flex flex-col md:flex-row gap-4 p-4 glass-panel border border-outline-variant/30 rounded-xl shadow-md transition-all ${focused ? 'ring-2 ring-secondary/30' : ''}`}
          >
            <div className="flex-grow relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input
                className="w-full pl-12 pr-4 py-3 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-secondary transition-all font-body-md text-body-md"
                placeholder="Search by Title, Author, ISBN..."
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
              />
            </div>
            <div className="flex gap-2">
              <select className="bg-surface-container-low border-none rounded-lg px-4 py-3 font-label-md text-label-md focus:ring-2 focus:ring-secondary">
                <option>Title</option>
                <option>Author</option>
                <option>ISBN</option>
                <option>Subject</option>
              </select>
              <button type="submit" className="bg-primary text-on-primary px-8 py-3 rounded-lg font-headline-md text-label-md hover:opacity-90 active:scale-95 transition-all">Search</button>
            </div>
          </form>
        </header>

        <div className="flex flex-col md:flex-row gap-gutter">
          <aside className="w-full md:w-64 space-y-8 flex-shrink-0">
            <div>
              <h3 className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant mb-4">Location</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input defaultChecked className="w-5 h-5 rounded border-outline text-secondary focus:ring-secondary" type="checkbox" />
                  <span className="font-body-sm text-body-sm group-hover:text-primary">NSEC, Kolkata</span>
                </label>
              </div>
            </div>
            <div>
              <h3 className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant mb-4">Resource Type</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input defaultChecked className="w-5 h-5 rounded border-outline text-secondary focus:ring-secondary" type="checkbox" />
                  <span className="font-body-sm text-body-sm group-hover:text-primary">Books</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input className="w-5 h-5 rounded border-outline text-secondary focus:ring-secondary" type="checkbox" />
                  <span className="font-body-sm text-body-sm group-hover:text-primary">Journals</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input className="w-5 h-5 rounded border-outline text-secondary focus:ring-secondary" type="checkbox" />
                  <span className="font-body-sm text-body-sm group-hover:text-primary">E-Resources</span>
                </label>
              </div>
            </div>
            <div>
              <h3 className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant mb-4">Availability</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input className="w-5 h-5 rounded border-outline text-secondary focus:ring-secondary" type="checkbox" />
                  <span className="font-body-sm text-body-sm group-hover:text-primary">Available Now</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input className="w-5 h-5 rounded border-outline text-secondary focus:ring-secondary" type="checkbox" />
                  <span className="font-body-sm text-body-sm group-hover:text-primary">Include Borrowed</span>
                </label>
              </div>
            </div>
            <div className="pt-4 border-t border-outline-variant/30">
              <button className="w-full flex items-center justify-center gap-2 font-label-md text-label-md text-secondary py-2 rounded-lg hover:bg-secondary-container/20 transition-all" onClick={() => console.log('Clear filters')}>
                <span className="material-symbols-outlined text-[18px]">restart_alt</span> Clear Filters
              </button>
            </div>
          </aside>

          <section className="flex-grow">
            <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
              <div className="flex items-center gap-2">
                <span className="font-body-sm text-body-sm text-on-surface-variant">Showing 1-20 of 1,249 results</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Sort By</span>
                  <select className="bg-transparent border-none font-label-md text-label-md text-primary focus:ring-0 cursor-pointer">
                    <option>Relevance</option>
                    <option>Title (A-Z)</option>
                    <option>Popularity</option>
                    <option>Publication Year</option>
                  </select>
                </div>
                <div className="flex items-center border border-outline-variant rounded-lg p-1">
                  <button
                    className={`p-1.5 rounded-md ${view === 'grid' ? 'bg-surface-container-high text-primary' : 'text-on-surface-variant hover:bg-surface-container-low'} transition-all`}
                    onClick={() => setView('grid')}
                  >
                    <span className="material-symbols-outlined">grid_view</span>
                  </button>
                  <button
                    className={`p-1.5 rounded-md ${view === 'list' ? 'bg-surface-container-high text-primary' : 'text-on-surface-variant hover:bg-surface-container-low'} transition-all`}
                    onClick={() => setView('list')}
                  >
                    <span className="material-symbols-outlined">view_list</span>
                  </button>
                </div>
              </div>
            </div>

            <div className={`${view === 'grid' ? 'grid grid-cols-1 lg:grid-cols-2 gap-6' : 'space-y-6'}`}>
              {books.map((book) => {
                const statusClass = statusStyles[book.status] || 'bg-surface-container-high text-on-surface-variant'
                return (
                  <div
                    key={book._id}
                    className={`bg-surface border border-outline-variant/20 rounded-xl overflow-hidden flex shadow-sm hover:shadow-md hover:border-secondary/50 transition-all group ${view === 'list' ? 'flex-row' : ''}`}
                  >
                    <div className={`${view === 'list' ? 'w-1/5' : 'w-1/3'} relative bg-surface-container`}>
                      <img
                        alt="Book Cover"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src={book.cover}
                      />
                      <div className="absolute top-2 right-2">
                        <span className={`${statusClass} text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter`}>
                          {book.status}
                        </span>
                      </div>
                    </div>
                    <div className={`${view === 'list' ? 'w-4/5' : 'w-2/3'} p-5 flex flex-col`}>
                      <div className="flex-grow">
                        <span className="font-label-sm text-label-sm text-on-surface-variant mb-1 block">{book.code}</span>
                        <h3 className="font-headline-md text-body-lg font-semibold text-primary mb-1 line-clamp-2">{book.title}</h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 italic">{book.author}</p>
                      </div>
                      {book.status !== 'E-Resource' ? (
                        <div className="space-y-2">
                          <div className="flex gap-2">
                            <button
                              className={`flex-1 py-2 rounded-lg font-label-md text-label-md transition-all ${book.status === 'Available' ? 'bg-secondary text-on-primary hover:opacity-90 active:scale-[0.98] cursor-pointer' : 'bg-surface-container-high text-on-surface-variant cursor-not-allowed'}`}
                              onClick={() => book.status === 'Available' && handleReserve(book.title)}
                              disabled={book.status !== 'Available'}
                            >
                              {book.status === 'Available' ? 'Reserve' : 'Checked Out'}
                            </button>
                            <button
                              className="p-2 border border-outline-variant rounded-lg hover:bg-surface-container-low transition-all cursor-pointer"
                              onClick={() => book.status === 'Available' ? handleAddToCart(book.title) : handleAddToWishlist(book.title)}
                            >
                              <span className="material-symbols-outlined text-[20px] text-primary">
                                {book.status === 'Available' ? 'add_shopping_cart' : 'bookmark'}
                              </span>
                            </button>
                          </div>
                          {book.status === 'Borrowed' && (
                            <div className="text-center">
                              <span className="text-error font-label-sm text-label-sm">Expected Return: Oct 24, 2024</span>
                            </div>
                          )}
                          {book.status === 'Available' && (
                            <button
                              className="w-full flex items-center justify-center gap-2 text-on-surface-variant font-label-sm text-label-sm py-1.5 hover:text-primary transition-colors cursor-pointer"
                              onClick={() => handleAccessPdf(book.title)}
                            >
                              <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span> Download E-Resource
                            </button>
                          )}
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <button
                            className="w-full bg-primary text-on-primary py-2 rounded-lg font-label-md text-label-md hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                            onClick={() => handleAccessPdf(book.title)}
                          >
                            <span className="material-symbols-outlined">download</span> Access PDF
                          </button>
                          <button
                            className="w-full border border-outline-variant text-on-surface-variant py-2 rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-all cursor-pointer"
                            onClick={() => handleAddToWishlist(book.title)}
                          >Add to Wishlist</button>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-12 flex justify-center items-center gap-2">
              <button className="p-2 rounded-lg border border-outline-variant hover:bg-surface-container-low transition-all disabled:opacity-30" disabled>
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              {[1, 2, 3].map((p) => (
                <button
                  key={p}
                  className={`w-10 h-10 rounded-lg font-label-md text-label-md transition-all ${p === 1 ? 'bg-primary text-on-primary' : 'border border-outline-variant hover:bg-surface-container-low'}`}
                  onClick={() => console.log('Page:', p)}
                >
                  {p}
                </button>
              ))}
              <span className="px-2">...</span>
              <button className="w-10 h-10 rounded-lg border border-outline-variant hover:bg-surface-container-low font-label-md text-label-md transition-all" onClick={() => console.log('Page: 63')}>63</button>
              <button className="p-2 rounded-lg border border-outline-variant hover:bg-surface-container-low transition-all" onClick={() => console.log('Next page')}>
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </section>
        </div>
      </main>

      <footer className="w-full py-8 bg-surface-container-lowest border-t border-outline-variant/10">
        <div className="flex flex-col md:flex-row justify-between items-center px-margin-desktop max-w-container-max mx-auto gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-label-md text-label-md font-bold mb-2">Central Library</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">&copy; 2024 Netaji Subhash Engineering College Central Library</p>
          </div>
          <div className="flex gap-8">
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Contact Librarian</a>
          </div>
          <div className="flex gap-4">
            <a className="p-2 rounded-full border border-outline-variant hover:border-primary transition-all" href="#">
              <span className="material-symbols-outlined text-[20px]">language</span>
            </a>
            <a className="p-2 rounded-full border border-outline-variant hover:border-primary transition-all" href="#">
              <span className="material-symbols-outlined text-[20px]">mail</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
