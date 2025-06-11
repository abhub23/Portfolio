'use client';

import { ReactNode, useEffect } from 'react';
import { useDarkmode } from '@/store/useDarkmode';

type ChildType = {
  children: ReactNode;
};

export const DarkmodeProvider: React.FC<ChildType> = ({ children }) => {
  const initializeTheme = useDarkmode((state) => state.initializeTheme);

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  return <>{children}</>;
};
