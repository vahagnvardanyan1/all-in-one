"use client";

import CheckIcon from "@mui/icons-material/Check";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

import { Link } from "@/i18n/navigation";

import {
  SectionRoot,
  PricingCard,
  PriceTag,
  PopularBadge,
  ViewPricingButton,
} from "./styled";

const tiers = [
  {
    name: "Starter",
    price: "$9",
    period: "/mo",
    highlighted: false,
    features: [
      "3 AI Personalities",
      "1,000 messages/month",
      "Basic analytics",
      "Email support",
      "API access",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    highlighted: true,
    features: [
      "Unlimited AI Personalities",
      "50,000 messages/month",
      "Advanced analytics",
      "Priority support",
      "Custom AI Builder",
      "Team collaboration",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    highlighted: false,
    features: [
      "Everything in Pro",
      "Unlimited messages",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
      "On-premise deployment",
    ],
  },
];

export const PricingPreview = () => (
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
          Simple Pricing
        </Typography>
        <Typography
          variant="h6"
          component="p"
          align="center"
          sx={{ color: "text.secondary", mb: 8, maxWidth: 600, mx: "auto" }}
        >
          Start free. Scale as you grow.
        </Typography>
      </motion.div>

      <Grid container spacing={4} justifyContent="center">
        {tiers.map((tier, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={tier.name}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ height: "100%" }}
            >
              <PricingCard highlighted={tier.highlighted}>
                {tier.highlighted && <PopularBadge>Most Popular</PopularBadge>}

                <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                  {tier.name}
                </Typography>

                <PriceTag>
                  <Typography variant="h3" sx={{ fontWeight: 800 }}>
                    {tier.price}
                  </Typography>
                  {tier.period && (
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary" }}
                    >
                      {tier.period}
                    </Typography>
                  )}
                </PriceTag>

                <Stack spacing={1.5} sx={{ mb: 4, flex: 1 }}>
                  {tier.features.map((feature) => (
                    <Box
                      key={feature}
                      sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                    >
                      <CheckIcon sx={{ fontSize: 18, color: "info.main" }} />
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Stack>

                <Button
                  variant={tier.highlighted ? "contained" : "outlined"}
                  fullWidth
                  sx={(t) => ({
                    mt: "auto",
                    ...(tier.highlighted
                      ? {
                          background:
                            "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
                          "&:hover": {
                            background:
                              "linear-gradient(135deg, #6d28d9 0%, #2563eb 100%)",
                          },
                        }
                      : {
                          borderColor: `rgba(${t.vars?.palette.primary.mainChannel} / 0.4)`,
                          color: t.vars?.palette.text.primary,
                          "&:hover": {
                            borderColor: t.vars?.palette.primary.main,
                            backgroundColor: `rgba(${t.vars?.palette.primary.mainChannel} / 0.08)`,
                          },
                        }),
                  })}
                >
                  {tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
              </PricingCard>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Box sx={{ textAlign: "center", mt: 6 }}>
          <ViewPricingButton
            variant="outlined"
            size="large"
            component={Link}
            href="/pricing"
          >
            View Full Pricing
          </ViewPricingButton>
        </Box>
      </motion.div>
    </Container>
  </SectionRoot>
);
