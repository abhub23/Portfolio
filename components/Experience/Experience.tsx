import { Bricolage } from '@/utils/fonts';
import ExperienceCard from './ExperienceCard';

export type ExpTypes = {
  org: string;
  duration: string;
  logo?: string;
  desc: string;
};

const Exp: ExpTypes[] = [
  {
    org: 'Kanexon Inc',
    duration: 'Feb 2025 - June 2025',
    logo: '/kannectlogo.png',
    desc: 'Fullstack Developer/ Engineer',

  },
  {
    org: 'Oasis Infobyte',
    duration: 'Oct 2023 - Apr 2024',
    logo: '/icon.webp',
    desc: 'Software Development Engineer, Intern',
  },
];

const Experience = () => {
  return (
    <>
      <span
        className={`${Bricolage} mb-2 flex justify-center text-[24px] font-semibold lg:mb-[12px] lg:mt-[20px] lg:text-[30px]`}
      >
        Experience
      </span>

      {Exp.map((val, idx) => (
        <div key={idx} className="flex justify-center lg:pt-[4px] pt-[4px]">
          <ExperienceCard org={val.org} desc={val.desc} duration={val.duration} logo={val.logo} />
        </div>
      ))}
    </>
  );
};

export default Experience;
