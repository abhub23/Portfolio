'use client';

interface Btntype {
  prop: string;
  onClick?: () => void;
}
const Button: React.FC<Btntype> = ({ prop, onClick }) => {
  return (
    <button
  className="group relative h-[30px] w-[100px] origin-left cursor-pointer overflow-hidden rounded-lg bg-neutral-800 text-center lg:text-left lg:p-3 text-[8px] font-bold text-white underline underline-offset-2 duration-500
  before:absolute before:top-1 before:right-1 before:z-10 before:h-10 before:w-10 before:rounded-full before:bg-violet-500 before:blur-lg before:duration-500 group-hover:before:duration-500
  after:absolute after:top-3 after:right-8 after:z-10 after:h-20 after:w-10 after:rounded-full after:bg-rose-300 after:blur-lg after:duration-500 group-hover:after:duration-500
  hover:text-rose-300 hover:underline hover:decoration-2 hover:underline-offset-4 hover:duration-500 hover:before:right-12 hover:before:-bottom-8 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] hover:before:blur hover:after:-right-8
  lg:h-[52px] lg:w-[208px] lg:text-[15px] lg:text-gray-50 lg:after:h-20 lg:after:w-20"
  onClick={onClick}
>
  <span className="relative z-20 lg:z-0">{prop}</span>
</button>

  );
};

export default Button;
