'use client'

import { JSX } from 'react';
import { Bricolage } from '@/utils/fonts';
import Button from '../components/Button';

const Introsec: React.FC = (): JSX.Element => {

  const openCal = () => {
    window.open('https://www.github.com/abhub23', '_blank')
  }

  const scrollDown = () => {
   window.scrollTo({top: 1400, behavior: 'smooth' })
  }

  return (
    <div
      className={`lg:h-70 flex flex-col items-center mt-48 justify-center text-black dark:text-white bg-transparent ${Bricolage} `}
    >
      <div className="lg:text-[42px] p-2 font-extrabold text-[26px]">
        Hey, I'm Abdullah Mukri
      </div>

      <div className="lg:text-[16px] text-sm pt-1 px-4 lg:mx-auto  ">
        Hey folks Abdullah this side, a Software Engineer who loves to make cool products using
        Typescript and Go.
      </div>

      <div className="lg:text-[16px] text-sm pt-1 px-4 lg:mx-auto">
        I have expertise in wide range of tech but always want to be known as a student of Computer
        science.
      </div>

      <div className="lg:text-[16px] text-sm pt-1 px-4 lg:mx-auto">
        Want's to connect or just say hi? please don't hesitate. feel free to connect!
      </div>
      <div className="mt-10 flex lg:space-x-6 space-x-5">
        <Button prop="Book a Meet" onClick={openCal} />
        <Button prop="Get in Touch" onClick={scrollDown} />
      </div>
      
    </div>
  );
};

export default Introsec;
