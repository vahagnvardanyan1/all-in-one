"use client";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";

export const StyledCard = styled(Card)(({ theme }) => ({
  padding: 24,
  background: theme.vars?.palette.background.paper,
  border: `1px solid ${theme.vars?.palette.divider}`,
  borderRadius: 16,
  transition: "all 0.3s ease",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  overflow: "visible",
  "&:hover": {
    borderColor: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.5)`,
    boxShadow: `0 0 30px rgba(${theme.vars?.palette.primary.mainChannel} / 0.15), 0 0 60px rgba(${theme.vars?.palette.secondary.mainChannel} / 0.1)`,
  },
}));

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 64,
  height: 64,
  border: `2px solid rgba(${theme.vars?.palette.primary.mainChannel} / 0.3)`,
}));

export const CategoryChip = styled(Chip)(({ theme }) => ({
  height: 24,
  fontSize: "0.75rem",
  fontWeight: 600,
  borderColor: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.4)`,
  color: theme.vars?.palette.primary.light,
}));

export const PopularChip = styled(Chip)({
  position: "absolute",
  top: -10,
  right: 16,
  height: 24,
  fontSize: "0.7rem",
  fontWeight: 700,
  background: "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
  color: "#fff",
  letterSpacing: "0.5px",
});

export const PriceText = styled(Box)({
  fontSize: "1.25rem",
  fontWeight: 700,
  background: "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

export const SubscribeButton = styled(Button)({
  flex: 1,
  background: "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
  fontWeight: 600,
  "&:hover": {
    background: "linear-gradient(135deg, #6d28d9 0%, #2563eb 100%)",
    boxShadow: "0 0 20px rgba(124, 58, 237, 0.3)",
  },
});

export const SubscribedButton = styled(Button)({
  flex: 1,
  background: "rgba(16, 185, 129, 0.15)",
  color: "#10b981",
  fontWeight: 600,
  border: "1px solid rgba(16, 185, 129, 0.3)",
  pointerEvents: "none",
  "&:hover": {
    background: "rgba(16, 185, 129, 0.15)",
  },
});

export const DemoChatButton = styled(Button)(({ theme }) => ({
  flex: 1,
  borderColor: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.4)`,
  color: theme.vars?.palette.primary.light,
  fontWeight: 600,
  "&:hover": {
    borderColor: theme.vars?.palette.primary.main,
    backgroundColor: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.08)`,
  },
}));
