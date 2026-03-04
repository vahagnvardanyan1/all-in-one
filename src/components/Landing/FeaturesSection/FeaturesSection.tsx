"use client";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import BusinessIcon from "@mui/icons-material/Business";
import BuildIcon from "@mui/icons-material/Build";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

import { SectionRoot, FeatureCard, IconWrapper } from "./styled";

const features = [
  {
    icon: <AutoAwesomeIcon sx={{ fontSize: 28, color: "#fff" }} />,
    title: "AI Personalities",
    description:
      "Browse and subscribe to AI companions tailored to your needs. From creative assistants to technical experts, find the perfect AI partner.",
  },
  {
    icon: <BusinessIcon sx={{ fontSize: 28, color: "#fff" }} />,
    title: "AI Companies",
    description:
      "Hire AI-powered agencies that deliver real results. From marketing to development, scale your operations with intelligent automation.",
  },
  {
    icon: <BuildIcon sx={{ fontSize: 28, color: "#fff" }} />,
    title: "AI Builder",
    description:
      "Create custom AI workflows with our visual builder. No coding required. Design, deploy, and monetize your own AI solutions.",
  },
  {
    icon: <MusicNoteIcon sx={{ fontSize: 28, color: "#fff" }} />,
    title: "Generate Dadada",
    description:
      "Experience the magic of AI-generated music with our 'Generate Dadada' feature. Create unique soundscapes effortlessly.",
  },
];

export const FeaturesSection = () => (
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
          sx={{
            mb: 2,
            fontSize: { xs: "2rem", md: "3rem" },
          }}
          className="gradient-text"
        >
          Everything You Need
        </Typography>
        <Typography
          variant="h6"
          component="p"
          align="center"
          sx={{ color: "text.secondary", mb: 8, maxWidth: 600, mx: "auto" }}
        >
          One platform to discover, create, and deploy AI solutions
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={feature.title}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ height: "100%" }}
            >
              <FeatureCard>
                <IconWrapper>{feature.icon}</IconWrapper>
                <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 600 }}>
                  {feature.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", lineHeight: 1.7 }}
                >
                  {feature.description}
                </Typography>
              </FeatureCard>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  </SectionRoot>
);
