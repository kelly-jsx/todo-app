import React, { useEffect, useState } from 'react'

import { HiMoon, HiSun } from 'react-icons/hi'

export default function DarkMode() {
  const [isDarkMode, setisDarkMode] = useState<boolean>(() => {
    const darkMode = localStorage.getItem('darkmode')

    if (!darkMode) {
      return true
    }
    if (darkMode === 'true') return true
    else return false
  })

  const toggleisDarkMode = () => {
    setisDarkMode((prevState) => !prevState)
  }

  useEffect(() => {
    const html = document.querySelector<HTMLHtmlElement>('html')!

    if (isDarkMode) {
      html.classList.remove('latte')
      html.classList.add('mocha')
      localStorage.setItem('darkmode', 'true')
    } else {
      html.classList.remove('mocha')
      html.classList.add('latte')
      localStorage.setItem('darkmode', 'false')
    }
  }, [isDarkMode])

  return (
    <button className="no-wrap" onClick={toggleisDarkMode}>
      <p className="flex gap-3 justify-center items-center w-full">
        Mode: {isDarkMode ? <HiSun /> : <HiMoon />}
      </p>
    </button>
  )
}
