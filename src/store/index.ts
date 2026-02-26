import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";

import createMarketplaceSlice, {
  type IMarketplaceStore,
} from "./slices/marketplace";
import createUiSlice, { type IUiStore } from "./slices/ui";

export type IAppStore = IUiStore & IMarketplaceStore;

const compare = <T>(a: T, b: T) => a === b || shallow(a, b);

export const useAppStore = createWithEqualityFn<IAppStore>(
  (...args) => ({
    ...createUiSlice(...args),
    ...createMarketplaceSlice(...args),
  }),
  compare,
);

export const getAppStore = useAppStore.getState;
export const setAppStore = useAppStore.setState;
