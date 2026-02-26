"use client";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const StyledAccordion = styled(Accordion)(({ theme }) => ({
  background: "transparent",
  border: `1px solid ${theme.vars?.palette.divider}`,
  borderRadius: "12px !important",
  marginBottom: 8,
  "&:before": { display: "none" },
  "&.Mui-expanded": { margin: "0 0 8px 0" },
}));

export const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  "& .MuiAccordionSummary-content": { margin: "12px 0" },
  "&:hover": {
    backgroundColor: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.04)`,
  },
}));

export const StyledAccordionDetails = styled(AccordionDetails)({
  padding: "0 16px 16px",
});

export const LessonRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 12,
  padding: "10px 12px",
  borderRadius: 8,
  transition: "background 0.2s",
  "&:hover": {
    backgroundColor: `rgba(${theme.vars?.palette.primary.mainChannel} / 0.04)`,
  },
}));
