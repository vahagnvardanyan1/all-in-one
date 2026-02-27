import type { StateCreator } from "zustand";

export interface IEducationStore {
  enrolledCourseIds: string[];
}

const createEducationSlice: StateCreator<IEducationStore> = () => ({
  enrolledCourseIds: [],
});

export default createEducationSlice;
