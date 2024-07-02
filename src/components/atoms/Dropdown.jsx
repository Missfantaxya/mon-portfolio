// Dropdown.jsx

import { useState } from 'react'
import ButtonIcon from '@/components/atoms/ButtonIcon'

const Dropdown = ({ options, onDropdown, style, currentIcon }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`${style} relative`}>
      <ButtonIcon
        Icon={currentIcon}
        onClick={handleDropdown}
        style="px-4 py-4 text-sm font-medium rounded-full text-current hover:text-accent shadow-sm shadow-accent"
        aria="Dropdown theme options"
      />
      {isOpen && (
        <div className="flex flex-col mt-2 absolute bottom-full mb-2">
          {options.map((option) => (
            <ButtonIcon
              key={option.value}
              Icon={option.Icon}
              onClick={() => {
                onDropdown(option.value)
                setIsOpen(false)
              }}
              style="px-4 py-2 text-sm font-medium rounded-full text-current hover:text-accent shadow-sm shadow-accent mt-1"
              aria={option.aria}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown
