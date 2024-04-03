import ButtonIcon from '@/components/atoms/ButtonIcon'
import IconArrowUp from '@/components/atoms/IconArrowUp'

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  // TODO ajouter un hover
  return (
    <div>
      <ButtonIcon
        Icon={IconArrowUp}
        onClick={scrollToTop}
        aria="Retour en haut"
        style="fixed bottom-4 right-4 md:bottom-8 md:right-8 p-2 text-current rounded-full shadow-xl z-50"
      />
    </div>
  )
}

export default ScrollToTop
