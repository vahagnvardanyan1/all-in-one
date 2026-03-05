"use client";

import CssBaseline from "@mui/material/CssBaseline";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { useEffect } from "react";
import { useThemeStore } from "@/stores/themeStore";
import theme from "@/theme";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { mode, setMode } = useThemeStore();

  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode") || "light";
    setMode(savedMode);
  }, [setMode]);

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const appliedTheme = createTheme({
    ...theme,
    palette: {
      ...theme.palette,
      mode,
    },
  });

  return (
    <>
      <InitColorSchemeScript attribute="data-color-scheme" />
      <MuiThemeProvider theme={appliedTheme}>
        <CssBaseline enableColorScheme />
        {children}
      </MuiThemeProvider>
    </>
  );
};
