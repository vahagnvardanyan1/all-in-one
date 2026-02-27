import type { StateCreator } from "zustand";

export interface ICompaniesStore {
  hiredCompanyIds: string[];
}

const createCompaniesSlice: StateCreator<ICompaniesStore> = () => ({
  hiredCompanyIds: [],
});

export default createCompaniesSlice;
