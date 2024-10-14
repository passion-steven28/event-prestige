import { CheckboxIcon } from "@radix-ui/react-icons"
import Marquee from "../ui/marquee"

const clients = [
    "Government(s)",
    "Regional Economic Communities EAC, SADC, AfCFTA, EU",
    "International organization's",
    "NGO’s",
    "Companies",
    "UNITED REPUBLIC OF TANZANIA",
    "EVENTS PRESTIGE 14 COMPANY LIMITED",
    "Embassies",
    "Professional Bodies",
    "Hotel & Resort",
    "Tour & Travel Agency",
    "Restaurants",
    "Retail Franchise Store"
]

const ClientSection = () => {
    return (
        <section className="grid place-content-start gap-10 py-20 px-20 mt-10">
            <div className="flex flex-col items-center justify-center gap-4 size-full">
                <h1 className="text-2xl md:text-4xl font-bold text-primary">
                    we are proud of our clients, we work with a diverse range of clients from a different sectors.
                </h1>
                <div className="grid grid-cols-2 gap-4 size-full">
                    {clients.map((client) => (
                        <div className="flex items-start gap-2">
                            <CheckboxIcon className="h-5 w-auto" />
                            <h1 className="text-sm font-bold">
                                {client}
                            </h1>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {clients.map((client) => (
                        <div className="flex items-center gap-2">
                            <CheckboxIcon className="h-8 w-auto" />
                            <h1 className="text-2xl font-bold">
                                {client}
                            </h1>
                        </div>
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </div>
        </section>
    )
}

export default ClientSection
