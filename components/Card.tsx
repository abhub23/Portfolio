import React, { JSX } from 'react';
import GithubBtn from './GithubBtn';
import WebsiteBtn from './WebsiteBtn';
import { Bricolage } from '@/utils/fonts';
import { ShineBorder } from './magicui/shine-border';
import Image from 'next/image';

type Cardprops = {
  Title: string;
  Desc: string;
  SrcLink: string;
  WebLink: string;
  Skills: string[];
  Imglink: React.HTMLInputTypeAttribute;
};

const Card: React.FC<Cardprops> = ({ Title, Desc, SrcLink, WebLink, Skills, Imglink }): JSX.Element => {
  return (
    <article className="relative flex lg:w-[340px] w-[330px] flex-col items-center justify-between border-[1px] rounded-sm  border-zinc-300/80 dark:border-zinc-800 bg-white dark:bg-black p-6 ">
      {/*<ShineBorder className='rounded-sm' shineColor={['oklch(64.5% 0.246 16.439)','oklch(85.2% 0.199 91.936)','oklch(76.8% 0.233 130.85)']} />*/}
      <ShineBorder
        className="rounded-sm"
        shineColor={[
          'oklch(71.8% 0.202 349.761)',
          'oklch(74% 0.238 322.16)',
          'oklch(70.2% 0.183 293.541)',
        ]}
      />
      <div className="group w-[320px] relative">
        <div className='flex justify-start items-center'>
          <h3
            className={` lg:w-fit mt-[4px] text-[22px] font-bold ml-[8px] uppercase leading-6 text-black dark:text-white transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-rose-600  ${Bricolage}`}
          >
            <a href={WebLink}>
              <span className={`absolute inset-0 max-w-xs  ${Bricolage}`} />
              {Title}
            </a>
          </h3>
          <Image alt='' src={Imglink} width={45} height={45} className='absolute right-[10px] cursor-pointer' onClick={() => window.open(WebLink, '_blank')} />
        </div>

        
        <p
          className={`text-[13px] mt-5 px-2 text-black dark:text-white text-justify transition-all duration-500 ease-in-out transform ${Bricolage} `}
        >
          {Desc}
        </p>
      </div>

      <div className="flex w-[330] gap-[4px] gap-y-[5px] px-3 mt-6 flex-wrap">
        {Skills.map((el) => (
          <p
            key={el}
            className={`text-[11px] rounded-[3px] ml-[2px] p-[2px] px-[4px] border-1 border-neutral-500 dark:border-neutral-500 h-[20px] text-black dark:text-white hover:dark:text-black hover:text-white hover:bg-black dark:hover:bg-white transition-all duration-300 ease-in-out cursor-pointer ${Bricolage}`}
          >
            {el}
          </p>
        ))}
      </div>

      <div className="mt-[30px] mr-[130px] flex gap-x-2 text-xs">
        <GithubBtn Srclink={SrcLink} />
        <WebsiteBtn Weblink={WebLink} />
      </div>
    </article>
  );
};

export default Card;
