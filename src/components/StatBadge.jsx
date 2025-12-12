import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

export default function StatBadge({ value, label, change, changeType = 'positive', icon: Icon, color = 'primary' }) {
  const colorClasses = {
    primary: 'from-primary-500 to-primary-700',
    green: 'from-green-500 to-emerald-500',
    blue: 'from-blue-500 to-cyan-500',
    purple: 'from-purple-500 to-pink-500',
    orange: 'from-orange-500 to-red-500',
  }

  return (
    <div className={`p-6 bg-gradient-to-br ${colorClasses[color]}/10 rounded-2xl border-2 border-${colorClasses[color].split('-')[1]}-200 dark:border-${colorClasses[color].split('-')[1]}-800 text-center`}>
      {Icon && (
        <div className={`w-16 h-16 bg-gradient-to-br ${colorClasses[color]} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
      )}
      <div className="text-4xl font-black text-gray-900 dark:text-white mb-2">{value}</div>
      <div className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">{label}</div>
      {change !== undefined && (
        <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-lg ${
          changeType === 'positive' 
            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
            : changeType === 'negative'
            ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-400'
        }`}>
          {changeType === 'positive' && <TrendingUp className="w-4 h-4" />}
          {changeType === 'negative' && <TrendingDown className="w-4 h-4" />}
          {changeType === 'neutral' && <Minus className="w-4 h-4" />}
          <span className="text-xs font-bold">{change}%</span>
        </div>
      )}
    </div>
  )
}

