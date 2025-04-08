import { Bricolage_Grotesque, Press_Start_2P } from 'next/font/google';

const Bricolage_font = Bricolage_Grotesque({
  subsets: ['latin'],
});

const Press_Start_2P_font = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
});

export const Bricolage = Bricolage_font.className;
export const PressStart2P = Press_Start_2P_font.className;
