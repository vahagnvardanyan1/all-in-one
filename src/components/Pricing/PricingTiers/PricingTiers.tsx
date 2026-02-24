"use client";

import CheckIcon from "@mui/icons-material/Check";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

import { TierCard, PopularBadge, PriceTag, ToggleWrapper } from "./styled";

interface PricingTiersProps {
  annual: boolean;
  onToggle: () => void;
}

const TIERS = [
  {
    name: "Starter",
    monthlyPrice: 9,
    annualPrice: 86,
    highlighted: false,
    features: [
      "5 AI Personalities",
      "Basic chat",
      "Email support",
      "1 Saved workflow",
    ],
    cta: "Get Started",
  },
  {
    name: "Pro",
    monthlyPrice: 29,
    annualPrice: 278,
    highlighted: true,
    features: [
      "25 AI Personalities",
      "Advanced chat with history",
      "Priority support",
      "10 Saved workflows",
      "AI Builder access",
      "Custom AI training",
    ],
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    monthlyPrice: 0,
    annualPrice: 0,
    highlighted: false,
    features: [
      "Unlimited AI Personalities",
      "Enterprise AI Builder",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
      "On-premise deployment",
    ],
    cta: "Contact Sales",
  },
];

const formatPrice = ({
  tier,
  annual,
}: {
  tier: (typeof TIERS)[number];
  annual: boolean;
}) => {
  if (tier.name === "Enterprise") return "Custom";
  return `$${annual ? tier.annualPrice : tier.monthlyPrice}`;
};

export const PricingTiers = ({ annual, onToggle }: PricingTiersProps) => (
  <>
    <ToggleWrapper>
      <Typography
        variant="body1"
        sx={{
          color: annual ? "text.secondary" : "text.primary",
          fontWeight: 600,
        }}
      >
        Monthly
      </Typography>
      <Switch
        checked={annual}
        onChange={onToggle}
        sx={{
          "& .MuiSwitch-switchBase.Mui-checked": { color: "primary.main" },
          "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
            backgroundColor: "primary.main",
          },
        }}
      />
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography
          variant="body1"
          sx={{
            color: annual ? "text.primary" : "text.secondary",
            fontWeight: 600,
          }}
        >
          Annual
        </Typography>
        <Typography
          variant="caption"
          sx={{
            background: "linear-gradient(135deg, #7c3aed, #3b82f6)",
            color: "#fff",
            px: 1,
            py: 0.25,
            borderRadius: 1,
            fontWeight: 700,
          }}
        >
          -20%
        </Typography>
      </Stack>
    </ToggleWrapper>

    <Grid container spacing={4} justifyContent="center">
      {TIERS.map((tier, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={tier.name}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            style={{ height: "100%" }}
          >
            <TierCard highlighted={tier.highlighted}>
              {tier.highlighted && <PopularBadge>Most Popular</PopularBadge>}

              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                {tier.name}
              </Typography>

              <PriceTag>
                <Typography variant="h3" sx={{ fontWeight: 800 }}>
                  {formatPrice({ tier, annual })}
                </Typography>
                {tier.name !== "Enterprise" && (
                  <Typography variant="body1" sx={{ color: "text.secondary" }}>
                    /{annual ? "yr" : "mo"}
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
                  py: 1.25,
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
                {tier.cta}
              </Button>
            </TierCard>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </>
);
