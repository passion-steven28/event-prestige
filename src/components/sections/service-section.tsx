import { BoxIcon } from "@radix-ui/react-icons"
import { MagicCard } from "../ui/magic-card"


const service = [
    {
        title: 'Video',
        description: [
            'high definition projector',
            'HDMI',
            'live feed',
            'professional crew service'
        ]
    },
    {
        title: 'Design',
        description: [
            'custom design',
            'branding',
            'logo design',
            'website design'
        ]
    },
    {
        title: 'Audio',
        description: [
            'high definition projector',
            'HDMI',
            'live feed',
            'professional crew service'
        ]
    },
    {
        title: 'Photography',
        description: [
            'high definition projector',
            'HDMI',
            'live feed',
            'professional crew service'
        ]
    }
]

const ServiceSection = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-10 py-20 px-20 mt-10 text-center min-h-screen">
            <h1 className="text-6xl font-bold text-primary">
                Service
            </h1>
            <div className="grid grid-cols-3 gap-4 size-full">
                {service.map((item) => (
                    <MagicCard
                        className="cursor-pointer flex flex-col items-start justify-start gap-4 shadow-xl p-4"
                    >
                        <div className="flex items-center gap-2">
                            <BoxIcon className="h-8 w-auto" />
                            <h1 className="text-2xl font-bold">
                                {item.title}
                            </h1>
                        </div>
                        <div className="grid text-start gap-4">
                            <ul>
                                {item.description.map((desc) => (
                                    <li
                                        key={desc}
                                        className="text-lg font-semibold list-disc list-inside"
                                    >
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </MagicCard>
                ))}
            </div>
        </section>
    )
}

export default ServiceSection
