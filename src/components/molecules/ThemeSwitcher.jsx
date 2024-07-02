// ThemeSwitcher.jsx

import { useEffect, useState } from 'react'
import Dropdown from '@/components/atoms/Dropdown'
import IconMoon from '@/components/atoms/IconMoon'
import IconSun from '@/components/atoms/IconSun'
import IconDesktop from '@/components/atoms/IconDesktop'

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState('system')

  const options = [
    {
      label: 'Clair',
      value: 'light',
      Icon: IconSun,
      aria: 'Thème clair'
    },
    {
      label: 'Sombre',
      value: 'dark',
      Icon: IconMoon,
      aria: 'Thème sombre'
    },
    {
      label: 'Système',
      value: 'system',
      Icon: IconDesktop,
      aria: 'Thème du système'
    }
  ]

  const handleThemeChange = (value) => {
    console.log('Changement de thème en:', value)
    setCurrentTheme(value)
    if (value === 'system') {
      document.documentElement.setAttribute('data-theme', value)
      localStorage.setItem('theme', value)
    } else {
      document.documentElement.setAttribute('data-theme', value)
      localStorage.setItem('theme', value)
    }
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'system'
    setCurrentTheme(savedTheme)
    handleThemeChange(savedTheme)
  }, [])

  const CurrentIcon =
    options.find((option) => option.value === currentTheme)?.Icon || IconDesktop

  // Filtrer les options pour exclure l'option actuellement sélectionnée
  const filteredOptions = options.filter(
    (option) => option.value !== currentTheme
  )

  return (
    <div className="fixed left-0 bottom-0 p-4 flex flex-col">
      <Dropdown
        options={filteredOptions}
        onDropdown={handleThemeChange}
        currentIcon={CurrentIcon}
      />
    </div>
  )
}

export default ThemeSwitcher
