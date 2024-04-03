//index.js
import Navigation from './../components/molecules/Navigation.jsx'

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <Navigation />
    </main>
  )
}
