'use client';

import { motion } from 'motion/react';
import { ExpTypes } from './Experience';
import { FC } from 'react';
import Image from 'next/image';
import { Bricolage } from '@/utils/fonts';

const ExperienceCard: FC<ExpTypes> = ({ org, duration, logo, desc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`${Bricolage} rounded-sm lg:h-[70px] h-[54px] w-[320px] lg:w-[700px] lg:pt-10`}
    >
      <p className="fixed bottom-2 top-2">
        <Image src={logo as string} height={45} width={45} alt="" className='h-[40px] w-[40px] lg:h-[50px] lg:w-[50px]'></Image>
      </p>

      <section className="flex flex-col lg:text-[14px] text-[12px] font-semibold">
        <p className="fixed top-2 lg:top-3 lg:left-[70px] left-[50px]">{org}</p>
        <p className="fixed lg:mr-40 mr-10 lg:top-8 top-6.5 lg:left-[70px] left-[50px]">{desc}</p>
      </section>



      <p className="fixed lg:top-3 top-2 right-2 text-[10px] lg:text-[14px] font-medium">{duration}</p>
    </motion.div>
  );
};

export default ExperienceCard;
