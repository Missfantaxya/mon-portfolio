// Header.jsx

import Navigation from '@/components/molecules/Navigation.jsx'
import SiteTitle from '@/components/atoms/SiteTitle'
import Cta from '@/components/atoms/Cta'
import HeroSection from '@/components/atoms/HeroSection'

//* centrer le Cta
const Header = () => {
  return (
    <header className=" relative h-screen p-2">
      <Navigation />
      <SiteTitle
        SiteTitleStyle="space-y-2 absolute top-1/20 left-2"
        IdentityStyle="text-xl font-semibold"
        FirstnameStyle="capitalize"
        LastnameStyle="uppercase"
        JobTitleStyle="capitalize text-lg font-medium"
      />
      <Cta
        text="Collaborons"
        aria="Aller à la section contact"
        style="absolute top-3/4 p-2 text-lg font-bold text-current rounded-3xl border-2 border-current bg-primary hover:bg-secondary"
      />
      <div className="h-screen flex-grow flex items-center justify-center ">
        <HeroSection
          text="Créons le web de demain"
          style="text-center text-4xl font-bold w-5/6 mx-auto"
        />
      </div>
    </header>
  )
}

export default Header
