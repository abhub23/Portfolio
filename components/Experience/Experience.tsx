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
    desc: 'Made an Http Server in Go from scratch. A reliable Tcp connection using go std net library and unix.',
  },
  {
    org: 'Oasis Infobyte',
    duration: 'Oct 2023 - Apr 2024',
    logo: '/icon.webp',
    desc: 'dfv',
  },
];

const Experience = () => {
  return (
    <>
      <span
        className={`${Bricolage} mb-2 flex justify-center text-[24px] font-semibold lg:mb-4 lg:text-[30px]`}
      >
        Experience
      </span>

      {Exp.map((val, idx) => (
        <div key={idx} className="mx-auto flex justify-center lg:pt-[4px]">
          <ExperienceCard org={val.org} desc={val.desc} duration={val.duration} logo={val.logo} />
        </div>
      ))}
    </>
  );
};

export default Experience;
