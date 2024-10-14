import ContactSection from "@/components/sections/contact-section"
import Navigation from "@/components/shared/navigation"
import { Card, CardTitle } from "@/components/ui/card"

const events = [
    {
        name: 'event 1',
        image: '/images/1.jpg',
    },
    {
        name: 'event 1',
        image: '/images/1.jpg',
    },
    {
        name: 'event 1',
        image: '/images/1.jpg',
    },
    {
        name: 'event 1',
        image: '/images/1.jpg',
    },
    {
        name: 'event 1',
        image: '/images/1.jpg',
    },
    {
        name: 'event 1',
        image: '/images/1.jpg',
    },
    {
        name: 'event 1',
        image: '/images/1.jpg',
    },
    {
        name: 'event 1',
        image: '/images/1.jpg',
    },
]

const ProjectPage = () => {
    return (
        <div>
            <Navigation />
            <main className="grid grid-cols-1 md:grid-cols-12 min-h-screen gap-4">
                <div className='md:col-start-3 md:col-end-11 flex flex-col gap-2 items-center justify-center '>
                    <h1 className="text-4xl font-bold text-primary">
                        our projects
                    </h1>
                    <p className="text-md font-semibold">we do our project with passion and professionalism to reach what you want in your events</p>
                    <div className="grid md:grid-cols-2 gap-4 size-full">
                        {events.map((event) => (
                            <Card className="overflow-hidden" key={event.name}>
                                <div className="relative">
                                    <img
                                        src={event.image}
                                        alt=""
                                        className="size-full object-cover"
                                    />
                                </div>
                                <CardTitle className="mx-4 py-2">
                                    {event.name}
                                </CardTitle>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className='md:col-start-1 md:col-end-13 mt-10'>
                    <ContactSection />
                </div>
            </main>
        </div>
    )
}

export default ProjectPage
