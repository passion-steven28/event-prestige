import { Link } from "react-router-dom"

const footerLinks = [
    {
        type: 'menu',
        links: [
            {
                name: 'home',
                url: '/'
            },
            {
                name: 'services',
                url: '/services'
            },
            {
                name: 'about',
                url: '/about'
            },
            {
                name: 'project',
                url: '/project'
            },
            {
                name: 'organization',
                url: '/organization'
            },
        ]
    },
    {
        type: 'social',
        links: [
            {
                name: 'facebook',
                url: 'https://www.facebook.com/josephat.focus'
            },
            {
                name: 'twitter',
                url: 'https://twitter.com/josephatfocus'
            },
            {
                name: 'instagram',
                url: 'https://www.instagram.com/josephat.focus'
            },
            {
                name: 'linkedin',
                url: 'https://www.linkedin.com/in/josephat-focus/'
            }
        ]
    }
]

const FooterSection = () => {
    return (
        <footer className="flex flex-col items-center justify-center gap-10 bg-[#8c7a62] p-4 min-h-[60vh] mt-2">
            {/* <div className="flex flex-col items-center gap-2 bg-white p-10 w-[70%] rounded-xl">
                <h1 className="text-md md:text-3xl font-semibold">ready to launch your digital event</h1>
                <p className="text-xs md:text-md">We are ready to launch your digital event</p>
                <a href="mailto:josephat.focus@gmail.com">
                    <Button>
                        <MessageCircle className="mr-2" />
                        lets talk
                    </Button>
                </a>
            </div> */}

            <div className="grid md:grid-cols-2 place-items-start gap-4 h-full">
                <div>
                    <div className="grid gap-2">
                        <h1 className="text-4xl md:text-6xl font-bold underline">feel free to contact us any time</h1>
                        <p className="text-xl">You may also visit our office
                            and we will be more than happy.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-2xl font-semibold">contact us on your inquires</p>
                        <ul className="flex flex-col items-start gap-1">
                            <li className="text-lg font-semibold">
                                +255 764 811 412,<br />
                                +255 713 077 788,<br />
                                +255 768 774 777
                            </li>
                            <li className="text-lg font-semibold">josephat.focus@gmail.com</li>
                            <li className="text-lg font-semibold">P.O. Box 33398 , Dar es Salaam, Tanzania</li>
                            <li className="text-lg font-semibold">http://www.epltd.co.tz/</li>
                        </ul>
                    </div>
                </div>

                <div className="flex gap-4">
                    {footerLinks.map((item, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <h1 className="text-2xl font-semibold">{item.type}</h1>
                            <ul className="flex flex-col items-start gap-1">
                                {item.links.map((link, index) => (
                                    <li key={index} className="text-lg font-semibold">
                                        <Link
                                            to={link.url}
                                            className="underline">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-xl font-bold text-center">
                <h1>all right reserved @2024</h1>
            </div>
        </footer>
    )
}

export default FooterSection