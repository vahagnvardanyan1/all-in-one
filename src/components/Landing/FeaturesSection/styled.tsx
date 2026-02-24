"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";

export const SectionRoot = styled(Box)({
  position: "relative",
  paddingTop: 96,
  paddingBottom: 96,
});

export const FeatureCard = styled(Card)(({ theme }) => ({
  padding: 32,
  background: theme.vars?.palette.background.paper,
  border: `1px solid ${theme.vars?.palette.divider}`,
  borderRadius: 16,
  transition: "all 0.3s ease",
  height: "100%",
  cursor: "default",
  "&:hover": {
    borderColor: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.5)`,
    boxShadow: `0 0 30px rgba(${theme.vars?.palette.primary.mainChannel} / 0.15), 0 0 60px rgba(${theme.vars?.palette.secondary.mainChannel} / 0.1)`,
    transform: "translateY(-4px)",
  },
}));

export const IconWrapper = styled(Box)({
  width: 56,
  height: 56,
  borderRadius: 12,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
  marginBottom: 20,
});
