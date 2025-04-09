'use client';

import { ReactNode, useEffect } from 'react';
import { useDarkmode } from '@/store/useDarkmode';

export const DarkmodeProvider = ({ children }: { children: ReactNode }) => {
  const initializeTheme = useDarkmode((state) => state.initializeTheme);

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  return <>{children}</>;
};
