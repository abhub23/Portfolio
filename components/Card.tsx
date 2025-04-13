import React, { JSX } from 'react';
import GithubBtn from './GithubBtn';
import WebsiteBtn from './WebsiteBtn';
import { Bricolage } from '@/utils/fonts';
import { ShineBorder } from './magicui/shine-border';

type Cardprops = {
  Title: string;
  Desc: string;
  SrcLink: string;
  WebLink: string;
};

const Card: React.FC<Cardprops> = ({ Title, Desc, SrcLink, WebLink }): JSX.Element => {
  return (
    <article className="relative flex w-[350px] flex-col items-start justify-between border-[1px] rounded-sm  border-zinc-300/80 dark:border-zinc-800 bg-gradient-to-b from-white via-gray-100 to-gray-200 dark:from-black dark:via-black dark:to-black p-6 shadow-[5px_5px_0_0_oklch(55.2%_0.016_285.938)] dark:shadow-[5px_5px_0_0_oklch(96.7%_0.001_286.375)] transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-gradient-to-b hover:from-gray-200 hover:to-white dark:hover:from-black dark:hover:to-black hover:shadow-[7px_7px_0_0_oklch(55.2%_0.016_285.938)] dark:hover:shadow-[7px_7px_0_0_oklch(96.7%_0.001_286.375)]"> 
      <ShineBorder className='rounded-sm' shineColor={['oklch(64.5% 0.246 16.439)','oklch(85.2% 0.199 91.936)','oklch(76.8% 0.233 130.85)']} />
      <div className="group relative">
        <h3 className=" mt-3 text-2xl font-black uppercase leading-6 text-black dark:text-white transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-rose-600">
          <a href="#">
            <span className="absolute inset-0 max-w-xs" />
            {Title}
          </a>
        </h3>
        <p
          className={`text-sm mt-5 border-l-4 border-red-500 pl-4 leading-6 text-black dark:text-white text-justify transition-all duration-500 ease-in-out transform ${Bricolage} `}
        >
          {Desc}
        </p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-2">
        <div className="text-sm leading-6">
          <p className="font-black text-black dark:text-white transition-all duration-500 ease-in-out transform hover:scale-110">
            <a className="hover:underline hover:text-red-500" href="#">
              <span className="absolute inset-0" />
              -ELON MUSK-
            </a>
          </p>
          <p className="font-bold text-gray-700 dark:text-white/90 transition-all duration-500 ease-in-out transform hover:text-gray-500">
            Chief Memelord
          </p>
        </div>
      </div>
      <div className="mt-2 mb-[-10px] flex items-center gap-x-2 text-xs">
        <GithubBtn Srclink={SrcLink} />
        <WebsiteBtn Weblink={WebLink} />
      </div>
    </article>
  );
};

export default Card;
