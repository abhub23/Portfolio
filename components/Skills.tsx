const skills: Array<string> = [
  'TypeScript',
  'Javascript',
  'Next Js',
  'React',
  'Express',
  'Node Js',
  'Tailwind',
  'PostgreSQL',
  'Prisma',
  'Supabase',
  'Neon DB',
  'Zustand',
  'Zod',
  'Socket.IO',
  'Git',
  'AWS',
  'JWT',
  'Docker',
  'Vercel',
];

const Skills: React.FC = () => {
  return (
    <div className="mx-auto mb-[40px] h-[110px] w-[350px] lg:mb-[40px] lg:h-[160px] lg:w-[760px]">
      <div className="mx-auto mb-[10px] text-center text-[20px] font-semibold text-black lg:mb-[18px] lg:p-[2px] lg:text-[30px] dark:text-white">
        Skills
      </div>
      <div className="mx-auto flex h-[75px] w-[335px] flex-wrap justify-center gap-[2px] px-[2px] lg:h-[70px] lg:w-[760px] lg:px-[4px]">
        {skills.map((el, idx) => (
          <div
            key={idx}
            className="mx-[4px] h-[18px] rounded-[4px] border-1 border-black/80 bg-black/90 p-[2px] px-[4px] text-center text-[8px] font-semibold text-white lg:mx-[4px] lg:h-[24px] lg:p-[2px] lg:px-[8px] lg:text-[12px] dark:border-white/80 dark:bg-white dark:text-black"
          >
            {el}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
