import { useState, useEffect, useRef } from 'react'
import ButtonIcon from '@/components/atoms/ButtonIcon'

const Dropdown = ({ options, onDropdown, style, currentIcon }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const handleDropdown = () => {
    setIsOpen(!isOpen)
  }

  // Fonction pour détecter le clic en dehors du dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  // Ajouter un event listener pour fermer le dropdown si on clique ailleurs
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className={`relative ${style}`} ref={dropdownRef}>
      <ButtonIcon
        Icon={currentIcon}
        onClick={handleDropdown}
        style="px-4 py-4 text-sm font-medium rounded-full text-current hover:text-accent shadow-sm shadow-accent"
        aria="Dropdown theme options"
      />
      {isOpen && (
        <div className="flex flex-col items-center absolute top-full mt-2 bg-inherit z-50 w-full">
          {options.map((option) => (
            <ButtonIcon
              key={option.value}
              Icon={option.Icon}
              onClick={() => {
                onDropdown(option.value)
                setIsOpen(false)
              }}
              style="p-2 text-sm font-medium rounded-full hover:text-accent shadow-sm shadow-accent mt-1 flex items-center justify-center"
              aria={option.aria}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown
