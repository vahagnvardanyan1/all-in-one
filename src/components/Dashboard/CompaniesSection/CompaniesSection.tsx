"use client";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

import { SectionTitle, GlowCard, SectionWrapper } from "../shared";

const COMPANIES = [
  {
    name: "CortexDev Labs",
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=CortexDev",
    employeeCount: "200-500 AI Agents",
  },
  {
    name: "Amplify AI Agency",
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=AmplifyAI",
    employeeCount: "100-200 AI Agents",
  },
];

export const CompaniesSection = () => (
  <SectionWrapper>
    <SectionTitle variant="h5">My AI Companies</SectionTitle>
    <Divider sx={{ borderColor: "divider", mb: 3 }} />

    <Grid container spacing={3}>
      {COMPANIES.map((company, index) => (
        <Grid size={{ xs: 12, sm: 6 }} key={company.name}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <GlowCard>
              <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
                <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                  <Avatar
                    src={company.logo}
                    alt={company.name}
                    variant="rounded"
                    sx={{ width: 48, height: 48 }}
                  />
                  <Stack>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {company.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {company.employeeCount}
                    </Typography>
                  </Stack>
                </Stack>
                <Button
                  variant="outlined"
                  size="small"
                  sx={(t) => ({
                    borderColor: `rgba(${t.vars?.palette.primary.mainChannel} / 0.4)`,
                    color: t.vars?.palette.text.primary,
                  })}
                >
                  View
                </Button>
              </CardContent>
            </GlowCard>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </SectionWrapper>
);
