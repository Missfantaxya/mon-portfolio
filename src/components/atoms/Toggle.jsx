// TODO ajouter les icons
const Toggle = ({ options, onToggle }) => {
  return (
    <div className="flex space-x-2 justify-center">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onToggle(option.value)}
          className="px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-150 primary-bg text-curent focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}

export default Toggle
