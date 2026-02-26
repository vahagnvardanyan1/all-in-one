"use client";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

export const StudentAvatar = styled(Avatar)(({ theme }) => ({
  width: 48,
  height: 48,
  border: `2px solid rgba(${theme.vars?.palette.primary.mainChannel} / 0.3)`,
}));

export const StudentCard = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 16,
  padding: 16,
  borderRadius: 12,
  border: `1px solid ${theme.vars?.palette.divider}`,
  transition: "border-color 0.2s",
  "&:hover": {
    borderColor: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.3)`,
  },
}));

export const ProgressBar = styled(LinearProgress)({
  height: 6,
  borderRadius: 3,
  flex: 1,
  backgroundColor: "rgba(124, 58, 237, 0.1)",
  "& .MuiLinearProgress-bar": {
    background: "linear-gradient(90deg, #7c3aed 0%, #3b82f6 100%)",
    borderRadius: 3,
  },
});
