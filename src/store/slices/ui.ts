import type { StateCreator } from "zustand";

export interface IUiStore {
  sidebarOpen: boolean;
  counter: number;
}

const createUiSlice: StateCreator<IUiStore> = () => ({
  sidebarOpen: false,
  counter: 0,
});

export default createUiSlice;
