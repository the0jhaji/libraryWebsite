import { useState } from 'react'
import AtmosphericBackground from './components/AtmosphericBackground'
import BrandPanel from './components/BrandPanel'
import TabSwitcher from './components/TabSwitcher'
import LoginForm from './components/LoginForm'

export default function App() {
  const [mode, setMode] = useState('student')

  return (
    <main className="min-h-screen flex items-center justify-center relative px-margin-mobile md:px-0">
      <AtmosphericBackground />

      <div className="relative z-10 w-full max-w-[1000px] grid md:grid-cols-2 bg-surface-container-lowest rounded-xl shadow-md overflow-hidden border border-outline-variant/30">
        <BrandPanel />

        <div className="p-8 md:p-16 flex flex-col justify-center">
          <div className="mb-10 text-center md:text-left">
            <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">Welcome Back</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Please enter your credentials to access the library portal.
            </p>
          </div>

          <TabSwitcher mode={mode} onSwitch={setMode} />

          <LoginForm mode={mode} />

          <div className="mt-10 pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
            <a className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">
              <span className="material-symbols-outlined text-[20px]">help</span>
              <span>Help Center</span>
            </a>
            <a className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">
              <span className="material-symbols-outlined text-[20px]">support_agent</span>
              <span>Contact Librarian</span>
            </a>
          </div>
        </div>
      </div>

      <footer className="absolute bottom-6 left-0 w-full px-margin-desktop hidden md:flex justify-between items-center">
        <p className="font-body-sm text-body-sm text-on-surface-variant opacity-60">
          &copy; 2024 St. Jude University Central Library. All Rights Reserved.
        </p>
        <div className="flex gap-6">
          <a className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors" href="#">
            Privacy Policy
          </a>
          <a className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors" href="#">
            Access Guide
          </a>
        </div>
      </footer>
    </main>
  )
}
