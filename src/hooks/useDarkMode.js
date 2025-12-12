import { useState, useEffect } from 'react'

export function useDarkMode() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const checkDarkMode = () => {
      if (typeof document !== 'undefined') {
        setIsDark(document.documentElement.classList.contains('dark'))
      }
    }
    
    checkDarkMode()
    
    // Watch for dark mode changes
    if (typeof document !== 'undefined') {
      const observer = new MutationObserver(checkDarkMode)
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
      })
      
      return () => observer.disconnect()
    }
  }, [])

  return isDark
}

