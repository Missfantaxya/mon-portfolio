// Header.jsx

import Navigation from '@/components/molecules/Navigation.jsx'
import SiteTitle from '@/components/atoms/SiteTitle'
import Cta from '@/components/atoms/Cta'
import HeroSection from '@/components/atoms/HeroSection'

const Header = () => {
  return (
    <header className="relative flex flex-col h-dvh landscape:w-9/12 landscape:px-2">
      <Navigation />
      <SiteTitle
        SiteTitleStyle=" mt-4 space-y-2"
        IdentityStyle="portrait:text-[2vh] landscape:text-[2vw] font-semibold"
        FirstnameStyle="capitalize"
        LastnameStyle="uppercase"
        JobTitleStyle="capitalize portrait:text-[4vh] landscape:text-[4vw] font-medium"
      />
      <div className="flex flex-col grow items-center justify-evenly ">
        <HeroSection
          text="Créons le web de demain"
          style="text-center portrait:text-[7vh] landscape:text-[7vw] font-bold w-11/12 mx-auto text-accent"
        />
        <Cta
          text="Collaborons"
          aria="Aller à la section contact"
          style="mx-auto px-4 py-2 portrait:text-[4vh] landscape:text-[4vw] font-bold text-current rounded-full border-2 border-current bg-primary hover:bg-secondary"
        />
      </div>
    </header>
  )
}

export default Header
