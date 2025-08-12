import { Bricolage } from '@/utils/fonts';
import Image from 'next/image';

const Github = () => {
  return (
    <div className="mt-8 mb-2 flex flex-col items-center p-3 lg:mt-11 lg:mb-10">
      <p className={`${Bricolage} mb-2 text-[20px] font-semibold lg:mb-5 lg:text-[30px]`}>
        Github Activities
      </p>
      <Image
        src="https://ghchart.rshah.org/158a17/abhub23"
        alt="Github Chart"
        width={780}
        height={500}
        unoptimized={true}
        loading='lazy'
      />
    </div>
  );
};

export default Github;
