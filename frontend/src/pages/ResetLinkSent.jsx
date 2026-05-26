import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ResetLinkSent() {
  const [resendStatus, setResendStatus] = useState('idle')

  const handleResend = () => {
    setResendStatus('loading')
    setTimeout(() => {
      setResendStatus('sent')
      setTimeout(() => setResendStatus('idle'), 3000)
    }, 1500)
  }

  return (
    <main className="min-h-screen flex flex-col md:flex-row overflow-hidden">
      <section className="hidden md:flex md:w-1/2 bg-surface-dark relative items-center justify-center p-margin-desktop overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/40 via-transparent to-transparent" />
          <div className="absolute bottom-0 -right-1/4 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-fixed-dim/20 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
          <img
            alt="NSEC Logo"
            className="w-32 h-32 mb-gutter rounded-xl shadow-xl border border-outline-variant/20 bg-white p-4"
            src="https://lh3.googleusercontent.com/aida/ADBb0ugdZr919kDZqf9790PMglg0u0VtR-ofMiJ9jj2jw1FZV7h892rEWU8OgoCoMXLChGIonmtZbN2uYcMkmOFsnuSy4rePQHcgo68JatZjgO011fQtq0vdnEeAGou6oOZCUzGNOYeDW7fWFR3kVobujUy1w5rWZflVxT1cGHoaTdobfxqsfo_35QT8K6nmxR_iSHgE5oMIWAGAwzY3y1v5W0NsuE095U_7hVcL8zaCYhNKZiyiCqc6H0vaROI"
          />
          <h1 className="font-headline-xl text-headline-xl text-inverse-on-surface mb-base">NSEC Library</h1>
          <p className="font-body-lg text-body-lg text-primary-fixed-dim opacity-80 leading-relaxed">
            Connecting scholars with boundless knowledge. Our digital portal ensures seamless access to Netaji Subhash Engineering College's premier academic resources.
          </p>
          <div className="mt-12 w-full glass-card border border-white/10 rounded-xl p-gutter shadow-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-on-secondary-container">auto_stories</span>
              </div>
              <div className="text-left">
                <p className="font-label-md text-label-md text-secondary-fixed uppercase">Academic Nexus</p>
                <p className="font-headline-md text-headline-md text-white">Digital Archives</p>
              </div>
            </div>
            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-secondary-fixed w-3/4 rounded-full" />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full md:w-1/2 flex items-center justify-center p-margin-mobile md:p-margin-desktop bg-surface-container-lowest min-h-screen">
        <div className="w-full max-w-md flex flex-col items-center">
          <div className="md:hidden mb-gutter flex flex-col items-center">
            <img
              alt="NSEC Logo"
              className="w-16 h-16 mb-base rounded-lg shadow-sm border border-outline-variant/30 bg-white p-2"
              src="https://lh3.googleusercontent.com/aida/ADBb0ugdZr919kDZqf9790PMglg0u0VtR-ofMiJ9jj2jw1FZV7h892rEWU8OgoCoMXLChGIonmtZbN2uYcMkmOFsnuSy4rePQHcgo68JatZjgO011fQtq0vdnEeAGou6oOZCUzGNOYeDW7fWFR3kVobujUy1w5rWZflVxT1cGHoaTdobfxqsfo_35QT8K6nmxR_iSHgE5oMIWAGAwzY3y1v5W0NsuE095U_7hVcL8zaCYhNKZiyiCqc6H0vaROI"
            />
            <span className="font-headline-md text-headline-md text-primary font-bold">NSEC Library</span>
          </div>
          <div className="animate-[scaleIn_0.5s_cubic-bezier(0.175,0.885,0.32,1.275)_forwards] w-20 h-20 bg-secondary-container/30 rounded-full flex items-center justify-center mb-gutter">
            <span className="material-symbols-outlined text-secondary text-[48px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          </div>
          <div className="text-center mb-gutter">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-base">Check Your Email</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xs mx-auto">
              We have sent a password reset link to the email associated with your account. Please check your inbox and follow the instructions to create a new password.
            </p>
          </div>
          <div className="w-full space-y-base">
            <Link
              to="/"
              className="flex items-center justify-center w-full py-4 px-base bg-secondary text-on-secondary font-bold rounded-lg shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98]"
            >
              Back to Login
            </Link>
            <div className="flex flex-col items-center pt-gutter gap-base">
              <p className="font-body-sm text-body-sm text-on-surface-variant">Didn't receive the email?</p>
              <button
                className="group flex items-center gap-2 font-label-md text-label-md text-secondary font-bold tracking-wider uppercase hover:text-on-secondary-container transition-colors"
                onClick={handleResend}
                disabled={resendStatus === 'loading'}
              >
                {resendStatus === 'loading' ? (
                  <><span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span> Sending...</>
                ) : resendStatus === 'sent' ? (
                  <><span className="material-symbols-outlined text-success text-[18px]">check</span> Sent! Check again</>
                ) : (
                  <><span className="material-symbols-outlined text-[18px] group-hover:rotate-180 transition-transform duration-500">refresh</span> Resend Link</>
                )}
              </button>
            </div>
          </div>
          <div className="mt-16 flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-full border border-outline-variant/20">
            <span className="material-symbols-outlined text-on-surface-variant text-[18px]">help_outline</span>
            <span className="font-label-md text-label-md text-on-surface-variant">Need help? <a className="text-secondary font-bold hover:underline" href="#">Contact Librarian</a></span>
          </div>
        </div>
      </section>
    </main>
  )
}
