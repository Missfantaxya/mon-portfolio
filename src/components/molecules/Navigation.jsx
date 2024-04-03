// ANavigation.js
import NavItem from '../atoms/NavItem'
import IconUser from '../atoms/IconUser'
import IconTools from '../atoms/IconTools'
import IconCode from '../atoms/IconCode'
import IconMug from '../atoms/IconMug'
import IconPaperPlane from '../atoms/IconPaperPlane'

const navItems = [
  { href: '#about', Icon: IconUser },
  { href: '#skills', Icon: IconTools },
  { href: '#project', Icon: IconCode },
  { href: '#course', Icon: IconMug },
  { href: '#contact', Icon: IconPaperPlane }
]

const Navigation = () => {
  return (
    <nav className=" w-screen fixed p-4 md:p-10 top-0 left-0 md:inset-y-1/4 md:left-0 md:w-16 lg:w-20 flex md:flex-col justify-around md:justify-center items-center md:space-y-8 primary-bg md:rounded-r-2xl z-10">
      {navItems.map(({ href, Icon }) => (
        <NavItem key={href} href={href} Icon={Icon} />
      ))}
    </nav>
  )
}

export default Navigation
