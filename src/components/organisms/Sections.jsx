//Sections

import SectionTitle from '../molecules/SectionTitle'
import IconUser from '@/components/atoms/IconUser'
import IconTools from '@/components/atoms/IconTools'
import IconCode from '@/components/atoms/IconCode'
import IconMug from '@/components/atoms/IconMug'
import IconPaperPlane from '@/components/atoms/IconPaperPlane'

const sections = [
  { title: 'A propos', id: 'about', Icon: IconUser },
  { title: 'Compétences', id: 'skills', Icon: IconTools },
  { title: 'Projets', id: 'project', Icon: IconCode },
  { title: 'Parcours', id: 'course', Icon: IconMug },
  { title: 'Contact', id: 'contact', Icon: IconPaperPlane }
]

function Sections({ children }) {
  return (
    <>
      {sections.map(({ title, id, Icon }) => (
        <section id={id} className="h-dvh">
          <SectionTitle title={title} Icon={Icon} />
          {children}
        </section>
      ))}
    </>
  )
}

export default Sections
