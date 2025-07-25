import React, { JSX } from 'react';
import GithubBtn from './GithubBtn';
import WebsiteBtn from './WebsiteBtn';
import { Bricolage } from '@/utils/fonts';
import { ShineBorder } from '@/components/magicui/shine-border';
import Image from 'next/image';

type Cardprops = {
  Title: string;
  Desc: string;
  SrcLink: string;
  WebLink: string;
  Skills: string[];
  Imglink: React.HTMLInputTypeAttribute;
};

const Card: React.FC<Cardprops> = ({
  Title,
  Desc,
  SrcLink,
  WebLink,
  Skills,
  Imglink,
}): JSX.Element => {
  return (
    <article className="relative flex w-[310px] flex-col items-center justify-between rounded-sm border-[1px] border-zinc-300/80 bg-white p-6 lg:w-[340px] dark:border-zinc-800 dark:bg-black">
      <ShineBorder
        className="rounded-sm"
        shineColor={[
          'oklch(71.8% 0.202 349.761)',
          'oklch(74% 0.238 322.16)',
          'oklch(70.2% 0.183 293.541)',
        ]}
      />
      <div className="group relative w-[290px]">
        <div className="flex items-center justify-start">
          <h3
            className={`mt-[4px] ml-[8px] transform text-[18px] leading-6 font-semibold text-black transition-all duration-500 ease-in-out hover:scale-105 hover:text-rose-600 lg:w-fit dark:text-white ${Bricolage}`}
          >
            <a href={WebLink} >
              <span className={`absolute inset-0 max-w-xs ${Bricolage}`} />
              {Title}
            </a>
          </h3>
          <Image
            alt=""
            src={Imglink}
            width={45}
            height={45}
            className="absolute right-[10px] cursor-pointer"
            onClick={() => window.open(WebLink, '_blank')}
          />
        </div>

        <p
          className={`mt-5 px-2 text-justify lg:text-[13px] text-[11px] text-black dark:text-white ${Bricolage} `}
        >
          {Desc}
        </p>
      </div>

      <div className="mt-6 flex lg:w-[330] w-[300px] flex-wrap gap-[4px] gap-y-[5px] px-3">
        {Skills.map((el) => (
          <p
            key={el}
            className={`ml-[2px] lg:h-[20px] h-[18px] cursor-pointer rounded-[3px] border-1 border-neutral-500 p-[2px] px-[4px] lg:text-[11px] text-[10px] text-black transition-all duration-300 ease-in-out hover:bg-black hover:text-white dark:border-neutral-500 dark:text-white dark:hover:bg-white hover:dark:text-black ${Bricolage}`}
          >
            {el}
          </p>
        ))}
      </div>

      <div className="mt-[30px] lg:mr-[130px] mr-[120px] flex gap-x-2 text-xs">
        <GithubBtn Srclink={SrcLink} />
        <WebsiteBtn Weblink={WebLink} />
      </div>
    </article>
  );
};

export default Card;
