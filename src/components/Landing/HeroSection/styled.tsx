"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const HeroRoot = styled(Box)({
  position: "relative",
  overflow: "hidden",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const BackgroundGlow = styled(Box)({
  position: "absolute",
  top: "-20%",
  left: "50%",
  transform: "translateX(-50%)",
  width: 1000,
  height: 800,
  background:
    "radial-gradient(ellipse, rgba(124,58,237,0.15) 0%, rgba(59,130,246,0.08) 40%, transparent 70%)",
  pointerEvents: "none",
});

export const Orb = styled(Box)({
  position: "absolute",
  borderRadius: "50%",
  filter: "blur(60px)",
  pointerEvents: "none",
  opacity: 0.4,
});

export const GradientHeadline = styled(Typography)({
  background: "linear-gradient(135deg, #7c3aed 0%, #3b82f6 50%, #06b6d4 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  lineHeight: 1.1,
  marginBottom: 24,
});

export const SubHeadline = styled(Typography)({
  fontWeight: 400,
  maxWidth: 640,
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: 48,
  lineHeight: 1.7,
}) as typeof Typography;

export const PrimaryCta = styled(Button)({
  paddingLeft: 32,
  paddingRight: 32,
  paddingTop: 12,
  paddingBottom: 12,
  fontSize: "1rem",
  background: "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
  "&:hover": {
    background: "linear-gradient(135deg, #6d28d9 0%, #2563eb 100%)",
    boxShadow: "0 0 30px rgba(124, 58, 237, 0.4)",
  },
}) as typeof Button;

export const SecondaryCta = styled(Button)(({ theme }) => ({
  paddingLeft: 32,
  paddingRight: 32,
  paddingTop: 12,
  paddingBottom: 12,
  fontSize: "1rem",
  borderColor: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.4)`,
  color: theme.vars?.palette.text.primary,
  "&:hover": {
    borderColor: theme.vars?.palette.primary.main,
    backgroundColor: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.08)`,
  },
})) as typeof Button;
