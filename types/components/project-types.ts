import { JSX } from 'react';

export type Cardprops = {
  Title: string;
  Desc: string;
  SrcLink: string;
  WebLink: string;
  Skills: string[];
  Imglink: React.HTMLInputTypeAttribute;
};

export type BtnProps = {
  name: string;
  onClick: () => void;
  icon: JSX.Element;
};
