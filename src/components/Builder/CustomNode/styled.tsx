"use client";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const NodeCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== "borderColor",
})<{ borderColor?: string }>(({ borderColor = "#7c3aed", theme }) => ({
  backgroundColor: theme.vars?.palette.background.paper,
  border: `1px solid rgba(${theme.vars?.palette.primary.mainChannel} / 0.2)`,
  borderLeft: `3px solid ${borderColor}`,
  borderRadius: 12,
  padding: "14px 16px",
  minWidth: 200,
  color: theme.vars?.palette.text.primary,
  position: "relative",
  transition: "box-shadow 200ms ease",
  "&:hover": {
    boxShadow: `0 0 24px ${borderColor}33`,
  },
}));

export const NodeContent = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 12,
});

export const AvatarWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "ringColor",
})<{ ringColor?: string }>(({ ringColor = "#7c3aed" }) => ({
  width: 40,
  height: 40,
  borderRadius: "50%",
  border: `2px solid ${ringColor}`,
  overflow: "hidden",
  flexShrink: 0,
  backgroundColor: "#1e1b4b",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const NodeTextWrap = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 2,
  minWidth: 0,
});

export const DepartmentBadge = styled(Box, {
  shouldForwardProp: (prop) => prop !== "badgeColor",
})<{ badgeColor?: string }>(({ badgeColor = "#7c3aed" }) => ({
  display: "inline-flex",
  alignItems: "center",
  fontSize: "0.625rem",
  fontWeight: 600,
  color: badgeColor,
  backgroundColor: `${badgeColor}18`,
  padding: "2px 8px",
  borderRadius: 4,
  letterSpacing: "0.03em",
  marginTop: 4,
  width: "fit-content",
}));
