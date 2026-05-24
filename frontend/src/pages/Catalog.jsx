import { useState, useEffect } from 'react'
import BookCard from '../components/BookCard'

const defaultBooks = [
  {
    _id: '1', title: 'Srimad Bhagavatam Eighth Canto', author: 'A.C. Bhaktivedanta Swami Prabhupada',
    description: 'Withdrawal of the cosmic creations (Part one)', code: '294.5924/SRI', year: 'c1972',
    status: 'Available', cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvEvKoGEQFmr8zF-Cd-BsgaWmQKwF5OBqZsApDIDPWtnD6BbIo-ccIB53BlEC63ud3XPo2FZdoeBvbkAjfyL1ApkC-dYakwK3ZPCnSAw0rjatoLBTsdOZO3xwQQHdRrXdColuNmuLtLPEcdBf3Ve5myoRWb6E7WuBynOJ3tF3wmrutFthdIdnKLillAl2x4_k25m1EV_Bd14sCfTe-vy_IGR8Ox-YzJ6jWqfhgI2Md5jyMklorkmx_N9v2fBbtmnoFnk2kswI4QrQ',
  },
  {
    _id: '2', title: 'Srimad Bhagavatam Eleventh Canto', author: 'A.C. Bhaktivedanta Swami Prabhupada',
    description: 'General history (Part five)', code: '294.5924/SRI', year: 'c1984',
    status: 'Borrowed', cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAypt_jR0O34UVZs3CYSeqTmlciiXG73N7PM-TB0kvYAHMH4n3y4fr-GWxFHnae3khcLlE9wiwuQ7OZaNeehMvz7Axiv52D9ZWgev1nNGfdxh0x8ShnqAo2zqvRDnqbJwwJ9FebaTsCD6IlMLbkIPrqxN9GWg1wy4ELhk6ffxdrKyXnC_jSTfGhRX-wfGyx7JdOlGKAi9-2CVHCIBmWWWak-TjMm9jgBZ3LabZX0XM1Qssc7OR1mBM9XEWhfmjRGJXbRR2cZbgSagA',
  },
  {
    _id: '3', title: 'Srimad Bhagavatam First Canto', author: 'A.C. Bhaktivedanta Swami Prabhupada',
    description: 'Creation (Part one- chapters 1-7)', code: '294.5924/SRI', year: 'c1972',
    status: 'On Shelf', cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApFJpqbjTG9gNVfEXccOc7BY0cYoTHreSL7c1vrL2sWOPIbWFk8kQy2vFLutEpfTfjmk9vkBHmtpKxhnMr8M9kKzmlJBNkUaE90z_Lm1iknSEvTcgQL67RuJYuQpEpNW5mOMMcnyfwZVOgWnWnFZT3m16VwYw1fvQ80B5qt2FZ9Jugn9B60o7tIIo600qI1FDwlAqIGh9pB-EOmNY2kHg1tMSx0zNRRJcmwnaDnEX4VAahJCV0qpoRQc2J4co_9NpfCzwMRPcpjfE',
  },
]

