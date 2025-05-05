# What New I learned

## 1. Using `Zustand` instead of ContextAPI

This is my useDarkmode file in Zustand where i also created an toggleDarkmode function which felt Why? `Reason is mentioned below...`

```ts
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
```

Here in Zustand i cant use useEffect like ContextAPI because `Zustand is not an react component like ContextAPI` so i created this toggleDarkmode function and make a seperate file called `DarkmodeProvider` which will wrap the main <App/> or {Children} in my React or Next App so changes will be applied globally.

```ts
import { ReactNode, useEffect } from 'react';
import { useDarkmode } from '@/store/useDarkmode';

export const DarkmodeProvider = ({ children }: { children: ReactNode }) => {
  const initializeTheme = useDarkmode((state) => state.initializeTheme);

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  return <>{children}</>;
};
```
