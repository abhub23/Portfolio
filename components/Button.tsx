'use client'

import { ShineBorder } from "./magicui/shine-border";
import { useDarkmode } from "@/store/useDarkmode";

interface Btntype {
  prop: string;
  onClick?: () => void;
}
const Button: React.FC<Btntype> = ({ prop, onClick }) => {

  const {isDarkmode} = useDarkmode()

  return (
   
    <button
      className="group cursor-pointer group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 
      hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 
      hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left 
      hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 lg:h-13 lg:w-50 h-12 w-40  text-left p-3 text-gray-50 lg:text-[14px] text-xs font-bold 
      rounded-lg  overflow-hidden  before:absolute before:w-10 before:h-10 before:content[''] before:right-1 before:top-1 before:z-10 
      before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-18 after:h-18 after:content['']  
      after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg"
      onClick={onClick}
    >
      <ShineBorder borderWidth={2} shineColor={['oklch(71.8% 0.202 349.761)', 'oklch(74% 0.238 322.16)', 'oklch(70.2% 0.183 293.541)']} />
      {prop}
    </button>
  );
};

export default Button;
