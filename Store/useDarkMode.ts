"use client";

import { create } from "zustand";

interface DarkModeState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const useDarkMode = create<DarkModeState>((set) => {
  let initialMode = true
  
  if (typeof window !== "undefined") {
    const storedPreference = localStorage.getItem("theme");
    initialMode = storedPreference === "dark";
    document.documentElement.classList.toggle("dark", initialMode);
  }

  return {
    isDarkMode: initialMode,
    toggleDarkMode: () =>
      set((state) => {
        const newMode = !state.isDarkMode;
        localStorage.setItem("theme", newMode ? "dark" : "light");
        document.documentElement.classList.toggle("dark", newMode);
        return { isDarkMode: newMode };
      }),
  };
});

export default useDarkMode;
