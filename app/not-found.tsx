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
    <div className={`${Bricolage} bg-white dark:bg-black font-semibold flex flex-col justify-center items-center h-screen`}>
      
      <motion.div 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className='flex flex-col justify-center items-center'
      >
        <p className="text-4xl text-black dark:text-white p-2 mb-1.5">PAGE NOT FOUND - 404 </p>
        <button
          className="px-3 py-2 p-2 rounded-md bg-black text-white cursor-pointer text-[14px] dark:bg-white dark:text-black "
          onClick={handleHome}
        >
          Go to Home
        </button>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
