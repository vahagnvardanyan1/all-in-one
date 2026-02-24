"use client";

import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { motion } from "framer-motion";

import { Link } from "@/i18n/navigation";

import {
  HeroRoot,
  BackgroundGlow,
  Orb,
  GradientHeadline,
  SubHeadline,
  PrimaryCta,
  SecondaryCta,
} from "./styled";

const orbs = [
  {
    width: 300,
    height: 300,
    background: "rgba(124, 58, 237, 0.25)",
    top: "10%",
    left: "10%",
  },
  {
    width: 200,
    height: 200,
    background: "rgba(59, 130, 246, 0.2)",
    top: "60%",
    right: "15%",
  },
  {
    width: 150,
    height: 150,
    background: "rgba(6, 182, 212, 0.15)",
    bottom: "20%",
    left: "20%",
  },
];

export const HeroSection = () => (
  <HeroRoot>
    <BackgroundGlow />

    {orbs.map((orb, index) => (
      <motion.div
        key={index}
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6 + index * 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: orb.top,
          left: orb.left,
          right: (orb as Record<string, unknown>).right as string,
          bottom: (orb as Record<string, unknown>).bottom as string,
        }}
      >
        <Orb
          sx={{
            width: orb.width,
            height: orb.height,
            background: orb.background,
          }}
        />
      </motion.div>
    ))}

    <Container
      maxWidth="md"
      sx={{ position: "relative", textAlign: "center", zIndex: 1 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <GradientHeadline
          variant="h1"
          sx={{ fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" } }}
        >
          The Future of AI is Here
        </GradientHeadline>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <SubHeadline
          variant="h5"
          component="p"
          sx={{
            color: "text.secondary",
            fontSize: { xs: "1rem", md: "1.25rem" },
          }}
        >
          Discover AI personalities or build your own AI company
        </SubHeadline>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <PrimaryCta
            variant="contained"
            size="large"
            component={Link}
            href="/marketplace"
          >
            Find Your AI
          </PrimaryCta>
          <SecondaryCta
            variant="outlined"
            size="large"
            component={Link}
            href="/builder"
          >
            Build Your AI Company
          </SecondaryCta>
        </Stack>
      </motion.div>
    </Container>
  </HeroRoot>
);
