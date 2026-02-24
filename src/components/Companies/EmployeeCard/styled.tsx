"use client";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";

export const StyledEmployeeCard = styled(Card)(({ theme }) => ({
  padding: 20,
  background: theme.vars?.palette.background.paper,
  border: `1px solid ${theme.vars?.palette.divider}`,
  borderRadius: 16,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "all 0.3s ease",
  "&:hover": {
    borderColor: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.35)`,
    boxShadow: `0 8px 32px rgba(${theme.vars?.palette.primary.mainChannel} / 0.15)`,
  },
}));

interface StatusAvatarProps {
  statusColor: string;
}

export const StatusAvatar = styled(Avatar, {
  shouldForwardProp: (prop) => prop !== "statusColor",
})<StatusAvatarProps>(({ statusColor, theme }) => ({
  width: 56,
  height: 56,
  border: `2px solid ${statusColor}`,
  background: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.05)`,
}));

export const DepartmentChip = styled(Chip)(({ theme }) => ({
  fontSize: "0.7rem",
  height: 22,
  background: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.12)`,
  color: theme.vars?.palette.primary.light,
  border: `1px solid rgba(${theme.vars?.palette.primary.mainChannel} / 0.25)`,
}));

export const StatusDot = styled(Box, {
  shouldForwardProp: (prop) => prop !== "statusColor",
})<{ statusColor: string }>(({ statusColor }) => ({
  width: 8,
  height: 8,
  borderRadius: "50%",
  backgroundColor: statusColor,
  flexShrink: 0,
}));

export const BottomRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "auto",
  paddingTop: 12,
  borderTop: `1px solid rgba(${theme.vars?.palette.primary.mainChannel} / 0.1)`,
}));
