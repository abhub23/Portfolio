'use client';

import { Bricolage } from '@/utils/fonts';
import { JSX } from 'react';
import { Separator } from '@radix-ui/themes';

const About: React.FC = (): JSX.Element => {
  type AboutType = {
    year: number;
    desc: string[];
  };

  const aboutArr: Array<AboutType> = [
    {
      year: 2023,
      desc: ['Joined Engineering in Computer Science ',]
    },
    {
      year: 2022,
      desc: [`Made some more projects in Android but now its time to move Tech Stacks. I explored Web the ultimate niche
            atleast for me, this actually hit the spot and i started to like coding.`,

        `Learned React, NodeJs and some DBs like Postgres.
            Made some Projects which gave me a confidence because once you have visual results like "you actually made a website"
            its a very proud feeling.`]
    },
    {
      year: 2021,
      desc: [`In my Second year i made some college projects in Android Development using Java but that wasn't 
            really made me fell for programming, i was just doing them for the sake of Project marks.`,

        `Later I got introduced with DSA and did some of it to sharpen my problem solving skills.`]
    },
    {
      year: 2020,
      desc: [`Joined my Computer Science Engineering Degree in Pillai College of Engineering and Technology.`,

         `Get myself around technologies and core engineering and The exploration phase started from there `]
    },
  ];
  return (
    <div
      className={`${Bricolage} lg:w-[800px] flex flex-col text-black dark:text-white justify-center items-center h-screen mx-auto`}
    >
      {aboutArr.map((el, idx) => (
        <div key={idx} className="w-[800px] mx-auto flex flex-col justify-start">
          <div className="lg:text-[22px] font-medium p-2">{el.year}</div>
          {el.desc.map((el1, idx1) => (
            <div key={idx1} className="lg:text-[16px] p-[5px] flex flex-row items-start">
              <div className="min-w-[14px] h-[1px] mt-[11px] bg-black dark:bg-gray-400 mr-3" />
              <p className="pl-1 leading-relaxed">{el1}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default About;
