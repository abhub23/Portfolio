import { JSX } from 'react';
import { Bricolage } from '@/Utils/fonts';
import Button from './Button';

const Introsec: React.FC = (): JSX.Element => {
  return (
    <div className={`h-88 flex flex-col items-center mt-16 justify-center bg-transparent ${Bricolage} `}>
      <div className="text-5xl p-2 font-extrabold text-black">Hey, I'm Abdullah Mukri</div>
      <div className="text-md pt-2 mx-86 text-black">
        Hey folks Abdullah this side, a Software Engineer who loves to make cool products using
        Typescript and Go.
      </div>
      <div className="text-md mx-94 text-black">
        I have expertise in wide range of tech but always want to be known as a student of Computer
        science.
      </div>
      <div className="text-md px-2 mx-100 text-black">
        Want's to connect or just say hi? please don't hesitate. feel free to connect!
      </div>
      <div className="mt-10 flex space-x-10">
        <Button prop="Book a Meet" />
        <Button prop="Get in Touch" />
      </div>
    </div>
  );
};

export default Introsec;
