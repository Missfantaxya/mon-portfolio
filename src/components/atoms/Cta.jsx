// Cta.js

import Link from 'next/link'

const Cta = ({ text, style, aria }) => {
  return (
    <Link href="#contact" className={style} aria-label={aria}>
      {text}
    </Link>
  )
}

export default Cta
