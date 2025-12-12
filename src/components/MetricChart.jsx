import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { TrendingUp, TrendingDown } from 'lucide-react'

export default function MetricChart({ 
  data, 
  type = 'line', 
  dataKey, 
  color = '#6366f1',
  title,
  subtitle,
  showLegend = false,
  height = 300
}) {
  const ChartComponent = type === 'area' ? AreaChart : type === 'bar' ? BarChart : LineChart
  const DataComponent = type === 'area' ? Area : type === 'bar' ? Bar : Line

  // Calculate trend
  const trend = data && data.length > 1 
    ? ((data[data.length - 1][dataKey] - data[0][dataKey]) / data[0][dataKey] * 100).toFixed(1)
    : 0

  const isPositive = parseFloat(trend) >= 0

  return (
    <div className="card relative overflow-hidden">
      {(title || subtitle) && (
        <div className="mb-6">
          {title && (
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-black text-gray-900 dark:text-white">{title}</h3>
              {trend !== 0 && (
                <div className={`flex items-center space-x-1 px-3 py-1 rounded-lg ${
                  isPositive 
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
                    : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                }`}>
                  {isPositive ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  <span className="text-sm font-bold">{Math.abs(trend)}%</span>
                </div>
              )}
            </div>
          )}
          {subtitle && (
            <p className="text-sm text-gray-600 dark:text-gray-400">{subtitle}</p>
          )}
        </div>
      )}

      <ResponsiveContainer width="100%" height={height}>
        <ChartComponent data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id={`gradient-${dataKey}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.3}/>
              <stop offset="95%" stopColor={color} stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-gray-700" />
          <XAxis 
            dataKey="name" 
            stroke="#6b7280"
            className="dark:stroke-gray-400"
            tick={{ fill: '#6b7280' }}
          />
          <YAxis 
            stroke="#6b7280"
            className="dark:stroke-gray-400"
            tick={{ fill: '#6b7280' }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '8px 12px'
            }}
            labelStyle={{ color: '#374151', fontWeight: 'bold' }}
          />
          {showLegend && <Legend />}
          {type === 'area' ? (
            <Area 
              type="monotone" 
              dataKey={dataKey} 
              stroke={color} 
              fill={`url(#gradient-${dataKey})`}
              strokeWidth={2}
            />
          ) : type === 'bar' ? (
            <Bar 
              dataKey={dataKey} 
              fill={color}
              radius={[8, 8, 0, 0]}
            />
          ) : (
            <Line 
              type="monotone" 
              dataKey={dataKey} 
              stroke={color} 
              strokeWidth={3}
              dot={{ fill: color, r: 4 }}
              activeDot={{ r: 6 }}
            />
          )}
        </ChartComponent>
      </ResponsiveContainer>
    </div>
  )
}

