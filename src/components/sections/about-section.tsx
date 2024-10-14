const AboutSection = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-10 py-20 px-6 mt-10 text-center">
            <h1 className="text-6xl font-bold text-primary">
                About Us
            </h1>
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 w-full">
                <p className="text-2xl w-full">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, autem culpa velit eius alias voluptatem sunt voluptas enim ex assumenda, molestiae voluptatum quod. Blanditiis quas ut voluptate esse maxime molestiae officiis cupiditate eos deserunt magni tenetur praesentium officia delectus consectetur porro exercitationem odit voluptatibus nemo, placeat repellendus pariatur reiciendis alias.
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
