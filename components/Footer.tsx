import Link from 'next/link';
import { Bricolage } from '@/utils/fonts';

const Footer = () => {
  return (
    <div
      className={`mb-1 flex h-10 items-center text-neutral-600 justify-center bg-transparent text-[12px] lg:text-[16px] dark:text-neutral-400 ${Bricolage}`}
    >
      Designed and Developed by
      <Link
        className="ml-1.5 text-neutral-950 font-medium dark:text-neutral-100"
        href="https://x.com/abdullah_twt23"
        target="_black"
      >
        Abdullah Mukri
      </Link>
    </div>
  );
};

export default Footer;
