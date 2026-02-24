"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";

export const TierCard = styled(Card)<{ highlighted?: boolean }>(
  ({ highlighted, theme }) => ({
    padding: 32,
    background: highlighted
      ? `rgba(${theme.vars?.palette.primary.mainChannel} / 0.1)`
      : theme.vars?.palette.background.paper,
    border: highlighted
      ? `2px solid rgba(${theme.vars?.palette.primary.mainChannel} / 0.5)`
      : `1px solid ${theme.vars?.palette.divider}`,
    borderRadius: 20,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    transition: "all 0.3s ease",
    position: "relative",
    overflow: "visible",
    transform: highlighted ? "scale(1.03)" : "none",
    "&:hover": {
      borderColor: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.5)`,
      boxShadow: highlighted
        ? `0 0 50px rgba(${theme.vars?.palette.primary.mainChannel} / 0.25)`
        : `0 0 30px rgba(${theme.vars?.palette.primary.mainChannel} / 0.15)`,
      transform: highlighted ? "scale(1.05)" : "translateY(-4px)",
    },
  }),
);

export const PopularBadge = styled(Box)({
  position: "absolute",
  top: -14,
  left: "50%",
  transform: "translateX(-50%)",
  background: "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
  color: "#fff",
  padding: "6px 20px",
  borderRadius: 20,
  fontSize: "0.75rem",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: 1,
  whiteSpace: "nowrap",
});

export const PriceTag = styled(Box)({
  display: "flex",
  alignItems: "baseline",
  gap: 4,
  marginBottom: 24,
  marginTop: 8,
});

export const ToggleWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 16,
  marginBottom: 56,
});
