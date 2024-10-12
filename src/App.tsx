import AboutSection from './components/sections/about-section'
import ClientSection from './components/sections/clients-section'
import HeroSection from './components/sections/hero-section'
import ServiceSection from './components/sections/service-section'
import Navigation from './components/shared/navigation'

function App() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 py-12 text-center">
        <HeroSection />
        <AboutSection />
        <ServiceSection />
        <ClientSection />
      </main>
    </>
  )
}

export default App
