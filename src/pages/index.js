//index.js
import Layout from '@/components/templates/Layout'
import About from '@/components/organisms/About'
import Skills from '@/components/organisms/Skills'
import Projects from '@/components/organisms/Projects'
import Course from '@/components/organisms/Course'
import Contact from '@/components/organisms/Contact'

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between px-12 md:px-24`}
    >
      <Layout>
        <About />
        <Skills />
        <Projects />
        <Course />
        <Contact />
      </Layout>
    </main>
  )
}
