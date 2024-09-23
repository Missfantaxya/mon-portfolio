// Navigation.js
import NavItem from '@/components/atoms/NavItem'
import IconUser from '@/components/atoms/IconUser'
import IconTools from '@/components/atoms/IconTools'
import IconCode from '@/components/atoms/IconCode'
import IconMug from '@/components/atoms/IconMug'
import IconPaperPlane from '@/components/atoms/IconPaperPlane'

const navItems = [
  { href: '#about', Icon: IconUser },
  { href: '#skills', Icon: IconTools },
  { href: '#project', Icon: IconCode },
  { href: '#course', Icon: IconMug },
  { href: '#contact', Icon: IconPaperPlane }
]

const Navigation = () => {
  return (
    <nav className="fixed p-4 left-0 flex justify-around items-center z-10 primary-bg portrait:w-screen portrait:bottom-0 landscape:min-h-min landscape:h-dvh landscape:p-10 landscape:w-1/12 landscape:flex-col landscape:rounded-r-2xl">
      {navItems.map(({ href, Icon }) => (
        <NavItem key={href} href={href} Icon={Icon} />
      ))}
    </nav>
  )
}

export default Navigation
