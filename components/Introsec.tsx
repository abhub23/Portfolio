'use client';

import { JSX, FC } from 'react';
import Button from '../components/Button';
import Image from 'next/image';
import { motion } from 'motion/react';

const Introsec: FC = (): JSX.Element => {
  const openCal = () => {
    window.open('https://cal.com/abdullah23/15min?overlayCalendar=true', '_blank');
  };

  const scrollDown = () => {
    const scrollTarget = window.innerWidth > 1500 ? 5000 : 6000;
    window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
  };

  const Animation = {
    initial: {
      opacity: 0,
      y: 30,
      filter: 'blur(2px)',
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
    },
  };

  const Transition = (x: number) => {
    return {
      duration: 0.4,
      easing: 'easeInOut',
      delay: x,
    };
  };

  return (
    <div
      className="mt-[120px] flex flex-col items-center justify-center bg-neutral-50 text-neutral-900 lg:mt-26 lg:h-[500px] dark:bg-neutral-950 dark:text-white/90"
    >
      <motion.div
        {...Animation}
        transition={Transition(0.8)} className="relative flex h-[70px] w-[95px] justify-center lg:h-[110px] lg:w-[140px]">
        <Image
          alt="me"
          src="/me.webp"
          onClick={() => window.open('https://github.com/abhub23', '_blank')}
          fill
          className="rounded-lg object-cover"
          priority
        />
      </motion.div>

      <motion.div
        {...Animation}
        transition={Transition(1)} className="p-4 pb-1 text-[24px] font-bold lg:text-[42px]">
        Hey, I&apos;m Abdullah Mukri
      </motion.div>

      <motion.div {...Animation}
        transition={Transition(1.15)} className="px-7 pt-1 text-center text-[11px] lg:text-[16px]">
        Hey folks I am Abdullah, a Software Engineer hooked on crafting products using
        Typescript and Go.
      </motion.div>

      <motion.div {...Animation}
        transition={Transition(1.30)} className="px-9 pt-1 text-center text-[11px] lg:text-[16px]">
        I have expertise in wide range of tech but always want to be known as a student of Computer
        science.
      </motion.div>

      <motion.div {...Animation}
        transition={Transition(1.45)} className="px-9 pt-1 text-center text-[11px] lg:text-[16px]">
        Want&apos;s to connect, share thoughts or just say hello? please don&apos;t hesitate. feel free to connect!
      </motion.div>

      <motion.div
        {...Animation} transition={Transition(1.60)} className="mt-[30px] flex space-x-4 lg:mt-[40px] lg:space-x-6">
        <Button prop="Book a Meet" onClick={openCal} />
        <Button prop="Get in Touch" onClick={scrollDown} />
      </motion.div>
    </div>
  );
};

export default Introsec;
