"use client";

import { useState } from "react";
import type { DragEvent } from "react";

import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { TEAM_ROLES, SAMPLE_TEAMS } from "@/data/workflows";

import {
  PanelRoot,
  PanelSection,
  DraggableItem,
  DragAvatar,
  WorkflowCard,
  PanelActions,
} from "./styled";

const handleDragStart = (
  event: DragEvent<HTMLDivElement>,
  roleType: string,
) => {
  event.dataTransfer.setData("application/reactflow", roleType);
  event.dataTransfer.effectAllowed = "move";
};

export const NodePanel = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const showSnackbar = (message: string) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleSave = () => {
    showSnackbar("Team saved successfully!");
  };

  const handleExport = () => {
    showSnackbar("Team config exported to clipboard!");
  };

  return (
    <PanelRoot>
      <PanelSection>
        <Typography
          variant="subtitle2"
          sx={{
            color: "text.secondary",
            fontWeight: 700,
            mb: 1.5,
            textTransform: "uppercase",
            fontSize: "0.6875rem",
            letterSpacing: "0.08em",
          }}
        >
          AI Team Members
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {TEAM_ROLES.map((role) => (
            <DraggableItem
              key={role.type}
              draggable
              onDragStart={(e: DragEvent<HTMLDivElement>) =>
                handleDragStart(e, role.type)
              }
            >
              <DragAvatar ringColor={role.color}>
                <Box
                  component="img"
                  src={role.avatar}
                  alt={role.label}
                  sx={{ width: 22, height: 22 }}
                />
              </DragAvatar>

              <Box sx={{ minWidth: 0 }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.primary",
                    fontWeight: 600,
                    fontSize: "0.8125rem",
                    lineHeight: 1.2,
                  }}
                >
                  {role.label}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.3,
                    display: "block",
                    mt: 0.25,
                  }}
                >
                  {role.description}
                </Typography>
              </Box>
            </DraggableItem>
          ))}
        </Box>
      </PanelSection>

      <PanelSection>
        <Typography
          variant="subtitle2"
          sx={{
            color: "text.secondary",
            fontWeight: 700,
            mb: 1.5,
            textTransform: "uppercase",
            fontSize: "0.6875rem",
            letterSpacing: "0.08em",
          }}
        >
          Team Templates
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {SAMPLE_TEAMS.map((team) => (
            <WorkflowCard key={team.id}>
              <Typography
                variant="body2"
                sx={{
                  color: "#f1f5f9",
                  fontWeight: 600,
                  fontSize: "0.8125rem",
                  lineHeight: 1.2,
                }}
              >
                {team.name}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "#64748b",
                  lineHeight: 1.3,
                  display: "block",
                  mt: 0.25,
                }}
              >
                {team.memberCount} members
              </Typography>
            </WorkflowCard>
          ))}
        </Box>
      </PanelSection>

      <PanelActions>
        <Button
          variant="contained"
          size="small"
          onClick={handleSave}
          sx={{
            background: "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
            fontSize: "0.8125rem",
            "&:hover": {
              background: "linear-gradient(135deg, #6d28d9 0%, #2563eb 100%)",
            },
          }}
        >
          Save Team
        </Button>
        <Button
          variant="outlined"
          size="small"
          onClick={handleExport}
          sx={(t) => ({
            color: t.vars?.palette.text.secondary,
            borderColor: `rgba(${t.vars?.palette.primary.mainChannel} / 0.3)`,
            fontSize: "0.8125rem",
            "&:hover": {
              borderColor: t.vars?.palette.primary.main,
              color: t.vars?.palette.text.primary,
              backgroundColor: `rgba(${t.vars?.palette.primary.mainChannel} / 0.08)`,
            },
          })}
        >
          Export Config
        </Button>
      </PanelActions>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
      />
    </PanelRoot>
  );
};
