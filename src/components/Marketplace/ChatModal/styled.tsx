"use client";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

export const ModalTitle = styled(DialogTitle)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 12,
  background: `rgba(${theme.vars?.palette.background.paperChannel} / 0.95)`,
  borderBottom: `1px solid rgba(${theme.vars?.palette.primary.mainChannel} / 0.2)`,
  padding: "12px 16px",
}));

export const ModalAvatar = styled(Avatar)(({ theme }) => ({
  width: 40,
  height: 40,
  border: `2px solid rgba(${theme.vars?.palette.primary.mainChannel} / 0.3)`,
}));

export const CloseButton = styled(IconButton)(({ theme }) => ({
  marginLeft: "auto",
  color: theme.vars?.palette.text.secondary,
  "&:hover": {
    color: theme.vars?.palette.text.primary,
    backgroundColor: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.15)`,
  },
}));

export const MessagesArea = styled(DialogContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 12,
  padding: "20px 16px",
  background: `rgba(${theme.vars?.palette.background.defaultChannel} / 0.95)`,
  minHeight: 360,
  maxHeight: 400,
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: 6,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.3)`,
    borderRadius: 3,
  },
}));

export const MessageBubble = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isUser",
})<{ isUser?: boolean }>(({ isUser, theme }) => ({
  maxWidth: "75%",
  padding: "10px 14px",
  borderRadius: isUser ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
  background: isUser
    ? `linear-gradient(135deg, ${theme.vars?.palette.secondary.dark} 0%, ${theme.vars?.palette.secondary.main} 100%)`
    : `linear-gradient(135deg, rgba(${theme.vars?.palette.primary.mainChannel} / 0.3) 0%, rgba(${theme.vars?.palette.primary.mainChannel} / 0.15) 100%)`,
  alignSelf: isUser ? "flex-end" : "flex-start",
  fontSize: "0.875rem",
  lineHeight: 1.6,
  color: isUser ? "#fff" : theme.vars?.palette.text.primary,
}));

export const InputArea = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 8,
  padding: "12px 16px",
  background: `rgba(${theme.vars?.palette.background.paperChannel} / 0.95)`,
  borderTop: `1px solid rgba(${theme.vars?.palette.primary.mainChannel} / 0.2)`,
}));

export const ChatInput = styled(TextField)(({ theme }) => ({
  flex: 1,
  "& .MuiOutlinedInput-root": {
    borderRadius: 24,
    backgroundColor: `rgba(${theme.vars?.palette.text.primaryChannel} / 0.05)`,
    fontSize: "0.875rem",
    "& fieldset": {
      borderColor: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.2)`,
    },
    "&:hover fieldset": {
      borderColor: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.4)`,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.vars?.palette.primary.main,
    },
  },
}));

export const SendButton = styled(IconButton)({
  background: "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
  color: "#fff",
  width: 40,
  height: 40,
  "&:hover": {
    background: "linear-gradient(135deg, #6d28d9 0%, #2563eb 100%)",
    boxShadow: "0 0 20px rgba(124, 58, 237, 0.3)",
  },
  "&.Mui-disabled": {
    background: "rgba(124, 58, 237, 0.3)",
    color: "rgba(255, 255, 255, 0.4)",
  },
});

export const TypingIndicator = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: 4,
  alignSelf: "flex-start",
  padding: "12px 16px",
  borderRadius: "16px 16px 16px 4px",
  background: `linear-gradient(135deg, rgba(${theme.vars?.palette.primary.mainChannel} / 0.3) 0%, rgba(${theme.vars?.palette.primary.mainChannel} / 0.15) 100%)`,
  "& span": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: theme.vars?.palette.primary.light,
    animation: "typingBounce 1.4s infinite ease-in-out",
    "&:nth-of-type(2)": { animationDelay: "0.2s" },
    "&:nth-of-type(3)": { animationDelay: "0.4s" },
  },
  "@keyframes typingBounce": {
    "0%, 80%, 100%": { transform: "scale(0.6)", opacity: 0.4 },
    "40%": { transform: "scale(1)", opacity: 1 },
  },
}));