export default function Catalog() {
  const [books, setBooks] = useState(defaultBooks)
  const [query, setQuery] = useState('Srimad Bhagavatam')
  const [totalResults, setTotalResults] = useState(defaultBooks.length)
  const [filter, setFilter] = useState('author')
  const [category, setCategory] = useState('Books')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [availableOnly, setAvailableOnly] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams({ q: query, filter, category, page: String(page) })
    if (availableOnly) params.set('available', 'true')

    fetch(`/api/books/search?${params}`)
      .then((r) => r.ok ? r.json() : Promise.reject())
      .then((data) => {
        if (data.books?.length) {
          setBooks(data.books)
          setTotalResults(data.total || data.books.length)
          setTotalPages(data.pages || 1)
        }
      })
      .catch(() => {})
  }, [query, filter, category, page, availableOnly])

  const handleSearch = (e) => {
    e.preventDefault()
    const input = e.currentTarget.querySelector('input')
    setQuery(input.value || 'Srimad Bhagavatam')
    setPage(1)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="pt-24 pb-16 px-margin-desktop max-w-container-max mx-auto w-full">
        <section className="mb-12">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <p className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-2">NSEC LIBRARY</p>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4">Central Library, Netaji Subhash Engg College Garia</h2>
            <p className="text-on-surface-variant font-body-lg text-body-lg">Unlock the vast world of knowledge with our modern digital catalog.</p>
          </div>
          <div className="glass-card p-gutter rounded-xl shadow-md max-w-5xl mx-auto border border-outline-variant/30">
            <form onSubmit={handleSearch}>
              <div className="flex flex-wrap gap-4 mb-6">
                {['author', 'title', 'classified', 'subject'].map((f) => (
                  <label key={f} className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="w-4 h-4 text-secondary focus:ring-secondary border-outline"
                      type="radio" name="search_filter"
                      checked={filter === f}
                      onChange={() => setFilter(f)}
                    />
                    <span className="font-label-md text-label-md text-on-surface group-hover:text-secondary transition-colors capitalize">{f}</span>
                  </label>
                ))}
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant material-symbols-outlined">search</span>
                  <input
                    className="w-full pl-12 pr-4 py-4 rounded-lg border-outline-variant focus:border-secondary focus:ring-2 focus:ring-secondary-container bg-surface-container-lowest text-body-md font-body-md outline-none transition-all"
                    placeholder="Starting With: Enter text to search..."
                    defaultValue={query}
                    type="text"
                  />
                </div>
                <div className="w-full md:w-48">
                  <select
                    className="w-full py-4 rounded-lg border-outline-variant focus:border-secondary focus:ring-2 focus:ring-secondary-container bg-surface-container-lowest text-body-md font-body-md outline-none cursor-pointer"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option>Books</option>
                    <option>Journals</option>
                    <option>Thesis</option>
                    <option>Audiobooks</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="px-10 py-4 bg-secondary text-on-secondary rounded-lg font-bold font-headline-md text-headline-md active:scale-95 transition-transform shadow-lg shadow-secondary/20"
                >
                  GO
                </button>
              </div>
            </form>
            <div className="mt-6 flex justify-between items-center">
              <div className="flex gap-4">
                <button className="flex items-center gap-2 text-on-surface-variant hover:text-secondary transition-colors font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-[20px]">tune</span> Advanced Search
                </button>
                <a className="flex items-center gap-2 text-secondary hover:underline transition-all font-body-sm text-body-sm" href="https://play.google.com/store/apps/details?id=com.libsys.lsearch&hl=en" target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols-outlined text-[20px]">smartphone</span> Activate The App
                </a>
              </div>
              <div className="flex gap-2">
                <span className="text-on-surface-variant font-label-md text-label-md">Grid View</span>
                <span className="material-symbols-outlined text-outline" style={{ fontVariationSettings: "'FILL' 1" }}>grid_view</span>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <aside className="lg:col-span-3 space-y-6">
            <div className="bg-surface-container-low rounded-xl p-base border border-outline-variant/20 shadow-sm">
              <div className="p-4 border-b border-outline-variant/30 mb-2">
                <h3 className="font-label-md text-label-md uppercase tracking-wider text-secondary">Quick Links</h3>
              </div>
              <nav className="flex flex-col gap-1">
                {[
                  { icon: 'book_4', label: 'My Books', to: '/dashboard' },
                  { icon: 'new_releases', label: 'New Additions' },
                  { icon: 'newspaper', label: 'Journals' },
                  { icon: 'history_edu', label: 'Renewals', to: '/dashboard' },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.to || '#'}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                      link.label === 'My Books'
                        ? 'bg-secondary-container text-on-secondary-container font-bold'
                        : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
                    }`}
                  >
                    <span className="material-symbols-outlined">{link.icon}</span>
                    <span className="font-body-md">{link.label}</span>
                  </a>
                ))}
              </nav>
            </div>
            <div className="bg-surface-container-low rounded-xl p-4 border border-outline-variant/20">
              <h3 className="font-label-md text-label-md uppercase tracking-wider text-secondary mb-4">Availability</h3>
              <div className="space-y-3">
                <label className="flex items-center justify-between group cursor-pointer">
                  <span className="text-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors">Available Now</span>
                  <div
                    className={`w-10 h-5 rounded-full relative transition-colors ${availableOnly ? 'bg-secondary' : 'bg-outline-variant'}`}
                    onClick={() => setAvailableOnly(!availableOnly)}
                  >
                    <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${availableOnly ? 'left-6' : 'left-1'}`} />
                  </div>
                </label>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Engineering', 'Computer Science', 'Literature'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <section className="lg:col-span-9">
            <div className="flex justify-between items-center mb-6">
              <p className="font-body-md text-on-surface-variant">
                Showing <span className="font-bold text-on-surface">{totalResults.toLocaleString()}</span> results for <span className="italic">&quot;{query}&quot;</span>
              </p>
              <div className="flex items-center gap-2">
                <span className="font-label-md text-label-md text-on-surface-variant">Order By:</span>
                <select className="py-1 px-3 rounded-md border-outline-variant bg-surface-container-lowest text-label-md outline-none">
                  <option>Popularity</option>
                  <option>Title (A-Z)</option>
                  <option>Year (Newest)</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {books.map((book) => (
                <BookCard key={book._id} book={book} />
              ))}
            </div>
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center items-center gap-2">
                <button
                  className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant"
                  disabled={page <= 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                >
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg font-bold ${
                      p === page ? 'bg-secondary text-on-primary' : 'hover:bg-surface-container-high transition-colors text-on-surface-variant'
                    }`}
                    onClick={() => setPage(p)}
                  >
                    {p}
                  </button>
                ))}
                {totalPages > 5 && <span className="mx-2 text-on-surface-variant">...</span>}
                <button
                  className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant"
                  disabled={page >= totalPages}
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                >
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            )}
          </section>
        </div>
      </main>
      <footer className="bg-surface-container-highest py-gutter mt-auto w-full border-t border-outline-variant">
        <div className="px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-base">
          <div className="text-center md:text-left">
            <h4 className="font-bold text-on-surface mb-1">NSEC Library</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">&copy; 2024 NSEC Library. All Rights Reserved.</p>
            <p className="font-label-sm text-label-sm text-secondary mt-1">NSEC, Kolkata</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-gutter">
            {['Library Hours', 'Contact Librarian', 'Privacy Policy', 'Access Guide'].map((link) => (
              <a key={link} className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all hover:underline decoration-secondary" href="#">{link}</a>
            ))}
          </nav>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-outline">social_leaderboard</span>
            <span className="material-symbols-outlined text-outline">crossword</span>
            <span className="material-symbols-outlined text-outline">mail</span>
          </div>
        </div>
      </footer>
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-secondary text-on-secondary rounded-full shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40 md:hidden">
        <span className="material-symbols-outlined">search</span>
      </button>
    </div>
  )
}
