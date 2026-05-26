import { useState } from 'react'

export default function Settings() {
  const [name] = useState('Alex Rivera')
  const [email] = useState('alex.rivera@nsec.edu.in')
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState({
    emailArrivals: true,
    dueReminders: true,
    fineNotifs: true,
    smsAlerts: false,
  })
  const [twoFA, setTwoFA] = useState(false)

  const handleNotifToggle = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const handleDarkToggle = () => {
    setDarkMode((prev) => {
      const next = !prev
      if (next) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      return next
    })
  }

  const toggleClass = (on) =>
    `relative inline-flex items-center cursor-pointer`

  return (
    <div className="pb-12 px-4 md:px-12 max-w-7xl mx-auto">
      <header className="mb-10">
        <h1 className="font-headline-lg text-headline-lg text-on-background mb-2">Account Settings</h1>
        <p className="font-body-md text-body-md text-on-surface-variant">Manage your library profile, notifications, and security preferences.</p>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <section className="lg:col-span-8">
          <div className="glass-card rounded-xl p-8 shadow-sm">
            <div className="flex items-center gap-6 mb-8">
              <div className="relative group">
                <img
                  alt="Alex Rivera Profile"
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWoTdU9b79jj7E-1dAFGZ02NrHOcnhUesSKRVpPBQGdFtM9tABgm125qGBpQJvNCD6lEvDhDOXHfGTnbh9prAtIdIQ3F-J97-CkfT_Wi_PPDQApzykncd3OIFMdKSpdX9BDi2E5sGm9QvMGs9plTyPkm0uO5iwlP5WML0FYPMXbVWaP-CDDIyXApXa7Co3Tv_KVj4ve--sEbN1tJZNy80Qw9RCteHH7OoS8Uu_jrb06h9QE88mmkIfrBdRGCyErqGVcelPaGr43QY"
                />
                <button className="absolute bottom-0 right-0 bg-secondary text-on-secondary p-1.5 rounded-full shadow-lg hover:scale-110 transition-transform material-symbols-outlined text-sm">edit</button>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-primary">{name}</h3>
                <p className="font-label-md text-label-md text-on-surface-variant mb-1">LID: 882910</p>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/10 text-success">Active Member</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Full Name</label>
                  <input
                    className="w-full bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-secondary/30 font-body-md px-4 py-3"
                    type="text"
                    defaultValue={name}
                  />
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Email Address</label>
                  <input
                    className="w-full bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-secondary/30 font-body-md px-4 py-3"
                    type="email"
                    defaultValue={email}
                  />
                </div>
              </div>
              <div className="flex justify-end pt-4">
                <button className="px-6 py-2.5 bg-secondary text-on-secondary rounded-lg font-medium hover:opacity-90 active:scale-95 transition-all shadow-sm">Update Profile</button>
              </div>
            </div>
          </div>
          <div className="mt-8 glass-card rounded-xl p-8 shadow-sm">
            <h3 className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined">security</span>
              Security & Access
            </h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg">
                <div>
                  <p className="font-body-md font-semibold text-primary">Password</p>
                  <p className="font-body-sm text-on-surface-variant">Last updated 3 months ago</p>
                </div>
                <button className="px-4 py-2 border border-secondary text-secondary rounded-lg font-medium hover:bg-secondary/5 transition-colors">Change Password</button>
              </div>
              <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg">
                <div>
                  <p className="font-body-md font-semibold text-primary">Two-Factor Authentication (2FA)</p>
                  <p className="font-body-sm text-on-surface-variant">Add an extra layer of security to your account.</p>
                </div>
                <label className={toggleClass(twoFA)}>
                  <input
                    className="sr-only peer"
                    type="checkbox"
                    checked={twoFA}
                    onChange={() => setTwoFA((v) => !v)}
                  />
                  <div className={`toggle-bg w-11 h-6 rounded-full peer ${twoFA ? 'bg-secondary' : 'bg-outline-variant/30'}`} />
                  <div className={`toggle-dot absolute left-[2px] top-[2px] bg-white w-5 h-5 rounded-full transition-all ${twoFA ? 'translate-x-full' : ''}`} />
                </label>
              </div>
            </div>
          </div>
        </section>
        <section className="lg:col-span-4 space-y-8">
          <div className="glass-card rounded-xl p-8 shadow-sm">
            <h3 className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined">notifications</span>
              Notifications
            </h3>
            <div className="space-y-5">
              {[
                { key: 'emailArrivals', label: 'Email Arrivals' },
                { key: 'dueReminders', label: 'Due Date Reminders' },
                { key: 'fineNotifs', label: 'Fine Notifications' },
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between">
                  <span className="font-body-md text-on-surface">{item.label}</span>
                  <label className={toggleClass(notifications[item.key])}>
                    <input
                      className="sr-only peer"
                      type="checkbox"
                      checked={notifications[item.key]}
                      onChange={() => handleNotifToggle(item.key)}
                    />
                    <div className={`toggle-bg w-11 h-6 rounded-full peer ${notifications[item.key] ? 'bg-secondary' : 'bg-outline-variant/30'}`} />
                    <div className={`toggle-dot absolute left-[2px] top-[2px] bg-white w-5 h-5 rounded-full transition-all ${notifications[item.key] ? 'translate-x-full' : ''}`} />
                  </label>
                </div>
              ))}
              <div className="pt-4 border-t border-outline-variant/20">
                <div className="flex items-center justify-between">
                  <span className="font-body-md text-on-surface">SMS Alerts</span>
                  <label className={toggleClass(notifications.smsAlerts)}>
                    <input
                      className="sr-only peer"
                      type="checkbox"
                      checked={notifications.smsAlerts}
                      onChange={() => handleNotifToggle('smsAlerts')}
                    />
                    <div className={`toggle-bg w-11 h-6 rounded-full peer ${notifications.smsAlerts ? 'bg-secondary' : 'bg-outline-variant/30'}`} />
                    <div className={`toggle-dot absolute left-[2px] top-[2px] bg-white w-5 h-5 rounded-full transition-all ${notifications.smsAlerts ? 'translate-x-full' : ''}`} />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="glass-card rounded-xl p-8 shadow-sm">
            <h3 className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined">settings_suggest</span>
              Interface
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Display Language</label>
                <select className="w-full bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-secondary/30 font-body-md px-4 py-3">
                  <option>English (UK)</option>
                  <option>Bengali</option>
                  <option>Hindi</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant">dark_mode</span>
                  <span className="font-body-md text-on-surface">Dark Mode</span>
                </div>
                <label className={toggleClass(darkMode)}>
                  <input
                    className="sr-only peer"
                    type="checkbox"
                    checked={darkMode}
                    onChange={handleDarkToggle}
                  />
                  <div className={`toggle-bg w-11 h-6 rounded-full peer ${darkMode ? 'bg-secondary' : 'bg-outline-variant/30'}`} />
                  <div className={`toggle-dot absolute left-[2px] top-[2px] bg-white w-5 h-5 rounded-full transition-all ${darkMode ? 'translate-x-full' : ''}`} />
                </label>
              </div>
            </div>
          </div>
          <div className="bg-primary-container text-white rounded-xl p-8 shadow-lg relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="font-headline-md text-white mb-2">Library Status</h4>
              <p className="font-body-sm text-surface-variant/80 mb-4">You have 2 books due in 3 days.</p>
              <div className="text-3xl font-bold mb-1">₹ 27.50</div>
              <p className="font-label-md uppercase tracking-wider text-secondary-container">Outstanding Balance</p>
            </div>
            <div className="absolute -bottom-4 -right-4 opacity-10">
              <span className="material-symbols-outlined text-[120px]">account_balance_wallet</span>
            </div>
          </div>
        </section>
      </div>
      <footer className="w-full py-8 mt-12 border-t border-outline-variant/10 bg-surface-container-lowest">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 md:mb-0">&copy; 2024 Netaji Subhash Engineering College Central Library</p>
          <div className="flex gap-6">
            <a className="font-body-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">Privacy Policy</a>
            <a className="font-body-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">Terms of Service</a>
            <a className="font-body-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">Contact Librarian</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
