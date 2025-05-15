import { create } from 'zustand';

type Email = {
  email: string;
  setEmail: (newemail: string) => void;
};
export const useEmail = create<Email>((set) => ({
  email: '',
  setEmail: (newemail: string) => set({ email: newemail }),
}));


type Message = {
  message: string;
  setMessage: (newmessage: string) => void;
};
export const useMessage = create<Message>((set) => ({
  message: '',
  setMessage: (newmessage: string) => set({ message: newmessage }),
}));
