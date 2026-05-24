import { useState } from 'react'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const heights = [40, 55, 45, 70, 60, 85, 95, 75, 50, 65, 80, 90]

export default function AdminAnalytics() {
  const [searchId, setSearchId] = useState('')
  const [showResult, setShowResult] = useState(false)

  const handleSearch = () => {
    if (searchId.trim()) setShowResult(true)
  }

  return (
    <div className="flex-1 ml-64 p-gutter max-w-container-max mx-auto pt-20">
      <div className="flex justify-between items-end mb-gutter">
        <div>
          <h1 className="font-headline-xl text-headline-xl text-primary mb-1">Fine Analytics</h1>
          <p className="text-on-surface-variant font-body-md">Monitoring institutional revenue and student compliance metrics.</p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 border border-secondary text-secondary rounded-xl font-bold flex items-center gap-2 hover:bg-secondary-fixed transition-colors">
            <span className="material-symbols-outlined">add_circle</span>
            Issue Book
          </button>
          <button className="px-6 py-3 bg-secondary text-white rounded-xl font-bold flex items-center gap-2 shadow-md hover:opacity-90 active:scale-98 transition-all">
            <span className="material-symbols-outlined">update</span>
            Manually Renew
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-gutter mb-gutter">
        {[
          { label: 'Daily Collection', value: '$482.50', trend: '+12%', color: 'text-success', icon: 'payments' },
          { label: 'Monthly Revenue', value: '$12,490.00', trend: '+8.4%', color: 'text-secondary', icon: 'calendar_month' },
          { label: 'Year-to-Date', value: '$84,320.00', trend: 'Stable', color: 'text-outline', icon: 'account_balance_wallet' },
        ].map((stat) => (
          <div key={stat.label} className="col-span-12 md:col-span-4 bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <span className={`p-2 bg-${stat.color.replace('text-', '')}/10 ${stat.color} rounded-lg`}>
                <span className="material-symbols-outlined">{stat.icon}</span>
              </span>
              <span className={`text-label-sm font-label-sm ${stat.color} flex items-center gap-1`}>
                {stat.trend !== 'Stable' && <span className="material-symbols-outlined text-[14px]">trending_up</span>}
                {stat.trend}
              </span>
            </div>
            <p className="text-on-surface-variant font-label-md uppercase tracking-widest mb-1">{stat.label}</p>
            <h3 className="font-headline-lg text-headline-lg text-primary">{stat.value}</h3>
          </div>
        ))}

        <div className="col-span-12 bg-surface-container-lowest p-gutter rounded-xl border border-outline-variant/30 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-headline-md text-headline-md text-primary">Revenue Trend Analysis</h4>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-surface-container-high rounded text-label-sm uppercase">Weekly</button>
              <button className="px-3 py-1 bg-primary text-white rounded text-label-sm uppercase">Monthly</button>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between gap-4 px-4 relative overflow-hidden">
            <div className="absolute inset-0 flex flex-col justify-between opacity-10 pointer-events-none">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-full border-t border-primary" />
              ))}
            </div>
            {months.map((m, i) => (
              <div
                key={m}
                className={`group relative flex-1 rounded-t-lg transition-all cursor-pointer ${
                  m === 'Jul' ? 'bg-primary-fixed-dim hover:bg-primary' : 'bg-secondary-fixed hover:bg-secondary'
                }`}
                style={{ height: `${heights[i]}%` }}
              >
                <div className={`hidden group-hover:block absolute -top-10 left-1/2 -translate-x-1/2 bg-primary text-white text-xs px-2 py-1 rounded whitespace-nowrap`}>
                  {m}: ${heights[i] < 50 ? '5' : heights[i] < 70 ? '8' : heights[i] < 85 ? '10' : '12'}k
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-on-surface-variant">{m}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-surface-container-low p-gutter rounded-2xl border border-outline-variant/20">
        <div className="flex items-center gap-gutter mb-gutter">
          <h4 className="font-headline-md text-headline-md text-primary shrink-0">Student Lookup</h4>
          <div className="relative flex-1 group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-secondary">badge</span>
            <input
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all shadow-sm"
              placeholder="Enter Student ID (e.g., NSEC-2024-0891)"
              type="text"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
          </div>
          <button
            className="bg-primary text-white px-8 py-4 rounded-xl font-bold shadow-md hover:shadow-lg transition-all"
            onClick={handleSearch}
          >
            Search Records
          </button>
        </div>

        {showResult && (
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="p-gutter border-b md:border-b-0 md:border-r border-outline-variant/20 flex flex-col items-center text-center w-full md:w-80 bg-surface-container-high/20">
              <div className="relative mb-4">
                <img
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                  alt="Student portrait"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJWRnEC73K8FuTvUcc4tGT6ybT7XMXReTQjk30m3yFAvW6oCymTO5jJlSNiRxxM5TaCD-Yxs29F0_SuDjvMM-YFTaO04baT-D7LybygSY4Mlu12G-EwEtd8dL9yugaNv5yAkiPnOB4QJeGUeobpeVxp82jooYvFHG5XQl8UbcRJbD71M7wnXXNA20ZxH2iI667GRGXeY0FvkAH1Y5x6Vt3HVZcjoFfSE901ffa20VivrfeOB2Xi5TvhHgcj7wOkvxtIeUHPV31oYw"
                />
                <div className="absolute bottom-1 right-1 w-4 h-4 bg-success border-2 border-white rounded-full" />
              </div>
              <h5 className="font-headline-md text-headline-md text-primary">Marcus Sterling</h5>
              <p className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-4">NSEC-2024-0891</p>
              <div className="w-full space-y-3 pt-4 border-t border-outline-variant/30 text-left">
                {[
                  { label: 'Major', value: 'Computer Science' },
                  { label: 'Year', value: 'Senior' },
                  { label: 'Membership', value: 'Premium Graduate' },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between items-center">
                    <span className="text-on-surface-variant font-label-sm">{row.label}:</span>
                    <span className="text-primary font-bold text-sm">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 p-gutter grid grid-cols-1 md:grid-cols-2 gap-gutter">
              <div>
                <div className="flex items-center gap-2 mb-4 border-b border-outline-variant/20 pb-2">
                  <span className="material-symbols-outlined text-secondary">book_2</span>
                  <h6 className="font-bold text-primary">Currently Borrowed</h6>
                </div>
                <div className="space-y-3">
                  {[
                    { title: 'Quantum Mechanics & Particle Theory', due: 'Oct 24, 2024', status: 'Overdue', cls: 'text-error' },
                    { title: 'Advanced Linear Algebra', due: 'Nov 12, 2024', status: 'Safe', cls: 'text-success' },
                  ].map((b, i) => (
                    <div key={i} className="bg-surface-container p-3 rounded-lg flex items-center gap-3">
                      <div className="w-10 h-14 bg-outline-variant rounded flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-xs font-bold leading-tight">{b.title}</p>
                        <p className="text-[10px] text-on-surface-variant">Due: {b.due}</p>
                      </div>
                      <span className={`text-label-sm font-bold ${b.cls}`}>{b.status}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4 border-b border-outline-variant/20 pb-2">
                  <span className="material-symbols-outlined text-brand-red-legacy">receipt_long</span>
                  <h6 className="font-bold text-primary">Fine Summary</h6>
                </div>
                <div className="bg-error-container/20 border border-error/20 p-4 rounded-xl mb-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs text-error font-bold uppercase tracking-widest">Unpaid Balance</p>
                      <h4 className="font-headline-lg text-headline-lg text-error">₹14.25</h4>
                    </div>
                    <button className="bg-brand-red-legacy text-white px-4 py-2 rounded-lg font-bold text-sm shadow-sm active:scale-95 transition-transform">Pay Fine</button>
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    { label: 'Late Return (Physics Vol I)', amount: '₹4.25' },
                    { label: 'Damaged Cover (Java Dev)', amount: '₹10.00' },
                  ].map((f, i) => (
                    <div key={i} className="flex justify-between text-xs py-1 border-b border-dashed border-outline-variant">
                      <span className="text-on-surface-variant">{f.label}</span>
                      <span className="font-bold">{f.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
