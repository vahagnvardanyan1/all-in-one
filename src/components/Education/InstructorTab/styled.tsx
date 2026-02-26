"use client";

import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";

export const InstructorAvatar = styled(Avatar)(({ theme }) => ({
  width: 100,
  height: 100,
  border: `3px solid rgba(${theme.vars?.palette.primary.mainChannel} / 0.3)`,
}));

export const ExpertiseChip = styled(Chip)(({ theme }) => ({
  fontWeight: 600,
  borderColor: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.4)`,
  color: theme.vars?.palette.primary.light,
}));
