'use client';

import { motion } from 'motion/react';
import { ExpTypes } from './Experience';
import Image from 'next/image';

const ExperienceCard = ({ org, duration, logo, desc }: ExpTypes) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="h-[54px] w-[320px] rounded-sm lg:h-[70px] lg:w-[700px] lg:pt-10 dark:bg-neutral-950"
    >
      <p className="fixed top-2 bottom-2">
        <Image
          src={logo as string}
          height={45}
          width={45}
          alt=""
          className="h-[40px] w-[40px] lg:h-[50px] lg:w-[50px]"
        ></Image>
      </p>

      <section className="flex flex-col text-[12px] font-semibold lg:text-[14px]">
        <p className="fixed top-2 left-[50px] lg:top-3 lg:left-[70px]">{org}</p>
        <p className="fixed top-6.5 left-[50px] mr-10 lg:top-8 lg:left-[70px] lg:mr-40">{desc}</p>
      </section>

      <p className="fixed top-2 right-2 text-[10px] font-medium lg:top-3 lg:text-[12px]">
        {duration}
      </p>
    </motion.div>
  );
};

export default ExperienceCard;
