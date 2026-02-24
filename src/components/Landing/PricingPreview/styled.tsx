"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";

export const SectionRoot = styled(Box)({
  position: "relative",
  paddingTop: 96,
  paddingBottom: 96,
});

export const PricingCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== "highlighted",
})<{ highlighted?: boolean }>(({ highlighted, theme }) => ({
  padding: 32,
  background: highlighted
    ? `rgba(${theme.vars?.palette.primary.mainChannel} / 0.1)`
    : theme.vars?.palette.background.paper,
  border: highlighted
    ? `1px solid rgba(${theme.vars?.palette.primary.mainChannel} / 0.5)`
    : `1px solid ${theme.vars?.palette.divider}`,
  borderRadius: 16,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "all 0.3s ease",
  position: "relative",
  overflow: "visible",
  "&:hover": {
    borderColor: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.5)`,
    boxShadow: `0 0 30px rgba(${theme.vars?.palette.primary.mainChannel} / 0.15)`,
    transform: "translateY(-4px)",
  },
}));

export const PriceTag = styled(Box)({
  display: "flex",
  alignItems: "baseline",
  gap: 4,
  marginBottom: 24,
});

export const PopularBadge = styled(Box)({
  position: "absolute",
  top: -12,
  left: "50%",
  transform: "translateX(-50%)",
  background: "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
  color: "#fff",
  padding: "4px 16px",
  borderRadius: 20,
  fontSize: "0.75rem",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: 1,
  whiteSpace: "nowrap",
});

export const ViewPricingButton = styled(Button)(({ theme }) => ({
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
