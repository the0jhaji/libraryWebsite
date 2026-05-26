import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
  const [identifier, setIdentifier] = useState('')
  const [status, setStatus] = useState('idle')
  const [iconFill, setIconFill] = useState(false)
  const toastRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!identifier.trim()) return
    setStatus('loading')
    try {
      await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: identifier }),
      })
    } catch {}
    setTimeout(() => {
      setStatus('sent')
      const toast = toastRef.current
      if (toast) {
        toast.classList.remove('translate-y-20', 'opacity-0')
        toast.classList.add('translate-y-0', 'opacity-100')
      }
      setTimeout(() => {
        if (toast) {
          toast.classList.add('translate-y-20', 'opacity-0')
          toast.classList.remove('translate-y-0', 'opacity-100')
        }
        setStatus('idle')
      }, 4000)
    }, 1500)
  }

  return (
    <main className="flex min-h-screen">
      <section className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-primary-container items-center justify-center p-margin-desktop">
        <div className="absolute inset-0 z-0">
          <img
            alt="Scholarly Library Environment"
            className="w-full h-full object-cover opacity-40 brightness-50"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0A7KoahxlZPFRuKssHSlY2VNv39l9OEOOSVPpkSRXpg5Wm2tMnn4IvjUCGD758GxZTpt__XbHEEqCyvlHr_i_m3PYHyIQik5B-qVqFAuQId6s0zq4j_pahliF9cRj_kAcV4adxDpfO_w5lPthB7XRM4XVsvps5SKmyzSEj7RVR7rSdLluHzhKJRf5GrBvlcqqUd9Oo-Mii-j00oxB1HJOZ8ixJq5XfMhbCcYp94wI43BtDWR-3cxa5aQ99904xkw42GbHcJa4730"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-container via-transparent to-transparent opacity-80" />
        </div>
        <div className="relative z-10 text-on-primary max-w-lg">
          <div className="mb-gutter flex items-center gap-base">
            <span className="material-symbols-outlined text-secondary text-4xl" style={{ fontVariationSettings: '"FILL" 1' }}>security</span>
            <h2 className="font-headline-xl text-headline-xl text-white tracking-tight">Security & Access</h2>
          </div>
          <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed opacity-90">
            Recover your account to continue your research. Our systems ensure your academic data and personal information remain shielded behind enterprise-grade security protocols.
          </p>
          <div className="mt-12 flex gap-gutter">
            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-2">Campus Security</span>
              <span className="font-body-sm text-body-sm text-on-primary-container">ISO 27001 Certified</span>
            </div>
            <div className="w-px h-12 bg-outline-variant/20" />
            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-2">Access Control</span>
              <span className="font-body-sm text-body-sm text-on-primary-container">OAuth 2.0 Identity Management</span>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full lg:w-1/2 bg-surface-container-lowest flex flex-col justify-center items-center px-6 md:px-margin-desktop relative">
        <div className="absolute top-margin-desktop left-margin-desktop flex items-center gap-4">
          <img
            alt="NSEC Logo"
            className="h-10 w-auto rounded-md object-contain"
            src="https://lh3.googleusercontent.com/aida/ADBb0ugdZr919kDZqf9790PMglg0u0VtR-ofMiJ9jj2jw1FZV7h892rEWU8OgoCoMXLChGIonmtZbN2uYcMkmOFsnuSy4rePQHcgo68JatZjgO011fQtq0vdnEeAGou6oOZCUzGNOYeDW7fWFR3kVobujUy1w5rWZflVxT1cGHoaTdobfxqsfo_35QT8K6nmxR_iSHgE5oMIWAGAwzY3y1v5W0NsuE095U_7hVcL8zaCYhNKZiyiCqc6H0vaROI"
          />
          <span className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight">Central Library</span>
        </div>
        <div className="absolute top-margin-desktop right-margin-desktop">
          <Link className="group flex items-center gap-2 font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors" to="/">
            <span className="material-symbols-outlined text-base">arrow_back</span>
            Back to Login
          </Link>
        </div>
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">Forgot Password</h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Enter your Student ID or Email address and we'll send you a link to reset your password.
            </p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="block font-label-md text-label-md text-on-surface uppercase tracking-wider" htmlFor="identifier">
                Student ID / Email
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: iconFill ? '"FILL" 1' : '"FILL" 0' }}
                  >person</span>
                </div>
                <input
                  className={`w-full pl-12 pr-4 py-4 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-all font-body-md text-on-surface placeholder-on-surface-variant/40`}
                  id="identifier"
                  name="identifier"
                  placeholder="e.g. 10200321001 or s.name@nsec.ac.in"
                  required
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  onFocus={() => setIconFill(true)}
                  onBlur={() => setIconFill(false)}
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className={`w-full py-4 text-on-secondary font-headline-md text-headline-md font-bold rounded-lg shadow-md hover:shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2 group ${
                status === 'sent' ? 'bg-success' : 'bg-secondary'
              }`}
            >
              {status === 'loading' ? (
                <><span className="material-symbols-outlined animate-spin">sync</span> Processing...</>
              ) : status === 'sent' ? (
                <><span>Sent!</span> <span className="material-symbols-outlined">done_all</span></>
              ) : (
                <><span>Send Reset Link</span> <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span></>
              )}
            </button>
          </form>
          <div className="mt-12 pt-8 border-t border-outline-variant/30 text-center">
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
              Having trouble? Contact our IT Support Desk for immediate assistance.
            </p>
            <div className="flex justify-center gap-gutter">
              <a className="flex items-center gap-2 font-label-sm text-label-sm text-secondary hover:underline" href="mailto:support@nsec.ac.in">
                <span className="material-symbols-outlined text-sm">mail</span>
                support@nsec.ac.in
              </a>
              <a className="flex items-center gap-2 font-label-sm text-label-sm text-secondary hover:underline" href="tel:+913324361285">
                <span className="material-symbols-outlined text-sm">call</span>
                +91 33 2436 1285
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-base w-full text-center">
          <p className="font-body-sm text-body-sm text-outline-variant">
            &copy; 2024 St. Jude University Library. All Rights Reserved.
          </p>
        </div>
      </section>
      <div
        ref={toastRef}
        className="fixed bottom-margin-desktop right-margin-desktop transform translate-y-20 opacity-0 transition-all duration-300 pointer-events-none"
      >
        <div className="bg-success text-white px-gutter py-4 rounded-xl shadow-xl flex items-center gap-3" style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
          <div className="flex flex-col">
            <span className="font-label-md text-label-md font-bold">Success</span>
            <span className="font-body-sm text-body-sm">Reset link sent to your registered email.</span>
          </div>
        </div>
      </div>
    </main>
  )
}
