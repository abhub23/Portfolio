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
        className={`mt-[120px] flex flex-col items-center justify-center bg-transparent text-black lg:mt-26 lg:h-[500px] dark:text-white ${Bricolage} `}
      >
        <div className="relative flex h-[160px] w-[120px] justify-center lg:h-[180px] lg:w-[180px]">
          <Image
            alt="me"
            src="/me.png"
            onClick={() => window.open('https://github.com/abhub23', '_blank')}
            fill
            className="rounded-lg object-cover"
            priority
          />
        </div>
        <div className="p-2 pb-1 text-[26px] font-bold lg:text-[42px]">
          Hey, I&apos;m Abdullah Mukri
        </div>

        <div className="px-4 pt-1 text-center text-[13px] lg:mx-auto lg:text-[16px]">
          Hey folks Abdullah this side, a Software Engineer who loves to make cool products using
          Typescript and Go.
        </div>

        <div className="px-[14px] pt-1 text-center text-[13px] lg:mx-auto lg:text-[16px]">
          I have expertise in wide range of tech but always want to be known as a student of
          Computer science.
        </div>

        <div className="px-4 pt-1 text-center text-[13px] lg:mx-auto lg:text-[16px]">
          Want&apos;s to connect or just say hi? please don&apos;t hesitate. feel free to connect!
        </div>
        <div className="mt-[30px] flex space-x-4 lg:mt-[40px] lg:space-x-6">
          <Button prop="Book a Meet" onClick={openCal} />
          <Button prop="Get in Touch" onClick={scrollDown} />
        </div>
      </div>
    </>
  );
};

export default Introsec;
