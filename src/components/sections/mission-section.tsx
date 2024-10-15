import { BarChartIcon, CheckCircledIcon, EyeOpenIcon } from "@radix-ui/react-icons"
import { Card } from "../ui/card"

const MissionSection = () => {
    return (
        <section className="bg-white w-full flex items-center justify-center p-4 md:p-20 md:h-[40vh]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-content-center">
                <Card className="flex flex-col items-center justify-center p-4">
                    <div className="flex flex-col items-center justify-center mb-4">
                        <CheckCircledIcon className="h-10 w-auto" />
                        <h1 className="text-xl font-bold">Mission</h1>
                    </div>
                    <p className="text-sm font-semibold text-center">
                        Our mission is to establish ourselves as a leading event management company,
                        recognized and renowned throughout East Africa and internationally, by providing
                        comprehensive and seamless solutions for all event needs.
                    </p>
                </Card>
                <Card className="flex flex-col items-center justify-center p-4">
                    <div className="flex flex-col items-center justify-center mb-4">
                        <EyeOpenIcon className="h-10 w-auto" />
                        <h1 className="text-xl font-bold">vision</h1>
                    </div>
                    <p className="text-sm font-semibold text-center">Our vision is to become the preeminent event management company, renowned
                        for consistently surpassing client expectations through innovative concepts and
                        exceptional service delivery.</p>
                </Card>
                <Card className="flex flex-col items-center justify-center p-4">
                    <div className="flex flex-col items-center justify-center mb-4">
                        <BarChartIcon className="h-10 w-auto" />
                        <h1 className="text-xl font-bold">Values</h1>
                    </div>
                    <p className="text-sm font-semibold text-center">Our core values of creativity, excellence, integrity, commitment, and efficiency
                        drive us to consistently deliver exceptional results that exceed our clients'
                        expectations and ensure their utmost satisfaction.</p>
                </Card>
            </div>
        </section>
    )
}

export default MissionSection
