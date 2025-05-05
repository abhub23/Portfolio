'use client';

import { create } from 'zustand';

type DarkModeType = {
  isDarkmode: 'dark' | 'light';
  toggleDarkmode: () => void;
  initializeTheme: () => void;
};

export const useDarkmode = create<DarkModeType>((set) => ({
  isDarkmode: 'light',

  initializeTheme: () => {
    const storedPreference = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const prefersDark = storedPreference === 'dark';

    document.documentElement.classList.toggle('dark', prefersDark);
    document.documentElement.style.overflowY = 'auto';

    set({ isDarkmode: prefersDark ? 'dark' : 'light' });
  },

  toggleDarkmode: () =>
    set((state) => {
      const toggleTheme = state.isDarkmode === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', toggleTheme);
      document.documentElement.classList.toggle('dark', toggleTheme === 'dark');
      return { isDarkmode: toggleTheme };
    }),
}));
