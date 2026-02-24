"use client";

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
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "all 0.3s ease",
}));

export const CardHeader = styled(Box)({
  display: "flex",
  alignItems: "flex-start",
  gap: 16,
  marginBottom: 16,
});

export const LogoWrapper = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  borderRadius: 12,
  overflow: "hidden",
  flexShrink: 0,
  border: `1px solid rgba(${theme.vars?.palette.primary.mainChannel} / 0.2)`,
  background: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.05)`,
}));

export const CategoryChip = styled(Chip)(({ theme }) => ({
  fontSize: "0.7rem",
  height: 24,
  background: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.15)`,
  color: theme.vars?.palette.primary.light,
  border: `1px solid rgba(${theme.vars?.palette.primary.mainChannel} / 0.3)`,
}));

export const ServiceChip = styled(Chip)(({ theme }) => ({
  fontSize: "0.7rem",
  height: 22,
  background: `rgba(${theme.vars?.palette.secondary.mainChannel} / 0.1)`,
  color: theme.vars?.palette.secondary.light,
  border: `1px solid rgba(${theme.vars?.palette.secondary.mainChannel} / 0.2)`,
}));

export const StatsRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: 12,
  marginBottom: 16,
  paddingTop: 12,
  borderTop: `1px solid rgba(${theme.vars?.palette.primary.mainChannel} / 0.1)`,
}));

export const HireButton = styled(Button)({
  background: "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
  "&:hover": {
    background: "linear-gradient(135deg, #6d28d9 0%, #2563eb 100%)",
    boxShadow: "0 0 20px rgba(124, 58, 237, 0.3)",
  },
}) as typeof Button;

export const DetailsButton = styled(Button)(({ theme }) => ({
  borderColor: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.4)`,
  color: theme.vars?.palette.text.primary,
  "&:hover": {
    borderColor: theme.vars?.palette.primary.main,
    backgroundColor: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.08)`,
  },
})) as typeof Button;
