import { Bricolage } from "@/Utils/fonts"
import { JSX } from "react"

const About: React.FC = (): JSX.Element => {
    return (
        <div className={`${Bricolage} flex flex-col justify-center items-center h-screen`}> 
            <p className="text-4xl text-black font-bold">My Tech Journey</p>
        </div>
    )
}

export default About