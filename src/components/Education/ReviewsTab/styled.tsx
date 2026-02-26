"use client";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const ReviewAvatar = styled(Avatar)(({ theme }) => ({
  width: 44,
  height: 44,
  border: `2px solid rgba(${theme.vars?.palette.primary.mainChannel} / 0.3)`,
}));

export const ReviewCard = styled(Box)(({ theme }) => ({
  padding: 20,
  borderRadius: 12,
  border: `1px solid ${theme.vars?.palette.divider}`,
  transition: "border-color 0.2s",
  "&:hover": {
    borderColor: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.3)`,
  },
}));
