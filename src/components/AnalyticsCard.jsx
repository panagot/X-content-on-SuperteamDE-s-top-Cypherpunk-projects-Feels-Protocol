import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react'

export default function AnalyticsCard({ 
  title, 
  value, 
  change, 
  changeType = 'positive', 
  icon: Icon, 
  color = 'primary',
  subtitle,
  trend,
  loading = false 
}) {
  const colorClasses = {
    primary: 'from-primary-500 to-primary-700',
    green: 'from-green-500 to-emerald-500',
    blue: 'from-blue-500 to-cyan-500',
    purple: 'from-purple-500 to-pink-500',
    orange: 'from-orange-500 to-red-500',
  }

  const bgColorClasses = {
    primary: 'from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20',
    green: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
    blue: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
    purple: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
    orange: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20',
  }

  if (loading) {
    return (
      <div className="card bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 animate-pulse">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-4"></div>
        <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
      </div>
    )
  }

  return (
    <div className={`card bg-gradient-to-br ${bgColorClasses[color]} border-2 border-transparent hover:border-${color}-300 dark:hover:border-${color}-700 transition-all hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden group`}>
      {/* Animated top border */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colorClasses[color]} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
      
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          {Icon && (
            <div className={`w-12 h-12 bg-gradient-to-br ${colorClasses[color]} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
          )}
          <div>
            <h3 className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">{title}</h3>
            {subtitle && (
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{subtitle}</p>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-baseline space-x-2">
          <span className="text-4xl font-black text-gray-900 dark:text-white">{value}</span>
          {change !== undefined && (
            <div className={`flex items-center space-x-1 px-2 py-1 rounded-lg ${
              changeType === 'positive' 
                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
                : changeType === 'negative'
                ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-400'
            }`}>
              {changeType === 'positive' && <ArrowUpRight className="w-4 h-4" />}
              {changeType === 'negative' && <ArrowDownRight className="w-4 h-4" />}
              {changeType === 'neutral' && <Minus className="w-4 h-4" />}
              <span className="text-sm font-bold">{change}%</span>
            </div>
          )}
        </div>

        {trend && (
          <div className="flex items-center space-x-2 text-sm">
            {trend > 0 ? (
              <>
                <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span className="text-gray-600 dark:text-gray-400 font-semibold">Up {trend}% from last period</span>
              </>
            ) : trend < 0 ? (
              <>
                <TrendingDown className="w-4 h-4 text-red-600 dark:text-red-400" />
                <span className="text-gray-600 dark:text-gray-400 font-semibold">Down {Math.abs(trend)}% from last period</span>
              </>
            ) : (
              <span className="text-gray-600 dark:text-gray-400 font-semibold">No change</span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

