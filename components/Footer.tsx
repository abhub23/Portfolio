import Link from 'next/link';
import { Bricolage } from '@/utils/fonts';

const Footer = () => {
  return (
    <div
      className={`mb-1 flex h-10 items-center justify-center bg-transparent text-[12px] lg:text-[16px] dark:text-white ${Bricolage}`}
    >
      Designed and Developed by
      <Link
        className="ml-1 text-transparent"
        style={{
          background:
            'linear-gradient(to right, oklch(71.8% 0.202 349.761), oklch(74% 0.238 322.16), oklch(70.2% 0.183 293.541))',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
        }}
        href="https://x.com/abdullah_twt23"
        target="_black"
      >
        Abdullah Mukri
      </Link>
    </div>
  );
};

export default Footer;
