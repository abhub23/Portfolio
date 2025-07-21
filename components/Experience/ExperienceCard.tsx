'use client';

import { motion } from 'motion/react';
import { ExpTypes } from './Experience';
import { FC } from 'react';
import Image from 'next/image';
import { Bricolage } from '@/utils/fonts';
import { log } from 'console';

const ExperienceCard: FC<ExpTypes> = ({ org, duration, logo, desc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`${Bricolage} rounded-sm lg:h-[80px] lg:w-[700px] lg:pt-10`}
    >
      <section className="flex flex-col">
        <p className="fixed font-semibold lg:top-0 lg:left-3">{org}</p>
        <p className="fixed lg:bottom-1 lg:left-3">
          <Image src={logo as string} height={45} width={45} alt=""></Image>
        </p>
      </section>
      <p className="fixed mr-36 text-[14px] lg:top-7 lg:left-[70px]">{desc}</p>

      <p className="fixed top-2 right-2 text-[14px] font-medium">{duration}</p>
    </motion.div>
  );
};

export default ExperienceCard;
