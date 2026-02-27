"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { useColorScheme } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

import { useAppStore } from "@/store";
import type { IAppStore } from "@/store";

import { SectionTitle, GlowCard, SectionWrapper } from "../shared";

const selector = (s: IAppStore) => ({
  userName: s.userName,
  userEmail: s.userEmail,
  isLoggedIn: s.isLoggedIn,
});

export const AccountSettings = () => {
  const { mode, setMode } = useColorScheme();
  const { userName, userEmail, isLoggedIn } = useAppStore(selector);

  const displayName = isLoggedIn ? userName : "Guest";
  const displayEmail = isLoggedIn ? userEmail : "Not signed in";

  return (
    <SectionWrapper>
      <SectionTitle variant="h5">Account Settings</SectionTitle>
      <Divider sx={{ borderColor: "divider", mb: 3 }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <GlowCard>
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Name
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                {displayName}
              </Typography>
            </Stack>

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Email
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                {displayEmail}
              </Typography>
            </Stack>

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Plan
              </Typography>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Chip
                  label="Pro"
                  size="small"
                  sx={{
                    background:
                      "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
                    color: "#fff",
                    fontWeight: 700,
                  }}
                />
                <Button
                  variant="outlined"
                  size="small"
                  sx={(t) => ({
                    borderColor: `rgba(${t.vars?.palette.primary.mainChannel} / 0.4)`,
                    color: t.vars?.palette.text.primary,
                  })}
                >
                  Upgrade
                </Button>
              </Stack>
            </Stack>

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Dark Mode
                </Typography>
                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                  Toggle dark/light appearance
                </Typography>
              </Box>
              <Switch
                checked={mode === "dark"}
                onChange={() => setMode(mode === "dark" ? "light" : "dark")}
                sx={{
                  "& .MuiSwitch-switchBase.Mui-checked": {
                    color: "primary.main",
                  },
                  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                    backgroundColor: "primary.main",
                  },
                }}
              />
            </Stack>
          </Stack>
        </GlowCard>
      </motion.div>
    </SectionWrapper>
  );
};
