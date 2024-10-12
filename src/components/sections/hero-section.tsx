import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons"
import { Button } from "../ui/button"
import { Card } from "../ui/card"

const HeroSection = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-10 py-20 px-6 text-center">
            <div className="flex flex-col items-center justify-center gap-4 h-[50vh]">
                <h1 className="text-6xl font-bold text-primary">
                    digital agency company
                </h1>
                <p className="text-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.
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

            <Card className="relative w-full h-[50vh] max-w-5xl">
                <h1 className="text-2xl font-bold absolute top-6 left-6 text-white text-border shadow-sm backdrop-blur p-2 rounded-lg overflow-hidden">
                    choose us
                </h1>
                <img
                    src="https://images.unsplash.com/photo-1713947504519-755547cf930e?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="size-full rounded-lg object-cover"
                />
            </Card>
        </section>
    )
}

export default HeroSection
