import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";

import createAuthSlice, { type IAuthStore } from "./slices/auth";
import createCompaniesSlice, { type ICompaniesStore } from "./slices/companies";
import createEducationSlice, { type IEducationStore } from "./slices/education";
import createMarketplaceSlice, {
  type IMarketplaceStore,
} from "./slices/marketplace";
import createUiSlice, { type IUiStore } from "./slices/ui";
import createWorkflowsSlice, { type IWorkflowsStore } from "./slices/workflows";

export type IAppStore = IUiStore &
  IMarketplaceStore &
  ICompaniesStore &
  IEducationStore &
  IAuthStore &
  IWorkflowsStore;

const compare = <T>(a: T, b: T) => a === b || shallow(a, b);

export const useAppStore = createWithEqualityFn<IAppStore>(
  (...args) => ({
    ...createUiSlice(...args),
    ...createMarketplaceSlice(...args),
    ...createCompaniesSlice(...args),
    ...createEducationSlice(...args),
    ...createAuthSlice(...args),
    ...createWorkflowsSlice(...args),
  }),
  compare,
);

export const getAppStore = useAppStore.getState;
export const setAppStore = useAppStore.setState;
