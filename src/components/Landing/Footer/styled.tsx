"use client";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const FooterRoot = styled(Box)(({ theme }) => ({
  borderTop: `1px solid ${theme.vars?.palette.divider}`,
  paddingTop: 64,
  paddingBottom: 32,
  background: `rgba(${theme.vars?.palette.background.defaultChannel} / 0.95)`,
})) as typeof Box;

export const BrandName = styled(Typography)({
  background: "linear-gradient(135deg, #7c3aed 0%, #3b82f6 50%, #06b6d4 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: 800,
  letterSpacing: "-0.02em",
});

export const FooterLink = styled(Typography)(({ theme }) => ({
  color: theme.vars?.palette.text.secondary,
  cursor: "pointer",
  transition: "color 0.2s ease",
  "&:hover": {
    color: theme.vars?.palette.text.primary,
  },
})) as typeof Typography;

export const BottomBar = styled(Box)(({ theme }) => ({
  borderTop: `1px solid rgba(${theme.vars?.palette.primary.mainChannel} / 0.1)`,
  marginTop: 48,
  paddingTop: 24,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 16,
}));

export const SocialIcon = styled(Box)(({ theme }) => ({
  width: 36,
  height: 36,
  borderRadius: 8,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: `1px solid rgba(${theme.vars?.palette.primary.mainChannel} / 0.2)`,
  color: theme.vars?.palette.text.secondary,
  cursor: "pointer",
  transition: "all 0.2s ease",
  "&:hover": {
    borderColor: theme.vars?.palette.primary.main,
    color: theme.vars?.palette.primary.main,
    backgroundColor: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.08)`,
  },
})) as typeof Box;
