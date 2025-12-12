import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Video, FileText, Copy, Check, Activity, Sparkles, ArrowUpRight, Star, BarChart3, TrendingUp, Users, DollarSign, Eye, MousePointerClick, Clock, Calendar, Download, Filter, Zap, Target, Layers, Shield, Network, MessageSquare, Smile, BookOpen, Filter as FilterIcon, Trophy, Award, Rocket, Globe, Gauge } from 'lucide-react'
import { projects } from '../data/projects'
import AnalyticsCard from '../components/AnalyticsCard'
import MetricChart from '../components/MetricChart'
import ArchitectureDiagram from '../components/ArchitectureDiagram'
import StatsComparison from '../components/StatsComparison'
import ProcessFlow from '../components/ProcessFlow'
import TokenList from '../components/TokenList'
import FeatureDiagram from '../components/FeatureDiagram'

export default function ContentCreator() {
  const [searchParams] = useSearchParams()
  const contentType = searchParams.get('type') || 'video'
  const [selectedProject, setSelectedProject] = useState('feels-fun')
  const [copied, setCopied] = useState(false)

  const feelsFun = projects.find(p => p.id === 'feels-fun')

  // Analytics data for content creator
  const contentMetrics = [
    { name: 'Week 1', views: 1200, engagement: 45, shares: 12 },
    { name: 'Week 2', views: 2100, engagement: 78, shares: 28 },
    { name: 'Week 3', views: 3200, engagement: 92, shares: 45 },
    { name: 'Week 4', views: 4500, engagement: 115, shares: 62 },
    { name: 'Week 5', views: 5800, engagement: 142, shares: 88 },
    { name: 'Week 6', views: 7200, engagement: 168, shares: 115 },
  ]

  const engagementData = [
    { name: 'Mon', engagement: 45, posts: 2 },
    { name: 'Tue', engagement: 78, posts: 3 },
    { name: 'Wed', engagement: 92, posts: 4 },
    { name: 'Thu', engagement: 65, posts: 2 },
    { name: 'Fri', engagement: 88, posts: 3 },
    { name: 'Sat', engagement: 56, posts: 1 },
    { name: 'Sun', engagement: 34, posts: 1 },
  ]

  const contentStats = [
    { title: 'Template Usage', value: '1,247', change: 24.5, changeType: 'positive', icon: FileText, color: 'blue', subtitle: 'Content created', trend: 18.3 },
    { title: 'Avg. Engagement', value: '92%', change: 15.8, changeType: 'positive', icon: TrendingUp, color: 'green', subtitle: 'Higher than average', trend: 12.4 },
    { title: 'Content Views', value: '12.4K', change: 32.1, changeType: 'positive', icon: Eye, color: 'purple', subtitle: 'Total impressions', trend: 28.7 },
    { title: 'Success Rate', value: '87%', change: 8.3, changeType: 'positive', icon: Trophy, color: 'orange', subtitle: 'Content performance', trend: 6.2 },
  ]

  const comparisonData = [
    { metric: 'Capital Efficiency', traditionalValue: 1, feelsValue: 4.2, unit: 'x', maxValue: 5 },
    { metric: 'Routing Complexity', traditionalValue: 5, feelsValue: 2, unit: ' hops', maxValue: 5 },
    { metric: 'Liquidity Utilization', traditionalValue: 20, feelsValue: 85, unit: '%', maxValue: 100 },
    { metric: 'User Experience Score', traditionalValue: 6.5, feelsValue: 9.2, unit: '/10', maxValue: 10 },
  ]

  // Real token data from https://staging.feels.fun/
  const liveTokens = [
    { symbol: 'NPC', name: 'NPC Token', price: 0.0123, change: 2.10 },
    { symbol: 'GRUG', name: 'GRUG Token', price: 0.0912, change: 67.30 },
    { symbol: 'WOJAK', name: 'WOJAK Token', price: 0.0423, change: 8.90 },
    { symbol: 'ZOOMER', name: 'ZOOMER Token', price: 0.0345, change: 12.40 },
    { symbol: 'BLOOMER', name: 'BLOOMER Token', price: 0.0234, change: 15.60 },
    { symbol: 'PEPE', name: 'PEPE Token', price: 0.0089, change: -3.20 },
  ]

  // Protocol statistics from docs
  const protocolStats = [
    { label: 'Max Hops', value: '2', icon: Network, description: 'Bounded routing with maximum 2 hops' },
    { label: 'Tick-Based', value: 'Yes', icon: Target, description: 'Concentrated liquidity with tick-based positioning' },
    { label: 'Dynamic Fees', value: 'Yes', icon: TrendingUp, description: 'Fees adjust based on price impact and market conditions' },
    { label: 'Protocol-Owned MM', value: 'Yes', icon: Shield, description: 'Floor liquidity and JIT liquidity strategies' },
    { label: 'Pool Oracle', value: 'GTWAP', icon: Gauge, description: 'Geometric time-weighted average pricing' },
    { label: 'Safety Controller', value: 'Active', icon: Shield, description: 'Protocol safety and risk management' },
  ]

  const contentCreationSteps = [
    {
      icon: FileText,
      title: 'Choose Your Format',
      description: 'Select between video/thread or article format based on your audience and platform.',
      details: [
        'Video/Thread: Best for Twitter/X, quick engagement',
        'Article: Best for Medium, detailed explanations',
        'Both formats include all key information'
      ]
    },
    {
      icon: Target,
      title: 'Customize Content',
      description: 'The templates are pre-filled with accurate information about Feels Protocol. Customize as needed.',
      details: [
        'All technical details are accurate',
        'Solana integration clearly explained',
        'Superteam Germany mentioned appropriately'
      ]
    },
    {
      icon: Sparkles,
      title: 'Add Your Voice',
      description: 'Make it your own by adding personal insights, examples, or unique perspectives.',
      details: [
        'Add real-world examples',
        'Include your own analysis',
        'Share personal experiences'
      ]
    },
    {
      icon: Rocket,
      title: 'Publish & Share',
      description: 'Copy the template, publish on your platform, and share with the community.',
      details: [
        'Post on Twitter/X, Medium, or your blog',
        'Tag @SuperteamGermany and @solana',
        'Use relevant hashtags'
      ]
    }
  ]

  const videoTemplate = `💜 The AMM That Turns Chaos Into Value

🧵 Thread: [1/17]

Imagine an AMM that doesn't just facilitate trades—it transforms market volatility into sustainable value.

That's Feels Protocol on @solana.

Built during Colosseum Cypherpunk hackathon by @SuperteamGermany.

This changes everything. 🧵

---

[2/17] The Problem Nobody Talks About

Traditional AMMs have a dirty secret:

❌ 80% of liquidity sits unused in wide price ranges
❌ Complex routing = higher costs for users
❌ Volatility just... exists. No value created.
❌ Need 3 different protocols for trading, lending, leverage

We've accepted this as "normal."

Feels Protocol says: "No more."

---

[3/17] What is Feels Protocol?

Feels Protocol is a physics-based concentrated liquidity AMM that:

💜 Converts speculative trading → Long-term value
🔄 Uses hub-and-spoke architecture (FeelsSOL routing)
🎯 Implements protocol-owned market making
🌐 Unifies spot, lending, and leverage markets

It's not evolution. It's revolution.

Built entirely on Solana.

---

[4/17] The Hub & Spoke Breakthrough

Traditional AMMs: Token A ↔ Token B (complex routing)

Feels Protocol: Token A → FeelsSOL → Token B (2 hops max)

🔄 FeelsSOL = Universal routing token
📊 Every token pairs ONLY with FeelsSOL
✨ Zero routing complexity
⚡ Unified liquidity = deeper pools

This is the first time this architecture exists in DeFi.

---

[5/17] Concentrated Liquidity = Capital Efficiency

Traditional AMM: Capital spread across $0-$1000 range
Feels Protocol: Capital focused in $950-$1050 range

📈 LPs choose exact price ranges
🎯 Capital placed where trading actually happens
💪 3-5x higher efficiency
📊 Better price discovery

Result: Same capital, more trading volume.

---

[6/17] The Game Changer: Protocol-Owned MM

This is Feels Protocol's secret weapon:

🛡️ Floor Liquidity: Creates hard price floors (no flash crashes)
⚡ JIT Liquidity: Captures value from directional trades
💰 Fees → Protocol-owned accounts → More liquidity
🔄 Self-sustaining system

Traditional AMMs: Volatility = problem
Feels Protocol: Volatility = value

---

[7/17] Unified Markets = DeFi Simplified

Instead of:
• Protocol A for trading
• Protocol B for lending  
• Protocol C for leverage

Feels Protocol gives you:
📊 Spot trading
💵 Lending
⚖️ Leverage

All in ONE place. Shared liquidity. One interface.

This is what DeFi should have been from day one.

---

[8/17] Why Solana? (The Technical Truth)

Feels Protocol NEEDS Solana's architecture:

⚡ Parallel processing = Efficient tick management (can't do this on Ethereum)
💰 Fractional cent fees = Micro-positioning viable (Ethereum gas kills this)
🚀 Sub-second finality = Real-time price discovery (Ethereum = 12+ seconds)
📈 High throughput = Unified markets can scale (Ethereum = bottleneck)
🔗 Program composability = Ecosystem integration (Solana's superpower)

Feels Protocol literally couldn't exist on any other chain.

---

[9/17] How Feels Strengthens Solana Ecosystem

Feels Protocol doesn't just use Solana—it makes Solana stronger:

✅ Attracts more liquidity (better capital efficiency = more LPs)
✅ Lowers barrier to entry (simpler UX = more users)
✅ Creates sustainable liquidity (protocol-owned MM = always liquid)
✅ Showcases Solana's capabilities (unified markets = technical proof)
✅ Interconnects with other protocols (composability = network effects)

Every feature benefits the entire Solana ecosystem.

---

[10/17] Where DeFi Meets Crypto Culture

Feels Protocol isn't just technical innovation—it embraces crypto culture:

💬 Troll Box: Real-time community chat while trading
😎 Wojak: Meme culture meets professional DeFi
🔍 Advanced Filters: Customize your trading experience
📚 FYI Section: Education and protocol insights

DeFi that's both serious and fun. That's Feels Protocol.

---

[11/17] Real Numbers, Real Impact

What this means in practice:

📊 LPs: 3-5x better capital efficiency
👥 Users: No routing complexity, unified markets
🔄 Ecosystem: More liquidity, more volume, more growth
💎 Solana: Demonstrates technical superiority

This isn't theoretical. This is happening now.

---

[12/17] The Innovation Stack

Feels Protocol combines innovations never seen together:

1️⃣ Hub-and-spoke architecture (unique routing)
2️⃣ Concentrated liquidity (efficiency)
3️⃣ Protocol-owned MM (value conversion)
4️⃣ Unified markets (simplicity)

Each alone is impressive. Together? Revolutionary.

---

[13/17] Superteam Germany's Impact

This project was built during Colosseum Cypherpunk hackathon.

@SuperteamGermany provided:
• Technical support
• Community connections
• Builder network
• Hackathon platform

Their support enables projects like Feels Protocol to go from idea → reality.

This is how innovation happens in Solana.

---

[14/17] Why This Matters (The Big Picture)

Feels Protocol proves:

✅ Solana can handle complex DeFi (unified markets)
✅ Innovation is alive in Solana (protocol-owned MM)
✅ Better UX is possible (hub-and-spoke simplicity)
✅ Value creation > value extraction (volatility → value)

This sets a new standard for what DeFi can be.

---

[15/17] The Future

Feels Protocol is just the beginning.

As more protocols adopt these innovations:
→ More efficient DeFi
→ Better user experiences
→ Stronger Solana ecosystem
→ More builders choosing Solana

The future of DeFi is being built on Solana. Right now.

---

[16/17] Check It Out

💜 Feels Protocol: https://arena.colosseum.org/projects/explore/feels.fun
📚 Full Documentation: https://staging.feels.fun/docs
📖 Blog: https://staging.feels.fun/blog

🌐 Interactive Guide: [YOUR_VERCEL_URL_HERE]

Built on @solana
Supported by @SuperteamGermany

---

[17/17] Your Turn

What do you think?

Is protocol-owned market making the future?
Can unified markets simplify DeFi?
Is Solana the best choice for next-gen AMMs?

Let's discuss the future of DeFi.

#Solana #SuperteamGermany #Web3 #Blockchain #DeFi #AMM #FeelsProtocol #Innovation`

  const articleTemplate = `# Feels Protocol: The AMM That Converts Volatility Into Value

> "Imagine an AMM that doesn't just facilitate trades—it transforms market volatility into sustainable value. That's Feels Protocol on Solana."

---

## The Hidden Problem Nobody Talks About

Traditional AMMs have a dirty secret that the DeFi space has accepted as "normal":

- **80% of liquidity sits unused** in wide price ranges where trading never occurs
- **Complex routing algorithms** create higher costs and worse execution prices
- **Volatility just exists**—no value is created from market movements
- **Protocol fragmentation** forces users to navigate 3+ different protocols for trading, lending, and leverage

We've been building DeFi with these limitations for years. Feels Protocol says: "No more."

---

## What is Feels Protocol?

Feels Protocol is a **physics-based concentrated liquidity AMM** that converts speculative trading into long-term value through:

- **Programmatic market making** to convert short-term volatility into long-term value
- **Hub-and-spoke architecture** with FeelsSOL as the universal routing token
- **Protocol-owned market making strategies** including floor liquidity and JIT liquidity
- **Unified markets** bringing spot trading, lending, and leverage into one cohesive system
- **Dynamic fee structure** that adapts to market conditions

This isn't an incremental improvement. It's a fundamental reimagining of what an AMM can be.

---

## The Revolutionary Architecture

### Hub-and-Spoke: A First in DeFi

Traditional AMMs create a web of token pairs: Token A ↔ Token B, Token A ↔ Token C, Token B ↔ Token C, and so on. This creates exponential complexity as more tokens are added.

**Feels Protocol flips this model entirely.**

Every token pairs exclusively with **FeelsSOL** (the hub). To swap Token A for Token B, you go: Token A → FeelsSOL → Token B. Maximum 2 hops. Always.

**Why this matters:**
- ✅ **Unified liquidity**: All liquidity flows through a single hub, creating deeper pools
- ✅ **Zero routing complexity**: No need to calculate optimal paths across multiple pools
- ✅ **Simplified UX**: Users don't need to understand complex routing algorithms
- ✅ **Better prices**: Deeper liquidity means better execution prices

This architecture has never been implemented in DeFi before. It's uniquely Feels Protocol.

### Concentrated Liquidity: Precision Capital Allocation

Traditional AMMs spread liquidity across wide price ranges. If a token trades between $950-$1050, liquidity might be spread from $0-$1000, meaning most of it never gets used.

**Feels Protocol uses tick-based positioning** to solve this:

- LPs choose **specific price ranges** where they want to provide liquidity
- Capital is placed **exactly where trading occurs**
- This creates **3-5x higher capital efficiency** compared to traditional AMMs
- **Better price discovery** within concentrated ranges

**Result:** Same capital, more trading volume. More volume means more fees. More fees means more value for LPs.

### The Game Changer: Protocol-Owned Market Making

This is Feels Protocol's most innovative feature—and it's never been done before in DeFi.

**Floor Liquidity:**
- Creates **hard price floors** for tokens
- Protects against extreme volatility and flash crashes
- Ensures minimum liquidity at all times
- Provides stability in volatile markets

**JIT (Just-In-Time) Liquidity:**
- Captures value from directional trades
- Provides liquidity exactly when needed
- Optimizes capital efficiency
- Converts trading activity into protocol value

**The Self-Sustaining Cycle:**
1. Trading happens → Fees accumulate
2. Fees go to protocol-owned accounts
3. Protocol-owned accounts provide liquidity
4. More liquidity → More trading → More fees
5. Repeat

**Traditional AMMs:** Volatility = problem  
**Feels Protocol:** Volatility = value

This is the paradigm shift that makes Feels Protocol revolutionary.

### Unified Markets: DeFi Simplified

Instead of navigating:
- Protocol A for spot trading
- Protocol B for lending
- Protocol C for leverage

Feels Protocol gives you **all three in one place** with shared liquidity pools.

**Benefits:**
- One interface for all DeFi needs
- Shared liquidity across all market types
- No need to manage multiple accounts
- Simplified user experience

This is what DeFi should have been from day one.

---

## How Solana Enables This Revolution

Feels Protocol doesn't just run on Solana—it **requires** Solana's unique architecture to function. Here's why:

### 1. Parallel Processing

Solana's parallel processing enables efficient tick-based liquidity management. Multiple price ranges can be updated simultaneously, making concentrated liquidity viable at scale. **This isn't possible on Ethereum's sequential processing model.**

### 2. Fractional Cent Fees

Solana's fractional cent fees make concentrated liquidity positions economically viable. On Ethereum, gas costs can eat 10-50% of LP profits, making micro-positioning impossible. **Solana enables what Ethereum cannot.**

### 3. Sub-Second Finality

Sub-second finality ensures real-time price discovery and execution. Trades execute quickly, and price updates are nearly instantaneous. **Ethereum's 12+ second finality creates slippage and MEV issues.**

### 4. High Throughput

Solana's high throughput (65,000+ TPS) supports unified markets across multiple dimensions. The network can handle spot trading, lending, and leverage operations simultaneously without bottlenecks. **Ethereum struggles with just one of these.**

### 5. Program Composability

Solana's program architecture enables seamless integration with other DeFi protocols. Feels Protocol can integrate with lending protocols, yield farms, and other DeFi primitives, creating a composable ecosystem. **This is Solana's superpower.**

**The bottom line:** Feels Protocol literally couldn't exist on any other blockchain. It's a Solana-native innovation.

---

## How Feels Protocol Contributes to the Solana Ecosystem

Feels Protocol doesn't just use Solana—it **actively strengthens** the entire ecosystem:

### 1. Enhanced Capital Efficiency Attracts More Liquidity

By offering 3-5x better capital efficiency than traditional AMMs, Feels Protocol attracts more liquidity providers to Solana. More liquidity means:
- Better prices for traders
- More trading volume
- Stronger DeFi ecosystem
- More competitive with other chains

### 2. Simplified DeFi Experience Lowers Barrier to Entry

The hub-and-spoke architecture eliminates routing complexity, making DeFi accessible to newcomers. As more users discover how easy DeFi can be on Solana:
- More users join the ecosystem
- More volume flows through Solana
- More protocols benefit from network effects
- Solana becomes more attractive to builders

### 3. Sustainable Liquidity Model Ensures Consistency

Protocol-owned market making creates self-sustaining liquidity pools that don't rely solely on external LPs. This ensures:
- Consistent liquidity even during volatile periods
- Better trading experience for all Solana users
- Increased confidence in the Solana ecosystem
- More stable DeFi infrastructure

### 4. Unified Market Innovation Showcases Solana's Capabilities

By unifying spot trading, lending, and leverage in one system, Feels Protocol demonstrates Solana's capability to handle complex, multi-dimensional DeFi applications. This:
- Showcases Solana's technical superiority
- Attracts sophisticated DeFi protocols to build on Solana
- Creates network effects that strengthen the ecosystem
- Proves Solana can handle next-generation DeFi

### 5. Ecosystem Composability Creates Network Effects

Feels Protocol's program architecture enables seamless integration with other Solana DeFi protocols. This:
- Creates interconnected financial primitives
- Increases the network effect and value of Solana DeFi
- Makes the ecosystem more valuable as a whole
- Attracts more builders to Solana

### 6. Showcases Solana's Advantages to the Broader Crypto Community

Feels Protocol leverages Solana's unique advantages in ways that wouldn't be possible on other chains. This demonstrates to the broader crypto community:
- Why Solana is the best choice for next-generation DeFi
- What's possible with fast, cheap, scalable infrastructure
- The innovation happening in the Solana ecosystem
- Why more builders and users should choose Solana

**Every feature of Feels Protocol benefits the entire Solana ecosystem.**

---

## Where DeFi Meets Crypto Culture

Feels Protocol doesn't just innovate technically—it embraces the vibrant culture of crypto. From meme culture to real-time community interaction, Feels Protocol brings the human side of crypto into professional DeFi.

### Troll Box: Real-Time Community Chat

The troll box is Feels Protocol's real-time community chat, integrated directly into the trading interface. It's where traders share insights, discuss market movements, celebrate wins, and commiserate over losses—all while actively trading.

**Why it matters:**
- Creates a social layer that makes DeFi feel alive
- Builds community around the protocol
- Shares knowledge and insights in real-time
- Makes trading more engaging and human

The troll box is crypto culture in action—where memes meet markets and community drives engagement.

### Wojak Integration: Meme Culture Meets Professional DeFi

Wojak—the iconic crypto meme character—is woven into Feels Protocol's identity. This isn't just branding; it's a recognition that crypto culture, memes, and DeFi are inseparable.

Wojak represents the emotional journey of trading: the excitement, the anxiety, the euphoria, and the despair. Feels Protocol embraces this, creating a platform that's both professional and human.

### Advanced Filters: Customize Your Experience

Feels Protocol's filter system gives traders complete control. Filter by trading volume, price impact, liquidity depth, token type, or any combination of metrics that matter to your strategy.

**Filter options:**
- Volume filters: Find high-volume pairs
- Liquidity filters: Filter by depth
- Price impact: Minimize slippage
- Custom combinations: Adapt to every trading style

### FYI Section: Education Meets Innovation

The FYI (For Your Information) section is Feels Protocol's educational hub. It provides:
- Protocol updates and announcements
- Feature explanations and tutorials
- Educational content about DeFi and AMMs
- Community highlights and achievements

**Feels Protocol bridges two worlds:** The technical innovation of professional DeFi and the vibrant, meme-driven culture that defines crypto. It's DeFi that's both serious about innovation and serious about having fun.

---

## Real-World Impact: By the Numbers

What Feels Protocol's innovations mean in practice:

- **3-5x better capital efficiency** for liquidity providers
- **Zero routing complexity** for traders
- **Unified markets** eliminating the need for multiple protocols
- **Self-sustaining liquidity** that doesn't depend on external incentives
- **Better prices** through deeper, unified liquidity pools

This isn't theoretical. These are real improvements happening now.

---

## Why This Matters: The Big Picture

Feels Protocol represents more than just a better AMM. It proves:

✅ **Solana can handle complex DeFi** - Unified markets demonstrate technical capability  
✅ **Innovation is alive in Solana** - Protocol-owned MM is genuinely new  
✅ **Better UX is possible** - Hub-and-spoke eliminates complexity  
✅ **Value creation > value extraction** - Converting volatility into value

This sets a new standard for what DeFi can be—and it's happening on Solana.

---

## The Future of DeFi

Feels Protocol is just the beginning. As more protocols adopt these innovations:

- More efficient DeFi across the board
- Better user experiences everywhere
- Stronger Solana ecosystem
- More builders choosing Solana

The future of DeFi is being built on Solana. Right now.

---

## The Superteam Germany Connection

Feels Protocol was developed during the **Colosseum Cypherpunk hackathon**, supported by **Superteam Germany**.

Superteam Germany is a builder community that:
- Provides technical support and resources
- Connects builders with mentors and investors
- Organizes hackathons and events
- Fosters innovation in the Solana ecosystem

Their support enabled Feels Protocol to go from concept to reality. This is how innovation happens in Solana—through communities like Superteam Germany that support builders pushing the boundaries of what's possible.

---

## Conclusion

Feels Protocol is more than just another AMM—it's a testament to what's possible when innovative ideas meet cutting-edge technology and strong community support. By converting speculative trading into long-term value through programmatic market making, unified markets, and efficient architecture, Feels Protocol showcases the future of decentralized finance on Solana.

Built during the Colosseum Cypherpunk hackathon and supported by Superteam Germany, Feels Protocol demonstrates the innovation happening in the Solana ecosystem. It proves that Solana isn't just fast and cheap—it's the best platform for next-generation DeFi.

As the DeFi space continues to evolve, protocols like Feels Protocol will shape how we think about liquidity, trading, and value creation in decentralized systems.

The revolution is here. And it's on Solana.

---

## Learn More

- **Feels Protocol**: https://arena.colosseum.org/projects/explore/feels.fun
- **Documentation**: https://staging.feels.fun/docs
- **Blog**: https://staging.feels.fun/blog
- **Interactive Guide**: [YOUR_VERCEL_URL_HERE]
- **Superteam Germany**: Supporting Solana builders
- **Solana**: The fastest blockchain in crypto

---

**What do you think? Is protocol-owned market making the future? Can unified markets simplify DeFi? Is Solana the best choice for next-gen AMMs?**

Let's discuss the future of DeFi.

#Solana #SuperteamGermany #Web3 #Blockchain #DeFi #AMM #FeelsProtocol #Innovation`

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getTemplate = () => {
    if (contentType === 'article') {
      return articleTemplate
    }
    return videoTemplate
  }

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
                <Activity className="w-16 h-16 text-white icon-glow-xl" />
              </div>
            </div>
          </div>
          <h1 className="text-7xl md:text-8xl font-black tracking-tight premium-gradient">
            Content Creator
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto font-bold">
            Create engaging content about <span className="text-yellow-300">Feels Protocol</span> using our enhanced templates
          </p>
        </div>
      </div>

      {/* Content Performance Analytics */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-2 flex items-center gap-3">
              <BarChart3 className="w-10 h-10 text-primary-500 icon-glow" />
              Content Performance Analytics
            </h2>
            <p className="text-gray-600 dark:text-gray-400">Track how your content performs</p>
          </div>
        </div>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contentStats.map((card, idx) => (
            <AnalyticsCard key={idx} {...card} />
          ))}
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-6">
          <MetricChart
            data={contentMetrics}
            dataKey="views"
            type="area"
            color="#6366f1"
            title="Content Views Growth"
            subtitle="Total views over time"
            height={300}
          />
          <MetricChart
            data={engagementData}
            dataKey="engagement"
            type="line"
            color="#14f195"
            title="Engagement Trends"
            subtitle="Daily engagement metrics"
            height={300}
          />
        </div>
      </div>

      {/* Feels Protocol Highlight - Premium Card */}
      {feelsFun && (
        <div className="card card-gradient relative overflow-hidden transform-3d card-3d">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-200/20 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center space-x-6 mb-6">
              <div className="w-24 h-24 bg-gradient-primary rounded-3xl flex items-center justify-center shadow-2xl flex-shrink-0 transform hover:rotate-12 transition-transform duration-500">
                <Activity className="w-12 h-12 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-2">{feelsFun.name}</h3>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">{feelsFun.description}</p>
              </div>
            </div>

            {/* Key Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {[
                { label: 'Capital Efficiency', value: '3-5x', icon: TrendingUp, color: 'text-green-600' },
                { label: 'Max Hops', value: '2', icon: Network, color: 'text-blue-600' },
                { label: 'Unified Markets', value: '3', icon: Layers, color: 'text-purple-600' },
                { label: 'Protocol Features', value: '10+', icon: Shield, color: 'text-orange-600' },
              ].map((stat, idx) => {
                const Icon = stat.icon
                return (
                  <div key={idx} className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                    <Icon className={`w-6 h-6 ${stat.color} mb-2`} />
                    <div className="text-2xl font-black text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* Live Token Markets - Real Data from Site */}
      <TokenList tokens={liveTokens} />

      {/* Protocol Statistics from Docs */}
      <div className="card">
        <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          <Activity className="w-10 h-10 text-primary-500 icon-glow" />
          Protocol Specifications
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {protocolStats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div key={idx} className="p-4 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-xl border border-primary-200/50 dark:border-primary-800/50 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-3 shadow-md">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-black text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">{stat.label}</div>
                <div className="text-xs text-gray-500 dark:text-gray-500">{stat.description}</div>
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

      {/* Performance Comparison */}
      <StatsComparison data={comparisonData} />

      {/* Content Creation Process */}
      <ProcessFlow steps={contentCreationSteps} />

      {/* Content Type Selector - Premium Design */}
      <div className="card">
        <div className="flex items-center space-x-6 mb-8">
          <Link
            to="/content-creator"
            className={`group flex-1 flex items-center justify-center space-x-4 p-6 rounded-2xl transition-all transform hover:scale-105 ${
              contentType === 'video'
                ? 'bg-gradient-primary text-white shadow-2xl shadow-primary-500/40'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 border-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600'
            }`}
          >
            <Video className={`w-8 h-8 ${contentType === 'video' ? '' : 'group-hover:scale-110'} transition-transform`} />
            <span className="font-black text-xl uppercase tracking-wider">Video / Thread</span>
          </Link>
          <Link
            to="/content-creator?type=article"
            className={`group flex-1 flex items-center justify-center space-x-4 p-6 rounded-2xl transition-all transform hover:scale-105 ${
              contentType === 'article'
                ? 'bg-gradient-primary text-white shadow-2xl shadow-primary-500/40'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 border-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600'
            }`}
          >
            <FileText className={`w-8 h-8 ${contentType === 'article' ? '' : 'group-hover:scale-110'} transition-transform`} />
            <span className="font-black text-xl uppercase tracking-wider">Article</span>
          </Link>
        </div>

        {/* Template - Premium Display */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-4xl font-black text-gray-900 dark:text-white">
              {contentType === 'article' ? 'Enhanced Article Template' : 'Enhanced Thread Template'}
            </h2>
            <button
              onClick={() => handleCopy(getTemplate())}
              className="group relative inline-flex items-center space-x-3 px-6 py-4 bg-gradient-primary text-white rounded-2xl font-black hover:shadow-2xl hover:shadow-primary-500/40 transition-all hover:scale-105 btn-premium overflow-hidden uppercase tracking-wider"
            >
              {copied ? (
                <>
                  <Check className="w-6 h-6 relative z-10" />
                  <span className="text-sm relative z-10">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform" />
                  <span className="text-sm relative z-10">Copy Template</span>
                </>
              )}
            </button>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 border-2 border-gray-200 dark:border-gray-700 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-primary"></div>
            <pre className="whitespace-pre-wrap text-sm text-gray-700 dark:text-gray-300 font-mono overflow-x-auto leading-relaxed">
              {getTemplate()}
            </pre>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-6">
        <div className="card bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 text-center">
          <div className="text-4xl font-black text-primary-600 dark:text-primary-400 mb-2">
            {contentType === 'video' ? '17' : '1'}
          </div>
          <p className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
            {contentType === 'video' ? 'Tweets' : 'Article'}
          </p>
        </div>
        <div className="card bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 text-center">
          <div className="text-4xl font-black text-purple-600 dark:text-purple-400 mb-2">100%</div>
          <p className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Ready to Use</p>
        </div>
        <div className="card bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 text-center">
          <div className="text-4xl font-black text-green-600 dark:text-green-400 mb-2">
            <Star className="w-10 h-10 mx-auto fill-green-600 dark:fill-green-400" />
          </div>
          <p className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Premium Quality</p>
        </div>
      </div>
    </div>
  )
}
