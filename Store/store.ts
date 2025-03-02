import {create} from 'zustand'
type countType = {
    count: number;
    increment: () => void;
    decrement: () => void;
}
const useCount = create<countType>((set) => ({
    count: 0,
    increment: () => {set((state) => ({count: state.count+1}))},
    decrement: () => {set((state) => ({count: state.count-1}))}
}))