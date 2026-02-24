"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const SectionTitle = styled(Typography)({
  fontWeight: 700,
  background: "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  marginBottom: 8,
});

export const GlowCard = styled(Card)(({ theme }) => ({
  padding: 24,
  background: theme.vars?.palette.background.paper,
  border: `1px solid ${theme.vars?.palette.divider}`,
  borderRadius: 16,
  transition: "all 0.3s ease",
  "&:hover": {
    borderColor: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.4)`,
    boxShadow: `0 0 30px rgba(${theme.vars?.palette.primary.mainChannel} / 0.15)`,
    transform: "translateY(-2px)",
  },
}));

export const SectionWrapper = styled(Box)({
  marginBottom: 48,
});
