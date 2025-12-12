import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'

export default function ComparisonChart({ data, title, subtitle }) {
  return (
    <div className="card">
      {title && (
        <div className="mb-6">
          <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">{title}</h3>
          {subtitle && (
            <p className="text-sm text-gray-600 dark:text-gray-400">{subtitle}</p>
          )}
        </div>
      )}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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
          <Bar dataKey="traditional" fill="#ef4444" radius={[8, 8, 0, 0]} />
          <Bar dataKey="feels" fill="#6366f1" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex items-center justify-center gap-6 mt-6">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-red-500 rounded"></div>
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Traditional AMM</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-primary-500 rounded"></div>
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Feels Protocol</span>
        </div>
      </div>
    </div>
  )
}

