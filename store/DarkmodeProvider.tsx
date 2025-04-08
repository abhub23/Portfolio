'use client'

import { ReactNode, useEffect } from 'react';
import { useDarkmode } from './useDarkmode';

export const DarkmodeProvider = ({ children }: { children: ReactNode }) => {
  const initializeTheme = useDarkmode((state) => state.initializeTheme);

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  return <>{children}</>;
};
