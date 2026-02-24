"use client";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const mono = '"SF Mono", "Fira Code", Menlo, Consolas, monospace';

export const CardRoot = styled(Box)(({ theme }) => ({
  backgroundColor: theme.vars?.palette.background.paper,
  borderRadius: 8,
  overflow: "hidden",
  border: `1px solid rgba(${theme.vars?.palette.text.primaryChannel} / 0.08)`,
}));

export const TitleBar = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 8,
  padding: "9.6px 16px",
  borderBottom: `1px solid rgba(${theme.vars?.palette.text.primaryChannel} / 0.06)`,
}));

export const Dot = styled(Box)<{ color: string }>(({ color }) => ({
  width: 10,
  height: 10,
  borderRadius: "50%",
  backgroundColor: color,
}));

export const TitleBarLabel = styled(Typography)(({ theme }) => ({
  marginLeft: 8,
  fontSize: 12,
  color: theme.vars?.palette.text.disabled,
  fontFamily: mono,
}));

export const CounterRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 24,
  padding: 24,
});

export const CounterButton = styled(IconButton)(({ theme }) => ({
  color: theme.vars?.palette.text.secondary,
  border: `1px solid rgba(${theme.vars?.palette.text.primaryChannel} / 0.1)`,
  "&:hover": {
    backgroundColor: `rgba(${theme.vars?.palette.text.primaryChannel} / 0.05)`,
    color: theme.vars?.palette.text.primary,
  },
}));

export const CounterValue = styled(Typography)(({ theme }) => ({
  fontFamily: mono,
  fontSize: 32,
  fontWeight: 700,
  color: theme.vars?.palette.text.primary,
  minWidth: 60,
  textAlign: "center",
}));

export const CodeHint = styled(Box)(({ theme }) => ({
  borderTop: `1px solid rgba(${theme.vars?.palette.text.primaryChannel} / 0.06)`,
  padding: "12px 20px",
}));

export const CodeText = styled(Typography)(({ theme }) => ({
  fontFamily: mono,
  fontSize: 12,
  color: theme.vars?.palette.text.disabled,
})) as typeof Typography;
