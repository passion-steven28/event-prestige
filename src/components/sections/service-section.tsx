import { RulerHorizontalIcon, SpeakerLoudIcon, VideoIcon } from "@radix-ui/react-icons"
import { Headphones, LampCeiling } from 'lucide-react';
import { MagicCard } from "../ui/magic-card"


const service = [
    {
        title: 'VIDEO',
        description: [
            'High Definition DLP projectors',
            'Avolite Ai media server',
            'Different pixels LED Screens',
            'Live feed',
            'Event coverage',
            'Professional crew services'
        ],
        icon: <VideoIcon className="h-8 w-auto" />
    },
    {
        title: 'DESIGN',
        description: [
            'Innovative customized stage design',
            'Creative ideas and concept development',
            'Autocad layouts and 3D renders',
            'Light simulation',
            'Video animation and walk through',
            'Creative space planning and project management',
            'Campaign Design',
            'Brochure, business cards and merchandise design',
            'Brand creation and re-branding'
        ],
        icon: <RulerHorizontalIcon className="h-8 w-auto" />
    },
    {
        title: 'AUDIO',
        description: [
            'High quality sound system',
            'Sound system venue design',
            'Monitor and front of house live mixing',
            'Professional audio engineering'
        ],
        icon: <SpeakerLoudIcon className="h-8 w-auto" />
    },
    {
        title: 'LIGHTING AND TRUSSES',
        description: [
            'Latest technology lighting console',
            'Intelligent and generic fixtures',
            'High quality and various types of trusses'
        ],
        icon: <LampCeiling className="h-8 w-auto" />
    },
    {
        title: 'INTERPRETATION SERVICES',
        description: [
            'Conference services',
            'Soundproof translation booths',
            'Translation and professional interpreters'
        ],
        icon: <Headphones className="h-8 w-auto" />
    }
]

const ServiceSection = () => {    return (
        <section className="flex flex-col items-center justify-center gap-10 py-20 px-20 mt-10 text-center">
            <h1 className="text-6xl font-bold text-primary">
                Service
            </h1>
            <div className="grid md:grid-cols-3 gap-4 size-full">
                {service.map((item) => (
                    <MagicCard
                        className="cursor-pointer flex flex-col items-start justify-start gap-4 shadow-xl p-4"
                    >
                        <div className="flex items-center gap-2">
                            {item.icon}
                            <h1 className="text-xl font-bold">
                                {item.title}
                            </h1>
                        </div>
                        <div className="grid text-start gap-4">
                            <ul>
                                {item.description.map((desc) => (
                                    <li
                                        key={desc}
                                        className="text-sm font-semibold list-disc list-inside"
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
