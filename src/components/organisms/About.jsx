// About.js

import Image from 'next/image'
import avatar from '@/../public/avatar.png'

function About() {
  return (
    <div>
      <div className="bg-primary overflow-hidden rounded-full w-max mx-auto">
        <Image
          className="mx-auto"
          src={avatar}
          width={150}
          height={150}
          alt="avatar"
        />
      </div>
      <p>
        En 2020, j'ai choisi de me reconvertir vers le développement web, un
        domaine où l'innovation et l'adaptabilité sont essentielles.
        Développeuse spécialisée en React.js et Next.js, j'aide les
        auto-entrepreneurs et les TPE à créer des sites simples, efficaces et
        accessibles. Mon approche pragmatique et humaine reflète mon désir de
        rendre le numérique plus accessible à tous, tout en offrant des
        solutions personnalisées qui répondent aux besoins concrets de mes
        clients.
      </p>
    </div>
  )
}

export default About
