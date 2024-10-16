import ButtonIcon from '@/components/atoms/ButtonIcon'
import IconArrowUp from '@/components/atoms/IconArrowUp'

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  // FIXME le retirer de l'écran quand on est en haut de page
  return (
    <div>
      <ButtonIcon
        Icon={IconArrowUp}
        onClick={scrollToTop}
        aria="Retour en haut"
        style="fixed portrait:bottom-[7vw] portrait:right-4 landscape:bottom-8 landscape:right-8 p-2 text-current hover:text-accent rounded-full shadow-xl z-50 "
      />
    </div>
  )
}

export default ScrollToTop
