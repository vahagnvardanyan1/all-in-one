"use client";

import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import { SIDEBAR_WIDTH } from "@/components/Sidebar/styled";

export const HeaderBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "sidebarOpen" && prop !== "isDesktop",
})<{ sidebarOpen?: boolean; isDesktop?: boolean }>(
  ({ sidebarOpen, isDesktop, theme }) => ({
    backgroundColor: "red", // Changed to red as per the requirement
    backdropFilter: "blur(20px)",
    borderBottom: `1px solid ${theme.vars?.palette.divider}`,
    boxShadow: "none",
    transition:
      "margin-left 225ms cubic-bezier(0.4, 0, 0.6, 1), width 225ms cubic-bezier(0.4, 0, 0.6, 1)",
    ...(isDesktop &&
      sidebarOpen && {
        marginLeft: SIDEBAR_WIDTH,
        width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
      }),
  }),
);

export const BrandText = styled(Typography)({
  fontWeight: 800,
  fontSize: "1.125rem",
  letterSpacing: "-0.02em",
  background: "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});
