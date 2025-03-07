import React, { JSX } from 'react';
import GithubBtn from './GithubBtn';
import WebsiteBtn from './WebsiteBtn';
import { Bricolage } from '@/Utils/fonts';

type Cardprops = {
  Title: string;
  Desc: string;
};

const Card: React.FC<Cardprops> = ({ Title, Desc }): JSX.Element => {
  return (
    <article className="flex w-[350px] flex-col items-start justify-between border-4 border-black bg-gradient-to-b from-white via-gray-100 to-gray-200 p-6 shadow-[8px_8px_0_0_#000] transition-transform duration-500 ease-in-out transform hover:scale-105 hover:bg-gradient-to-b hover:from-gray-200 hover:to-white transition-shadow hover:shadow-[12px_12px_0_0_#000]">
      <div className="group relative">
        <h3 className="group-hover:text-red-500 mt-3 text-2xl font-black uppercase leading-6 text-black transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-blue-800">
          <a href="#">
            <span className="absolute inset-0 max-w-xs" />
            {Title}
          </a>
        </h3>
        <p
          className={`text-sm mt-5 border-l-4 border-red-500 pl-4 leading-6 text-black transition-all duration-500 ease-in-out transform ${Bricolage} `}
        >
          {Desc}
        </p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-2">
        <div className="text-sm leading-6">
          <p className="font-black text-black transition-all duration-500 ease-in-out transform hover:scale-110">
            <a className="hover:underline hover:text-red-500" href="#">
              <span className="absolute inset-0" />
              -ELON MUSK-
            </a>
          </p>
          <p className="font-bold text-gray-700 transition-all duration-500 ease-in-out transform hover:text-gray-500">
            Chief Memelord
          </p>
        </div>
      </div>
      <div className="mt-2 flex items-center gap-x-2 text-xs">
        <GithubBtn />
        <WebsiteBtn />
      </div>
    </article>
  );
};

export default Card;
