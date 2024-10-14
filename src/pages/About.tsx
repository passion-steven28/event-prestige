import AboutSection from "@/components/sections/about-section"
import ContactSection from "@/components/sections/contact-section"
import Navigation from "@/components/shared/navigation"
import { Card, CardContent } from "@/components/ui/card"

const team = [
    {
        name: 'John Doe',
        designation: 'Managing Director',
        image: '/images/1.jpg',
        phone: '0747776063',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
        experience: 'since 2013',
    },
    {
        name: 'John Doe',
        designation: 'Managing Director',
        image: '/images/1.jpg',
        phone: '0747776063',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
        experience: 'since 2013',
    },
    {
        name: 'John Doe',
        designation: 'Managing Director',
        image: '/images/1.jpg',
        phone: '0747776063',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
        experience: 'since 2013',
    },
    {
        name: 'John Doe',
        designation: 'Managing Director',
        image: '/images/1.jpg',
        phone: '0747776063',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
        experience: 'since 2013',
    },
    {
        name: 'John Doe',
        designation: 'Managing Director',
        image: '/images/1.jpg',
        phone: '0747776063',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
        experience: 'since 2013',
    }
]

const AboutPage = () => {
    return (
        <div>
            <Navigation />
            <main className="grid grid-cols-1 md:grid-cols-12 min-h-screen gap-4">
                <div className='md:col-start-3 md:col-end-11'>
                    <AboutSection />
                </div>
                <div className='md:col-start-3 md:col-end-11 flex flex-col gap-2 items-center justify-center relative'>
                    <h1 className="text-xl md:text-4xl font-bold text-primary">
                        organization structure
                    </h1>
                    {/* <img src="/images/org.png" alt="" /> */}
                </div>
                <div className='md:col-start-3 md:col-end-11 flex flex-col gap-2 items-center justify-center '>
                    <h1 className="text-xl md:text-4xl font-bold text-primary">
                        our team
                    </h1>
                    <p>is consist of passionate individuals who are dedicated to delivering exceptional results.</p>
                    <div className="grid md:grid-cols-2 gap-4 size-full">
                        {team.map((team) => (
                            <Card key={team.name} className="flex flex-col md:flex-row items-center gap-2">
                                <div className="relative h-20 w-20 md:h-[10rem] md:w-[50rem]">
                                    <img
                                        src={team.image}
                                        alt=""
                                        className="size-full object-cover rounded-full"
                                    />
                                </div>
                                <CardContent>
                                    <h1 className="text-md font-bold">
                                        {team.designation}
                                    </h1>
                                    <h3 className="text-sm">{team.name}</h3>
                                    <h3 className="text-sm">{team.phone}</h3>
                                    <p className="text-sm">{team.bio}</p>
                                    <p className="text-sm">{team.experience}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className='md:col-start-1 md:col-end-13'>
                    <ContactSection />
                </div>
            </main>
        </div>
    )
}

export default AboutPage
