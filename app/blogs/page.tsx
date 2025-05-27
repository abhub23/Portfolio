'use client';

import { useRouter } from 'next/navigation';
import { Bricolage } from '@/utils/fonts';
import { motion } from 'motion/react';
import { log } from 'console';

const ErrorPage = () => {
  const router = useRouter();
  const handleHome = () => {
    router.push('/');
  };

  return (
    <div
      className={`${Bricolage} bg-white dark:bg-black font-semibold flex flex-col justify-center items-center h-screen`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="flex flex-col justify-center items-center"
      >
        <p className="lg:text-[36px] text-[22px] text-black dark:text-white lg:p-2 lg:mb-1">
          Blogs are yet to publish{' '}
        </p>

        <p className="lg:text-[26px] text-[16px] text-black dark:text-white p-2 mb-1.5">
          Stay Tuned{' '}
        </p>
        <button
          className="px-[4px] py-1 rounded-md lg:h-[36px] lg:w-[120px] h-[28px] w-[100px] bg-black text-white cursor-pointer lg:text-[14px] text-[11px] dark:bg-white dark:text-black "
          onClick={handleHome}
        >
          Go to Home
        </button>
      </motion.div>
    </div>
  );
};

export default ErrorPage;