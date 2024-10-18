import FooterSection from "@/components/sections/footer-section"
import ServiceSection from "@/components/sections/service-section"
import Navigation from "@/components/shared/navigation"

const WhatWeDo = [
    "-Strategic Event Advisory:",
    "-Venue Sourcing and Selection:",
    "-Event Planning and Logistics:",
    "-Event Registration:",
    "-Administrative Support:",
    "-Payment Processing:",
    "-Translation and Interpretation Services:",
    "-Media Relations and Documentation:",
    "-Event branding and printing:",
    "-Equipment Rental:",
    "-Travel Logistics:",
    "-Decor and Design:",
    "-Innovation and Sustainability:",
    "-Inclusivity and Accessibility:",
    "-Graphic Design:",
    "-Audiovisual Production:",
    "-Conference and Meeting Management:",
    "-Training and Development:",
    "-Commercial Eligibility and Supplier Evaluation:",
    "-General Procurement:"
]

const ServicesPage = () => {
    return (
        <div>
            <Navigation />
            <main className="grid grid-cols-1 md:grid-cols-12 min-h-screen gap-4 capitalize">
                <div className='md:col-start-3 md:col-end-11'>
                    <h1 className="text-6xl font-bold text-primary text-center">
                        what we do
                    </h1>
                    <div className="grid md:grid-cols-2 mt-10">
                        {WhatWeDo.map((item, index) => (
                            <h1
                                key={index}
                                className="text-xl font-semibold mt-2"
                            >
                                {item}
                            </h1>
                        ))}
                    </div>
                </div>
                <div className='md:col-start-3 md:col-end-11'>
                    <ServiceSection />
                </div>
            </main>
            <FooterSection />
        </div>
    )
}

export default ServicesPage
