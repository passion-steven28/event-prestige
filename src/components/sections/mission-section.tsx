import { EyeOpenIcon } from "@radix-ui/react-icons"
import { Card } from "../ui/card"

const MissionSection = () => {
    return (
        <section className="bg-amber-200 w-full flex items-center justify-center p-4 md:p-20 md:h-[40vh]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-content-center">
                <Card className="flex flex-col items-center justify-center p-4">
                    <div className="flex flex-col items-center justify-center mb-4">
                        <EyeOpenIcon className="h-10 w-auto" />
                        <h1 className="text-xl font-bold">mission</h1>
                    </div>
                    <p className="text-sm font-semibold text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo repudiandae quos culpa aspernatur modi aut cum distinctio dolorem ab numquam, accusantium laudantium unde architecto sapiente quidem eius temporibus consectetur voluptas!</p>
                </Card>
                <Card className="flex flex-col items-center justify-center p-4">
                    <div className="flex flex-col items-center justify-center mb-4">
                        <EyeOpenIcon className="h-10 w-auto" />
                        <h1 className="text-xl font-bold">mission</h1>
                    </div>
                    <p className="text-sm font-semibold text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo repudiandae quos culpa aspernatur modi aut cum distinctio dolorem ab numquam, accusantium laudantium unde architecto sapiente quidem eius temporibus consectetur voluptas!</p>
                </Card>
                <Card className="flex flex-col items-center justify-center p-4">
                    <div className="flex flex-col items-center justify-center mb-4">
                        <EyeOpenIcon className="h-10 w-auto" />
                        <h1 className="text-xl font-bold">mission</h1>
                    </div>
                    <p className="text-sm font-semibold text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo repudiandae quos culpa aspernatur modi aut cum distinctio dolorem ab numquam, accusantium laudantium unde architecto sapiente quidem eius temporibus consectetur voluptas!</p>
                </Card>
            </div>
        </section>
    )
}

export default MissionSection
