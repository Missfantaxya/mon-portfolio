//Sections

import SectionTitle from '../molecules/SectionTitle'
import IconUser from '@/components/atoms/IconUser'
import IconTools from '@/components/atoms/IconTools'
import IconCode from '@/components/atoms/IconCode'
import IconMug from '@/components/atoms/IconMug'
import IconPaperPlane from '@/components/atoms/IconPaperPlane'
import About from '@/components/organisms/About'
import Skills from '@/components/organisms/Skills'
import Projects from '@/components/organisms/Projects'
import Course from '@/components/organisms/Course'
import Contact from '@/components/organisms/Contact'

const sections = [
  {
    title: 'A propos',
    id: 'about',
    Icon: IconUser,
    content: <About />
  },
  {
    title: 'Compétences',
    id: 'skills',
    Icon: IconTools,
    content: <Skills />
  },
  {
    title: 'Projets',
    id: 'project',
    Icon: IconCode,
    content: <Projects />
  },
  {
    title: 'Parcours',
    id: 'course',
    Icon: IconMug,
    content: <Course />
  },
  {
    title: 'Contact',
    id: 'contact',
    Icon: IconPaperPlane,
    content: <Contact />
  }
]

function Sections({ children }) {
  return (
    <>
      {sections.map(({ title, id, Icon, content }) => (
        <section id={id} className="h-dvh">
          <SectionTitle title={title} Icon={Icon} />
          {content}
        </section>
      ))}
    </>
  )
}

export default Sections
