"use client";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const ChatContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: 420,
  background: `rgba(${theme.vars?.palette.background.defaultChannel} / 0.6)`,
  borderRadius: 12,
  border: `1px solid rgba(${theme.vars?.palette.primary.mainChannel} / 0.1)`,
  overflow: "hidden",
}));

export const ChatMessages = styled(Box)({
  flex: 1,
  overflowY: "auto",
  padding: 20,
  display: "flex",
  flexDirection: "column",
  gap: 16,
});

export const MessageBubble = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isUser",
})<{ isUser?: boolean }>(({ isUser, theme }) => ({
  maxWidth: "75%",
  padding: "10px 16px",
  borderRadius: 12,
  alignSelf: isUser ? "flex-end" : "flex-start",
  background: isUser
    ? "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)"
    : `rgba(${theme.vars?.palette.primary.mainChannel} / 0.08)`,
  border: isUser ? "none" : `1px solid ${theme.vars?.palette.divider}`,
  color: isUser ? "#fff" : theme.vars?.palette.text.primary,
  fontSize: "0.875rem",
  lineHeight: 1.6,
}));

export const ChatInputBar = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: 8,
  padding: 12,
  borderTop: `1px solid ${theme.vars?.palette.divider}`,
  background: `rgba(${theme.vars?.palette.background.paperChannel} / 0.6)`,
}));

export const TypingIndicator = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: 4,
  alignSelf: "flex-start",
  padding: "12px 16px",
  borderRadius: 12,
  background: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.08)`,
  border: `1px solid ${theme.vars?.palette.divider}`,
  "& span": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: theme.vars?.palette.primary.light,
    animation: "profileTypingBounce 1.4s infinite ease-in-out",
    "&:nth-of-type(2)": { animationDelay: "0.2s" },
    "&:nth-of-type(3)": { animationDelay: "0.4s" },
  },
  "@keyframes profileTypingBounce": {
    "0%, 80%, 100%": { transform: "scale(0.6)", opacity: 0.4 },
    "40%": { transform: "scale(1)", opacity: 1 },
  },
}));
