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

import { AI_PERSONALITIES } from "@/data/personalities";
import { Link } from "@/i18n/navigation";
import { useAppStore } from "@/store";
import type { IAppStore } from "@/store";

import { SectionTitle, GlowCard, SectionWrapper } from "../shared";

const selector = (s: IAppStore) => s.subscribedIds;

export const SubscriptionsSection = () => {
  const subscribedIds = useAppStore(selector);

  const subscriptions = AI_PERSONALITIES.filter((p) =>
    subscribedIds.includes(p.id),
  );

  return (
    <SectionWrapper>
      <SectionTitle variant="h5">My AI Subscriptions</SectionTitle>
      <Divider sx={{ borderColor: "divider", mb: 3 }} />

      {subscriptions.length === 0 ? (
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          No subscriptions yet.{" "}
          <Typography
            component={Link}
            href="/marketplace"
            variant="body2"
            sx={{ color: "#7c3aed", textDecoration: "none" }}
          >
            Browse the Marketplace
          </Typography>
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {subscriptions.map((sub, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={sub.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <GlowCard>
                  <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={2}
                      mb={2}
                    >
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
                        label="Active"
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
                        component={Link}
                        href={`/marketplace/${sub.id}`}
                        sx={(t) => ({
                          borderColor: `rgba(${t.vars?.palette.primary.mainChannel} / 0.4)`,
                          color: t.vars?.palette.text.primary,
                          textDecoration: "none",
                        })}
                      >
                        Chat
                      </Button>
                    </Stack>
                  </CardContent>
                </GlowCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      )}
    </SectionWrapper>
  );
};
