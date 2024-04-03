import Toggle from '../atoms/Toggle'

const ThemeSwitcher = () => {
  const options = [
    { label: 'Clair', value: 'light' },
    { label: 'Sombre', value: 'dark' },
    { label: 'Système', value: 'system' }
  ]
  //TODO ajouter la logique
  const handleThemeChange = (value) => {
    console.log('Changement de thème en:', value)
    // * Ici, implémenteras la logique de changement de thème plus tard et suprimer le console log
  }

  return (
    <div className="my-4">
      <Toggle options={options} onToggle={handleThemeChange} />
    </div>
  )
}

export default ThemeSwitcher
