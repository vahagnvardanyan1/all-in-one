"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";

export const HeaderCard = styled(Card)(({ theme }) => ({
  padding: 32,
  background: theme.vars?.palette.background.paper,
  border: `1px solid ${theme.vars?.palette.divider}`,
  borderRadius: 20,
}));

export const LogoWrapper = styled(Box)(({ theme }) => ({
  width: 100,
  height: 100,
  borderRadius: 16,
  overflow: "hidden",
  flexShrink: 0,
  border: `1px solid rgba(${theme.vars?.palette.primary.mainChannel} / 0.2)`,
  background: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.05)`,
}));

export const CategoryChip = styled(Chip)(({ theme }) => ({
  fontSize: "0.75rem",
  height: 26,
  background: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.15)`,
  color: theme.vars?.palette.primary.light,
  border: `1px solid rgba(${theme.vars?.palette.primary.mainChannel} / 0.3)`,
}));

export const ServiceChip = styled(Chip)(({ theme }) => ({
  fontSize: "0.7rem",
  height: 24,
  background: `rgba(${theme.vars?.palette.secondary.mainChannel} / 0.1)`,
  color: theme.vars?.palette.secondary.light,
  border: `1px solid rgba(${theme.vars?.palette.secondary.mainChannel} / 0.2)`,
}));

export const PricingBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 16,
  padding: "12px 0",
});

export const PricingItem = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: "8px 16px",
  borderRadius: 10,
  background: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.06)`,
  border: `1px solid rgba(${theme.vars?.palette.primary.mainChannel} / 0.12)`,
}));

export const HireButton = styled(Button)({
  background: "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
  padding: "10px 32px",
  fontSize: "0.95rem",
  fontWeight: 600,
  borderRadius: 10,
  "&:hover": {
    background: "linear-gradient(135deg, #6d28d9 0%, #2563eb 100%)",
    boxShadow: "0 0 24px rgba(124, 58, 237, 0.35)",
  },
}) as typeof Button;

export const BackLink = styled(Button)(({ theme }) => ({
  color: theme.vars?.palette.primary.light,
  textTransform: "none",
  fontWeight: 500,
  "&:hover": {
    backgroundColor: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.08)`,
  },
})) as typeof Button;
