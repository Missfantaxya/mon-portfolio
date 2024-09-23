// import Navigation from '@/components/molecules/Navigation.jsx'
import ScrollToTop from '@/components/molecules/ScrollToTop'
import ThemeSwitcher from '@/components/molecules/ThemeSwitcher'
import Header from '@/components/organisms/Header'
import Sections from '@/components/organisms/Sections'

//TODO voir pour mettre les chidren correctement car dans index c'est pas bon

function Layout({ children }) {
  return (
    <>
      <Header className="relative h-dvh" />
      <main
        className={`flex h-dvh flex-col items-center justify-between md:px-24`}
      >
        <ThemeSwitcher />
        <Sections children={children} />
        <ScrollToTop />
      </main>
    </>
  )
}

export default Layout
