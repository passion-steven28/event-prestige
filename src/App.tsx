import AboutSection from './components/sections/about-section'
import ClientSection from './components/sections/clients-section'
import ContactSection from './components/sections/contact-section'
import HeroSection from './components/sections/hero-section'
import MissionSection from './components/sections/mission-section'
import ServiceSection from './components/sections/service-section'
import Navigation from './components/shared/navigation'

function App() {
  return (
    <>
      <Navigation />
      <main className="grid grid-cols-1 md:grid-cols-12 min-h-screen gap-4">
        <div className='md:col-start-3 md:col-end-11'>
          <HeroSection />
        </div>
        <div className='md:col-start-1 md:col-end-13'>
          <MissionSection />
        </div>
        <div className='md:col-start-3 md:col-end-11 row-start-'>
          <AboutSection />
        </div>
        <div className='md:col-start-3 md:col-end-11'>
          <ServiceSection />
        </div>
        <div className='md:col-start-3 md:col-end-11'>
          <ClientSection />
        </div>
        <div className='md:col-start-1 md:col-end-13'>
          <ContactSection />
        </div>
      </main>
    </>
  )
}

export default App
