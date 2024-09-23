// Dropdown.jsx

import { useState, useEffect, useRef } from 'react'
import ButtonIcon from '@/components/atoms/ButtonIcon'

const Dropdown = ({ options, onDropdown, style, currentIcon }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [openUp, setOpenUp] = useState(false) // État pour déterminer la direction
  const dropdownRef = useRef(null) // Utilisation de useRef pour référencer le dropdown

  // Détecte la place disponible dans la fenêtre lors de l'ouverture du dropdown
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

    // Cleanup pour éviter les fuites de mémoire
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const spaceBelow = windowHeight - rect.bottom
      const spaceAbove = rect.top

      // Si l'espace en dessous est inférieur à la taille estimée du dropdown, ouvre vers le haut
      if (spaceBelow < 150 && spaceAbove > 150) {
        setOpenUp(true)
      } else {
        setOpenUp(false)
      }
    }
  }, [isOpen])

  return (
    <div className="w-max relative" ref={dropdownRef}>
      <ButtonIcon
        Icon={currentIcon}
        onClick={handleDropdown}
        style="px-4 py-4 text-sm font-medium rounded-full text-current hover:text-accent shadow-sm shadow-accent"
        aria="Dropdown theme options"
      />
      {isOpen && (
        <div
          className={`flex flex-col content-center w-full absolute ${
            openUp ? 'bottom-full my-2' : 'top-full my-2'
          } bg-inherit z-50`}
        >
          {options.map((option) => (
            <ButtonIcon
              key={option.value}
              Icon={option.Icon}
              onClick={() => {
                onDropdown(option.value)
                setIsOpen(false)
              }}
              style="mx-auto p-2 text-sm font-medium rounded-full  hover:text-accent shadow-sm shadow-accent mt-1"
              aria={option.aria}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown
