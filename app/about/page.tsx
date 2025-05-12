'use client';

import { Bricolage } from '@/utils/fonts';
import { JSX } from 'react';
import { motion } from 'motion/react'

const About: React.FC = (): JSX.Element => {
  type AboutType = {
    year: number;
    desc: string[];
  };

  const aboutArr: Array<AboutType> = [
    {
      year: 2023,
      desc: ['Got myself enrolled in Summer Internship actuallt 3 internships where i worked with industry folks and learned new stuff',
        `Made an adventure sports travel app which helps folks in hiking, offroading, offboating and many other cool things with features like offline maps, live tracking and many more.`
      ]
    },
    {
      year: 2022,
      desc: [`Made some more projects in Android but now its time to move Tech Stacks. I explored Web, the ultimate niche
            atleast for me, this actually hit the spot and i started to like coding.`,

        `Learned React, NodeJs and some DBs like Postgres.
            Made some Projects which gave me a confidence because once you have visual results like "you actually made a website"
            its a very proud feeling.`]
    },
    {
      year: 2021,
      desc: [`In my second year, I worked on Android development projects using Java, but I did them mainly 
        for project marks and didn't really develop a passion for programming.`,

        `Later I got introduced with DSA and did some of it to sharpen my problem solving skills.`]
    },
    {
      year: 2020,
      desc: [`Joined my Computer Science Engineering Degree in Pillai College of Engineering and Technology.`,

        `Get myself around technologies and core engineering and The exploration phase started from there `]
    }
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{opacity: 0}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`${Bricolage} lg:w-[800px] w-[340px] flex flex-col mt-[140px] mb-[40px] text-black dark:text-white justify-center items-center mx-auto`}
    >
      {aboutArr.map((el, idx) => (
        <div key={idx} className="lg:w-[800px] w-[300px] mx-auto flex flex-col justify-start">
          <div className="lg:text-[22px] text-[16px] font-medium lg:p-[8px] p-[4px]">{el.year}</div>
          {el.desc.map((el1, idx1) => (
            <div key={idx1} className="lg:text-[16px] text-[13px] lg:p-[5px] p-[4px] pr-[10px] flex flex-row items-start">
              <div className="lg:min-w-[14px] min-w-[10px] h-[1px] mt-[11px] bg-black dark:bg-gray-400 lg:ml-[3px] ml-[3px] mr-[10px]" />
              <p className="lg:pl-1 pl-[2px] leading-relaxed text-justify">{el1}</p>
            </div>
          ))}
        </div>
      ))}
    </motion.div>
  );
};

export default About;
