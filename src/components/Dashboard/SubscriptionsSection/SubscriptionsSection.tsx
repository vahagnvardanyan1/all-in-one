"use client";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

import { SectionTitle, GlowCard, SectionWrapper } from "../shared";

const SUBSCRIPTIONS = [
  {
    name: "Zenith",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Zenith",
    status: "Active",
  },
  {
    name: "IronCore",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=IronCore",
    status: "Active",
  },
  {
    name: "Polyglot",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Polyglot",
    status: "Active",
  },
];

export const SubscriptionsSection = () => (
  <SectionWrapper>
    <SectionTitle variant="h5">My AI Subscriptions</SectionTitle>
    <Divider sx={{ borderColor: "divider", mb: 3 }} />

    <Grid container spacing={3}>
      {SUBSCRIPTIONS.map((sub, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={sub.name}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <GlowCard>
              <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
                <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                  <Avatar
                    src={sub.avatar}
                    alt={sub.name}
                    sx={{ width: 48, height: 48 }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {sub.name}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Chip
                    label={sub.status}
                    size="small"
                    sx={(t) => ({
                      bgcolor: `rgba(${t.vars?.palette.success.mainChannel} / 0.15)`,
                      color: t.vars?.palette.success.main,
                      fontWeight: 600,
                    })}
                  />
                  <Button
                    variant="outlined"
                    size="small"
                    sx={(t) => ({
                      borderColor: `rgba(${t.vars?.palette.primary.mainChannel} / 0.4)`,
                      color: t.vars?.palette.text.primary,
                    })}
                  >
                    Manage
                  </Button>
                </Stack>
              </CardContent>
            </GlowCard>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </SectionWrapper>
);
