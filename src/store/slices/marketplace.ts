import type { StateCreator } from "zustand";

export interface IMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: number;
}

export interface IMarketplaceStore {
  subscribedIds: string[];
  chatMessages: Record<string, IMessage[]>;
  typingPersonalityId: string | null;
}

const createMarketplaceSlice: StateCreator<IMarketplaceStore> = () => ({
  subscribedIds: [],
  chatMessages: {},
  typingPersonalityId: null,
});

export default createMarketplaceSlice;
