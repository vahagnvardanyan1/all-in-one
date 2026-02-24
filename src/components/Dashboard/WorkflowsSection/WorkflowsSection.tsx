"use client";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

import { SectionTitle, GlowCard, SectionWrapper } from "../shared";

const SAVED_WORKFLOWS = [
  { name: "Customer Support Agent", nodeCount: 8, createdAt: "Jan 15, 2026" },
  {
    name: "Lead Qualification Pipeline",
    nodeCount: 12,
    createdAt: "Feb 3, 2026",
  },
  {
    name: "Content Review & Publishing",
    nodeCount: 6,
    createdAt: "Feb 18, 2026",
  },
];

export const WorkflowsSection = () => (
  <SectionWrapper>
    <SectionTitle variant="h5">Saved Workflows</SectionTitle>
    <Divider sx={{ borderColor: "divider", mb: 3 }} />

    <Stack spacing={2}>
      {SAVED_WORKFLOWS.map((workflow, index) => (
        <motion.div
          key={workflow.name}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <GlowCard>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "flex-start", sm: "center" }}
              justifyContent="space-between"
              spacing={2}
            >
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {workflow.name}
                </Typography>
                <Stack
                  direction="row"
                  spacing={1.5}
                  alignItems="center"
                  mt={0.5}
                >
                  <Chip
                    label={`${workflow.nodeCount} nodes`}
                    size="small"
                    sx={(t) => ({
                      bgcolor: `rgba(${t.vars?.palette.primary.mainChannel} / 0.12)`,
                      color: t.vars?.palette.primary.light,
                      fontWeight: 500,
                    })}
                  />
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary" }}
                  >
                    Created {workflow.createdAt}
                  </Typography>
                </Stack>
              </Box>
              <Stack direction="row" spacing={1}>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<OpenInNewIcon />}
                  sx={(t) => ({
                    borderColor: `rgba(${t.vars?.palette.primary.mainChannel} / 0.4)`,
                    color: t.vars?.palette.text.primary,
                  })}
                >
                  Open
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<DeleteOutlineIcon />}
                  sx={(t) => ({
                    borderColor: `rgba(${t.vars?.palette.error.mainChannel} / 0.4)`,
                    color: t.vars?.palette.error.main,
                  })}
                >
                  Delete
                </Button>
              </Stack>
            </Stack>
          </GlowCard>
        </motion.div>
      ))}
    </Stack>
  </SectionWrapper>
);
