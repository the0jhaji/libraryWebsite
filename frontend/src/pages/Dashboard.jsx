import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const defaultBooks = [
  {
    _id: '1', title: 'Quantum Physics: A Modern Approach', isbn: '978-0131103627',
    author: 'K. Townsend', dueDate: 'Oct 24, 2024', renewals: 2, maxRenewals: 3,
    status: 'urgent', cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBYvIArVKSFQ-cvzQhNndHgzCdpuaU_rOQsHIKeXsqKZQOLdisR9bnb9x3bD_eFZsLjLCVR8XcjhKe6O23n43-ZI5Xj3zosMClerzVAzbKq9Ec9oUEj2XRpPPa0vfxId8U9KzIZ2d8mfbpFgY3qgD959TdGTX_QeT2cZa0LvG7J6gesMCwGuOnfPL8AdRiJsyzJMU1oNbEDz94DdH_n-Uh6GDq47Qz8jMzw6FdjctMEGXcGDgGeaC9SH1BFQqjRiJcUvcIqX9qeu8',
  },
  {
    _id: '2', title: 'Introduction to Algorithms', isbn: '978-0262033848',
    author: 'Cormen et al.', dueDate: 'Nov 06, 2024', renewals: 0, maxRenewals: 3,
    status: 'safe', cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1wFD9zj9ZM0acMQMk6B7cBPefGbifv8DGjixs5RSPBCNju1f2Tds4p27UD84YRO1cCHzW1sUUWKub89181V71LKIbYR4Ap37ri4LHoeNDLuTN-0h1jRvmR4zYnHjrnAup82JEKdAif6fAuqUeVO4BUn4zNMim0Pv2iSo1srBBQVYm0D1xWgqZM0SN6tyWLYHaVOM2S22CgKUtugjuqMKtcCxlG8Dc5OuLAR4KyH-RwhvXoe5eM8mrbB1ghW0-rQ7AFyH2Gm5mevg',
  },
]

const defaultHistory = [
  { date: 'Oct 12, 2024', title: 'Linear Algebra & Its Applications', author: 'Gilbert Strang', action: 'Returned', fine: '₹0.00', actionClass: 'text-success bg-success/10' },
  { date: 'Sep 28, 2024', title: 'Machine Learning', author: 'Tom Mitchell', action: 'Fine Paid', fine: '₹12.00', actionClass: 'text-secondary bg-secondary/10' },
  { date: 'Sep 14, 2024', title: 'Data Structures and Algorithms in Python', author: 'Michael T. Goodrich', action: 'Returned', fine: '₹0.00', actionClass: 'text-success bg-success/10' },
]

