"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const AuthPageRoot = styled(Box)({
  position: "relative",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  padding: "24px 16px",
});

export const GlassCard = styled(Card)(({ theme }) => ({
  maxWidth: 440,
  width: "100%",
  padding: 40,
  background: `rgba(${theme.vars?.palette.background.paperChannel} / 0.8)`,
  backdropFilter: "blur(24px)",
  WebkitBackdropFilter: "blur(24px)",
  border: `1px solid rgba(${theme.vars?.palette.primary.mainChannel} / 0.2)`,
  borderRadius: 20,
  position: "relative",
  zIndex: 1,
}));

export const BrandTitle = styled(Typography)({
  fontWeight: 800,
  fontSize: "1.75rem",
  textAlign: "center",
  marginBottom: 8,
  background: "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

export const GradientButton = styled(Button)({
  padding: "12px 0",
  fontSize: "1rem",
  fontWeight: 600,
  background: "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
  "&:hover": {
    background: "linear-gradient(135deg, #6d28d9 0%, #2563eb 100%)",
    boxShadow: "0 0 30px rgba(124, 58, 237, 0.4)",
  },
});

export const Orb = styled(Box)({
  position: "absolute",
  borderRadius: "50%",
  filter: "blur(80px)",
  pointerEvents: "none",
  opacity: 0.35,
});

export const AuthLink = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: theme.vars?.palette.text.secondary,
  fontSize: "0.875rem",
  "& a": {
    color: theme.vars?.palette.primary.main,
    textDecoration: "none",
    fontWeight: 600,
    "&:hover": {
      textDecoration: "underline",
    },
  },
})) as typeof Typography;
