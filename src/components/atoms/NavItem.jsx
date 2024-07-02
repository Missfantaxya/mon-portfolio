// NavItem.js
const NavItem = ({ Icon, href }) => {
  return (
    <a href={href} className="flex items-center justify-center text-current">
      <Icon
        className="text-current h-6 w-6 md:h-8 md:w-8"
        color="currentColor"
      />
    </a>
  )
}
export default NavItem
