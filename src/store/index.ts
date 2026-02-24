import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";

import createUiSlice, { type IUiStore } from "./slices/ui";

export type IAppStore = IUiStore;

const compare = <T>(a: T, b: T) => a === b || shallow(a, b);

export const useAppStore = createWithEqualityFn<IAppStore>(
  (...args) => ({
    ...createUiSlice(...args),
  }),
  compare,
);

export const getAppStore = useAppStore.getState;
export const setAppStore = useAppStore.setState;
