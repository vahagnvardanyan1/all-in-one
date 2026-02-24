"use client";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const HEADER_HEIGHT = 52;

export const ShellRoot = styled(Box)(({ theme }) => ({
  display: "flex",
  minHeight: "100vh",
  backgroundColor: theme.vars?.palette.background.default,
}));

export const MainContent = styled("main")({
  flexGrow: 1,
  paddingTop: HEADER_HEIGHT,
  minHeight: "100vh",
  minWidth: 0,
});
