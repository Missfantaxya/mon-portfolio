// NavItem.js

const NavItem = ({ Icon, href }) => {
  return (
    <a href={href} className="flex items-center justify-center text-current">
      <Icon
        className="text-current portrait:h-[6vw] portrait:w-[6vw] landscape:h-[6vh] landscape:w-[6vh] max-w-10 max-h-10"
        color="currentColor"
      />
    </a>
  )
}
export default NavItem
