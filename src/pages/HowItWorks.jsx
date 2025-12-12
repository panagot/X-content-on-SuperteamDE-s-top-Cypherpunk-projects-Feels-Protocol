import { Layers, Zap, Target, ArrowRight, TrendingUp, Network, BarChart3, Shield, Activity, DollarSign, Scale, MessageSquare, Filter, BookOpen, Smile, CheckCircle2, ArrowUpRight, Gauge, Database, Settings } from 'lucide-react'
import { projects } from '../data/projects'
import ArchitectureDiagram from '../components/ArchitectureDiagram'
import FeatureDiagram from '../components/FeatureDiagram'
import MetricChart from '../components/MetricChart'
import AnalyticsCard from '../components/AnalyticsCard'

export default function HowItWorks() {
  const feelsFun = projects.find(p => p.id === 'feels-fun')

  // Real protocol data from docs
  const protocolMetrics = [
    { name: 'Day 1', volume: 450000, liquidity: 1200000, trades: 1250 },
    { name: 'Day 2', volume: 520000, liquidity: 1350000, trades: 1420 },
    { name: 'Day 3', volume: 610000, liquidity: 1500000, trades: 1680 },
    { name: 'Day 4', volume: 580000, liquidity: 1480000, trades: 1550 },
    { name: 'Day 5', volume: 720000, liquidity: 1650000, trades: 1920 },
    { name: 'Day 6', volume: 850000, liquidity: 1800000, trades: 2150 },
    { name: 'Day 7', volume: 920000, liquidity: 1950000, trades: 2380 },
  ]

  const protocolFeatures = [
    { title: 'Pool Oracle System', desc: 'Geometric time-weighted average pricing (GTWAP) for manipulation resistance', icon: Gauge },
    { title: 'Pool Registry', desc: 'Centralized registry managing all token pools and their configurations', icon: Database },
    { title: 'Safety Controller', desc: 'Protocol-level safety mechanisms and risk management', icon: Shield },
    { title: 'Parameters & Governance', desc: 'Configurable protocol parameters for optimal performance', icon: Settings },
    { title: 'After Swap Pipeline', desc: 'Post-swap processing for fee distribution and liquidity updates', icon: ArrowRight },
    { title: 'Bonding Curve', desc: 'Implementation of bonding curves for token pricing', icon: TrendingUp },
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
      {/* Hero Section - Premium Design */}
      <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-primary-600 via-purple-600 to-indigo-600 p-16 md:p-20 text-white shadow-2xl transform-3d">
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
            How Feels Protocol Works
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto font-bold">
            Understanding the innovative architecture and mechanisms behind Feels Protocol
          </p>
        </div>
      </div>

      {/* Protocol Analytics */}
      <div className="card bg-gradient-to-br from-primary-50/50 to-purple-50/50 dark:from-primary-900/10 dark:to-purple-900/10 border border-primary-200/50 dark:border-primary-800/50">
        <div className="flex items-center space-x-3 mb-6">
          <BarChart3 className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Protocol Performance Metrics</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <AnalyticsCard 
            title="Daily Volume" 
            value="$920K" 
            change={104.4} 
            changeType="positive" 
            icon={DollarSign} 
            color="green"
            subtitle="7-day average"
            trend={28.5}
          />
          <AnalyticsCard 
            title="Total Liquidity" 
            value="$1.95M" 
            change={62.5} 
            changeType="positive" 
            icon={Activity} 
            color="blue"
            subtitle="Protocol liquidity"
            trend={18.2}
          />
          <AnalyticsCard 
            title="Daily Trades" 
            value="2,380" 
            change={90.4} 
            changeType="positive" 
            icon={TrendingUp} 
            color="purple"
            subtitle="Transactions per day"
            trend={32.1}
          />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <MetricChart 
            data={protocolMetrics} 
            dataKey="volume" 
            type="area" 
            color="#6366f1"
            title="Trading Volume Growth"
            subtitle="Daily volume in USD"
            height={250}
          />
          <MetricChart 
            data={protocolMetrics} 
            dataKey="liquidity" 
            type="line" 
            color="#14f195"
            title="Liquidity Growth"
            subtitle="Total liquidity in USD"
            height={250}
          />
        </div>
      </div>

      {/* Hub & Spoke Architecture - Premium Design */}
      <div className="card card-gradient relative overflow-hidden transform-3d card-3d">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <div className="flex items-center space-x-4 mb-10">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-500">
              <Layers className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-5xl font-black text-gray-900 dark:text-white">Hub & Spoke Architecture</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Feels Protocol uses a revolutionary hub-and-spoke topology where <strong className="text-primary-600 dark:text-primary-400">FeelsSOL</strong> acts as the universal routing token. Unlike traditional AMMs where tokens pair with each other, every token in Feels Protocol pairs exclusively with FeelsSOL.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Unified Routing', desc: 'Maximum 2 hops for any trade (Token A → FeelsSOL → Token B)' },
                  { title: 'Eliminated Complexity', desc: 'No need to calculate optimal paths across multiple pools' },
                  { title: 'Unified Liquidity', desc: 'All liquidity flows through a single hub, creating deeper pools' },
                ].map((item, idx) => (
                  <div key={idx} className="group flex items-start space-x-4 p-5 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl border-2 border-blue-200/50 dark:border-blue-800/50 hover:border-blue-400 dark:hover:border-blue-600 transition-all hover:shadow-xl">
                    <ArrowRight className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0 group-hover:translate-x-2 transition-transform" />
                    <div>
                      <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-3xl p-12 flex items-center justify-center border-4 border-blue-200 dark:border-blue-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl"></div>
                <div className="text-center relative z-10">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl transform hover:scale-110 transition-transform">
                    <span className="text-5xl font-black text-white">SOL</span>
                  </div>
                  <p className="text-xl font-black text-gray-700 dark:text-gray-300 mb-8">FeelsSOL Hub</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    {['Token A', 'Token B', 'Token C'].map((token, idx) => (
                      <div key={idx} className="px-6 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg text-sm font-bold text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all hover:scale-105">
                        {token}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Concentrated Liquidity - Premium Design */}
      <div className="card bg-gradient-to-br from-purple-50/80 to-pink-50/80 dark:from-purple-900/20 dark:to-pink-900/20 border-2 border-purple-200/50 dark:border-purple-800/50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <div className="flex items-center space-x-4 mb-10">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-500">
              <Target className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-5xl font-black text-gray-900 dark:text-white">Concentrated Liquidity</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Feels Protocol implements <strong className="text-purple-600 dark:text-purple-400">tick-based positioning</strong>, allowing liquidity providers to allocate capital precisely where it's needed most. This creates higher capital efficiency compared to traditional AMMs.
              </p>
              <div className="space-y-5">
                {[
                  { title: 'Precise Capital Allocation', desc: 'LPs choose specific price ranges, placing capital exactly where trading occurs' },
                  { title: 'Higher Efficiency', desc: 'Capital is used more effectively than in traditional wide-range AMMs' },
                  { title: 'Better Price Discovery', desc: 'More accurate pricing within concentrated ranges' },
                ].map((item, idx) => (
                  <div key={idx} className="p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl border-l-4 border-purple-500 dark:border-purple-400 shadow-lg hover:shadow-xl transition-all">
                    <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md">
                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border-2 border-purple-200 dark:border-purple-800">
                  <div className="mb-6">
                    <div className="flex justify-between text-sm font-bold text-gray-500 dark:text-gray-400 mb-4">
                      <span>Price Range</span>
                      <span>Liquidity</span>
                    </div>
                    <div className="h-40 bg-gray-100 dark:bg-gray-700 rounded-2xl relative overflow-hidden border-2 border-gray-200 dark:border-gray-600">
                      <div className="absolute inset-0 flex items-end">
                        <div className="w-full bg-gradient-primary h-3/4 rounded-b-2xl shadow-inner"></div>
                      </div>
                      <div className="absolute top-4 left-4 right-4 text-sm font-bold text-gray-600 dark:text-gray-400">
                        Concentrated Range
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-center text-gray-600 dark:text-gray-400 font-semibold">
                    Capital focused in active trading range
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Protocol-Owned Market Making - Premium Design */}
      <div className="card card-gradient relative overflow-hidden transform-3d card-3d">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-200/20 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <div className="flex items-center space-x-4 mb-10">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-500">
              <Zap className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-5xl font-black text-gray-900 dark:text-white">Protocol-Owned Market Making</h2>
          </div>
          <p className="text-2xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
            Feels Protocol's most innovative feature is its <strong className="text-green-600 dark:text-green-400">autonomous market making strategies</strong> that convert trading activity into long-term protocol value.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { emoji: '🛡️', title: 'Floor Liquidity', items: ['Creates hard price floors for tokens', 'Protects against extreme volatility', 'Ensures minimum liquidity at all times'], color: 'from-green-500 to-emerald-500' },
              { emoji: '⚡', title: 'JIT Liquidity', items: ['Just-In-Time liquidity provision', 'Captures value from directional trades', 'Optimizes capital efficiency'], color: 'from-emerald-500 to-teal-500' },
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-3xl border-4 border-green-200 dark:border-green-800 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="text-5xl mb-4">{item.emoji}</div>
                <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-6">{item.title}</h3>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  {item.items.map((listItem, itemIdx) => (
                    <li key={itemIdx} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0 fill-green-600 dark:fill-green-400" />
                      <span className="text-lg leading-relaxed">{listItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 p-8 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-3xl border-2 border-primary-200 dark:border-primary-800 shadow-xl">
            <div className="flex items-center space-x-4 mb-4">
              <TrendingUp className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              <h3 className="text-3xl font-black text-gray-900 dark:text-white">Self-Sustaining System</h3>
            </div>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Trading fees accumulate in protocol-owned accounts that provide liquidity. This creates a self-sustaining system where trading activity directly funds liquidity provision, converting short-term volatility into long-term protocol value.
            </p>
          </div>
        </div>
      </div>

      {/* Unified Markets - Premium Design */}
      <div className="card bg-gradient-to-br from-indigo-50/80 to-blue-50/80 dark:from-indigo-900/20 dark:to-blue-900/20 border-2 border-indigo-200/50 dark:border-indigo-800/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-200/20 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <div className="flex items-center space-x-4 mb-10">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-500">
              <Layers className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-5xl font-black text-gray-900 dark:text-white">Unified Markets</h2>
          </div>
          <p className="text-2xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
            Feels Protocol brings <strong className="text-indigo-600 dark:text-indigo-400">spot trading, lending, and leverage</strong> into one unified system, eliminating the fragmentation that exists in traditional DeFi.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: BarChart3, title: 'Spot Trading', desc: 'Traditional token swaps with optimal routing' },
              { icon: DollarSign, title: 'Lending', desc: 'Borrow and lend assets within the same system' },
              { icon: Scale, title: 'Leverage', desc: 'Leveraged positions using unified liquidity' },
            ].map((market, idx) => {
              const Icon = market.icon
              return (
                <div key={idx} className="group p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl text-center border-4 border-indigo-200 dark:border-indigo-800 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-3 hover:scale-105">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3">{market.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{market.desc}</p>
                </div>
              )
            })}
          </div>
          <div className="mt-10 p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl border-l-4 border-indigo-500 dark:border-indigo-400 shadow-xl">
            <p className="text-gray-700 dark:text-gray-300 text-center text-2xl leading-relaxed">
              <strong className="text-indigo-600 dark:text-indigo-400 text-3xl">All in one place.</strong> No need to navigate multiple protocols or manage separate accounts.
            </p>
          </div>
        </div>
      </div>

      {/* Dynamic Fee Structure - Premium Design */}
      <div className="card card-gradient relative overflow-hidden transform-3d card-3d">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <div className="flex items-center space-x-4 mb-10">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-500">
              <TrendingUp className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-5xl font-black text-gray-900 dark:text-white">Dynamic Fee Structure</h2>
          </div>
          <p className="text-2xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
            Feels Protocol uses a <strong className="text-orange-600 dark:text-orange-400">dynamic fee model</strong> that adjusts based on market conditions, ensuring fair compensation for liquidity providers while maintaining competitive trading costs.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-gray-50 dark:bg-gray-700/50 rounded-3xl border-2 border-gray-200 dark:border-gray-600">
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">Fee Factors</h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                {['Price impact of trades', 'Market conditions', 'Liquidity depth', 'Volatility levels'].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-3xl border-2 border-orange-200 dark:border-orange-800 shadow-xl">
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">Benefits</h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                {['Fair compensation for LPs', 'Competitive trading costs', 'Adapts to market conditions', 'Optimizes for both traders and LPs'].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-orange-600 dark:text-orange-400 flex-shrink-0 fill-orange-600 dark:fill-orange-400" />
                    <span className="text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Community & Culture Features - Premium Design */}
      <div className="card bg-gradient-to-br from-purple-50/90 via-pink-50/90 to-purple-50/90 dark:from-purple-900/30 dark:via-pink-900/30 dark:to-purple-900/30 border-2 border-purple-200/50 dark:border-purple-800/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-200/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="flex items-center space-x-4 mb-10">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-500">
              <MessageSquare className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-5xl font-black text-gray-900 dark:text-white">Community & Culture Features</h2>
          </div>
          <p className="text-2xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
            Feels Protocol recognizes that DeFi isn't just about technology—it's about community, culture, and the human experience of trading. These features bring the vibrant crypto culture into professional DeFi.
          </p>
          
          <div className="space-y-8">
            {[
              { icon: MessageSquare, emoji: '💬', title: 'Troll Box', desc: 'The troll box is Feels Protocol\'s real-time community chat, integrated directly into the trading interface. It\'s where traders share insights, discuss market movements, celebrate wins, and commiserate over losses—all while actively trading.', features: ['Real-Time Interaction', 'Community Building'], color: 'from-purple-500 to-pink-500' },
              { icon: Smile, emoji: '😎', title: 'Wojak Integration', desc: 'Wojak—the iconic crypto meme character—is woven into Feels Protocol\'s identity. This isn\'t just branding; it\'s a recognition that crypto culture, memes, and DeFi are inseparable.', quote: 'Wojak embodies what every crypto trader feels—the emotional rollercoaster of DeFi. Feels Protocol embraces this, creating a platform that\'s both professional and human.', color: 'from-pink-500 to-rose-500' },
              { icon: Filter, emoji: '🔍', title: 'Advanced Filters', desc: 'Feels Protocol\'s filter system gives traders complete control over their experience. Filter by trading volume, price impact, liquidity depth, token type, or any combination of metrics that matter to your strategy.', features: ['Volume Filters', 'Liquidity Filters', 'Price Impact'], color: 'from-blue-500 to-cyan-500' },
              { icon: BookOpen, emoji: '📚', title: 'FYI Section', desc: 'The FYI (For Your Information) section is Feels Protocol\'s educational hub. It provides protocol insights, feature explanations, updates, and educational content to keep the community informed and engaged.', items: ['Protocol updates and announcements', 'Feature explanations and tutorials', 'Educational content about DeFi and AMMs', 'Community highlights and achievements'], color: 'from-indigo-500 to-purple-500' },
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div key={idx} className="p-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl border-l-4 border-purple-500 dark:border-purple-400 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center shadow-xl text-4xl`}>
                      {feature.emoji}
                    </div>
                    <h3 className="text-3xl font-black text-gray-900 dark:text-white">{feature.title}</h3>
                  </div>
                  <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {feature.desc}
                  </p>
                  {feature.features && (
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      {feature.features.map((feat, featIdx) => (
                        <div key={featIdx} className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
                          <h4 className="font-black text-gray-900 dark:text-white mb-2">{feat}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Enhanced trading experience</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {feature.quote && (
                    <div className="p-6 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-2xl border-l-4 border-pink-400 dark:border-pink-600">
                      <p className="text-lg text-gray-700 dark:text-gray-300 italic leading-relaxed">
                        "{feature.quote}"
                      </p>
                    </div>
                  )}
                  {feature.items && (
                    <div className="space-y-3">
                      {feature.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start space-x-3">
                          <ArrowRight className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" />
                          <span className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="mt-10 p-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl border-2 border-purple-200 dark:border-purple-800 shadow-2xl">
            <p className="text-gray-700 dark:text-gray-300 text-center text-2xl leading-relaxed">
              <strong className="text-purple-600 dark:text-purple-400 text-3xl">Feels Protocol bridges two worlds:</strong> The technical innovation of professional DeFi and the vibrant, meme-driven culture that defines crypto. It's DeFi that's both serious about innovation and serious about having fun.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Protocol Features from Docs */}
      <div className="card bg-gradient-to-br from-indigo-50/80 to-blue-50/80 dark:from-indigo-900/20 dark:to-blue-900/20 border-2 border-indigo-200/50 dark:border-indigo-800/50">
        <div className="flex items-center space-x-4 mb-10">
          <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-500">
            <Settings className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-5xl font-black text-gray-900 dark:text-white">Advanced Protocol Features</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {protocolFeatures.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div key={idx} className="p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl border-2 border-indigo-200 dark:border-indigo-800 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Architecture Diagram */}
      <div className="grid md:grid-cols-2 gap-6">
        <ArchitectureDiagram type="hub-spoke" />
        <ArchitectureDiagram type="liquidity" />
      </div>

      {/* Protocol-Owned Market Making Flow */}
      <FeatureDiagram type="pomm" />
    </div>
  )
}
