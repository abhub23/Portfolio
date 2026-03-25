import { cn } from '@/lib/utils';
import { Bricolage } from '@/utils/fonts';
import type { BtnProps } from '@/types/components/project-types';

export function Loadbtn({ name, onClick, icon }: BtnProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex cursor-pointer rounded-[3px] border border-black bg-black/90 px-[6px] py-px font-medium text-white lg:text-[12px] dark:bg-white dark:text-black',
        Bricolage
      )}
    >
      {name}
      <span className="p-[3px]">{icon}</span>
    </button>
  );
}
