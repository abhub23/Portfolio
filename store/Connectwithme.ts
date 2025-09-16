import { create } from 'zustand';
import { Email, Message, SendMessage } from '@/types/state-types';

export const useEmail = create<Email>((set) => ({
  email: '',
  setEmail: (newemail: string) => set({ email: newemail }),
}));

export const useMessage = create<Message>((set) => ({
  message: '',
  setMessage: (newmessage: string) => set({ message: newmessage }),
}));

export const useSendMessage = create<SendMessage>((set) => ({
  sendMessage: false,
  setSendMessage: (newmessage: boolean) => set({ sendMessage: newmessage }),
}));
