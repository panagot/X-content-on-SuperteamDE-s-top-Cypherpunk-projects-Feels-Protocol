import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight } from 'lucide-react'

export default function StatsComparison({ data }) {
  return (
    <div className="card">
      <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">Performance Comparison</h3>
      <div className="space-y-4">
        {data.map((item, idx) => {
          const isPositive = item.feelsValue > item.traditionalValue
          const improvement = ((item.feelsValue - item.traditionalValue) / item.traditionalValue * 100).toFixed(1)
          
          return (
            <div key={idx} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-gray-700 dark:text-gray-300">{item.metric}</span>
                {isPositive ? (
                  <div className="flex items-center space-x-1 px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg">
                    <ArrowUpRight className="w-4 h-4" />
                    <span className="text-sm font-bold">+{improvement}%</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-1 px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg">
                    <ArrowDownRight className="w-4 h-4" />
                    <span className="text-sm font-bold">{improvement}%</span>
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Traditional AMM</span>
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{item.traditionalValue}{item.unit}</span>
                  </div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gray-400 dark:bg-gray-500 rounded-full"
                      style={{ width: `${(item.traditionalValue / item.maxValue) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-primary-600 dark:text-primary-400">Feels Protocol</span>
                    <span className="text-sm font-bold text-primary-600 dark:text-primary-400">{item.feelsValue}{item.unit}</span>
                  </div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-primary rounded-full"
                      style={{ width: `${(item.feelsValue / item.maxValue) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

