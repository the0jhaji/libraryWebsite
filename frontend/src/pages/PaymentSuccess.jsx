import { Link } from 'react-router-dom'

export default function PaymentSuccess() {
  return (
    <div className="flex-1 p-margin-mobile md:p-margin-desktop overflow-y-auto relative pt-24">
      <div className="absolute top-0 right-0 w-1/3 h-1/2 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-secondary blur-[120px] rounded-full mix-blend-multiply" />
      </div>
      <div className="max-w-2xl mx-auto mt-8 md:mt-16 relative">
        <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl shadow-lg overflow-hidden" style={{ backdropFilter: 'blur(12px)' }}>
          <div className="p-8 md:p-12 text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-success/10 rounded-full mb-6">
              <span className="material-symbols-outlined text-[64px] text-success" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-primary mb-2">Payment Successful</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">Your transaction has been processed and your account is now in good standing.</p>
            <div className="bg-secondary-container/30 border border-secondary/20 rounded-lg p-4 mb-8 flex items-center gap-3 text-left">
              <span className="material-symbols-outlined text-secondary">verified_user</span>
              <p className="font-body-md text-body-md text-on-secondary-container">
                <span className="font-bold">Access Restored:</span> Book renewal permissions and digital reservoir access have been fully restored to your student ID.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-left">
              <div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant/10">
                <p className="font-label-md text-label-md text-on-surface-variant uppercase mb-1">Transaction ID</p>
                <p className="font-label-md text-label-md font-bold text-primary">#LUM-99283-TX</p>
              </div>
              <div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant/10">
                <p className="font-label-md text-label-md text-on-surface-variant uppercase mb-1">Date & Time</p>
                <p className="font-label-md text-label-md font-bold text-primary">{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} · {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</p>
              </div>
              <div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant/10">
                <p className="font-label-md text-label-md text-on-surface-variant uppercase mb-1">Total Paid</p>
                <p className="font-label-md text-label-md font-bold text-secondary text-lg">₹24.50</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-secondary text-on-secondary font-bold py-4 px-8 rounded-xl shadow-md hover:opacity-90 active:scale-95 transition-all" onClick={() => console.log('Download receipt')}>
                <span className="material-symbols-outlined">download</span>
                <span>Download Receipt</span>
              </button>
              <Link
                to="/dashboard"
                className="w-full md:w-auto flex items-center justify-center gap-2 bg-transparent text-secondary border-2 border-secondary font-bold py-4 px-8 rounded-xl hover:bg-secondary-container/20 active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined">dashboard</span>
                <span>Return to Dashboard</span>
              </Link>
            </div>
          </div>
          <div className="h-2 bg-gradient-to-r from-secondary-container via-secondary to-primary-container" />
        </div>
        <p className="text-center mt-8 font-label-md text-label-md text-on-surface-variant">
          Having issues with your payment? <a className="text-secondary underline underline-offset-4 hover:text-on-secondary-container transition-colors" href="#">Contact the Librarian Desk</a>
        </p>
      </div>
    </div>
  )
}
