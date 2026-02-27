import type { StateCreator } from "zustand";

export interface ISavedWorkflow {
  id: string;
  name: string;
  nodeCount: number;
  createdAt: string;
}

export interface IWorkflowsStore {
  savedWorkflows: ISavedWorkflow[];
}

const createWorkflowsSlice: StateCreator<IWorkflowsStore> = () => ({
  savedWorkflows: [],
});

export default createWorkflowsSlice;
