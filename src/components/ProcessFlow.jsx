import { ArrowRight, CheckCircle2, Zap, Shield, TrendingUp } from 'lucide-react'

export default function ProcessFlow({ steps }) {
  return (
      <div className="card">
        <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-8">Content Creation Process</h3>
      <div className="relative">
        {/* Connection line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-purple-500 to-pink-500 hidden md:block"></div>
        
        <div className="space-y-8">
          {steps.map((step, idx) => {
            const Icon = step.icon || CheckCircle2
            return (
              <div key={idx} className="relative flex items-start space-x-6">
                {/* Step number circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-xl border-4 border-white dark:border-gray-800">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-800">
                    <span className="text-xs font-black text-yellow-900">{idx + 1}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 pt-2">
                  <h4 className="text-xl font-black text-gray-900 dark:text-white mb-2">{step.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{step.description}</p>
                  {step.details && (
                    <ul className="mt-3 space-y-2">
                      {step.details.map((detail, detailIdx) => (
                        <li key={detailIdx} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
                          <span className="text-primary-500 mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

