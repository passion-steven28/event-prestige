import HeroSection from './components/sections/hero-section'
import Navigation from './components/shared/navigation'

function App() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-screen flex-col items-center justify-center px-6 py-12 text-center">
        <HeroSection />
      </main>
    </>
  )
}

export default App
