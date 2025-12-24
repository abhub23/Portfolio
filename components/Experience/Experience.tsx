import ExperienceCard from './ExperienceCard';
import type { ExpTypes } from '@/types/components/experience-types';

const Experience = () => {
  return (
    <>
      <span className="mb-2 flex justify-center text-[20px] font-semibold lg:mt-[20px] lg:mb-[12px] lg:text-[30px]">
        Experience
      </span>

      <ExperienceCard />
    </>
  );
};

export default Experience;
