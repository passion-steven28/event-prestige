import AboutSection from "@/components/sections/about-section"
import FooterSection from "@/components/sections/footer-section"
import Navigation from "@/components/shared/navigation"
import { Card, CardContent } from "@/components/ui/card"


const team = [
    {
        name: 'Festus B. Matuja',
        designation: 'Managing Director',
        image: '/images/p1.png',
        phone: '+255 713 077 788',
        bio: 'Qualification:Advanced Diploma in Insurance and Risk Management- IFM Ordinary Diploma in Accounts - at Njiro Arusha',
        experience: 'since 2004',
    },
    {
        name: 'Josephat F. Lyamuya',
        designation: 'Finance Director',
        image: '/images/p2.png',
        phone: '+255 717 515 186',
        bio: ' Masters of Science in Economics and Finance for Development',
        experience: ': Financial and event assistant over 16 years of experience',
    },
    {
        name: 'Grayson M. Mlaponi',
        designation: 'Operation & Administration Director',
        image: '/images/p3.png',
        phone: '+255 788 775 433',
        bio: '-Bachelor of Commerce in Accounting(UDSM -).',
        experience: 'over 5 years of exprience as an accountant',
    },
    {
        name: 'Evance M. Chuwa',
        designation: 'Technical Director',
        image: '/images/p4.png',
        phone: '+255 768 774 777',
        bio: '-Information Communication',
        experience: ': Events Assistant since 2019',
    },
]


const AboutPage = () => {
    return (
        <div>
            <Navigation />
            <main className="grid grid-cols-1 md:grid-cols-12 min-h-screen gap-4 capitalize">
                <div className='md:col-start-3 md:col-end-11'>
                    <AboutSection />
                </div>
                <div className='md:col-start-3 md:col-end-11 flex flex-col gap-2 items-center justify-center relative'>
                    <h1 className="text-xl md:text-4xl font-bold text-primary">
                        organization structure
                    </h1>
                    {/* <img src="/images/org.png" alt="" /> */}
                </div>
                <div className='md:col-start-3 md:col-end-11 flex flex-col gap-2 items-center justify-center px-2'>
                    <h1 className="text-xl md:text-4xl font-bold text-primary">
                        our team
                    </h1>
                    <p>is consist of passionate individuals who are dedicated to delivering exceptional results.</p>
                    <div className="grid md:grid-cols-2 gap-4 size-full">
                        {team.map((team) => (
                            <Card key={team.name} className="flex flex-col md:flex-row items-center gap-2">
                                <div className="relative w-auto m-2">
                                    <img
                                        src={team.image}
                                        alt=""
                                        className="size-full object-cover rounded-2xl"
                                    />
                                </div>
                                <CardContent>
                                    <h1 className="text-md font-bold">
                                        {team.designation}
                                    </h1>
                                    <h3 className="text-sm font-semibold">name: {team.name}</h3>
                                    <h3 className="text-sm font-semibold">phone: {team.phone}</h3>
                                    <p className="text-sm font-semibold">bio: {team.bio}</p>
                                    <p className="text-sm font-semibold">experience: {team.experience}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className='md:col-start-1 md:col-end-13'>
                    <FooterSection />
                </div>
            </main>
        </div>
    )
}

export default AboutPage
