'use client';

import Button from './Button';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Animation, Transition } from '@/lib/animation';

function Cta() {
  const openCal = () => {
    window.open('https://cal.com/abdullah23/15min?overlayCalendar=true', '_blank');
  };

  const scrollDown = () => {
    const scrollTarget = window.innerWidth > 1500 ? 5000 : 6000;
    window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
  };

  return (
    <div className="mx-auto mt-[120px] flex flex-col items-center text-neutral-900 lg:mt-38 lg:h-[500px] dark:bg-neutral-950 dark:text-white/90">
      <motion.div
        {...Animation}
        transition={Transition(0.1)}
        className="relative flex h-[70px] w-[95px] justify-center lg:h-[110px] lg:w-[140px]"
      >
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
        transition={Transition(0.2)}
        className="w-full p-4 pb-1 text-left text-[26px] font-bold lg:text-[42px]"
      >
        Hi, I&apos;m Abdullah Mukri
      </motion.div>

      <div className="px-4">
        <motion.div
          {...Animation}
          transition={Transition(0.3)}
          className="text-left text-[13px] lg:text-[16px]"
        >
          <span className="mb-2 block text-[14px] font-semibold lg:text-[18px]">About</span>
          Full-stack Software Engineer, crafting products with Typescript and Go. I have expertise
          in wide range of tech stack. Want&apos;s to connect, share thoughts or just say hello?
          please don&apos;t hesitate. feel free to connect!
        </motion.div>

        <motion.div
          {...Animation}
          transition={Transition(0.4)}
          className="mt-[30px] flex space-x-4 lg:mt-[40px] lg:space-x-6"
        >
          <Button prop="Book a Meet" onClick={openCal} />
          <Button prop="Get in Touch" onClick={scrollDown} />
        </motion.div>
      </div>
    </div>
  );
}

export default Cta;
