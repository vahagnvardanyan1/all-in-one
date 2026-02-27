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

const RegisterPage = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    setAppStore({
      isLoggedIn: true,
      userName: name || "User",
      userEmail: email || "demo@aiverse.com",
    });
    router.push("/dashboard");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleRegister();
  };

  return (
    <AuthPageRoot>
      <Orb
        sx={{
          width: 300,
          height: 300,
          background: "rgba(124, 58, 237, 0.25)",
          top: "8%",
          right: "12%",
        }}
      />
      <Orb
        sx={{
          width: 220,
          height: 220,
          background: "rgba(59, 130, 246, 0.2)",
          bottom: "15%",
          left: "8%",
        }}
      />
      <Orb
        sx={{
          width: 160,
          height: 160,
          background: "rgba(6, 182, 212, 0.15)",
          top: "45%",
          left: "25%",
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
            Create your account and start exploring AI.
          </Typography>

          <Stack spacing={2.5}>
            <TextField
              label="Full Name"
              fullWidth
              size="small"
              sx={inputSx}
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={handleKeyDown}
            />
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
            <TextField
              label="Confirm Password"
              type="password"
              fullWidth
              size="small"
              sx={inputSx}
              onKeyDown={handleKeyDown}
            />

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
                  I agree to the Terms of Service and Privacy Policy
                </Typography>
              }
            />

            <GradientButton
              variant="contained"
              fullWidth
              onClick={handleRegister}
            >
              Create Account
            </GradientButton>
          </Stack>

          <AuthLink sx={{ mt: 3 }}>
            Already have an account? <Link href="/login">Login</Link>
          </AuthLink>
        </GlassCard>
      </motion.div>
    </AuthPageRoot>
  );
};

export default RegisterPage;
