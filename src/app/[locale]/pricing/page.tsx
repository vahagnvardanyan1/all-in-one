"use client";

import { useState } from "react";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

import { PricingFaq } from "@/components/Pricing/PricingFaq";
import { PricingTiers } from "@/components/Pricing/PricingTiers";

const PricingPage = () => {
  const [annual, setAnnual] = useState(false);

  const handleToggle = () => {
    setAnnual((prev) => !prev);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontWeight: 800,
            mb: 2,
            fontSize: { xs: "2rem", md: "3rem" },
            background:
              "linear-gradient(135deg, #7c3aed 0%, #3b82f6 50%, #06b6d4 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Choose Your Plan
        </Typography>
        <Typography
          variant="h6"
          component="p"
          align="center"
          sx={{
            color: "text.secondary",
            mb: 6,
            maxWidth: 600,
            mx: "auto",
            fontWeight: 400,
          }}
        >
          Unlock the full power of AI personalities, workflows, and custom
          builders. Start free and scale as you grow.
        </Typography>
      </motion.div>

      <PricingTiers annual={annual} onToggle={handleToggle} />
      <PricingFaq />
    </Container>
  );
};

export default PricingPage;
