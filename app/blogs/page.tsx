'use client';

import { useRouter } from 'next/navigation';
import { Bricolage } from '@/utils/fonts';
import { motion } from 'motion/react';

const ErrorPage = () => {
  const router = useRouter();
  const handleHome = () => {
    router.push('/');
  };

  return (
    <div
      className={`${Bricolage} flex h-screen flex-col items-center justify-center bg-white font-semibold dark:bg-black`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="flex flex-col items-center justify-center"
      >
        <p className="text-[22px] text-black lg:mb-1 lg:p-2 lg:text-[36px] dark:text-white">
          Blogs are yet to publish{' '}
        </p>

        <p className="mb-1.5 p-2 text-[16px] text-black lg:text-[26px] dark:text-white">
          Stay Tuned{' '}
        </p>
        <button
          className="h-[28px] w-[100px] cursor-pointer rounded-md bg-black px-[4px] py-1 text-[11px] text-white lg:h-[36px] lg:w-[120px] lg:text-[14px] dark:bg-white dark:text-black"
          onClick={handleHome}
        >
          Go to Home
        </button>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
