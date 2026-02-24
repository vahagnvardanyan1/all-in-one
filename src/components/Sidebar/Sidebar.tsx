"use client";

import AccountTreeIcon from "@mui/icons-material/AccountTree";
import BusinessIcon from "@mui/icons-material/Business";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import PaymentsIcon from "@mui/icons-material/Payments";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import { usePathname } from "@/i18n/navigation";

import {
  SidebarDrawer,
  BrandText,
  NavItemButton,
  NavLink,
  SIDEBAR_WIDTH,
} from "./styled";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const NAV_ITEMS = [
  { label: "Home", icon: HomeIcon, href: "/" },
  { label: "AI Marketplace", icon: SmartToyIcon, href: "/marketplace" },
  { label: "AI Companies", icon: BusinessIcon, href: "/companies" },
  { label: "AI Builder", icon: AccountTreeIcon, href: "/builder" },
  { label: "Dashboard", icon: DashboardIcon, href: "/dashboard" },
  { label: "Pricing", icon: PaymentsIcon, href: "/pricing" },
] as const;

const AUTH_ITEMS = [
  { label: "Login", icon: LoginIcon, href: "/login" },
  { label: "Register", icon: PersonAddIcon, href: "/register" },
] as const;

export const Sidebar = ({ open, onClose }: SidebarProps) => {
  const pathname = usePathname();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const handleItemClick = isDesktop ? undefined : onClose;

  const drawerContent = (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Box sx={{ p: 2.5, display: "flex", alignItems: "center", gap: 1.5 }}>
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: "8px",
            background: "linear-gradient(135deg, #7c3aed, #3b82f6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 800,
            fontSize: 16,
            color: "#fff",
          }}
        >
          AI
        </Box>
        <BrandText>AIverse</BrandText>
      </Box>

      <List sx={{ flex: 1, px: 0.5, pt: 1 }}>
        {NAV_ITEMS.map(({ label, icon: Icon, href }) => (
          <ListItem key={href} disablePadding>
            <NavLink href={href}>
              <NavItemButton
                active={pathname === href}
                onClick={handleItemClick}
              >
                <ListItemIcon>
                  <Icon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary={label} />
              </NavItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ borderColor: "divider", mx: 2 }} />

      <List sx={{ px: 0.5, pb: 2, pt: 1 }}>
        {AUTH_ITEMS.map(({ label, icon: Icon, href }) => (
          <ListItem key={href} disablePadding>
            <NavLink href={href}>
              <NavItemButton
                active={pathname === href}
                onClick={handleItemClick}
              >
                <ListItemIcon>
                  <Icon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary={label} />
              </NavItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  if (isDesktop) {
    return (
      <SidebarDrawer
        variant="persistent"
        anchor="left"
        open={open}
        sx={{
          width: open ? SIDEBAR_WIDTH : 0,
          flexShrink: 0,
          transition: "width 225ms cubic-bezier(0.4, 0, 0.6, 1)",
        }}
      >
        {drawerContent}
      </SidebarDrawer>
    );
  }

  return (
    <SidebarDrawer
      variant="temporary"
      anchor="left"
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
    >
      {drawerContent}
    </SidebarDrawer>
  );
};
