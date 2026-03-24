import { create } from 'zustand';
import type ConnectType from '@/types/state-types';

const useConnect = create<ConnectType>((set) => ({
  email: '',
  message: '',
  sendMessage: false,
  setEmail: (newemail: string) => set({ email: newemail }),
  setMessage: (newmessage: string) => set({ message: newmessage }),
  setSendMessage: (newmessage: boolean) => set({ sendMessage: newmessage }),
}));

export default useConnect;
