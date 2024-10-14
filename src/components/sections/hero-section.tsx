import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons"
import { Button } from "../ui/button"
import { Card } from "../ui/card"

const HeroSection = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-10 py-20 px-6 text-center">
            <div className="flex flex-col items-center justify-center gap-4 md:h-[50vh]">
                <h1 className="text-6xl font-bold text-primary">
                    EVENTS PRESTIGE LIMITED 
                </h1>
                <p className="text-2xl">
                    As a leading professional and corporate events management company, we are a dynamic team with a proven track record of delivering innovative
                    and engaging events that exceed our clients' expectations.
                </p>
                <div className="flex gap-4 items-center">
                    <Button>
                        Get Started
                        <ArrowUpIcon className="ml-2 h-4 w-4 rotate-12 font-bold" aria-hidden="true" />
                    </Button>
                    <Button variant={'outline'}>
                        Learn More
                        <ArrowDownIcon className="ml-2 h-4 w-4 -rotate-12 font-bold" aria-hidden="true" />
                    </Button>
                </div>
            </div>

            <Card className="relative w-full xl:h-[50vh] max-w-5xl">
                <h1 className="text-2xl font-bold absolute top-6 left-6 text-white text-border shadow-sm backdrop-blur p-2 rounded-lg overflow-hidden z-10">
                    choose us
                </h1>
                <div className="relative">
                <img
                    src="/images/1.jpg"
                    className="size-full rounded-lg object-cover"
                    />
                    </div>
            </Card>
        </section>
    )
}

export default HeroSection
