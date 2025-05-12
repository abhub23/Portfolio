import { Bricolage } from "@/utils/fonts"

const skills = ['TypeScript', 'Javascript', 'NextJs', 'React', 'Express', 'Tailwind', 'PostgreSQL', 'Zustand', 'Zod', 'Supabase', 'JWT',
    'Resend', 'Socket.IO', 'TurboRepo']


const Skills: React.FC = () => {
    return (
        <div className={`lg:h-[180px] bg-red-400 lg:w-[600px] mx-auto ${Bricolage}`}>

            <div className="lg:text-[34px] mx-auto">Skills</div>
            <div className={`lg:h-[120px] lg:w-[600px] gap-[1px] mx-auto flex flex-wrap ${Bricolage}`}>
                {skills.map((el, idx) => (
                    <div key={idx}
                        className="lg:px-[6px] lg:p-[2px] lg:mx-[4px] lg:h-[26px] text-center lg:rounded-[4px] bg-emerald-50 lg:text-[14px] border-2 border-black/80 dark:border-white/80">
                        {el}
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Skills