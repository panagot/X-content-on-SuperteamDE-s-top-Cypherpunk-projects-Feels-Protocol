import { TrendingUp, TrendingDown } from 'lucide-react'

export default function TokenList({ tokens }) {
  return (
    <div className="card">
      <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">Live Token Markets</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {tokens.map((token, idx) => {
          const isPositive = token.change >= 0
          return (
            <div
              key={idx}
              className="group p-4 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-black text-sm">
                  {token.symbol.charAt(0)}
                </div>
                <div className="flex-1">
                  <h4 className="font-black text-gray-900 dark:text-white">{token.symbol}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{token.name}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-black text-gray-900 dark:text-white">
                  ${token.price.toFixed(4)}
                </div>
                <div className={`flex items-center space-x-1 text-sm font-bold ${isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {isPositive ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  <span>{isPositive ? '+' : ''}{token.change.toFixed(2)}%</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

