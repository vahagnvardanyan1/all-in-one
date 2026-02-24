"use client";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

import { SectionRoot, StepCircle, Connector, StepCard } from "./styled";

const steps = [
  {
    number: 1,
    title: "Choose Your AI",
    description:
      "Browse our marketplace of AI personalities and companies to find the perfect fit.",
  },
  {
    number: 2,
    title: "Customize & Configure",
    description:
      "Tailor your AI's behavior, personality, and capabilities to match your needs.",
  },
  {
    number: 3,
    title: "Deploy & Integrate",
    description:
      "Launch your AI solution and integrate it seamlessly into your existing workflows.",
  },
  {
    number: 4,
    title: "Scale & Grow",
    description:
      "Monitor performance, optimize results, and scale your AI operations effortlessly.",
  },
];

export const HowItWorksSection = () => (
  <SectionRoot>
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h2"
          align="center"
          sx={{ mb: 2, fontSize: { xs: "2rem", md: "3rem" } }}
          className="gradient-text"
        >
          How It Works
        </Typography>
        <Typography
          variant="h6"
          component="p"
          align="center"
          sx={{ color: "text.secondary", mb: 8, maxWidth: 600, mx: "auto" }}
        >
          Get started in four simple steps
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        {steps.map((step, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={step.number}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <StepCard>
                {index < steps.length - 1 && <Connector />}
                <StepCircle>{step.number}</StepCircle>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                  {step.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.7,
                    maxWidth: 240,
                  }}
                >
                  {step.description}
                </Typography>
              </StepCard>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  </SectionRoot>
);
