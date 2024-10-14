const AboutSection = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-10 py-20 px-6 mt-10 text-center">
            <h1 className="text-6xl font-bold text-primary">
                About Us
            </h1>
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 w-full">
                <p className="text-2xl w-full text-left">
                    Events Prestige Ltd is a Tanzanian-owned
                    company specializing in providing
                    professional, corporate and social event
                    management services.
                    Our core competency lies in the planning and
                    execution of corporate, professional, and
                    social events.
                    Our exceptional team of planners and event
                    professionals has solidified our reputation as
                    the best provider of innovative concepts and
                    consistently successful outcomes within the
                    industry.
                    We pride ourselves on our flexible, responsive,
                    and highly creative approach to event
                    management. We consistently seek innovative
                    solutions that go beyond the conventional,
                    ensuring our clients benefit from client
                    event execution and cost-effective strategies.
                    At Events Prestige Ltd., our primary focus is on
                    delivering exceptional quality and timely
                    results to our clients.
                </p>
                <div className="grid md:grid-cols-2 gap-4 items-center w-full">
                    <div className="flex flex-col gap-4">
                        <div className="relative h-20">
                            <img
                                src="/images/1.jpg"
                                className="size-full rounded-lg object-cover"
                            />
                        </div>
                        <h1 className="text-sm font-semibold">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim neque repudiandae
                        </h1>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4">
                        <div className="relative h-20">
                            <img
                                src="/images/1.jpg"
                                className="size-full rounded-lg object-cover"
                            />
                        </div>
                        <h1 className="text-sm font-semibold">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim neque repudiandae
                        </h1>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4">
                        <div className="relative h-20">
                            <img
                                src="/images/1.jpg"
                                className="size-full rounded-lg object-cover"
                            />
                        </div>
                        <h1 className="text-sm font-semibold">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim neque repudiandae
                        </h1>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4">
                        <div className="relative h-20">
                            <img
                                src="/images/1.jpg"
                                className="size-full rounded-lg object-cover"
                            />
                        </div>
                        <h1 className="text-sm font-semibold">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim neque repudiandae
                        </h1>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutSection
