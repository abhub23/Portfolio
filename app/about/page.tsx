'use client';

import { Bricolage } from '@/utils/fonts';
import { JSX } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

const About: React.FC = (): JSX.Element => {
  type AboutType = {
    year: number;
    desc: string[];
  };

  const aboutArr: Array<AboutType> = [
    {
      year: 2023,
      desc: [
        'Got myself enrolled in Summer Internship actuallt 3 internships where i worked with industry folks and learned new stuff',
        `Made an adventure sports travel app which helps folks in hiking, offroading, offboating and many other cool things with features like offline maps, live tracking and many more.`,
      ],
    },
    {
      year: 2022,
      desc: [
        `Made some more projects in Android but now its time to move Tech Stacks. I explored Web, the ultimate niche
            atleast for me, this actually hit the spot and i started to like coding.`,

        `Learned React, NodeJs and some DBs like Postgres.
            Made some Projects which gave me a confidence because once you have visual results like "you actually made a website"
            its a very proud feeling.`,
      ],
    },
    {
      year: 2021,
      desc: [
        `In my second year, I worked on Android development projects using Java, but I did them mainly 
        for project marks and didn't really develop a passion for programming.`,

        `Later I got introduced with DSA and did some of it to sharpen my problem solving skills.`,
      ],
    },
    {
      year: 2020,
      desc: [
        `Joined my Computer Science Engineering Degree in Pillai College of Engineering and Technology.`,

        `Get myself around technologies and core engineering and The exploration phase started from there `,
      ],
    },
  ];
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'mx-auto mt-[140px] mb-[40px] flex w-[340px] flex-col items-center justify-center text-black lg:w-[800px] dark:text-white',
          Bricolage
        )}
      >
        {aboutArr.map((el, idx) => (
          <div key={idx} className="mx-auto flex w-[300px] flex-col justify-start lg:w-[800px]">
            <div className="p-[4px] text-[16px] font-medium lg:p-[8px] lg:text-[20px]">
              {el.year}
            </div>
            {el.desc.map((el1, idx1) => (
              <div
                key={idx1}
                className="flex flex-row items-start p-[4px] pr-[10px] text-[13px] lg:p-[5px] lg:text-[16px]"
              >
                <div className="mt-[11px] mr-[10px] ml-[3px] h-[1px] min-w-[10px] bg-black lg:ml-[3px] lg:min-w-[14px] dark:bg-gray-400" />
                <p className="pl-[2px] text-justify leading-relaxed lg:pl-1">{el1}</p>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
