"use client";

import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";

import type { IPersonality } from "@/data/personalities";

import {
  ModalTitle,
  ModalAvatar,
  CloseButton,
  MessagesArea,
  MessageBubble,
  InputArea,
  ChatInput,
  SendButton,
} from "./styled";

interface ChatModalProps {
  open: boolean;
  onClose: () => void;
  personality: IPersonality | null;
}

const getMockMessages = (name: string) => [
  { isUser: false, text: `Hi there! I'm ${name}. How can I help you today?` },
  { isUser: true, text: "Hey! I'd love to learn more about what you can do." },
  {
    isUser: false,
    text: "Great question! I specialize in providing personalized guidance and support. I can help you set goals, track progress, and provide insights tailored to your needs.",
  },
  { isUser: true, text: "That sounds amazing. Can we start right away?" },
  {
    isUser: false,
    text: "Absolutely! Subscribe to unlock our full sessions. This demo gives you a taste of what we can achieve together.",
  },
];

export const ChatModal = ({ open, onClose, personality }: ChatModalProps) => {
  if (!personality) return null;

  const messages = getMockMessages(personality.name);

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

      <MessagesArea>
        {messages.map((msg, idx) => (
          <MessageBubble key={idx} isUser={msg.isUser}>
            {msg.text}
          </MessageBubble>
        ))}
      </MessagesArea>

      <InputArea>
        <ChatInput
          placeholder="Type a message..."
          size="small"
          variant="outlined"
        />
        <SendButton size="small">
          <SendIcon fontSize="small" />
        </SendButton>
      </InputArea>
    </Dialog>
  );
};
