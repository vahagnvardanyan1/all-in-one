"use client";

import MuiDrawer from "@mui/material/Drawer";
import MuiListItemButton from "@mui/material/ListItemButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import { Link } from "@/i18n/navigation";

export const SIDEBAR_WIDTH = 260;

export const SidebarDrawer = styled(MuiDrawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: SIDEBAR_WIDTH,
    backgroundColor: theme.vars?.palette.background.paper,
    borderRight: `1px solid ${theme.vars?.palette.divider}`,
    overflowX: "hidden",
  },
}));

export const BrandText = styled(Typography)({
  fontWeight: 800,
  fontSize: "1.25rem",
  letterSpacing: "-0.02em",
  background: "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

export const NavItemButton = styled(MuiListItemButton, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>(({ active, theme }) => ({
  borderRadius: 8,
  marginLeft: 8,
  marginRight: 8,
  marginBottom: 2,
  color: active
    ? theme.vars?.palette.text.primary
    : theme.vars?.palette.text.secondary,
  backgroundColor: active
    ? `rgba(${theme.vars?.palette.primary.mainChannel} / 0.1)`
    : "transparent",
  borderLeft: "3px solid transparent",
  borderImage: active ? "linear-gradient(180deg, #7c3aed, #3b82f6) 1" : "none",
  "&:hover": {
    backgroundColor: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.08)`,
    color: theme.vars?.palette.text.primary,
  },
  "& .MuiListItemIcon-root": {
    color: active
      ? theme.vars?.palette.primary.main
      : theme.vars?.palette.text.secondary,
    minWidth: 40,
  },
  "& .MuiListItemText-primary": {
    fontSize: "0.875rem",
    fontWeight: active ? 600 : 400,
  },
}));

export const NavLink = styled(Link)({
  textDecoration: "none",
  color: "inherit",
  width: "100%",
});
