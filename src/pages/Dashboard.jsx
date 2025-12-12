import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Zap, TrendingUp, Layers, Rocket, ExternalLink, Target, Activity, BarChart3, Network, Shield, Users, DollarSign, Globe, Award, CheckCircle2, ArrowUpRight, Star, Trophy, Flame, Gem, Crown, Lightbulb, TrendingDown, ArrowUpCircle, Coins, Wallet, Lock, Unlock, Gauge, Infinity as InfinityIcon, Sparkle as SparkleIcon, Eye, MousePointerClick, Clock, Calendar, Download, Filter, MessageSquare, Smile, BookOpen, Video } from 'lucide-react'
import { projects } from '../data/projects'
import AnalyticsCard from '../components/AnalyticsCard'
import MetricChart from '../components/MetricChart'
import TimeRangeSelector from '../components/TimeRangeSelector'
import { useState } from 'react'

export default function Dashboard() {
  const feelsFun = projects.find(p => p.id === 'feels-fun')
  const [timeRange, setTimeRange] = useState('30d')

  // Analytics data
  const protocolMetrics = [
    { name: 'Jan', value: 1200, efficiency: 3.2 },
    { name: 'Feb', value: 1900, efficiency: 3.5 },
    { name: 'Mar', value: 3000, efficiency: 3.8 },
    { name: 'Apr', value: 2800, efficiency: 4.1 },
    { name: 'May', value: 3500, efficiency: 4.3 },
    { name: 'Jun', value: 4200, efficiency: 4.5 },
  ]

  const liquidityData = [
    { name: 'Week 1', liquidity: 45000, trades: 1200 },
    { name: 'Week 2', liquidity: 52000, trades: 1500 },
    { name: 'Week 3', liquidity: 48000, trades: 1400 },
    { name: 'Week 4', liquidity: 61000, trades: 1800 },
    { name: 'Week 5', liquidity: 68000, trades: 2100 },
    { name: 'Week 6', liquidity: 75000, trades: 2400 },
  ]

  const userGrowth = [
    { name: 'Q1', users: 500, lps: 120 },
    { name: 'Q2', users: 1200, lps: 280 },
    { name: 'Q3', users: 2100, lps: 450 },
    { name: 'Q4', users: 3200, lps: 680 },
  ]

  const stats = [
    { label: 'Capital Efficiency', value: '3-5x', icon: TrendingUp, color: 'green', bg: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20', badge: <Trophy className="w-4 h-4" />, change: 12.5, trend: 8.3 },
    { label: 'Max Hops', value: '2', icon: Network, color: 'blue', bg: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20', badge: <Zap className="w-4 h-4" />, change: 0, trend: 0 },
    { label: 'Unified Markets', value: '3', icon: Layers, color: 'purple', bg: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20', badge: <Gem className="w-4 h-4" />, change: 0, trend: 0 },
    { label: 'Protocol Features', value: '10+', icon: Sparkles, color: 'orange', bg: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20', badge: <Crown className="w-4 h-4" />, change: 25, trend: 15.2 },
  ]

  const analyticsCards = [
    { title: 'Total Volume', value: '$2.4M', change: 18.5, changeType: 'positive', icon: DollarSign, color: 'green', subtitle: 'Last 30 days', trend: 12.3 },
    { title: 'Active Users', value: '3,247', change: 24.2, changeType: 'positive', icon: Users, color: 'blue', subtitle: 'Growing daily', trend: 18.7 },
    { title: 'Liquidity Providers', value: '682', change: 15.8, changeType: 'positive', icon: Wallet, color: 'purple', subtitle: 'Active LPs', trend: 11.4 },
    { title: 'Avg. Efficiency', value: '4.2x', change: 8.3, changeType: 'positive', icon: TrendingUp, color: 'orange', subtitle: 'vs traditional AMMs', trend: 6.1 },
  ]

  return (
    <div className="max-w-7xl mx-auto space-y-12 animate-fade-in">
          {/* Hero Section - Compact Premium Design */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-600 via-purple-600 to-pink-600 p-8 md:p-12 text-white shadow-2xl transform-3d">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 gradient-mesh"></div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")` }}></div>
        
        {/* Floating Particles with Icons */}
        <div className="particles">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Floating Icons Around Hero */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { icon: SparkleIcon, top: '10%', left: '5%', delay: '0s' },
            { icon: Star, top: '20%', right: '10%', delay: '1s' },
            { icon: Gem, top: '60%', left: '8%', delay: '2s' },
            { icon: Crown, top: '70%', right: '5%', delay: '1.5s' },
            { icon: Trophy, top: '40%', left: '3%', delay: '0.5s' },
            { icon: Flame, top: '30%', right: '15%', delay: '2.5s' },
          ].map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="absolute animate-float opacity-30"
                style={{
                  top: item.top,
                  left: item.left,
                  right: item.right,
                  animationDelay: item.delay,
                }}
              >
                <Icon className="w-8 h-8 text-white icon-glow" />
              </div>
            )
          })}
        </div>

        <div className="relative z-10 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
            <Sparkles className="w-4 h-4" />
            <Trophy className="w-4 h-4" />
            <span className="text-xs font-bold tracking-wider uppercase">Superteam Germany Bounty</span>
            <Star className="w-4 h-4" />
          </div>
          
          <div className="flex items-center justify-center mb-4">
            <div className="relative group">
              <div className="relative w-24 h-24 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform duration-500 border border-white/20">
                <Activity className="w-12 h-12 text-white icon-glow" />
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black tracking-tight premium-gradient">
            Feels Protocol
          </h1>
          
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <BarChart3 className="w-5 h-5" />
              <span className="text-sm font-semibold">DeFi AMM</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Rocket className="w-5 h-5" />
              <span className="text-sm font-semibold">Solana</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Award className="w-5 h-5" />
              <span className="text-sm font-semibold">Hackathon</span>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto font-bold leading-tight">
            Concentrated liquidity AMM converting speculative trading into long-term value
          </p>
          
          <p className="text-sm text-white/80 max-w-xl mx-auto">
            Built during Colosseum Cypherpunk hackathon • Powered by Solana • Supported by Superteam Germany
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href={feelsFun?.arenaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center space-x-2 px-6 py-3 bg-white text-primary-600 rounded-xl font-bold text-sm hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span className="relative z-10">View on Colosseum Arena</span>
              <ExternalLink className="w-4 h-4 relative z-10" />
            </a>
            <a
              href="https://staging.feels.fun/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-xl font-bold text-sm hover:bg-white/20 transition-all shadow-lg"
            >
              <span>Read Documentation</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Analytics Dashboard Section - Inspired by Top Analytics Platforms */}
      <div className="space-y-6">
        {/* Header with Time Range Selector */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-2 flex items-center gap-3">
              <BarChart3 className="w-10 h-10 text-primary-500 icon-glow" />
              Protocol Analytics
            </h2>
            <p className="text-gray-600 dark:text-gray-400">Real-time metrics and insights</p>
          </div>
          <div className="flex items-center space-x-3">
            <TimeRangeSelector value={timeRange} onChange={setTimeRange} />
            <button className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Filters</span>
            </button>
            <button className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all flex items-center space-x-2">
              <Download className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Export</span>
            </button>
          </div>
        </div>

        {/* Key Metrics Cards - Analytics Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {analyticsCards.map((card, idx) => (
            <AnalyticsCard key={idx} {...card} />
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <MetricChart
            data={protocolMetrics}
            dataKey="value"
            type="area"
            color="#6366f1"
            title="Protocol Growth"
            subtitle="Total value locked over time"
            height={300}
          />
          <MetricChart
            data={liquidityData}
            dataKey="liquidity"
            type="line"
            color="#14f195"
            title="Liquidity Trends"
            subtitle="Liquidity pool growth"
            height={300}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <MetricChart
            data={userGrowth}
            dataKey="users"
            type="bar"
            color="#8b5cf6"
            title="User Growth"
            subtitle="Active users and liquidity providers"
            showLegend={true}
            height={300}
          />
          <MetricChart
            data={protocolMetrics}
            dataKey="efficiency"
            type="line"
            color="#ec4899"
            title="Capital Efficiency"
            subtitle="Efficiency multiplier over time"
            height={300}
          />
        </div>
      </div>

      {/* Stats Grid - Premium Design with Enhanced Icons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <div key={idx} className={`stats-card card bg-gradient-to-br ${stat.bg} border-2 border-transparent hover:border-${stat.color}-300 dark:hover:border-${stat.color}-700 transform-3d card-3d relative overflow-hidden`}>
              {/* Badge in corner */}
              <div className="absolute top-3 right-3 opacity-60">
                {stat.badge}
              </div>
              <div className="flex flex-col items-center justify-between h-full">
                <div className={`w-20 h-20 bg-gradient-to-br from-${stat.color}-500 to-${stat.color === 'green' ? 'emerald' : stat.color === 'blue' ? 'cyan' : stat.color === 'purple' ? 'pink' : 'red'}-500 rounded-3xl flex items-center justify-center mb-4 shadow-2xl transform hover:scale-110 hover:rotate-12 transition-all duration-500 icon-container rotating-ring`}>
                  <Icon className="w-10 h-10 text-white icon-glow-lg" />
                </div>
                <div className="text-center">
                  <div className="text-5xl font-black text-gray-900 dark:text-white mb-2">{stat.value}</div>
                  <p className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">{stat.label}</p>
                  {stat.change > 0 && (
                    <div className="mt-2 flex items-center justify-center space-x-1 text-xs">
                      <TrendingUp className="w-3 h-3 text-green-600" />
                      <span className="text-green-600 font-bold">+{stat.change}%</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Rest of the dashboard content continues... */}
      {/* (Keeping the existing sections below) */}
      
      {/* Main Feature Card - Split Screen Design with More Icons */}
      <div className="card card-gradient relative overflow-hidden transform-3d card-3d">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-pink-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 border-2 border-primary-200 dark:border-primary-800">
              <Layers className="w-5 h-5 text-primary-600 dark:text-primary-400 animate-pulse-icon" />
              <span className="text-sm font-bold text-primary-700 dark:text-primary-300 uppercase tracking-wide">DeFi / AMM</span>
              <SparkleIcon className="w-4 h-4 text-primary-500 animate-pulse-icon" />
            </div>
            <h2 className="text-5xl font-black text-gray-900 dark:text-white leading-tight flex items-center gap-3">
              <Lightbulb className="w-10 h-10 text-primary-500 icon-glow" />
              What is Feels Protocol?
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              {feelsFun?.description}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {feelsFun?.highlights.slice(0, 4).map((highlight, idx) => (
                <div key={idx} className="group flex items-start space-x-3 p-4 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-xl border-2 border-primary-200/50 dark:border-primary-800/50 hover:border-primary-400 dark:hover:border-primary-600 transition-all hover:shadow-lg">
                  <CheckCircle2 className="w-6 h-6 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform fill-primary-600 dark:fill-primary-400" />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 leading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-primary rounded-[2rem] flex items-center justify-center shadow-2xl shadow-primary-500/40 transform hover:scale-105 transition-transform duration-500 relative overflow-hidden group">
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
              <BarChart3 className="w-40 h-40 text-white relative z-10 icon-glow-xl group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                <ArrowUpRight className="w-8 h-8 text-white icon-glow" />
              </div>
              {/* Floating icons around */}
              <div className="absolute top-1/4 left-4">
                <Coins className="w-6 h-6 text-white/60 icon-glow animate-float" style={{ animationDelay: '0s' }} />
              </div>
              <div className="absolute bottom-1/4 right-4">
                <Wallet className="w-6 h-6 text-white/60 icon-glow animate-float" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How Feels Protocol Contributes to Solana Ecosystem - Premium Grid with Icons */}
      <div className="card bg-gradient-to-br from-solana-green/10 via-solana-purple/10 to-solana-green/10 dark:from-solana-green/20 dark:via-solana-purple/20 dark:to-solana-green/20 border-2 border-solana-purple/30 dark:border-solana-purple/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-solana-purple/5 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <div className="flex items-center space-x-4 mb-12">
            <div className="w-20 h-20 bg-gradient-solana rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-500 icon-container">
              <Rocket className="w-12 h-12 text-white icon-glow-xl" />
            </div>
            <h2 className="text-5xl font-black text-gray-900 dark:text-white flex items-center gap-3">
              How Feels Protocol Contributes to the Solana Ecosystem
              <Globe className="w-10 h-10 text-solana-purple icon-glow" />
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Enhanced Capital Efficiency', desc: 'Feels Protocol\'s concentrated liquidity model allows liquidity providers to use capital more efficiently than traditional AMMs. This attracts more liquidity to Solana, strengthening the entire DeFi ecosystem and making Solana more competitive with other chains.', icon: TrendingUp },
              { title: 'Simplified DeFi Experience', desc: 'The hub-and-spoke architecture with FeelsSOL eliminates routing complexity, making DeFi more accessible to newcomers. This lowers the barrier to entry for Solana DeFi, bringing more users and volume to the ecosystem.', icon: Zap },
              { title: 'Sustainable Liquidity Model', desc: 'Protocol-owned market making creates self-sustaining liquidity pools that don\'t rely solely on external LPs. This ensures consistent liquidity for Solana traders even during volatile periods.', icon: Shield },
              { title: 'Unified Market Innovation', desc: 'By unifying spot trading, lending, and leverage in one system, Feels Protocol demonstrates Solana\'s capability to handle complex, multi-dimensional DeFi applications.', icon: Layers },
              { title: 'Ecosystem Composability', desc: 'Feels Protocol\'s program architecture enables seamless integration with other Solana DeFi protocols. This composability strengthens the entire Solana ecosystem by creating interconnected financial primitives.', icon: Network },
              { title: 'Showcases Solana\'s Advantages', desc: 'Feels Protocol leverages Solana\'s unique advantages (parallel processing, low fees, fast finality) in ways that wouldn\'t be possible on other chains.', icon: Star },
            ].map((item, idx) => {
              const ItemIcon = item.icon
              return (
                <div key={idx} className="group p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl border-l-4 border-solana-purple dark:border-solana-green shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-solana rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 icon-container">
                      <ItemIcon className="w-8 h-8 text-white icon-glow-lg" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-solana rounded-xl flex items-center justify-center">
                          <span className="text-white text-lg font-black">{idx + 1}</span>
                        </div>
                        <h3 className="text-2xl font-black text-gray-900 dark:text-white">{item.title}</h3>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">{item.desc}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Why It's Exciting - Premium Cards with Enhanced Icons */}
      <div className="card">
        <div className="flex items-center space-x-4 mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-500 icon-container">
            <Zap className="w-12 h-12 text-white icon-glow-xl" />
          </div>
          <h2 className="text-5xl font-black text-gray-900 dark:text-white flex items-center gap-3">
            Why It's Exciting & Innovative
            <Flame className="w-10 h-10 text-orange-500 icon-glow" />
          </h2>
        </div>
        <p className="text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-12">
          {feelsFun?.whyExciting}
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Network, title: 'Hub & Spoke', desc: 'FeelsSOL as universal routing token eliminates complexity', color: 'from-blue-500 to-cyan-500', bg: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20', badge: <ArrowUpCircle className="w-5 h-5" /> },
            { icon: BarChart3, title: 'Concentrated Liquidity', desc: 'Tick-based positioning for precise capital allocation', color: 'from-purple-500 to-pink-500', bg: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20', badge: <Target className="w-5 h-5" /> },
            { icon: Shield, title: 'Protocol-Owned MM', desc: 'Autonomous strategies with floor & JIT liquidity', color: 'from-green-500 to-emerald-500', bg: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20', badge: <Lock className="w-5 h-5" /> },
          ].map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div key={idx} className={`group relative p-8 bg-gradient-to-br ${feature.bg} rounded-3xl border-2 border-gray-200 dark:border-gray-700 hover:border-${feature.color.split('-')[1]}-300 dark:hover:border-${feature.color.split('-')[1]}-700 transition-all hover:shadow-2xl hover:-translate-y-3 transform-3d card-3d`}>
                <div className="absolute top-3 right-3 opacity-60">
                  {feature.badge}
                </div>
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 icon-container rotating-ring`}>
                  <Icon className="w-10 h-10 text-white icon-glow-lg" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{feature.desc}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Crypto Culture Features - Premium Design with More Icons */}
      <div className="card bg-gradient-to-br from-purple-50/90 via-pink-50/90 to-purple-50/90 dark:from-purple-900/30 dark:via-pink-900/30 dark:to-purple-900/30 border-2 border-purple-200/50 dark:border-purple-800/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-200/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="flex items-center space-x-4 mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-500 icon-container">
              <Sparkles className="w-12 h-12 text-white icon-glow-xl" />
            </div>
            <h2 className="text-5xl font-black text-gray-900 dark:text-white flex items-center gap-3">
              Where DeFi Meets Crypto Culture
              <Users className="w-10 h-10 text-purple-500 icon-glow" />
            </h2>
          </div>
          <p className="text-2xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
            Feels Protocol doesn't just innovate technically—it embraces the vibrant culture of crypto. From meme culture to real-time community interaction, Feels Protocol brings the human side of crypto into professional DeFi.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { emoji: '💬', title: 'Troll Box', desc: 'Real-time community chat integrated directly into the trading interface. The troll box is where traders share insights, discuss market movements, and build community—all while trading.', quote: 'The troll box is crypto culture in action—where memes meet markets and community drives engagement.', icon: MessageSquare },
              { emoji: '😎', title: 'Wojak Integration', desc: 'Wojak—the iconic crypto meme character—is part of Feels Protocol\'s identity. This isn\'t just branding; it\'s recognition that crypto culture and DeFi are inseparable.', quote: 'Wojak embodies the crypto trader\'s journey—the highs, the lows, and everything in between.', icon: Smile },
              { emoji: '🔍', title: 'Advanced Filters', desc: 'Customize your trading experience with powerful filters. Sort by volume, price impact, liquidity depth, or any metric that matters to you.', quote: 'Filters give traders control—find exactly what you\'re looking for, when you need it.', icon: Filter },
              { emoji: '📚', title: 'FYI Section', desc: 'The FYI (For Your Information) section provides educational content, protocol insights, and updates. It\'s where users learn about Feels Protocol\'s innovations.', quote: 'Education meets innovation—FYI keeps the community informed and engaged.', icon: BookOpen },
            ].map((feature, idx) => {
              const FeatureIcon = feature.icon
              return (
                <div key={idx} className="group p-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl border-l-4 border-purple-500 dark:border-purple-400 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl text-4xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 icon-container">
                      {feature.emoji}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <FeatureIcon className="w-6 h-6 text-purple-500 icon-glow" />
                        <h3 className="text-3xl font-black text-gray-900 dark:text-white">{feature.title}</h3>
                      </div>
                    </div>
                  </div>
                  <p className="text-xl text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {feature.desc}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic border-l-4 border-purple-300 dark:border-purple-700 pl-4 py-2 bg-purple-50/50 dark:bg-purple-900/20 rounded-r-lg">
                    "{feature.quote}"
                  </p>
                </div>
              )
            })}
          </div>
          <div className="mt-12 p-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl border-2 border-purple-200 dark:border-purple-800 shadow-2xl">
            <p className="text-gray-700 dark:text-gray-300 text-center text-2xl leading-relaxed flex items-center justify-center gap-3">
              <InfinityIcon className="w-8 h-8 text-purple-500 icon-glow" />
              <strong className="text-purple-600 dark:text-purple-400 text-3xl">Feels Protocol bridges the gap</strong> between professional DeFi infrastructure and the vibrant, meme-driven culture that defines crypto. It's DeFi that doesn't take itself too seriously—while being seriously innovative.
            </p>
          </div>
        </div>
      </div>

      {/* How It Leverages Solana - Premium Design with Icons */}
      <div className="card bg-gradient-to-br from-solana-green/10 to-solana-purple/10 dark:from-solana-green/20 dark:to-solana-purple/20 border-2 border-solana-purple/30 dark:border-solana-purple/40">
        <div className="flex items-center space-x-4 mb-12">
          <div className="w-20 h-20 bg-gradient-solana rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-500 icon-container">
            <Rocket className="w-12 h-12 text-white icon-glow-xl" />
          </div>
          <h2 className="text-5xl font-black text-gray-900 dark:text-white flex items-center gap-3">
            How It Leverages Solana
            <Gauge className="w-10 h-10 text-solana-purple icon-glow" />
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {feelsFun?.solanaFeatures.map((feature, idx) => {
            const icons = [Zap, Coins, Rocket, TrendingUp, Network]
            const FeatureIcon = icons[idx % icons.length]
            return (
              <div key={idx} className="group flex items-start space-x-5 p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl border-l-4 border-solana-purple dark:border-solana-green shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-solana rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 icon-container">
                  <FeatureIcon className="w-7 h-7 text-white icon-glow-lg" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-gradient-solana rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-black">{idx + 1}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg pt-2">{feature}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Content Ideas - Premium Grid with Icons */}
      <div className="card">
        <div className="flex items-center space-x-4 mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-purple-500 rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-500 icon-container">
            <Sparkles className="w-12 h-12 text-white icon-glow-xl" />
          </div>
          <h2 className="text-5xl font-black text-gray-900 dark:text-white flex items-center gap-3">
            Content Ideas
            <Lightbulb className="w-10 h-10 text-primary-500 icon-glow" />
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {feelsFun?.contentIdeas.map((idea, idx) => (
            <div key={idx} className="group p-6 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl border-l-4 border-primary-400 dark:border-primary-600 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 icon-container">
                  <span className="text-white text-lg font-black">{idx + 1}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-semibold leading-relaxed text-lg pt-2">{idea}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section - Ultra Premium with Icons */}
      <div className="relative overflow-hidden rounded-[3rem] bg-gradient-primary text-white shadow-2xl transform-3d card-3d">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")` }}></div>
        <div className="relative z-10 text-center space-y-10 p-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Trophy className="w-12 h-12 icon-glow-xl animate-bounce-slow" />
            <h2 className="text-6xl md:text-7xl font-black tracking-tight">Ready to Create Content?</h2>
            <Star className="w-12 h-12 icon-glow-xl animate-pulse-icon" />
          </div>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto font-bold flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6" />
            Use our Content Creator tool to build your video or article about Feels Protocol
            <Lightbulb className="w-6 h-6" />
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/content-creator"
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-primary-600 rounded-2xl font-black text-xl hover:bg-gray-100 transition-all shadow-2xl hover:shadow-2xl hover:scale-110 btn-premium overflow-hidden uppercase tracking-wider"
            >
              <Video className="w-6 h-6 relative z-10 mr-2 group-hover:scale-110 transition-transform" />
              <span className="relative z-10">Create Content About Feels Protocol</span>
              <ArrowUpRight className="w-6 h-6 relative z-10 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <Link
              to="/how-it-works"
              className="px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-2xl font-black text-xl hover:bg-white/20 transition-all shadow-xl hover:shadow-2xl uppercase tracking-wider flex items-center gap-2"
            >
              <BookOpen className="w-6 h-6" />
              Learn How It Works
            </Link>
          </div>
        </div>
      </div>

      {/* Superteam Germany Badge */}
      <div className="text-center">
        <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-germany/10 border-2 border-germany-red/30 rounded-full backdrop-blur-sm shadow-lg">
          <Award className="w-5 h-5 text-germany-red animate-pulse-icon" />
          <span className="text-sm text-gray-600 dark:text-gray-400 font-bold">Built for</span>
          <span className="font-black bg-gradient-germany bg-clip-text text-transparent text-lg">Superteam Germany</span>
          <span className="text-sm text-gray-600 dark:text-gray-400 font-bold">Bounty</span>
          <Trophy className="w-5 h-5 text-germany-gold animate-bounce-slow" />
        </div>
      </div>
    </div>
  )
}
