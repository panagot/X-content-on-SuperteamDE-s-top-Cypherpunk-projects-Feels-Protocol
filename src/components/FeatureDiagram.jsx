import { ArrowRight, ArrowDown, Layers, Target, Shield, TrendingUp, Zap } from 'lucide-react'

export default function FeatureDiagram({ type }) {
  if (type === 'pomm') {
    return (
      <div className="relative p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-3xl border-2 border-green-200 dark:border-green-800">
        <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6 text-center">Protocol-Owned Market Making Flow</h3>
        
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0">
              <span className="text-2xl font-black text-white">1</span>
            </div>
            <div className="flex-1 p-4 bg-white dark:bg-gray-800 rounded-xl border-2 border-green-200 dark:border-green-700">
              <h4 className="font-black text-gray-900 dark:text-white mb-2">Trading Activity</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Users trade tokens on Feels Protocol</p>
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowDown className="w-6 h-6 text-green-500" />
          </div>

          {/* Step 2 */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0">
              <span className="text-2xl font-black text-white">2</span>
            </div>
            <div className="flex-1 p-4 bg-white dark:bg-gray-800 rounded-xl border-2 border-green-200 dark:border-green-700">
              <h4 className="font-black text-gray-900 dark:text-white mb-2">Fees Accumulate</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Trading fees go to protocol-owned accounts</p>
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowDown className="w-6 h-6 text-green-500" />
          </div>

          {/* Step 3 */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border-2 border-green-200 dark:border-green-700">
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-black text-gray-900 dark:text-white">Floor Liquidity</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Creates hard price floors</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border-2 border-green-200 dark:border-green-700">
              <div className="flex items-center space-x-2 mb-2">
                <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-black text-gray-900 dark:text-white">JIT Liquidity</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Just-In-Time provision</p>
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowDown className="w-6 h-6 text-green-500" />
          </div>

          {/* Step 4 */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0">
              <span className="text-2xl font-black text-white">4</span>
            </div>
            <div className="flex-1 p-4 bg-white dark:bg-gray-800 rounded-xl border-2 border-green-200 dark:border-green-700">
              <h4 className="font-black text-gray-900 dark:text-white mb-2">Long-Term Value</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Volatility converted into sustainable protocol value</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return null
}

