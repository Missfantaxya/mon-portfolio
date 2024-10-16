// About.js

import Image from 'next/image'
import avatar from '@/../public/avatar.png'

// TODO enlever la date de 2020 et retravailler le texte de présentation

function About() {
  return (
    <div className="landscape:flex landscape:flex-row-reverse">
      <div className="bg-primary overflow-hidden rounded-full w-max m-auto">
        <Image
          className="mx-auto portrait:h-1/4 landscape:h-full"
          src={avatar}
          layout="responsive"
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
