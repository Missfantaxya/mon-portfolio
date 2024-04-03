//index.js
import Navigation from '@/components/molecules/Navigation.jsx'
import ScrollToTop from '@/components/molecules/ScrollToTop'

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <Navigation />
      <ScrollToTop />
    </main>
  )
}
