import { create } from 'zustand';
type countType = {
  darkmode: boolean;
  increment: () => void;
  decrement: () => void;
};
const useDarkmode = create<countType>((set) => ({
  darkmode: false,
  increment: () => {
    set((state) => ({ count: state.count + 1 }));
  },
  decrement: () => {
    set((state) => ({ count: state.count - 1 }));
  },
}));
