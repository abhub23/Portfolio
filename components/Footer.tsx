import Link from 'next/link';
import { Bricolage } from '@/utils/fonts';
import { cn } from '@/lib/utils';

const Footer = () => {
  return (
    <div
      className={cn(
        'mb-1 flex h-10 items-center justify-center bg-transparent text-[12px] text-neutral-600 lg:text-[16px] dark:text-neutral-400',
        Bricolage
      )}
    >
      Designed and Developed by
      <Link
        className="ml-1.5 rounded-xs bg-neutral-200 px-[6px] py-[1px] font-normal text-neutral-950 dark:bg-neutral-800 dark:text-neutral-100"
        href="https://x.com/abdullah_twt23"
        target="_black"
      >
        Abdullah Mukri
      </Link>
    </div>
  );
};

export default Footer;
