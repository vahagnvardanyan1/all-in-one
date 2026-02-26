"use client";

import { useState, useRef, useEffect } from "react";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

import type { IPersonality } from "@/data/personalities";
import { useChat } from "@/hooks/useChat";

import {
  ChatContainer,
  ChatMessages,
  MessageBubble,
  ChatInputBar,
  TypingIndicator,
} from "./styled";

interface ProfileTabsProps {
  personality: IPersonality;
}

const tabSx = {
  color: "text.secondary",
  fontWeight: 600,
  "&.Mui-selected": { color: "primary.main" },
};

export const ProfileTabs = ({ personality }: ProfileTabsProps) => {
  const [tab, setTab] = useState(0);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { messages, sendMessage, isTyping } = useChat(personality.id);

  const handleTabChange = (_: React.SyntheticEvent, value: number) => {
    setTab(value);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Box
        sx={(t) => ({
          background: t.vars?.palette.background.paper,
          border: `1px solid ${t.vars?.palette.divider}`,
          borderRadius: 4,
          overflow: "hidden",
        })}
      >
        <Tabs
          value={tab}
          onChange={handleTabChange}
          sx={(t) => ({
            borderBottom: `1px solid ${t.vars?.palette.divider}`,
            px: 2,
            "& .MuiTabs-indicator": {
              background: "linear-gradient(90deg, #7c3aed, #3b82f6)",
            },
          })}
        >
          <Tab label="Description" sx={tabSx} />
          <Tab label="Features" sx={tabSx} />
          <Tab label="Chat" sx={tabSx} />
        </Tabs>

        <Box sx={{ p: 3, minHeight: 300 }}>
          {tab === 0 && (
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.8 }}
            >
              {personality.fullDescription}
            </Typography>
          )}

          {tab === 1 && (
            <List disablePadding>
              {personality.features.map((feature) => (
                <ListItem key={feature} sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <CheckCircleIcon
                      sx={{ color: "info.main", fontSize: 20 }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={feature}
                    primaryTypographyProps={{ color: "text.secondary" }}
                  />
                </ListItem>
              ))}
            </List>
          )}

          {tab === 2 && (
            <ChatContainer>
              <ChatMessages>
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
                <div ref={messagesEndRef} />
              </ChatMessages>
              <ChatInputBar>
                <TextField
                  fullWidth
                  placeholder="Type a message..."
                  size="small"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  sx={(t) => ({
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: `rgba(${t.vars?.palette.primary.mainChannel} / 0.2)`,
                      },
                      "&:hover fieldset": {
                        borderColor: `rgba(${t.vars?.palette.primary.mainChannel} / 0.4)`,
                      },
                    },
                    "& .MuiInputBase-input": {
                      color: t.vars?.palette.text.primary,
                    },
                  })}
                />
                <IconButton
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  sx={{
                    background:
                      "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
                    color: "#fff",
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #6d28d9 0%, #2563eb 100%)",
                    },
                    "&.Mui-disabled": {
                      background: "rgba(124, 58, 237, 0.3)",
                      color: "rgba(255, 255, 255, 0.4)",
                    },
                  }}
                >
                  <SendIcon fontSize="small" />
                </IconButton>
              </ChatInputBar>
            </ChatContainer>
          )}
        </Box>
      </Box>
    </motion.div>
  );
};
