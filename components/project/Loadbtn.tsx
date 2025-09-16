import { cn } from '@/lib/utils';
import { Bricolage } from '@/utils/fonts';
import { FC } from 'react';
import { BtnType } from '@/types/components/project';

export const Loadbtn: FC<BtnType> = ({ name, onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex cursor-pointer rounded-[3px] border-1 border-black bg-black/90 px-[6px] py-[1px] font-medium text-white lg:text-[12px] dark:bg-white dark:text-black',
        Bricolage
      )}
    >
      {name}
      <span className="p-[3px]">{icon}</span>
    </button>
  );
};
