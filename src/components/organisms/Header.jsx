// Header.jsx

import Navigation from '@/components/molecules/Navigation.jsx'
import SiteTitle from '@/components/atoms/SiteTitle'
import Cta from '@/components/atoms/Cta'

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center h-screen text-current p-4">
      <Navigation />
      <div className="md:flex">
        <SiteTitle />
        <Cta
          text="Collaborons"
          aria="Aller à la section contact"
          style="h-max p-2 text-current hover:text-accent rounded-3xl border border-current"
        />
      </div>
    </header>
  )
}

export default Header
