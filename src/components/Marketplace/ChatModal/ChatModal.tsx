"use client";

import { useState, useRef, useEffect } from "react";

import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";

import type { IPersonality } from "@/data/personalities";
import { useChat } from "@/hooks/useChat";

import {
  ModalTitle,
  ModalAvatar,
  CloseButton,
  MessagesArea,
  MessageBubble,
  InputArea,
  ChatInput,
  SendButton,
  TypingIndicator,
} from "./styled";

interface ChatModalProps {
  open: boolean;
  onClose: () => void;
  personality: IPersonality | null;
}

export const ChatModal = ({ open, onClose, personality }: ChatModalProps) => {
  const [input, setInput] = useState("");
  const messagesRef = useRef<HTMLDivElement>(null);
  const { messages, sendMessage, isTyping } = useChat(personality?.id ?? "");

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  if (!personality) return null;

  const handleSend = () => {
    if (!input.trim() || isTyping) return;
    sendMessage(input);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      slotProps={{
        paper: {
          sx: (t) => ({
            background: `rgba(${t.vars?.palette.background.paperChannel} / 0.98)`,
            border: `1px solid rgba(${t.vars?.palette.primary.mainChannel} / 0.2)`,
            borderRadius: 3,
            overflow: "hidden",
          }),
        },
      }}
    >
      <ModalTitle>
        <ModalAvatar src={personality.avatar} alt={personality.name} />
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          {personality.name}
        </Typography>
        <CloseButton onClick={onClose} size="small">
          <CloseIcon fontSize="small" />
        </CloseButton>
      </ModalTitle>

      <MessagesArea ref={messagesRef}>
        {messages.map((msg) => (
          <MessageBubble key={msg.id} isUser={msg.isUser}>
            {msg.text}
          </MessageBubble>
        ))}
        {isTyping && (
          <TypingIndicator>
            <span />
            <span />
            <span />
          </TypingIndicator>
        )}
      </MessagesArea>

      <InputArea>
        <ChatInput
          placeholder="Type a message..."
          size="small"
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <SendButton
          size="small"
          onClick={handleSend}
          disabled={!input.trim() || isTyping}
        >
          <SendIcon fontSize="small" />
        </SendButton>
      </InputArea>
    </Dialog>
  );
};
