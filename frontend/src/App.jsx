import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AtmosphericBackground from './components/AtmosphericBackground'
import BrandPanel from './components/BrandPanel'
import TabSwitcher from './components/TabSwitcher'
import LoginForm from './components/LoginForm'
import Sidebar from './components/Sidebar'
import TopNav from './components/TopNav'
import BottomNav from './components/BottomNav'
import CatalogTopNav from './components/CatalogTopNav'
import Dashboard from './pages/Dashboard'
import Checkout from './pages/Checkout'
import Catalog from './pages/Catalog'
import PaymentSuccess from './pages/PaymentSuccess'
import AdminTopNav from './components/AdminTopNav'
import AdminSidebar from './components/AdminSidebar'
import AdminAnalytics from './pages/AdminAnalytics'
import Settings from './pages/Settings'
import ForgotPassword from './pages/ForgotPassword'
import ResetLinkSent from './pages/ResetLinkSent'

function LoginPage() {
  const [mode, setMode] = useState('student')

  const handleSuccess = () => {
    window.location.href = '/dashboard'
  }

  return (
    <main className="min-h-screen flex items-center justify-center relative px-margin-mobile md:px-0">
      <AtmosphericBackground />
      <div className="relative z-10 w-full max-w-[1000px] grid md:grid-cols-2 bg-surface-container-lowest rounded-xl shadow-md overflow-hidden border border-outline-variant/30">
        <BrandPanel />
        <div className="p-8 md:p-16 flex flex-col justify-center">
          <div className="mb-10 text-center md:text-left">
            <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">Welcome Back</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Please enter your credentials to access the library portal.</p>
          </div>
          <TabSwitcher mode={mode} onSwitch={setMode} />
          <LoginForm mode={mode} onSuccess={handleSuccess} />
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
    </main>
  )
}

function AppLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-background">
      <Sidebar />
      <main className="flex-1 md:ml-64 min-h-screen flex flex-col">
        <TopNav />
        {children}
        <BottomNav />
      </main>
    </div>
  )
}

function CatalogLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <CatalogTopNav />
      <Catalog />
    </div>
  )
}

function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-background">
      <AdminTopNav />
      <div className="flex">
        <AdminSidebar />
        {children}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<AppLayout><Dashboard /></AppLayout>} />
        <Route path="/checkout" element={<AppLayout><Checkout /></AppLayout>} />
        <Route path="/catalog" element={<CatalogLayout />} />
        <Route path="/payment-success" element={<AppLayout><PaymentSuccess /></AppLayout>} />
        <Route path="/settings" element={<AppLayout><Settings /></AppLayout>} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-link-sent" element={<ResetLinkSent />} />
        <Route path="/admin/analytics" element={<AdminLayout><AdminAnalytics /></AdminLayout>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
