"use client";

import { useState } from "react";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

import {
  AuthPageRoot,
  GlassCard,
  BrandTitle,
  GradientButton,
  Orb,
  AuthLink,
} from "@/components/AuthForm";
import { Link, useRouter } from "@/i18n/navigation";
import { setAppStore } from "@/store";

const inputSx = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "rgba(124, 58, 237, 0.2)" },
    "&:hover fieldset": { borderColor: "rgba(124, 58, 237, 0.4)" },
    "&.Mui-focused fieldset": { borderColor: "#7c3aed" },
  },
  "& .MuiInputLabel-root": { color: "#94a3b8" },
  "& .MuiInputBase-input": { color: "#f1f5f9" },
};

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    setAppStore({
      isLoggedIn: true,
      userName: email.split("@")[0] || "User",
      userEmail: email || "demo@aiverse.com",
    });
    router.push("/dashboard");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <AuthPageRoot>
      <Orb
        sx={{
          width: 350,
          height: 350,
          background: "rgba(124, 58, 237, 0.25)",
          top: "5%",
          left: "10%",
        }}
      />
      <Orb
        sx={{
          width: 250,
          height: 250,
          background: "rgba(59, 130, 246, 0.2)",
          bottom: "10%",
          right: "10%",
        }}
      />
      <Orb
        sx={{
          width: 180,
          height: 180,
          background: "rgba(6, 182, 212, 0.15)",
          top: "50%",
          right: "30%",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <GlassCard>
          <BrandTitle>AIverse</BrandTitle>
          <Typography
            variant="body2"
            sx={{ textAlign: "center", color: "text.secondary", mb: 4 }}
          >
            Welcome back. Sign in to your account.
          </Typography>

          <Stack spacing={2.5}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              size="small"
              sx={inputSx}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              size="small"
              sx={inputSx}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
            />

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    sx={{
                      color: "#94a3b8",
                      "&.Mui-checked": { color: "#7c3aed" },
                    }}
                  />
                }
                label={
                  <Typography variant="body2" sx={{ color: "#94a3b8" }}>
                    Remember me
                  </Typography>
                }
              />
              <Typography
                variant="body2"
                sx={{
                  color: "#7c3aed",
                  cursor: "pointer",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Forgot password?
              </Typography>
            </Stack>

            <GradientButton variant="contained" fullWidth onClick={handleLogin}>
              Login
            </GradientButton>
          </Stack>

          <AuthLink sx={{ mt: 3 }}>
            Don&apos;t have an account? <Link href="/register">Register</Link>
          </AuthLink>
        </GlassCard>
      </motion.div>
    </AuthPageRoot>
  );
};

export default LoginPage;
