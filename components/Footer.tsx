import Link from 'next/link';
import { Bricolage } from '@/utils/fonts';


const Footer = () => {
  return (
    <div
      className={`h-10 bg-transparent lg:text-[16px] text-[12px] flex justify-center items-center mb-2 dark:text-white ${Bricolage}`}
    >
      Designed and Developed by
      <Link
className="text-transparent ml-1"
style={{
  background: 'linear-gradient(to right, oklch(71.8% 0.202 349.761), oklch(74% 0.238 322.16), oklch(70.2% 0.183 293.541))',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
}}        href="https://x.com/abdullah_twt23"
        target="_black"
      >
        Abdullah Mukri
      </Link>
    </div>
  );
};

export default Footer;
