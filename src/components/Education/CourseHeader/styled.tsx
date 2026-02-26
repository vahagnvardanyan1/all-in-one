"use client";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const HeaderAvatar = styled(Avatar)(({ theme }) => ({
  width: 56,
  height: 56,
  border: `2px solid rgba(${theme.vars?.palette.primary.mainChannel} / 0.3)`,
}));

export const EnrollButton = styled(Button)({
  background: "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
  fontWeight: 600,
  paddingTop: 10,
  paddingBottom: 10,
  "&:hover": {
    background: "linear-gradient(135deg, #6d28d9 0%, #2563eb 100%)",
    boxShadow: "0 0 30px rgba(124, 58, 237, 0.4)",
  },
});
