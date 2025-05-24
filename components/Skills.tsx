import { Bricolage } from "@/utils/fonts"

const skills: Array<string> = ['TypeScript', 'Javascript', 'Next Js', 'React', 'Express', 'Node Js', 'Tailwind', 'PostgreSQL', 'Prisma', 'Supabase', 
    'Neon DB', 'Zustand', 'Zod', 'Resend', 'Socket.IO', 'TurboRepo', 'Git', 'AWS EC2', 'AWS S3', 'JWT', 'Docker', 'Vercel']


const Skills: React.FC = () => {
    return (
        <div className={`lg:h-[160px] h-[110px] lg:w-[660px] w-[340px] lg:mb-[40px] mb-[40px] mx-auto ${Bricolage}`}>

            <div className="lg:text-[34px] text-[24px] text-black dark:text-white font-semibold mx-auto text-center lg:mb-[18px] mb-[10px] lg:p-[2px]">Skills</div>
            <div className={`lg:h-[110px] h-[90px] lg:w-[660px] w-[325px] lg:px-[4px] gap-[2px] px-[2px] flex flex-wrap justify-center mx-auto ${Bricolage}`}>
                {skills.map((el, idx) => (
                    <div key={idx}
                        className="lg:px-[8px] px-[4px] lg:p-[2px] p-[2px] lg:mx-[5px] mx-[4px] font-semibold lg:h-[24px] h-[18px] text-center rounded-[4px] bg-black/90 dark:bg-white text-white dark:text-black lg:text-[12px] text-[8px] border-1 border-black/80 dark:border-white/80 cursor-pointer">
                        {el}
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Skills