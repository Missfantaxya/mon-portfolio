import Navigation from '@/components/molecules/Navigation.jsx'
import ScrollToTop from '@/components/molecules/ScrollToTop'
import ThemeSwitcher from '@/components/organisms/ThemeSwitcher'
import Header from '@/components/organisms/Header'

function Layout({ children }) {
  return (
    <>
      <Header />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24`}
      >
        <Navigation />
        <ThemeSwitcher />
        {children}
        <ScrollToTop />
      </main>
    </>
  )
}

export default Layout
