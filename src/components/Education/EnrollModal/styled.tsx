"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const PriceBox = styled(Box)({
  fontSize: "1.75rem",
  fontWeight: 800,
  textAlign: "center",
  background: "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

export const ConfirmButton = styled(Button)({
  background: "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
  fontWeight: 600,
  paddingTop: 10,
  paddingBottom: 10,
  "&:hover": {
    background: "linear-gradient(135deg, #6d28d9 0%, #2563eb 100%)",
    boxShadow: "0 0 20px rgba(124, 58, 237, 0.3)",
  },
});