export default function Dashboard() {
  const [books, setBooks] = useState(defaultBooks)
  const [history] = useState(defaultHistory)
  const [profile] = useState({ name: 'Rohan Sharma', uid: 'STU-8829-2024', dept: 'Engineering', year: '3rd Year, Semester 6' })

  useEffect(() => {
    fetch('/api/books/issued', { headers: { Authorization: `Bearer ${localStorage.getItem('token') || sessionStorage.getItem('token')}` } })
      .then((r) => { if (r.ok) return r.json(); throw new Error() })
      .then((data) => { if (data.books) setBooks(data.books) })
      .catch(() => {})
  }, [])

  return (
    <div className="pt-24 pb-gutter px-6 md:px-margin-desktop space-y-gutter">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div className="md:col-span-2 space-y-4">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Welcome back, {profile.name.split(' ')[0]}.</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Here is a summary of your library activity and account status.</p>
          </div>
          <div className="bg-error-container text-on-error-container p-4 rounded-xl flex items-start gap-4 shadow-sm border border-error/10 animate-pulse">
            <span className="material-symbols-outlined text-error mt-1">warning</span>
            <div>
              <p className="font-bold text-body-md">Renewal Alert: "Quantum Physics: A Modern Approach"</p>
              <p className="text-sm opacity-90">Due in 48 hours. Please renew or return to avoid ₹1/day daily fine.</p>
            </div>
          </div>
        </div>
        <div className="glass-card p-6 rounded-xl space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary-fixed">person</span>
            </div>
            <div>
              <p className="font-headline-md text-sm font-bold">{profile.name}</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant">ID: {profile.uid}</p>
            </div>
          </div>
          <div className="pt-2 border-t border-outline-variant/30 space-y-2">
            <div className="flex justify-between">
              <span className="text-xs font-label-md uppercase tracking-wider text-on-surface-variant">Department</span>
              <span className="text-xs font-bold">{profile.dept}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs font-label-md uppercase tracking-wider text-on-surface-variant">Year</span>
              <span className="text-xs font-bold">{profile.year}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-gutter items-start">
        <div className="lg:col-span-2 space-y-base">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-headline-md text-headline-md flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">book_4</span>
              Currently Issued
            </h3>
            <span className="bg-surface-container px-3 py-1 rounded-full text-xs font-bold">{books.length} Books</span>
          </div>
          <div className="space-y-4">
            {books.map((book) => (
              <div
                key={book._id}
                className={`glass-card p-4 rounded-xl flex flex-col md:flex-row gap-6 hover:shadow-lg transition-all border-l-4 ${
                  book.status === 'urgent' ? 'border-l-brand-red-legacy' : 'border-l-success'
                }`}
              >
                <div className="w-full md:w-24 h-32 bg-surface-container rounded-lg overflow-hidden shrink-0">
                  <img className="w-full h-full object-cover" alt={book.title} src={book.cover} />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="font-headline-md text-lg font-bold">{book.title}</h4>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-tighter ${
                        book.status === 'urgent'
                          ? 'bg-error-container text-on-error-container'
                          : 'bg-surface-container-high text-on-surface-variant'
                      }`}>
                        {book.status === 'urgent' ? 'Due in 2 days' : `Due in 15 days`}
                      </span>
                    </div>
                    <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">ISBN: {book.isbn} • Author: {book.author}</p>
                  </div>
                  <div className="mt-4 flex flex-wrap justify-between items-center gap-4">
                    <div className="flex gap-6">
                      <div>
                        <p className="text-[10px] font-label-md uppercase text-on-surface-variant">Due Date</p>
                        <p className="text-sm font-bold">{book.dueDate}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-label-md uppercase text-on-surface-variant">Renewals</p>
                        <p className="text-sm font-bold">{book.renewals} of {book.maxRenewals}</p>
                      </div>
                    </div>
                    <button
                      className="px-6 py-2 bg-secondary text-on-secondary rounded-lg font-bold text-sm hover:opacity-90 active:scale-95 transition-all"
                      onClick={() => console.log('Renew:', book.title)}
                    >
                      Renew
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-base">
          <h3 className="font-headline-md text-headline-md flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-secondary">payments</span>
            Fine Management
          </h3>
          <div className="glass-card rounded-xl overflow-hidden shadow-md">
            <div className="bg-primary p-6 text-on-primary">
              <p className="font-label-md text-label-md uppercase tracking-wider opacity-80">Total Outstanding Fine</p>
              <h4 className="font-headline-xl text-headline-xl mt-2">₹27.50</h4>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex items-start gap-3 p-3 bg-surface-container-low rounded-lg border border-outline-variant/20">
                <span className="material-symbols-outlined text-secondary text-sm">info</span>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  <span className="font-bold text-on-surface">Policy:</span> Fine increases by ₹1 per day after due date. Outstanding fines over ₹500 may restrict library access.
                </p>
              </div>
              <Link
                to="/checkout"
                className="w-full block py-4 bg-tertiary-fixed text-tertiary-container rounded-xl font-black text-lg shadow-sm text-center transition-all hover:opacity-90 active:scale-95"
              >
                Pay Fine
                <span className="material-symbols-outlined align-middle ml-2">open_in_new</span>
              </Link>
              <p className="text-[10px] text-center text-on-surface-variant">Links to official university payment portal</p>
            </div>
          </div>
          <div className="glass-card p-4 rounded-xl border-dashed border-2 border-outline-variant/40 flex flex-col items-center justify-center py-10 text-center">
            <span className="material-symbols-outlined text-4xl text-outline-variant mb-2">qr_code_2</span>
            <p className="text-xs font-bold text-on-surface-variant">Digital Library ID</p>
            <p className="text-[10px] text-on-surface-variant">Scan for gate entry</p>
          </div>
        </div>
      </section>

      <section className="space-y-base">
        <h3 className="font-headline-md text-headline-md flex items-center gap-2 mb-4">
          <span className="material-symbols-outlined text-secondary">history</span>
          Recent Activity
        </h3>
        <div className="glass-card rounded-xl overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-container-low border-b border-outline-variant/30">
              <tr>
                <th className="px-6 py-4 font-label-md text-label-md uppercase tracking-widest text-on-surface-variant">Date</th>
                <th className="px-6 py-4 font-label-md text-label-md uppercase tracking-widest text-on-surface-variant">Book Title</th>
                <th className="px-6 py-4 font-label-md text-label-md uppercase tracking-widest text-on-surface-variant">Action</th>
                <th className="px-6 py-4 font-label-md text-label-md uppercase tracking-widest text-on-surface-variant text-right">Fine Paid</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {history.map((row, i) => (
                <tr key={i} className="hover:bg-surface-container-lowest transition-colors">
                  <td className="px-6 py-4 font-body-sm text-sm">{row.date}</td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-sm">{row.title}</p>
                    <p className="text-xs text-on-surface-variant">{row.author}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${row.actionClass}`}>{row.action}</span>
                  </td>
                  <td className="px-6 py-4 text-right font-label-md text-sm">{row.fine}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
