import { ArrowRight, ArrowDown, Network, Layers } from 'lucide-react'

export default function ArchitectureDiagram({ type = 'hub-spoke' }) {
  if (type === 'hub-spoke') {
    return (
      <div className="relative p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-3xl border-2 border-blue-200 dark:border-blue-800">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">Hub & Spoke Architecture</h3>
          <p className="text-gray-600 dark:text-gray-400">FeelsSOL as the universal routing hub</p>
        </div>
        
        {/* Hub in center */}
        <div className="flex items-center justify-center mb-8">
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white dark:border-gray-800">
              <div className="text-center">
                <Network className="w-12 h-12 text-white mx-auto mb-2" />
                <span className="text-white font-black text-lg">FeelsSOL</span>
                <p className="text-white/80 text-xs mt-1">Hub</p>
              </div>
            </div>
            {/* Pulsing ring */}
            <div className="absolute inset-0 rounded-full border-4 border-blue-400 animate-ping opacity-20"></div>
          </div>
        </div>

        {/* Spoke tokens */}
        <div className="grid grid-cols-3 gap-6">
          {['Token A', 'Token B', 'Token C'].map((token, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-lg border-2 border-blue-200 dark:border-blue-700 mb-4">
                <span className="text-sm font-black text-gray-700 dark:text-gray-300">{token}</span>
              </div>
              <ArrowDown className="w-6 h-6 text-blue-500 mb-2" />
              <div className="text-xs text-gray-600 dark:text-gray-400 font-semibold">2 Hops Max</div>
            </div>
          ))}
        </div>

        {/* Flow indicator */}
        <div className="mt-8 p-4 bg-white dark:bg-gray-800 rounded-xl border border-blue-200 dark:border-blue-700">
          <div className="flex items-center justify-center space-x-2 text-sm">
            <span className="font-bold text-gray-700 dark:text-gray-300">Token A</span>
            <ArrowRight className="w-4 h-4 text-blue-500" />
            <span className="font-bold text-blue-600 dark:text-blue-400">FeelsSOL</span>
            <ArrowRight className="w-4 h-4 text-blue-500" />
            <span className="font-bold text-gray-700 dark:text-gray-300">Token B</span>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'liquidity') {
    return (
      <div className="relative p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl border-2 border-purple-200 dark:border-purple-800">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">Concentrated Liquidity</h3>
          <p className="text-gray-600 dark:text-gray-400">Capital efficiency comparison</p>
        </div>
        
        <div className="space-y-6">
          {/* Traditional AMM */}
          <div>
            <h4 className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-3">Traditional AMM</h4>
            <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-2 bg-gray-400 dark:bg-gray-600 rounded"></div>
              </div>
              <div className="absolute top-2 left-2 text-xs font-bold text-gray-600 dark:text-gray-400">
                Wide Range: $0 - $1000
              </div>
              <div className="absolute bottom-2 right-2 text-xs font-bold text-red-600">
                Only 20% Used
              </div>
            </div>
          </div>

          {/* Feels Protocol */}
          <div>
            <h4 className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-3">Feels Protocol</h4>
            <div className="h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg relative overflow-hidden shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-12 bg-white/30 rounded"></div>
              </div>
              <div className="absolute top-2 left-2 text-xs font-bold text-white">
                Focused Range: $950 - $1050
              </div>
              <div className="absolute bottom-2 right-2 text-xs font-bold text-white">
                3-5x Efficiency
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return null
}
