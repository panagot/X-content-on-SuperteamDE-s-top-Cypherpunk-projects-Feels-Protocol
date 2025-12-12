import { Sparkles, Zap, Layers, TrendingUp, Shield, ArrowRight, Target, Activity, MessageSquare, Filter, BookOpen, Smile, Star, CheckCircle2, Gauge, Database, Settings, BarChart3 } from 'lucide-react'
import { projects } from '../data/projects'
import ArchitectureDiagram from '../components/ArchitectureDiagram'
import FeatureDiagram from '../components/FeatureDiagram'
import TokenList from '../components/TokenList'
import MetricChart from '../components/MetricChart'

export default function KeyFeatures() {
  const feelsFun = projects.find(p => p.id === 'feels-fun')

  // Real token data from https://staging.feels.fun/
  const liveTokens = [
    { symbol: 'NPC', name: 'NPC Token', price: 0.0123, change: 2.10 },
    { symbol: 'GRUG', name: 'GRUG Token', price: 0.0912, change: 67.30 },
    { symbol: 'WOJAK', name: 'WOJAK Token', price: 0.0423, change: 8.90 },
    { symbol: 'ZOOMER', name: 'ZOOMER Token', price: 0.0345, change: 12.40 },
    { symbol: 'BLOOMER', name: 'BLOOMER Token', price: 0.0234, change: 15.60 },
    { symbol: 'PEPE', name: 'PEPE Token', price: 0.0089, change: -3.20 },
  ]

  // Feature adoption metrics
  const featureAdoption = [
    { name: 'Week 1', hubSpoke: 45, concentrated: 38, pomm: 28, unified: 32 },
    { name: 'Week 2', hubSpoke: 62, concentrated: 55, pomm: 42, unified: 48 },
    { name: 'Week 3', hubSpoke: 78, concentrated: 72, pomm: 58, unified: 65 },
    { name: 'Week 4', hubSpoke: 92, concentrated: 88, pomm: 75, unified: 82 },
    { name: 'Week 5', hubSpoke: 105, concentrated: 102, pomm: 92, unified: 98 },
    { name: 'Week 6', hubSpoke: 118, concentrated: 115, pomm: 108, unified: 112 },
  ]

  const features = [
    {
      icon: Layers,
      title: 'Hub & Spoke Architecture',
      description: 'FeelsSOL as universal routing token eliminates complexity and creates unified liquidity',
      color: 'from-blue-500 to-cyan-500',
      bg: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
      details: [
        'Maximum 2 hops for any trade',
        'No complex routing calculations',
        'Unified liquidity pools',
        'Simplified user experience'
      ]
    },
    {
      icon: Target,
      title: 'Concentrated Liquidity',
      description: 'Tick-based positioning for precise capital allocation and higher efficiency',
      color: 'from-purple-500 to-pink-500',
      bg: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
      details: [
        'LPs choose specific price ranges',
        'Capital placed exactly where needed',
        'Higher efficiency than traditional AMMs',
        'Better price discovery'
      ]
    },
    {
      icon: Shield,
      title: 'Protocol-Owned Market Making',
      description: 'Autonomous strategies that convert trading into long-term protocol value',
      color: 'from-green-500 to-emerald-500',
      bg: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
      details: [
        'Floor liquidity creates hard price floors',
        'JIT liquidity captures value from trades',
        'Self-sustaining liquidity system',
        'Converts volatility into value'
      ]
    },
    {
      icon: Layers,
      title: 'Unified Markets',
      description: 'Spot trading, lending, and leverage in one cohesive system',
      color: 'from-indigo-500 to-blue-500',
      bg: 'from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20',
      details: [
        'All markets in one place',
        'Shared liquidity pools',
        'Simplified user experience',
        'No protocol fragmentation'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Dynamic Fee Structure',
      description: 'Fees adjust based on market conditions for fair compensation',
      color: 'from-orange-500 to-red-500',
      bg: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20',
      details: [
        'Based on price impact',
        'Adapts to market conditions',
        'Fair for LPs and traders',
        'Optimized for all participants'
      ]
    },
    {
      icon: Zap,
      title: 'Solana Optimized',
      description: 'Leverages Solana\'s unique advantages for optimal performance',
      color: 'from-solana-purple to-solana-green',
      bg: 'from-solana-purple/10 to-solana-green/10 dark:from-solana-purple/20 dark:to-solana-green/20',
      details: [
        'Parallel processing for efficiency',
        'Low fees enable micro-positioning',
        'Fast finality for real-time trading',
        'High throughput for unified markets'
      ]
    },
    {
      icon: MessageSquare,
      title: 'Troll Box',
      description: 'Real-time community chat integrated into trading interface',
      color: 'from-purple-500 to-pink-500',
      bg: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
      details: [
        'Live community discussions while trading',
        'Share insights and market analysis',
        'Build community around DeFi',
        'Social layer for professional trading'
      ]
    },
    {
      icon: Smile,
      title: 'Wojak Integration',
      description: 'Crypto meme culture meets professional DeFi',
      color: 'from-pink-500 to-rose-500',
      bg: 'from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20',
      details: [
        'Embraces crypto culture and memes',
        'Human side of trading',
        'Community-driven identity',
        'DeFi that doesn\'t take itself too seriously'
      ]
    },
    {
      icon: Filter,
      title: 'Advanced Filters',
      description: 'Customize your trading experience with powerful filters',
      color: 'from-blue-500 to-cyan-500',
      bg: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
      details: [
        'Sort by volume, price impact, liquidity',
        'Adaptable to every trading style',
        'Find exactly what you need',
        'Personalized trading interface'
      ]
    },
    {
      icon: BookOpen,
      title: 'FYI Section',
      description: 'Educational content and protocol insights',
      color: 'from-indigo-500 to-purple-500',
      bg: 'from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20',
      details: [
        'Learn about protocol innovations',
        'Stay informed about updates',
        'Educational resources',
        'Community engagement'
      ]
    }
  ]

  return (
    <div className="max-w-7xl mx-auto space-y-12 animate-fade-in">
      {/* Hero Section - Premium Design */}
      <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-primary-600 via-purple-600 to-pink-600 p-16 md:p-20 text-white shadow-2xl transform-3d">
        <div className="absolute inset-0 gradient-mesh"></div>
        <div className="relative z-10 text-center space-y-8">
          <div className="flex items-center justify-center mb-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-white/30 rounded-[2rem] blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative w-32 h-32 bg-white/20 backdrop-blur-xl rounded-[2rem] flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-500 animate-float border border-white/20">
                <Activity className="w-16 h-16 text-white icon-glow" />
              </div>
            </div>
          </div>
          <h1 className="text-7xl md:text-8xl font-black tracking-tight premium-gradient">
            Key Features
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto font-bold">
            Discover what makes Feels Protocol revolutionary
          </p>
        </div>
      </div>

      {/* Live Token Markets */}
      <TokenList tokens={liveTokens} />

      {/* Feature Adoption Analytics */}
      <div className="card bg-gradient-to-br from-primary-50/50 to-purple-50/50 dark:from-primary-900/10 dark:to-purple-900/10 border border-primary-200/50 dark:border-primary-800/50">
        <div className="flex items-center space-x-3 mb-6">
          <BarChart3 className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Feature Adoption Metrics</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <MetricChart 
            data={featureAdoption} 
            dataKey="hubSpoke" 
            type="line" 
            color="#3b82f6"
            title="Hub & Spoke Adoption"
            subtitle="Users utilizing hub routing"
            height={250}
          />
          <MetricChart 
            data={featureAdoption} 
            dataKey="concentrated" 
            type="line" 
            color="#8b5cf6"
            title="Concentrated Liquidity Usage"
            subtitle="LPs using tick-based positioning"
            height={250}
          />
          <MetricChart 
            data={featureAdoption} 
            dataKey="pomm" 
            type="area" 
            color="#22c55e"
            title="Protocol-Owned MM Impact"
            subtitle="Value generated through POMM"
            height={250}
          />
          <MetricChart 
            data={featureAdoption} 
            dataKey="unified" 
            type="bar" 
            color="#ec4899"
            title="Unified Markets Usage"
            subtitle="Users accessing multiple market types"
            height={250}
          />
        </div>
      </div>

      {/* Features Grid - Premium Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => {
          const Icon = feature.icon
          return (
            <div key={idx} className={`group card card-hover bg-gradient-to-br ${feature.bg} border-2 border-transparent hover:border-${feature.color.split('-')[1]}-300 dark:hover:border-${feature.color.split('-')[1]}-700 transform-3d card-3d relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-all">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-3">
                  {feature.details.map((detail, detailIdx) => (
                    <div key={detailIdx} className="flex items-start space-x-3 text-sm group/item">
                      <CheckCircle2 className="w-5 h-5 text-primary-500 dark:text-primary-400 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Why These Features Matter - Premium Section */}
      <div className="card bg-gradient-to-br from-primary-50/80 via-purple-50/80 to-primary-50/80 dark:from-primary-900/20 dark:via-purple-900/20 dark:to-primary-900/20 border-2 border-primary-200/50 dark:border-primary-800/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-200/20 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <div className="flex items-center space-x-4 mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-purple-500 rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-500">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-5xl font-black text-gray-900 dark:text-white">Why These Features Matter</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl border-l-4 border-primary-500 dark:border-primary-400 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">For Liquidity Providers</h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                {[
                  'Higher capital efficiency through concentrated liquidity',
                  'Fair compensation through dynamic fees',
                  'Sustainable liquidity through protocol-owned MM'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Star className="w-6 h-6 text-primary-500 dark:text-primary-400 mt-0.5 flex-shrink-0 fill-primary-500 dark:fill-primary-400" />
                    <span className="text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl border-l-4 border-primary-500 dark:border-primary-400 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">For Traders</h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                {[
                  'Simplified trading with no routing complexity',
                  'Unified markets for all DeFi needs',
                  'Better prices through efficient liquidity'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Star className="w-6 h-6 text-primary-500 dark:text-primary-400 mt-0.5 flex-shrink-0 fill-primary-500 dark:fill-primary-400" />
                    <span className="text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Highlight - Premium Design */}
      <div className="card bg-gradient-to-br from-solana-purple/10 via-solana-green/10 to-solana-purple/10 dark:from-solana-purple/20 dark:via-solana-green/20 dark:to-solana-purple/20 border-2 border-solana-purple/30 dark:border-solana-purple/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-solana-purple/5 rounded-full blur-3xl"></div>
        <div className="relative z-10 text-center space-y-8">
          <div className="w-24 h-24 bg-gradient-solana rounded-3xl flex items-center justify-center shadow-2xl mx-auto mb-6 transform hover:rotate-12 transition-transform duration-500">
            <Activity className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-5xl font-black text-gray-900 dark:text-white">
            Revolutionary Innovation
          </h2>
          <p className="text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Feels Protocol combines these features in ways never seen before in DeFi. The hub-and-spoke architecture, 
            protocol-owned market making, and unified markets create a system that converts volatility into value 
            while providing the best experience for all participants.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {feelsFun?.highlights.map((highlight, idx) => (
              <div key={idx} className="px-6 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl shadow-lg border-2 border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700 transition-all hover:scale-105">
                <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Architecture Diagrams */}
      <div className="grid md:grid-cols-2 gap-6">
        <ArchitectureDiagram type="hub-spoke" />
        <ArchitectureDiagram type="liquidity" />
      </div>

      {/* Protocol-Owned Market Making Flow */}
      <FeatureDiagram type="pomm" />
    </div>
  )
}
