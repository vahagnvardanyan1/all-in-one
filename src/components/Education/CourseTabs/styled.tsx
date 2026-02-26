"use client";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const TabsContainer = styled(Box)(({ theme }) => ({
  background: theme.vars?.palette.background.paper,
  border: `1px solid ${theme.vars?.palette.divider}`,
  borderRadius: 16,
  overflow: "hidden",
}));
