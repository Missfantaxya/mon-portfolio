// ThemeSwitcher.jsx

import Toggle from '@/components/atoms/Toggle'
import IconMoon from '@/components/atoms/IconMoon'
import IconSun from '@/components/atoms/IconSun'
import IconDesktop from '@/components/atoms/IconDesktop'

const ThemeSwitcher = () => {
  const options = [
    { label: 'Clair', value: 'light', Icon: IconSun, aria: 'Thème clair' },
    { label: 'Sombre', value: 'dark', Icon: IconMoon, aria: 'Thème sombre' },
    {
      label: 'Système',
      value: 'system',
      Icon: IconDesktop,
      aria: 'Thème du système'
    }
  ]
  //TODO ajouter la logique
  const handleThemeChange = (value) => {
    console.log('Changement de thème en:', value)
    // * Ici, implémenteras la logique de changement de thème plus tard et suprimer le console log
  }
  // ! mettre en colonne car là ça fonctionne pas
  return (
    <div className="fixed left-0 bottom-0 p-4 flex flex-col">
      <Toggle options={options} onToggle={handleThemeChange} />
    </div>
  )
}

export default ThemeSwitcher
