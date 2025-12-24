'use client';
import Image from 'next/image';
import { MagicCard } from '../magicui/magic-card';
import { Link } from '@radix-ui/themes';
import { Bricolage } from '@/utils/fonts';
import { useDarkmode } from '@/store/useDarkmode';
import experience from './ExperienceData';
import { ExpTypes } from '@/types/components/experience-types';

const Experience = () => {
  const { isDarkmode } = useDarkmode();
  return (
    <div className="mx-auto mt-4 flex w-[750px] flex-col items-center pb-8 max-lg:w-full max-lg:px-20 max-sm:w-full max-sm:px-5">
      {experience.map((exp: ExpTypes) => (
        <MagicCard
          key={exp.org}
          className="h-fit cursor-pointer border-none !bg-transparent dark:shadow-2xl"
          gradientColor={`${isDarkmode === 'dark' ? '#262626' : 'oklch(95.6% 0.045 203.388)'}`}
        >
          <div
            className={`${exp.role === 'Freelance' ? 'max-lg:ml-1 max-sm:ml-1' : ''} flex w-full px-5 py-3 max-sm:px-0 max-sm:pr-1`}
          >
            <div
              className={`flex w-24 items-center justify-center max-sm:justify-start ${exp.logo === '/freelance-icon.webp' ? 'max-sm:!w-[79px]' : ''} ${exp.logo === '/stealth-startup.jpeg' ? 'max-sm:!w-[92px]' : ''}`}
            >
              <Link href={exp.link} target="_blank">
                <Image
                  src={exp.logo}
                  alt="company-logo"
                  width={50}
                  height={50}
                  className={`rounded-full`}
                />
              </Link>
            </div>
            <div className="w-full text-start">
              <div className={`${exp.role === 'Freelance' ? 'max-lg:ml-2 max-sm:ml-2' : ''}`}>
                <div
                  className={`flex w-[41vw] !justify-between max-lg:w-full max-sm:w-full max-sm:items-center ${Bricolage}`}
                >
                  <div className="mb-1 text-lg !leading-4 font-semibold max-sm:text-base">
                    {exp.role}
                  </div>
                  <div className={`text-xs max-sm:hidden max-sm:text-[10px]`}>{exp.duration}</div>
                </div>
                <h2 className={`text-sm max-sm:text-xs ${Bricolage}`}>{exp.org}</h2>
                <h2 className={`mt-1 hidden text-sm max-sm:block max-sm:text-[10px] ${Bricolage}`}>
                  {exp.duration}
                </h2>
              </div>
            </div>
          </div>
        </MagicCard>
      ))}
    </div>
  );
};

export default Experience;
