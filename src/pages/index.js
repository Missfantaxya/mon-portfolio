//index.js
import Navigation from '@/components/molecules/Navigation.jsx'
import ScrollToTop from '@/components/molecules/ScrollToTop'
import Header from '@/components/organisms/Header'
import About from '@/components/organisms/About'
import Skills from '@/components/organisms/Skills'
import Projects from '@/components/organisms/Projects'
import Course from '@/components/organisms/Course'
import Contact from '@/components/organisms/Contact'

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <Navigation />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Course />
      <Contact />
      <ScrollToTop />
    </main>
  )
}
