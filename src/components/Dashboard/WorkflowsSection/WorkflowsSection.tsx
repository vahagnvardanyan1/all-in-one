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

import { Link } from "@/i18n/navigation";
import { useAppStore, setAppStore } from "@/store";
import type { IAppStore } from "@/store";

import { SectionTitle, GlowCard, SectionWrapper } from "../shared";

const selector = (s: IAppStore) => s.savedWorkflows;

export const WorkflowsSection = () => {
  const savedWorkflows = useAppStore(selector);

  const handleDelete = (id: string) => {
    setAppStore((s) => ({
      savedWorkflows: s.savedWorkflows.filter((w) => w.id !== id),
    }));
  };

  return (
    <SectionWrapper>
      <SectionTitle variant="h5">Saved Workflows</SectionTitle>
      <Divider sx={{ borderColor: "divider", mb: 3 }} />

      {savedWorkflows.length === 0 ? (
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          No saved workflows.{" "}
          <Typography
            component={Link}
            href="/builder"
            variant="body2"
            sx={{ color: "#7c3aed", textDecoration: "none" }}
          >
            Go to AI Builder
          </Typography>
        </Typography>
      ) : (
        <Stack spacing={2}>
          {savedWorkflows.map((workflow, index) => (
            <motion.div
              key={workflow.id}
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
                      component={Link}
                      href="/builder"
                      sx={(t) => ({
                        borderColor: `rgba(${t.vars?.palette.primary.mainChannel} / 0.4)`,
                        color: t.vars?.palette.text.primary,
                        textDecoration: "none",
                      })}
                    >
                      Open
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<DeleteOutlineIcon />}
                      onClick={() => handleDelete(workflow.id)}
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
      )}
    </SectionWrapper>
  );
};
