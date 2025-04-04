import Link from 'next/link';

const Footer = () => {
  return (
    <div className="h-10 bg-transparent flex font-extralight justify-center font-mono">
      Designed and Developed by
      <Link
        className="text-blue-400 underline ml-2.5"
        href="https://x.com/abdullah_twt23"
        target="_black"
      >
        Abdullah Mukri
      </Link>
    </div>
  );
};

export default Footer;
