import { useState } from 'react'
import { Link } from 'react-router-dom'

const dues = [
  {
    _id: '1', title: 'Quantum Physics', reason: 'Late Return - 5 days', fine: '$15.00',
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdAjXv3o-ml5clp4-k1KZzcS2nE4-B7ZOvy-Zqd9j4mWauSxGhwqLlubGaXqr-sJstOAEMMKkBvZwA3GoWfFibPOTHyHkfQdSjpQYAuOt90awGvN1pw1TFGGCQD5z9XaraWpsffynVWwvPZNfEsFyFMSnCgwiQ93-eDwl1rjFrvJIZaANef8JT9fVjdOAidWJIXUCw_num6bei1MdfQhjzyUxWViQik0bajJyEd1_RETGBuHy8v9o3hJj_RKVVjh-YRLkCR6BoGOM',
  },
  {
    _id: '2', title: 'Introduction to Algorithms', reason: 'Damaged Cover', fine: '$12.50',
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMqUfc40odYFDesHoiGkv8IrXGrrAU3d6VkDNcI8eHHTc3yEbAHwgjMV0WWcbp1t1koBX4NWavfn1aBajaZGo1WwVO9KbjqwRNYXogD4lrNEDm1hkVFUvOmvn0d7GslAyb_xLpVBTenU-id7BXmNWw542xiD0k8_Ypcn5RPEldxBXGR5ii_peyvO1J9g5NRQ4mXrqEcYl_QG-8EfNTfqpHtRVTsBRUpkxu6woOjX22KMlUGMMNkiB9M-BJiFhkWqE78QR86p9OFo4',
  },
]

const paymentMethods = [
  { id: 'card', label: 'Credit / Debit Card', desc: 'Visa, Mastercard, Amex', icon: 'credit_card' },
  { id: 'upi', label: 'UPI Payment', desc: 'GPay, PhonePe, etc.', icon: 'smartphone' },
  { id: 'netbanking', label: 'Net Banking', desc: 'All major banks supported', icon: 'account_balance' },
]

export default function Checkout() {
  const [method, setMethod] = useState('card')
  const [status, setStatus] = useState('idle')

  const subtotal = dues.reduce((s, d) => s + parseFloat(d.fine.replace('$', '')), 0)
  const processing = 1.2
  const total = subtotal + processing

  const handlePay = () => {
    setStatus('loading')
    setTimeout(() => {
      setStatus('success')
      setTimeout(() => setStatus('idle'), 2000)
    }, 2500)
  }

  return (
    <>
      <div className="px-margin-mobile md:px-margin-desktop mt-24 max-w-5xl mx-auto pb-24 md:pb-8">
        <div className="mb-8">
          <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">Checkout</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">Review and pay your outstanding library dues.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-7 space-y-6">
            <section className="glass-card rounded-xl p-6 shadow-sm">
              <h4 className="font-headline-md text-headline-md mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">receipt_long</span>
                Summary of Dues
              </h4>
              <div className="space-y-4">
                {dues.map((due) => (
                  <div key={due._id} className="flex items-start justify-between p-4 bg-surface-container-lowest rounded-lg border border-outline-variant/20 hover:border-secondary/30 transition-colors">
                    <div className="flex gap-4">
                      <div className="w-16 h-20 bg-surface-container rounded overflow-hidden flex-shrink-0">
                        <img className="w-full h-full object-cover" alt={due.title} src={due.cover} />
                      </div>
                      <div>
                        <p className="font-headline-md text-[18px] leading-tight mb-1">{due.title}</p>
                        <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{due.reason}</p>
                        <p className="font-label-md text-label-md text-error mt-2 font-semibold">Fine: {due.fine}</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-outline-variant text-sm">info</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-outline-variant/30">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-body-md text-on-surface-variant">Subtotal</span>
                  <span className="font-label-md text-label-md">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center mb-6">
                  <span className="font-body-md text-on-surface-variant">Processing Fee</span>
                  <span className="font-label-md text-label-md">${processing.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-headline-md text-headline-md font-bold">Total Amount</span>
                  <span className="font-headline-md text-headline-md font-bold text-secondary">${total.toFixed(2)}</span>
                </div>
              </div>
            </section>
          </div>
          <div className="lg:col-span-5 space-y-6">
            <section className="glass-card rounded-xl p-6 shadow-sm flex flex-col h-full">
              <h4 className="font-headline-md text-headline-md mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">account_balance_wallet</span>
                Payment Method
              </h4>
              <div className="space-y-3 mb-8">
                {paymentMethods.map((pm) => (
                  <label
                    key={pm.id}
                    className={`flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      method === pm.id
                        ? 'border-secondary bg-secondary-container/10'
                        : 'border-outline-variant/30 hover:bg-surface-container-high'
                    }`}
                  >
                    <input
                      className="w-4 h-4 text-secondary focus:ring-secondary"
                      type="radio"
                      name="payment"
                      checked={method === pm.id}
                      onChange={() => setMethod(pm.id)}
                    />
                    <div className="flex-1 flex items-center justify-between">
                      <div>
                        <p className="font-label-md text-label-md font-bold">{pm.label}</p>
                        <p className="text-[10px] text-on-surface-variant">{pm.desc}</p>
                      </div>
                      <span className="material-symbols-outlined text-on-surface-variant">{pm.icon}</span>
                    </div>
                  </label>
                ))}
              </div>
              <div className="space-y-4 mb-8">
                <div>
                  <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant block mb-2">Card Number</label>
                  <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 font-label-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none" placeholder="**** **** **** 4421" type="text" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant block mb-2">Expiry Date</label>
                    <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 font-label-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none" placeholder="MM / YY" type="text" />
                  </div>
                  <div>
                    <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant block mb-2">CVV</label>
                    <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 font-label-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none" placeholder="***" type="password" />
                  </div>
                </div>
              </div>
              <div className="mt-auto pt-6">
                <button
                  className={`w-full py-4 rounded-xl font-headline-md text-[18px] font-bold shadow-md hover:shadow-lg active:scale-95 transition-all flex items-center justify-center gap-3 ${
                    status === 'success' ? 'bg-success text-white' : 'bg-secondary text-on-secondary'
                  }`}
                  onClick={handlePay}
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Processing...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <span className="material-symbols-outlined">check_circle</span>
                      Payment Successful
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined">lock</span>
                      Pay ${total.toFixed(2)} Now
                    </>
                  )}
                </button>
                <div className="mt-6 flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2 text-success">
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                    <span className="font-label-md text-label-md font-bold">Secure Transaction</span>
                  </div>
                  <p className="text-center text-[10px] text-on-surface-variant max-w-[200px]">Your data is encrypted with 256-bit SSL technology. NSEC Library does not store your card details.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <footer className="mt-12 pt-8 border-t border-outline-variant/30 text-center">
          <p className="font-label-md text-label-md text-on-surface-variant">&copy; 2024 NSEC Library. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}
