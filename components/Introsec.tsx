'use client';

import { JSX } from 'react';
import { Bricolage } from '@/utils/fonts';
import Button from '../components/Button';
import Image from 'next/image';

const Introsec: React.FC = (): JSX.Element => {
  const openCal = () => {
    window.open('https://cal.com/abdullah23/15min?overlayCalendar=true', '_blank');
  };

  const scrollDown = () => {
    const scrollTarget = window.innerWidth > 1500 ? 1820 : 2500;
    window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
  };

  return (
    <>


      <div
        className={`lg:h-[500px] flex flex-col items-center lg:mt-26 mt-[120px] justify-center text-black dark:text-white bg-transparent ${Bricolage} `}
      >
        <div className='relative lg:h-[180px] lg:w-[180px] w-[120px] h-[160px] flex justify-center'>
          <Image alt='me' src='/me.png'
          onClick={() => window.open('https://github.com/abhub23', '_blank')}
          fill
        className="object-cover rounded-lg"
        priority />
        
        </div>
        <div className="lg:text-[42px] p-2 pb-1 font-bold text-[26px]">Hey, I&apos;m Abdullah Mukri</div>

        <div className="lg:text-[16px] text-[13px] pt-1 text-center px-4 lg:mx-auto">
          Hey folks Abdullah this side, a Software Engineer who loves to make cool products using
          Typescript and Go.
        </div>

        <div className="lg:text-[16px] text-center text-[13px] pt-1 px-[14px] lg:mx-auto">
          I have expertise in wide range of tech but always want to be known as a student of Computer
          science.
        </div>

        <div className="lg:text-[16px]  text-center text-[13px] pt-1 px-4 lg:mx-auto">
          Want&apos;s to connect or just say hi? please don&apos;t hesitate. feel free to connect!
        </div>
        <div className="lg:mt-[40px] mt-[30px] flex lg:space-x-6 space-x-4">
          <Button prop="Book a Meet" onClick={openCal} />
          <Button prop="Get in Touch" onClick={scrollDown} />
        </div>
      </div>
    </>

  );
};

export default Introsec;
