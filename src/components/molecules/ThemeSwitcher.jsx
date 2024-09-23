// ThemeSwitcher.jsx

import { useEffect, useState } from 'react'
import Dropdown from '@/components/atoms/Dropdown'
import IconMoon from '@/components/atoms/IconMoon'
import IconSun from '@/components/atoms/IconSun'
import IconDesktop from '@/components/atoms/IconDesktop'

const ThemeSwitcher = () => {
  // FIXME fermé le dropdown une fois l'option choisie ??

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
    // TODO retirer le console log
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

  // FIXME faire ronde les options à choisir
  return (
    <div className="fixed right-0 top-0 sm:left-0 sm:top-auto sm:bottom-0 p-4 flex flex-col">
      <Dropdown
        options={filteredOptions}
        onDropdown={handleThemeChange}
        currentIcon={CurrentIcon}
      />
    </div>
  )
}

export default ThemeSwitcher
