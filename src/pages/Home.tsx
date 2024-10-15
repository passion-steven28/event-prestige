import Navigation from '@/components/shared/navigation'
import AboutSection from '../components/sections/about-section'
import ClientSection from '../components/sections/clients-section'
import HeroSection from '../components/sections/hero-section'
import MissionSection from '../components/sections/mission-section'
import ServiceSection from '../components/sections/service-section'
import FooterSection from '@/components/sections/footer-section'
// import Navigation from '../components/shared/navigation'

function Home() {
    return (
        <>
            <Navigation />
            <main className="grid grid-cols-1 md:grid-cols-12 min-h-screen capitalize">
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
                <div className='md:col-start-1 md:col-end-13'>
                    <ClientSection />
                </div>
                <div className='md:col-start-1 md:col-end-13'>
                    <FooterSection />
                </div>
            </main>
        </>
    )
}

export default Home
