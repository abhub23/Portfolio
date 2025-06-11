import { Bricolage } from '@/utils/fonts';

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
  'Resend',
  'Socket.IO',
  'TurboRepo',
  'Git',
  'AWS EC2',
  'AWS S3',
  'JWT',
  'Docker',
  'Vercel',
];

const Skills: React.FC = () => {
  return (
    <div
      className={`mx-auto mb-[40px] h-[110px] w-[340px] lg:mb-[40px] lg:h-[160px] lg:w-[660px] ${Bricolage}`}
    >
      <div className="mx-auto mb-[10px] text-center text-[24px] font-semibold text-black lg:mb-[18px] lg:p-[2px] lg:text-[34px] dark:text-white">
        Skills
      </div>
      <div
        className={`mx-auto flex h-[90px] w-[325px] flex-wrap justify-center gap-[2px] px-[2px] lg:h-[110px] lg:w-[660px] lg:px-[4px] ${Bricolage}`}
      >
        {skills.map((el, idx) => (
          <div
            key={idx}
            className="mx-[4px] h-[18px] cursor-pointer rounded-[4px] border-1 border-black/80 bg-black/90 p-[2px] px-[4px] text-center text-[8px] font-semibold text-white lg:mx-[5px] lg:h-[24px] lg:p-[2px] lg:px-[8px] lg:text-[12px] dark:border-white/80 dark:bg-white dark:text-black"
          >
            {el}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
