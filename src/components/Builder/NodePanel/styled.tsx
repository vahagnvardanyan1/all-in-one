"use client";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const PANEL_WIDTH = 280;

export const PanelRoot = styled(Box)(({ theme }) => ({
  width: PANEL_WIDTH,
  minWidth: PANEL_WIDTH,
  height: "100%",
  backgroundColor: theme.vars?.palette.background.paper,
  borderRight: `1px solid ${theme.vars?.palette.divider}`,
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
  overflowX: "hidden",
}));

export const PanelSection = styled(Box)(({ theme }) => ({
  padding: "16px 14px",
  borderBottom: `1px solid rgba(${theme.vars?.palette.primary.mainChannel} / 0.1)`,
}));

export const DraggableItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: 10,
  padding: "10px 12px",
  borderRadius: 8,
  border: `1px solid rgba(${theme.vars?.palette.primary.mainChannel} / 0.12)`,
  backgroundColor: theme.vars?.palette.background.paper,
  cursor: "grab",
  transition: "all 150ms ease",
  "&:hover": {
    backgroundColor: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.08)`,
    borderColor: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.3)`,
  },
  "&:active": {
    cursor: "grabbing",
  },
}));

export const DragAvatar = styled(Box, {
  shouldForwardProp: (prop) => prop !== "ringColor",
})<{ ringColor?: string }>(({ ringColor = "#7c3aed" }) => ({
  width: 30,
  height: 30,
  borderRadius: "50%",
  border: `2px solid ${ringColor}`,
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#1e1b4b",
  flexShrink: 0,
  marginTop: 2,
}));

export const WorkflowCard = styled(Box)(({ theme }) => ({
  padding: "10px 12px",
  borderRadius: 8,
  border: `1px solid rgba(${theme.vars?.palette.primary.mainChannel} / 0.12)`,
  backgroundColor: theme.vars?.palette.background.paper,
  cursor: "pointer",
  transition: "all 150ms ease",
  "&:hover": {
    backgroundColor: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.08)`,
    borderColor: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.3)`,
  },
}));

export const PanelActions = styled(Box)({
  padding: "12px 14px",
  display: "flex",
  flexDirection: "column",
  gap: 8,
  marginTop: "auto",
});
