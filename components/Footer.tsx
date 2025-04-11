import Link from 'next/link';
import { Bricolage } from '@/utils/fonts';


const Footer = () => {
  return (
    <div
      className={`h-10 bg-transparent lg:text-[16px] text-[12px] flex justify-center items-center mb-2 dark:text-white ${Bricolage}`}
    >
      Designed and Developed by
      <Link
        className="text-rose-300 ml-1 hover:underline"
        href="https://x.com/abdullah_twt23"
        target="_black"
      >
        Abdullah Mukri
      </Link>
    </div>
  );
};

export default Footer;
