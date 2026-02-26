"use client";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";

export const StyledCard = styled(Card)(({ theme }) => ({
  padding: 24,
  background: theme.vars?.palette.background.paper,
  border: `1px solid ${theme.vars?.palette.divider}`,
  borderRadius: 16,
  transition: "all 0.3s ease",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  overflow: "visible",
  "&:hover": {
    borderColor: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.5)`,
    boxShadow: `0 0 30px rgba(${theme.vars?.palette.primary.mainChannel} / 0.15), 0 0 60px rgba(${theme.vars?.palette.secondary.mainChannel} / 0.1)`,
  },
}));

export const InstructorAvatar = styled(Avatar)(({ theme }) => ({
  width: 40,
  height: 40,
  border: `2px solid rgba(${theme.vars?.palette.primary.mainChannel} / 0.3)`,
}));

export const DifficultyChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== "difficultyColor",
})<{ difficultyColor: string }>(({ difficultyColor }) => ({
  height: 24,
  fontSize: "0.7rem",
  fontWeight: 700,
  borderColor: difficultyColor,
  color: difficultyColor,
}));

export const CategoryChip = styled(Chip)(({ theme }) => ({
  height: 24,
  fontSize: "0.75rem",
  fontWeight: 600,
  borderColor: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.4)`,
  color: theme.vars?.palette.primary.light,
}));

export const PopularChip = styled(Chip)({
  position: "absolute",
  top: -10,
  right: 16,
  height: 24,
  fontSize: "0.7rem",
  fontWeight: 700,
  background: "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
  color: "#fff",
  letterSpacing: "0.5px",
});

export const PriceText = styled(Box)({
  fontSize: "1.25rem",
  fontWeight: 700,
  background: "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
});
