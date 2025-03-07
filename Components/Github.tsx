import { Bricolage } from '@/Utils/fonts';
import Image from 'next/image';
import { JSX } from 'react';

const Github: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center mb-12 mt-14">
      <p className={`${Bricolage} mb-5 text-4xl font-bold `}>Github Contributions</p>
      <Image
        src="https://ghchart.rshah.org/216E44/abhub23"
        alt="Github contribution Chart"
        width={780}
        height={500}
        unoptimized={true}
      />
    </div>
  );
};

export default Github;
