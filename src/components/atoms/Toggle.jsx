// Toggle.jsx

// TODO faire disparaitre l'icon du thème actif
const Toggle = ({ options, onToggle, style }) => {
  return (
    <div className={style}>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onToggle(option.value)}
          className="px-4 py-4 text-sm font-medium rounded-full text-curent shadow-sm shadow-accent"
          aria-label={option.aria}
        >
          <option.Icon className="md:h-2 md:w-2" color="currentColor" />
        </button>
      ))}
    </div>
  )
}

export default Toggle
