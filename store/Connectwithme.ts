import {create} from 'zustand'

type Name = {
    name: string;
    setName: (newname: string) => void
}
export const useName = create<Name>((set) => ({
    name: "",
    setName: (newname: string) => set({name: newname })
}))


type Email = {
    email: string;
    setEmail: (newemail: string) => void
}
export const useEmail = create<Email>((set) => ({
    email: "",
    setEmail: (newemail: string) => set({email: newemail })
}))


type Message = {
    message: string;
    setMessage: (newmessage: string) => void
}
export const useMessage = create<Message>((set) => ({
    message: "",
    setMessage: (newmessage: string) => set({message: newmessage })
}))