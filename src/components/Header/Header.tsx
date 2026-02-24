"use client";

import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Link } from "@/i18n/navigation";
import type { IAppStore } from "@/store";
import { useAppStore, setAppStore } from "@/store";

import { HeaderBar, BrandText } from "./styled";

const sidebarSelector = (store: IAppStore) => store.sidebarOpen;

const toggleSidebar = () => {
  setAppStore((s) => ({ sidebarOpen: !s.sidebarOpen }));
};

export const Header = () => {
  const sidebarOpen = useAppStore(sidebarSelector);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <HeaderBar position="fixed" sidebarOpen={sidebarOpen} isDesktop={isDesktop}>
      <Toolbar
        variant="dense"
        sx={{
          minHeight: 52,
          px: { xs: 1.5, md: 2.5 },
          gap: 1,
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="toggle sidebar"
          onClick={toggleSidebar}
          sx={{
            color: "text.secondary",
            "&:hover": { color: "text.primary" },
          }}
        >
          <MenuIcon />
        </IconButton>

        <BrandText variant="body1">AIverse</BrandText>

        <Box sx={{ flexGrow: 1 }} />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Button
            component={Link}
            href="/login"
            variant="outlined"
            size="small"
            sx={(t) => ({
              color: t.vars?.palette.text.secondary,
              borderColor: `rgba(${t.vars?.palette.primary.mainChannel} / 0.3)`,
              fontSize: "0.8125rem",
              px: 2,
              "&:hover": {
                borderColor: t.vars?.palette.primary.main,
                color: t.vars?.palette.text.primary,
                backgroundColor: `rgba(${t.vars?.palette.primary.mainChannel} / 0.08)`,
              },
            })}
          >
            Login
          </Button>
          <Button
            component={Link}
            href="/register"
            variant="outlined"
            size="small"
            sx={(t) => ({
              color: t.vars?.palette.text.secondary,
              borderColor: `rgba(${t.vars?.palette.primary.mainChannel} / 0.3)`,
              fontSize: "0.8125rem",
              px: 2,
              "&:hover": {
                borderColor: t.vars?.palette.primary.main,
                color: t.vars?.palette.text.primary,
                backgroundColor: `rgba(${t.vars?.palette.primary.mainChannel} / 0.08)`,
              },
            })}
          >
            Register
          </Button>
        </Box>
      </Toolbar>
    </HeaderBar>
  );
};
