"use client";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

import { AI_COMPANIES } from "@/data/companies";
import { Link } from "@/i18n/navigation";
import { useAppStore } from "@/store";
import type { IAppStore } from "@/store";

import { SectionTitle, GlowCard, SectionWrapper } from "../shared";

const selector = (s: IAppStore) => s.hiredCompanyIds;

export const CompaniesSection = () => {
  const hiredCompanyIds = useAppStore(selector);

  const companies = AI_COMPANIES.filter((c) => hiredCompanyIds.includes(c.id));

  return (
    <SectionWrapper>
      <SectionTitle variant="h5">My AI Companies</SectionTitle>
      <Divider sx={{ borderColor: "divider", mb: 3 }} />

      {companies.length === 0 ? (
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          No companies hired yet.{" "}
          <Typography
            component={Link}
            href="/companies"
            variant="body2"
            sx={{ color: "#7c3aed", textDecoration: "none" }}
          >
            Browse AI Companies
          </Typography>
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {companies.map((company, index) => (
            <Grid size={{ xs: 12, sm: 6 }} key={company.id}>
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
                          {company.employeeCount} AI Agents
                        </Typography>
                      </Stack>
                    </Stack>
                    <Button
                      variant="outlined"
                      size="small"
                      component={Link}
                      href={`/companies/${company.id}`}
                      sx={(t) => ({
                        borderColor: `rgba(${t.vars?.palette.primary.mainChannel} / 0.4)`,
                        color: t.vars?.palette.text.primary,
                        textDecoration: "none",
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
      )}
    </SectionWrapper>
  );
};
