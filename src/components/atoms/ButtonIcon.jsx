// ScrollTopButton.js

const ButtonIcon = ({ Icon, onClick, style, aria }) => {
  return (
    <button onClick={onClick} className={style} aria-label={aria}>
      <Icon
        className="text-current h-6 w-6 md:h-8 md:w-8"
        color="currentColor"
      />
    </button>
  )
}

export default ButtonIcon
