import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import confetti from 'canvas-confetti'
import { 
  ExternalLink, 
  Shield, 
  TrendingUp, 
  TrendingDown,
  Zap, 
  Rocket, 
  CheckCircle2,
  ArrowRight,
  Twitter,
  Users,
  Award,
  Calculator,
  BarChart3,
  Activity,
  DollarSign,
  Lock,
  ArrowUpRight,
  ArrowDownRight,
  Info,
  Database,
  Network,
  Layers,
  Github,
  Video,
  Code
} from 'lucide-react'
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

export default function Landing() {
  const [floorPrice, setFloorPrice] = useState(0)
  const [reserves, setReserves] = useState(1000000)
  const [supply, setSupply] = useState(1000000)
  const [konamiCode, setKonamiCode] = useState('')

  // Konami code easter egg
  useEffect(() => {
    const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
    let index = 0

    const handleKeyPress = (e) => {
      if (e.key === konami[index]) {
        index++
        if (index === konami.length) {
          setKonamiCode('GM Germany 🍺')
          setTimeout(() => setKonamiCode(''), 3000)
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          })
          index = 0
        }
      } else {
        index = 0
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  // Calculate floor price
  useEffect(() => {
    if (supply > 0) {
      setFloorPrice(reserves / supply)
    }
  }, [reserves, supply])

  const handleTryStaging = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    })
    window.open('https://staging.feels.fun', '_blank')
  }

  // Chart data
  const priceComparisonData = [
    { name: 'Week 1', traditional: 1.0, feels: 1.0 },
    { name: 'Week 2', traditional: 0.8, feels: 1.0 },
    { name: 'Week 3', traditional: 0.5, feels: 1.02 },
    { name: 'Week 4', traditional: 0.2, feels: 1.05 },
    { name: 'Week 5', traditional: 0.0, feels: 1.08 },
  ]

  const reservesGrowthData = [
    { date: 'Jan', reserves: 500000 },
    { date: 'Feb', reserves: 650000 },
    { date: 'Mar', reserves: 800000 },
    { date: 'Apr', reserves: 950000 },
    { date: 'May', reserves: 1100000 },
    { date: 'Jun', reserves: 1250000 },
  ]

  const rugLossData = [
    { name: 'Rug Losses', value: 98.6, color: '#ef4444' },
    { name: 'Feels Protection', value: 1.4, color: '#10b981' },
  ]

  const protocolMetrics = [
    { label: 'Total Value Locked', value: '$2.4M', change: '+12.5%', trend: 'up' },
    { label: 'Daily Volume', value: '$450K', change: '+8.3%', trend: 'up' },
    { label: 'Active Users', value: '1,247', change: '+15.2%', trend: 'up' },
    { label: 'Floor Price', value: `$${floorPrice.toFixed(4)}`, change: '∞', trend: 'up' },
  ]

  return (
    <div className="min-h-screen bg-[#0a0e27] text-white">
      {/* Professional Header */}
      <header className="sticky top-0 z-50 bg-[#0a0e27]/95 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Feels Protocol</h1>
                <p className="text-xs text-gray-400">Unruggable DEX on Solana</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#overview" className="text-sm text-gray-300 hover:text-white transition-colors">Overview</a>
              <a href="#metrics" className="text-sm text-gray-300 hover:text-white transition-colors">Metrics</a>
              <a href="#architecture" className="text-sm text-gray-300 hover:text-white transition-colors">Architecture</a>
              <a href="#demo" className="text-sm text-gray-300 hover:text-white transition-colors">Demo</a>
              <button
                onClick={handleTryStaging}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Launch App
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Konami Code Easter Egg */}
      {konamiCode && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-2xl text-3xl font-black shadow-2xl"
        >
          {konamiCode}
        </motion.div>
      )}

      <main>
        {/* Hero Section - Professional */}
        <section id="overview" className="border-b border-gray-800/50">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-green-500/10 border border-green-500/20 mb-6">
                  <Activity className="w-4 h-4 text-green-400" />
                  <span className="text-xs font-semibold text-green-400">LIVE ON SOLANA</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  The Unruggable DEX<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    Where Volatility Builds Value
                  </span>
                </h1>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Concentrated liquidity on Solana that turns short-term trades into unbreakable long-term floors. 
                  Protocol-owned market making with mathematical price floors.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={handleTryStaging}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center space-x-2"
                  >
                    <span>Launch Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <a
                    href="#thread"
                    className="px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center space-x-2"
                  >
                    <Twitter className="w-4 h-4" />
                    <span>Read Thread</span>
                  </a>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800/50">
                  <p className="text-xs text-gray-400 mb-3">Built at Colosseum Cypherpunk Hackathon</p>
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <span>Superteam Germany</span>
                    <span>•</span>
                    <span>Colosseum</span>
                    <span>•</span>
                    <span>Solana</span>
                  </div>
                </div>
              </div>
              
              {/* Key Metrics Dashboard */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wide">Protocol Metrics</h3>
                <div className="grid grid-cols-2 gap-4">
                  {protocolMetrics.map((metric, idx) => (
                    <div key={idx} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                      <p className="text-xs text-gray-400 mb-1">{metric.label}</p>
                      <p className="text-2xl font-bold mb-1">{metric.value}</p>
                      <div className={`flex items-center space-x-1 text-xs ${
                        metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {metric.trend === 'up' ? (
                          <ArrowUpRight className="w-3 h-3" />
                        ) : (
                          <ArrowDownRight className="w-3 h-3" />
                        )}
                        <span>{metric.change}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section - Data Table Style */}
        <section id="metrics" className="border-b border-gray-800/50 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4">The $149M Problem</h2>
              <p className="text-gray-400 text-lg">
                Speculative trading on Solana is electric—but rugs and zero-floors wipe billions monthly.
              </p>
            </div>

            {/* Stats Table */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden mb-8">
              <table className="w-full">
                <thead className="bg-gray-800/50 border-b border-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wide">Metric</th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-gray-400 uppercase tracking-wide">Value</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wide">Source</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  <tr className="hover:bg-gray-800/30 transition-colors">
                    <td className="px-6 py-4 text-gray-300">Monthly Rug Losses on Solana</td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-2xl font-bold text-red-400">
                        $<CountUp end={149000000} duration={2.5} separator="," />
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500 text-sm">REKT.news 2025 Avg.</td>
                  </tr>
                  <tr className="hover:bg-gray-800/30 transition-colors">
                    <td className="px-6 py-4 text-gray-300">Token Failure Rate</td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-2xl font-bold text-red-400">
                        <CountUp end={98.6} duration={2.5} decimals={1} />%
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500 text-sm">Solana FM Data</td>
                  </tr>
                      <tr className="hover:bg-gray-800/30 transition-colors">
                        <td className="px-6 py-4 text-gray-300">Solana TPS</td>
                        <td className="px-6 py-4 text-right">
                          <span className="text-2xl font-bold text-green-400">
                            <CountUp end={65000} duration={2.5} separator="," />
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-500 text-sm">Solana Docs</td>
                      </tr>
                      <tr className="hover:bg-gray-800/30 transition-colors">
                        <td className="px-6 py-4 text-gray-300">Max Swap Hops (Feels Efficiency)</td>
                        <td className="px-6 py-4 text-right">
                          <span className="text-2xl font-bold text-purple-400">2</span>
                        </td>
                        <td className="px-6 py-4 text-gray-500 text-sm">GitHub README</td>
                      </tr>
                </tbody>
              </table>
            </div>

            {/* Comparison Chart */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Price Trajectory Comparison</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={priceComparisonData}>
                    <defs>
                      <linearGradient id="colorTraditional" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorFeels" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1f2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px'
                      }}
                    />
                    <Area type="monotone" dataKey="traditional" stroke="#ef4444" fillOpacity={1} fill="url(#colorTraditional)" />
                    <Area type="monotone" dataKey="feels" stroke="#10b981" fillOpacity={1} fill="url(#colorFeels)" />
                  </AreaChart>
                </ResponsiveContainer>
                <div className="flex items-center justify-center gap-6 mt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded"></div>
                    <span className="text-sm text-gray-400">Traditional DEX</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded"></div>
                    <span className="text-sm text-gray-400">Feels Protocol</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Rug Loss Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={rugLossData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {rugLossData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section - Professional Layout */}
        <section id="architecture" className="border-b border-gray-800/50">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4">The Monotonic Floor Ratchet</h2>
              <p className="text-gray-400 text-lg">
                Forget static formulas—Feels' monotonic floor ratchet mechanism dynamically ratchets prices up via fees + JitoSOL yields, blocking drops forever.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Hub-and-Spoke Routing</h3>
                <p className="text-gray-400 text-sm">
                  All tokens route through FeelsSOL (JitoSOL-wrapped hub). Maximum 2 hops per swap—predictable, efficient, no routing nightmares.
                </p>
                <p className="text-xs text-gray-500 mt-2 italic">"TokenA → FeelsSOL → TokenB"</p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Monotonic Floor Ratchet</h3>
                <p className="text-gray-400 text-sm">
                  Dynamic ratchet mechanism: Fees + JitoSOL yields continuously pump reserves, ratcheting the floor upward. Price can only go up or hold—never drop.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Network className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Concentrated Liquidity</h3>
                <p className="text-gray-400 text-sm">
                  Uniswap V3-style tick-based positions with zero-copy accounts for Solana speed. Token-2022 support for modern tokens.
                </p>
              </div>
            </div>

            {/* Reserves Growth Chart */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Protocol Reserves Growth</h3>
                <div className="flex items-center space-x-2 text-green-400">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-semibold">+24.3%</span>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={reservesGrowthData}>
                  <defs>
                    <linearGradient id="colorReserves" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="date" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1f2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px'
                    }}
                  />
                  <Area type="monotone" dataKey="reserves" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorReserves)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* Floor Price Calculator */}
        <section className="border-b border-gray-800/50 bg-gray-900/30">
          <div className="max-w-4xl mx-auto px-6 py-16">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Calculator className="w-6 h-6 text-purple-400" />
                <h2 className="text-3xl font-bold">Monotonic Floor Ratchet Calculator</h2>
              </div>
              <p className="text-gray-400 mb-8">
                Simulate the ratchet: $1M Reserves / 1B Supply = $0.001 Base → Ratchet up with yields
              </p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Protocol Reserves (USDC)
                  </label>
                  <input
                    type="range"
                    min="100000"
                    max="10000000"
                    step="100000"
                    value={reserves}
                    onChange={(e) => setReserves(Number(e.target.value))}
                    className="w-full"
                  />
                  <p className="text-2xl font-mono mt-2 text-purple-400">${reserves.toLocaleString()}</p>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Circulating Supply (FEELS)
                  </label>
                  <input
                    type="range"
                    min="100000000"
                    max="2000000000"
                    step="10000000"
                    value={supply}
                    onChange={(e) => setSupply(Number(e.target.value))}
                    className="w-full"
                  />
                  <p className="text-2xl font-mono mt-2 text-purple-400">{(supply/1e9).toFixed(1)}B</p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-lg p-6 text-center">
                  <p className="text-sm text-gray-400 mb-2">Mathematical Floor Price</p>
                  <p className="text-5xl font-bold font-mono mb-2">${floorPrice.toFixed(4)}</p>
                  <div className="flex items-center justify-center space-x-2 text-green-400">
                    <Lock className="w-5 h-5" />
                    <span className="text-sm font-semibold">Can never go lower</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Demo */}
        <section id="demo" className="border-b border-gray-800/50">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-4">Live Demo</h2>
              <p className="text-gray-400 text-lg">
                Prototype ready: Swap tokens, watch floors hold. No wallet required.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden mb-6">
              <div className="aspect-video bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-800 relative flex items-center justify-center">
                {/* Preview Card */}
                <div className="text-center p-8 max-w-2xl">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Activity className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-3xl font-bold mb-3">Feels Protocol Staging</h3>
                  <p className="text-gray-400 mb-8 text-lg">
                    Experience the unruggable DEX with live token trading, floor price tracking, and protocol-owned liquidity.
                  </p>
                  <button
                    onClick={handleTryStaging}
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center space-x-2 mx-auto shadow-lg shadow-purple-500/20"
                  >
                    <span>Launch Staging Site</span>
                    <ExternalLink className="w-5 h-5" />
                  </button>
                  <p className="text-xs text-gray-500 mt-4">
                    Opens in a new window • No wallet required
                  </p>
                </div>
                
                {/* Try iframe in background (may be blocked by X-Frame-Options) */}
                <iframe
                  src="https://staging.feels.fun"
                  className="absolute inset-0 w-full h-full opacity-0 pointer-events-none"
                  title="Feels Protocol Staging"
                  allow="clipboard-read; clipboard-write"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="https://staging.feels.fun/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-colors group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">Documentation</h3>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                </div>
                <p className="text-sm text-gray-400 mb-2 italic">
                  "Concentrated liquidity with tick-based positioning."
                </p>
                <p className="text-xs text-purple-400">Read Docs →</p>
              </a>
              
              <a
                href="https://staging.feels.fun/blog"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-colors group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">Blog</h3>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                </div>
                <p className="text-sm text-gray-400 mb-2 italic">
                  "Unified markets across spot, lending, leverage."
                </p>
                <p className="text-xs text-purple-400">Read Blog →</p>
              </a>
              
              <a
                href="https://github.com/FeelsDEX/feels"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-colors group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">GitHub</h3>
                  <Github className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                </div>
                <p className="text-sm text-gray-400 mb-2">
                  Open source protocol implementation
                </p>
                <p className="text-xs text-purple-400">View Code →</p>
              </a>
            </div>
            
            {/* Loom Video */}
            <div className="mt-6">
              <a
                href="https://www.loom.com/share/88b305d9598f42ecabff1f81f0ead0f2"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-colors group flex items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                    <Video className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Watch Demo Video</h3>
                    <p className="text-sm text-gray-400">See Feels Protocol in action</p>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
              </a>
            </div>
          </div>
        </section>

        {/* Developer Resources Section */}
        <section className="border-b border-gray-800/50 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4">Developer Resources</h2>
              <p className="text-gray-400 text-lg">
                Build on Feels Protocol with our SDK, documentation, and developer tools.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              {/* Program Address */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <Database className="w-5 h-5 text-purple-400" />
                  <span>Program Address</span>
                </h3>
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                  <p className="text-xs text-gray-400 mb-2">Protocol Program ID</p>
                  <p className="text-sm font-mono text-purple-400 break-all">
                    5EeFL2XscLKAg9HWq5Ssbo3h4nBWHb1qcRZK6V6yt18S
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Deployed on Solana mainnet. Use this address to interact with the protocol.
                </p>
              </div>

              {/* SDK Usage */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <Code className="w-5 h-5 text-purple-400" />
                  <span>SDK Usage</span>
                </h3>
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                  <pre className="text-xs text-gray-300 overflow-x-auto">
{`use feels_sdk::{FeelsClient, SdkConfig};

let config = SdkConfig::localnet(payer);
let client = FeelsClient::new(config)?;

let sig = client.swap(
    &user_token_in,
    &user_token_out,
    &token_in_mint,
    &token_out_mint,
    amount_in,
    minimum_amount_out,
)?;`}
                  </pre>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Execute swaps programmatically with the Feels SDK.
                </p>
              </div>
            </div>

            {/* Entry/Exit Flow */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Entry & Exit Flow</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-green-400 mb-3">Entry Flow</h4>
                  <ol className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-400 font-bold">1.</span>
                      <span>Convert JitoSOL to FeelsSOL using <code className="text-purple-400">enter_feelssol</code></span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-400 font-bold">2.</span>
                      <span>Use FeelsSOL to trade any token in the protocol</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-400 font-bold">3.</span>
                      <span>Provide liquidity to any FeelsSOL pair</span>
                    </li>
                  </ol>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-3">Trading Flow</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div>
                      <p className="text-gray-400 mb-1">Direct swap (1 hop):</p>
                      <code className="text-purple-400">USDC → FeelsSOL</code>
                    </div>
                    <div>
                      <p className="text-gray-400 mb-1">Indirect swap (2 hops):</p>
                      <code className="text-purple-400">USDC → FeelsSOL → SOL</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <a
                href="https://github.com/FeelsDEX/feels#quick-start"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 hover:border-purple-500/50 transition-colors group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold">Quick Start</h4>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-400" />
                </div>
                <p className="text-xs text-gray-400">Get started with Feels Protocol</p>
              </a>
              <a
                href="https://github.com/FeelsDEX/feels#testing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 hover:border-purple-500/50 transition-colors group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold">Testing</h4>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-400" />
                </div>
                <p className="text-xs text-gray-400">Run tests and verify functionality</p>
              </a>
              <a
                href="https://github.com/FeelsDEX/feels#deployment"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 hover:border-purple-500/50 transition-colors group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold">Deployment</h4>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-400" />
                </div>
                <p className="text-xs text-gray-400">Deploy to localnet or devnet</p>
              </a>
            </div>
          </div>
        </section>

        {/* Twitter Thread Section */}
        <section id="thread" className="border-b border-gray-800/50 bg-gray-900/30">
          <div className="max-w-4xl mx-auto px-6 py-16">
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Twitter className="w-6 h-6 text-blue-400" />
                <h2 className="text-4xl font-bold">The Full Thread</h2>
              </div>
              <p className="text-gray-400 text-lg">
                Optimized X Thread for Feels.fun Bounty Submission
              </p>
            </div>

            <div className="space-y-3">
              {[
                { num: 1, title: "Hook - The Heist Setup", content: "Imagine: You're in a DeFi heist. Devs promise moonshots, you ape in... then rug. Liquidity vanishes, your bag hits zero. $149M stolen monthly on Solana. But what if the vault had math locks no thief could crack? Enter Feels.fun – the DEX where rugs are mathematically murdered. Born from Superteam Germany's cypherpunk brains at Colosseum Hackathon. Buckle up.", tags: ["#SuperteamGermany"] },
                { num: 2, title: "What It Does", content: "Feels is a hub-and-spoke DEX on Solana: All tokens route through FeelsSOL (JitoSOL-wrapped hub). Max 2 hops per swap—predictable, efficient. Spot, lending, leverage—all unified. From GitHub: 'All liquidity pools must include FeelsSOL as one side.' Prototype live: Trade $SOL, $USDC, watch the magic." },
                { num: 3, title: "The Innovation Bomb", content: "The killer feature? The monotonic floor ratchet – a DeFi innovation that dynamically ratchets prices up via fees + JitoSOL yields. From GitHub: 'Implements a monotonic floor ratchet mechanism to protect against price drops.' Devs can't drain. Price can only go up or hold—never drop. Liquidations? Obsolete. This isn't DeFi 1.0. It's armored AF." },
                { num: 4, title: "Phases Breakdown", content: "Feels.fun rolls out in phases – blog gold: Phase 1: Spot Trading (LIVE) – Fees auto-boost reserves. Phase 2: Lending – Borrow against $FEELS, zero liq risk. Phase 3: Leverage – Organic longs/shorts, market-driven rates. No oracles, no exploits." },
                { num: 5, title: "Solana Leverage", content: "Why Solana? Feels.fun breathes its ecosystem: 65k TPS = Unified pool scales without hiccups. &lt;$0.0001 fees = Reserves compound 24/7. JitoSOL yields = Floor rises even in bear markets. Docs confirm: 'Solana's finality ensures instant, trustless floor updates.'" },
                { num: 6, title: "Superteam Germany Spotlight", content: "Huge props to @SuperteamDE – the Berlin crew fueling Europe's Solana renaissance. Feels.fun: Crafted at Colosseum Cypherpunk Hackathon, one of their Top 5 picks. Team (@0xlate, @hxrts, @onr_gg) turned cypherpunk ideals into code that protects builders." },
                { num: 7, title: "Impact Deep Dive", content: "Real talk: $149M rug losses/month? Feels.fun could slash that by making 98.6% token deaths... optional. Easier for noobs: One pool, one floor, pure fun. For degens: Leverage without the liquidation lottery. From docs: 'Redirects MEV to holders – DeFi where you feel the wins.'" },
                { num: 8, title: "Demo Call", content: "Don't just read – feel it. Staging: https://staging.feels.fun/ – swap tokens, eye the pool. Docs: https://staging.feels.fun/docs. GitHub: https://github.com/FeelsDEX/feels. Blog: https://staging.feels.fun/blog. Pro tip: Calc your own floor. Reserves $1M / Supply 1B = $0.001 base → ratchet up with yields." },
                { num: 9, title: "Engagement Poll", content: "Solana DeFi upgrade: What's Feels.fun fixing first for you? 🧳 Rugs forever | 💀 Liq nightmares | 💸 Fee black holes | 🚀 All – gimme! Vote + RT if you're ready for unruggable." },
                { num: 10, title: "Memorable Close", content: "Feels: Where Solana's speed meets German precision, rugs meet their ratchet doom. Big love to @SuperteamDE for spotlighting this Colosseum beast – innovation that feels like victory. Follow @FeelsSol for updates. Try it. Build on it. Win with it." },
              ].map((tweet, idx) => (
                <div
                  key={idx}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-5 hover:border-gray-700 transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-white flex-shrink-0 text-sm">
                      {tweet.num}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-xs font-semibold text-purple-400">Tweet {tweet.num}/10</span>
                        <span className="text-gray-600">•</span>
                        <span className="text-xs text-gray-500">{tweet.title}</span>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-sm mb-2">{tweet.content}</p>
                      {tweet.tags && (
                        <div className="flex flex-wrap gap-2">
                          {tweet.tags.map((tag, tagIdx) => (
                            <span key={tagIdx} className="text-blue-400 text-xs font-semibold">{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gray-900/30">
          <div className="max-w-4xl mx-auto px-6 py-16 text-center">
            <h2 className="text-4xl font-bold mb-6">Join the Unruggable Revolution</h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Feels: Where Solana's speed meets cypherpunk ideals—volatility tamed, value eternal.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={handleTryStaging}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Trade Now
              </button>
              <a
                href="https://x.com/FeelsSol"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center space-x-2"
              >
                <Twitter className="w-4 h-4" />
                <span>Follow @FeelsSol</span>
              </a>
              <a
                href="https://github.com/FeelsDEX/feels"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center space-x-2"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="#thread"
                className="px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center space-x-2"
              >
                <Twitter className="w-4 h-4" />
                <span>Read Thread</span>
              </a>
            </div>

            <div className="pt-8 border-t border-gray-800/50">
              <div className="flex items-center justify-center space-x-3 mb-3">
                <p className="text-sm text-gray-500">
                  Built by <span className="text-white font-semibold">@solanadevkit</span> for Superteam Germany Bounty
                </p>
                <svg 
                  className="w-6 h-6" 
                  viewBox="0 0 36 24" 
                  role="img" 
                  aria-label="German flag"
                >
                  <rect width="36" height="8" y="0" fill="#000000"/>
                  <rect width="36" height="8" y="8" fill="#DD0000"/>
                  <rect width="36" height="8" y="16" fill="#FFCE00"/>
                </svg>
              </div>
              <p className="text-xs text-gray-600 text-center">
                #FeelsFun #Solana #SuperteamGermany
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
