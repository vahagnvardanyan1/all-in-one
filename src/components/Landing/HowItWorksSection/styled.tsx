"use client";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const SectionRoot = styled(Box)({
  position: "relative",
  paddingTop: 96,
  paddingBottom: 96,
});

export const StepCircle = styled(Box)({
  width: 64,
  height: 64,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
  fontSize: "1.5rem",
  fontWeight: 700,
  color: "#fff",
  marginBottom: 20,
  flexShrink: 0,
});

export const Connector = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 32,
  left: "calc(50% + 40px)",
  width: "calc(100% - 80px)",
  height: 2,
  background:
    "linear-gradient(90deg, rgba(124,58,237,0.4) 0%, rgba(59,130,246,0.4) 100%)",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const StepCard = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  position: "relative",
});
