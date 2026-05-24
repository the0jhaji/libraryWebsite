import { useState } from 'react'

export default function BookCard({ book }) {
  const [cartText, setCartText] = useState('Add to cart')
  const [fav, setFav] = useState(false)

  const statusStyle = {
    Available: 'bg-success/10 text-success',
    Borrowed: 'bg-error/10 text-error',
    'On Shelf': 'bg-secondary/10 text-secondary',
  }

  const statusClass = statusStyle[book.status] || 'bg-surface-container-high text-on-surface-variant'

  const handleAddToCart = () => {
    if (book.status === 'Borrowed') return
    setCartText('Added!')
    setTimeout(() => setCartText('Add to cart'), 2000)
  }

  return (
    <div className="bg-surface-container-lowest rounded-xl p-4 flex flex-col border border-outline-variant/30 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_-10px_rgba(0,106,97,0.15)] relative overflow-hidden group">
      <div className="absolute top-2 right-2">
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase flex items-center gap-1 ${statusClass}`}>
          {book.status === 'Available' && <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>}
          {book.status}
        </span>
      </div>
      <div className="flex gap-4 mb-4 h-48">
        <div className="w-1/3 flex-shrink-0 bg-surface-container rounded-lg overflow-hidden relative">
          <img className="w-full h-full object-cover" alt={book.title} src={book.cover} />
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
        </div>
        <div className="flex-grow flex flex-col justify-between">
          <div>
            <h4 className="font-headline-md text-label-md text-on-surface line-clamp-2 leading-snug mb-1">{book.title}</h4>
            <p className="text-on-surface-variant font-label-sm text-label-sm mb-2">{book.author}</p>
            <p className="text-outline font-label-md text-label-md leading-tight text-xs">{book.description}</p>
          </div>
          <div className="font-label-sm text-label-sm text-on-surface-variant space-y-1">
            <p className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">tag</span> {book.code}</p>
            <p className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">calendar_today</span> {book.year}</p>
          </div>
        </div>
      </div>
      <div className="mt-auto grid grid-cols-2 gap-2">
        <button className="col-span-2 py-2 bg-secondary text-on-secondary rounded-lg font-bold font-label-md text-label-md flex items-center justify-center gap-2 hover:opacity-90 transition-all">
          <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
          Read PDF
        </button>
        <button
          className={`py-2 rounded-lg font-bold font-label-sm text-label-sm transition-all ${
            cartText === 'Added!'
              ? 'bg-success text-on-primary col-span-1'
              : book.status === 'Borrowed'
              ? 'border border-outline text-outline-variant cursor-not-allowed col-span-1'
              : 'border border-secondary text-secondary hover:bg-secondary-container col-span-1'
          }`}
          disabled={book.status === 'Borrowed'}
          onClick={handleAddToCart}
        >
          {cartText}
        </button>
        <button
          className="py-2 bg-surface-container-high text-on-surface-variant rounded-lg font-bold font-label-sm text-label-sm hover:text-on-surface transition-all flex items-center justify-center"
          onClick={() => setFav(!fav)}
        >
          <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: fav ? "'FILL' 1" : "'FILL' 0" }}>
            {fav ? 'favorite' : 'favorite'}
          </span>
        </button>
      </div>
    </div>
  )
}
