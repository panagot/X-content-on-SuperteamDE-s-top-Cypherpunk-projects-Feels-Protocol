import { Link, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard, 
  Video,
  Settings,
  Sparkles as SparklesIcon,
  Menu,
  X,
  Rocket,
  Award,
  ExternalLink
} from 'lucide-react'
import { useState } from 'react'
import DarkModeToggle from './DarkModeToggle'

const navigation = [
  { name: 'Landing', href: '/', icon: Rocket, description: 'Main landing page' },
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard, description: 'Project overview' },
  { name: 'Content Creator', href: '/content-creator', icon: Video, description: 'Create your content' },
  { name: 'How It Works', href: '/how-it-works', icon: Settings, description: 'Architecture & mechanics' },
  { name: 'Key Features', href: '/key-features', icon: SparklesIcon, description: 'Innovation highlights' },
]

export default function Layout({ children }) {
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const isLandingPage = location.pathname === '/'

  return (
    <div className={`min-h-screen ${isLandingPage ? '' : 'bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900'}`}>
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Premium Design */}
      {!isLandingPage && (
      <aside className={`
        fixed top-0 left-0 z-50 h-full w-80 bg-gradient-to-b from-white via-white to-gray-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 border-r border-gray-200/50 dark:border-gray-700/50 transform transition-transform duration-500 ease-out shadow-2xl backdrop-blur-xl
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo Section - Premium */}
          <div className="p-8 border-b border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100/20 dark:bg-primary-900/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                  <div className="relative w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-2xl shadow-primary-500/30 transform hover:scale-110 hover:rotate-12 transition-all duration-500">
                    <Rocket className="w-9 h-9 text-white icon-glow" />
                  </div>
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl font-black bg-gradient-primary bg-clip-text text-transparent">Feels Protocol</h1>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wider">Content Creator</p>
                </div>
              </div>
              
              {/* German Flag Badge - Premium */}
              <div className="flex items-center space-x-3 px-4 py-3 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-2 border-germany-red/30 dark:border-germany-red/40 shadow-lg hover:shadow-xl transition-all">
                <div className="flex flex-col rounded overflow-hidden shadow-md border border-gray-300 dark:border-gray-600" style={{ width: '28px', height: '18px', flexShrink: 0 }}>
                  <div style={{ backgroundColor: '#000000', height: '33.33%', width: '100%' }}></div>
                  <div style={{ backgroundColor: '#DD0000', height: '33.33%', width: '100%', borderTop: '1px solid rgba(0,0,0,0.1)', borderBottom: '1px solid rgba(0,0,0,0.1)' }}></div>
                  <div style={{ backgroundColor: '#FFCE00', height: '33.33%', width: '100%' }}></div>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-black text-gray-800 dark:text-gray-200">Superteam Germany</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold">Colosseum Cypherpunk</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation - Premium */}
          <nav className="flex-1 overflow-y-auto p-6 space-y-3">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`
                    group relative flex flex-col space-y-2 px-5 py-4 rounded-2xl transition-all duration-500 overflow-hidden transform hover:scale-[1.02]
                    ${isActive 
                      ? 'bg-gradient-primary text-white shadow-2xl shadow-primary-500/40' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-primary-50 hover:to-purple-50 dark:hover:from-primary-900/20 dark:hover:to-purple-900/20 hover:shadow-xl'
                    }
                  `}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`
                      p-3 rounded-xl transition-all duration-500
                      ${isActive 
                        ? 'bg-white/20 backdrop-blur-sm' 
                        : 'bg-gray-100 dark:bg-gray-700 group-hover:bg-gradient-to-br group-hover:from-primary-100 group-hover:to-purple-100 dark:group-hover:from-primary-900/30 dark:group-hover:to-purple-900/30'
                      }
                    `}>
                      <Icon className={`w-6 h-6 ${isActive ? '' : 'group-hover:scale-110 group-hover:rotate-12'} transition-transform duration-500`} />
                    </div>
                    <div className="flex-1">
                      <span className="font-black text-base block">{item.name}</span>
                      <span className={`text-xs ${isActive ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'} font-semibold`}>
                        {item.description}
                      </span>
                    </div>
                    {isActive && (
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse shadow-lg"></div>
                    )}
                  </div>
                  
                  {/* Active indicator bar */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-white rounded-r-full shadow-lg"></div>
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Footer - Premium */}
          <div className="p-6 border-t border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-100/10 dark:bg-primary-900/5 rounded-full blur-2xl"></div>
            <div className="relative z-10 space-y-4">
              {/* Bounty Badge - Keep German colors for branding */}
              <div className="flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-gradient-germany text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                <Award className="w-5 h-5" />
                <span className="text-xs font-black uppercase tracking-wider">Hackathon Project</span>
              </div>
              
              {/* Links */}
              <div className="flex flex-col items-center space-y-3">
                <div className="flex items-center space-x-2">
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-black uppercase tracking-wider">Feels Protocol</p>
                </div>
                <div className="flex items-center space-x-2 text-xs">
                  <span className="text-gray-400 dark:text-gray-500 font-semibold">Built on</span>
                  <span className="font-black bg-gradient-solana bg-clip-text text-transparent">Solana</span>
                </div>
              </div>
            </div>
          </div>
          </div>
        </aside>
      )}

          {/* Main content */}
          <div className={isLandingPage ? '' : 'lg:pl-80'}>
        {/* Top bar - Premium */}
        {!isLandingPage && (
        <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-30 shadow-lg">
          <div className="flex items-center justify-between px-8 py-5">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <div className="flex-1 lg:ml-0 ml-4">
              <h2 className="text-3xl font-black bg-gradient-primary bg-clip-text text-transparent">
                {navigation.find(item => item.href === location.pathname)?.name || 'Dashboard'}
              </h2>
            </div>
            <div className="flex items-center space-x-4">
              <DarkModeToggle />
            </div>
          </div>
          
          {/* Accent bar - Premium */}
          <div className="h-1.5 bg-gradient-primary relative overflow-hidden">
            <div className="absolute inset-0 animate-shimmer"></div>
          </div>
        </header>
        )}

        {/* Page content */}
        <main className={isLandingPage ? '' : 'p-8 lg:p-12'}>
          {children}
        </main>
      </div>
    </div>
  )
}
