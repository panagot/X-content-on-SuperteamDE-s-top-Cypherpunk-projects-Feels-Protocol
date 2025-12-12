import { Calendar, Clock } from 'lucide-react'
import { useState } from 'react'

const timeRanges = [
  { label: '7D', value: '7d' },
  { label: '30D', value: '30d' },
  { label: '90D', value: '90d' },
  { label: '1Y', value: '1y' },
  { label: 'All', value: 'all' },
]

export default function TimeRangeSelector({ value = '30d', onChange }) {
  const [selected, setSelected] = useState(value)

  const handleSelect = (range) => {
    setSelected(range)
    onChange?.(range)
  }

  return (
    <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-xl p-1 border border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="flex items-center space-x-2 px-3 py-1.5 text-gray-600 dark:text-gray-400">
        <Clock className="w-4 h-4" />
        <span className="text-sm font-semibold">Period:</span>
      </div>
      {timeRanges.map((range) => (
        <button
          key={range.value}
          onClick={() => handleSelect(range.value)}
          className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${
            selected === range.value
              ? 'bg-gradient-primary text-white shadow-lg'
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          {range.label}
        </button>
      ))}
      <button className="px-3 py-1.5 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all">
        <Calendar className="w-4 h-4" />
      </button>
    </div>
  )
}

