import { useState } from 'react'

export default function LoginForm({ mode, onSuccess }) {
  const [uid, setUid] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [status, setStatus] = useState('idle')

  const uidConfig = {
    student: { label: 'Student ID Number', placeholder: 'e.g. SJU-123456' },
    staff: { label: 'Staff / Faculty Email', placeholder: 'e.g. j.doe@stjude.edu' },
  }

  const config = uidConfig[mode]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ uid, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 2000)
        return
      }

      if (remember) {
        localStorage.setItem('token', data.token)
      } else {
        sessionStorage.setItem('token', data.token)
      }

      setStatus('success')
      setTimeout(() => {
        if (onSuccess) onSuccess()
      }, 1000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 2000)
    }
  }

  const buttonContent = {
    idle: (
      <>
        <span>Secure Login</span>
        <span className="material-symbols-outlined">arrow_forward</span>
      </>
    ),
    loading: (
      <>
        <span className="material-symbols-outlined animate-spin">progress_activity</span>
        <span>Authenticating...</span>
      </>
    ),
    success: (
      <>
        <span className="material-symbols-outlined">check_circle</span>
        <span>Success!</span>
      </>
    ),
    error: (
      <>
        <span className="material-symbols-outlined">error</span>
        <span>Invalid credentials</span>
      </>
    ),
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider" htmlFor="uid">
          {config.label}
        </label>
        <div className="relative group">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-secondary transition-colors">
            badge
          </span>
          <input
            className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-secondary/30 focus:bg-surface-container-lowest transition-all text-body-md placeholder:text-outline-variant"
            id="uid"
            name="uid"
            type="text"
            placeholder={config.placeholder}
            value={uid}
            onChange={(e) => setUid(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider" htmlFor="password">
            Library PIN / Password
          </label>
          <a className="font-label-md text-label-md text-secondary hover:underline transition-all" href="#">
            Forgot PIN?
          </a>
        </div>
        <div className="relative group">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-secondary transition-colors">
            lock
          </span>
          <input
            className="w-full pl-12 pr-12 py-4 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-secondary/30 focus:bg-surface-container-lowest transition-all text-body-md placeholder:text-outline-variant"
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors"
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            <span className="material-symbols-outlined">
              {showPassword ? 'visibility_off' : 'visibility'}
            </span>
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3 py-2">
        <input
          className="w-5 h-5 rounded border-outline-variant text-secondary focus:ring-secondary/20 cursor-pointer"
          id="remember"
          type="checkbox"
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
        />
        <label className="font-body-sm text-body-sm text-on-surface-variant cursor-pointer" htmlFor="remember">
          Remember this device for 30 days
        </label>
      </div>

      <button
        className={`w-full py-4 font-bold rounded-lg shadow-sm hover:shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 ${
          status === 'success'
            ? 'bg-success text-white'
            : status === 'error'
            ? 'bg-error text-white'
            : 'bg-secondary hover:bg-on-secondary-container text-on-secondary'
        }`}
        type="submit"
        disabled={status === 'loading'}
      >
        {buttonContent[status]}
      </button>
    </form>
  )
}
