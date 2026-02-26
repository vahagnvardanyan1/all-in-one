"use client";

import { useEffect, useRef } from "react";

import { AI_PERSONALITIES } from "@/data/personalities";
import { useAppStore, setAppStore } from "@/store";
import type { IAppStore } from "@/store";
import type { IMessage } from "@/store/slices/marketplace";

const messagesSelector = (personalityId: string) => (s: IAppStore) =>
  s.chatMessages[personalityId] ?? [];

const typingSelector = (personalityId: string) => (s: IAppStore) =>
  s.typingPersonalityId === personalityId;

const useChat = (personalityId: string) => {
  const messages = useAppStore(messagesSelector(personalityId));
  const isTyping = useAppStore(typingSelector(personalityId));
  const responseIndexRef = useRef(0);

  useEffect(() => {
    const existing = useAppStore.getState().chatMessages[personalityId];

    if (!existing || existing.length === 0) {
      const personality = AI_PERSONALITIES.find((p) => p.id === personalityId);

      if (!personality) return;

      const greeting: IMessage = {
        id: `msg-${Date.now()}`,
        text: `Hi there! I'm ${personality.name}. How can I help you today?`,
        isUser: false,
        timestamp: Date.now(),
      };

      setAppStore((s) => ({
        chatMessages: {
          ...s.chatMessages,
          [personalityId]: [greeting],
        },
      }));
    }
  }, [personalityId]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const personality = AI_PERSONALITIES.find((p) => p.id === personalityId);

    if (!personality) return;

    const userMsg: IMessage = {
      id: `msg-${Date.now()}-user`,
      text: text.trim(),
      isUser: true,
      timestamp: Date.now(),
    };

    setAppStore((s) => ({
      chatMessages: {
        ...s.chatMessages,
        [personalityId]: [...(s.chatMessages[personalityId] ?? []), userMsg],
      },
    }));

    setAppStore({ typingPersonalityId: personalityId });

    const delay = 1000 + Math.random() * 500;
    const currentIndex = responseIndexRef.current;

    responseIndexRef.current =
      (currentIndex + 1) % personality.mockResponses.length;

    setTimeout(() => {
      const aiMsg: IMessage = {
        id: `msg-${Date.now()}-ai`,
        text: personality.mockResponses[currentIndex],
        isUser: false,
        timestamp: Date.now(),
      };

      setAppStore((s) => ({
        chatMessages: {
          ...s.chatMessages,
          [personalityId]: [...(s.chatMessages[personalityId] ?? []), aiMsg],
        },
        typingPersonalityId:
          s.typingPersonalityId === personalityId
            ? null
            : s.typingPersonalityId,
      }));
    }, delay);
  };

  return { messages, sendMessage, isTyping };
};

export { useChat };
