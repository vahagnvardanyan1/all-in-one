"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-color-scheme",
  },
  defaultColorScheme: "light", // Changed from "dark" to "light" for initial load
  colorSchemes: {
    dark: {
      palette: {
        primary: { main: "#7c3aed" },
        secondary: { main: "#3b82f6" },
        background: {
          default: "#030014",
          paper: "#0a0a1a",
        },
        text: {
          primary: "#f1f5f9",
          secondary: "#94a3b8",
        },
        divider: "rgba(124, 58, 237, 0.15)",
        success: { main: "#10b981" },
        warning: { main: "#f59e0b" },
        error: { main: "#ef4444" },
      },
    },
    light: {
      palette: {
        primary: { main: "#7c3aed" },
        secondary: { main: "#3b82f6" },
        background: {
          default: "#f8fafc",
          paper: "#ffffff",
        },
        text: {
          primary: "#0f172a",
          secondary: "#64748b",
        },
        divider: "rgba(124, 58, 237, 0.12)",
        success: { main: "#10b981" },
        warning: { main: "#f59e0b" },
        error: { main: "#ef4444" },
      },
    },
  },
  typography: {
    fontFamily: "var(--font-roboto)",
    h1: { fontWeight: 800, letterSpacing: "-0.04em" },
    h2: { fontWeight: 700, letterSpacing: "-0.03em" },
    h3: { fontWeight: 700, letterSpacing: "-0.02em" },
    h4: { fontWeight: 600, letterSpacing: "-0.01em" },
    h5: { fontWeight: 600, letterSpacing: "-0.01em" },
    h6: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 8,
        },
        containedPrimary: {
          background: "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
          "&:hover": {
            background: "linear-gradient(135deg, #6d28d9 0%, #2563eb 100%)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          backgroundImage: "none",
          border: `1px solid ${t.vars?.palette.divider}`,
        }),
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

export default theme;
