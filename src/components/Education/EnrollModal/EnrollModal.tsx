"use client";

import SchoolIcon from "@mui/icons-material/School";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import type { ICourse } from "@/data/education";

import { PriceBox, ConfirmButton } from "./styled";

interface EnrollModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  course: ICourse | null;
}

export const EnrollModal = ({
  open,
  onClose,
  onConfirm,
  course,
}: EnrollModalProps) => {
  if (!course) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      slotProps={{
        paper: {
          sx: (t) => ({
            background: `rgba(${t.vars?.palette.background.paperChannel} / 0.98)`,
            border: `1px solid rgba(${t.vars?.palette.primary.mainChannel} / 0.2)`,
            borderRadius: 3,
          }),
        },
      }}
    >
      <DialogContent>
        <Stack spacing={2.5} alignItems="center" sx={{ py: 2 }}>
          <Avatar
            sx={{
              width: 72,
              height: 72,
              bgcolor: "rgba(124, 58, 237, 0.15)",
            }}
          >
            <SchoolIcon sx={{ fontSize: 36, color: "#7c3aed" }} />
          </Avatar>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, textAlign: "center" }}
          >
            {course.title}
          </Typography>
          <PriceBox>${course.price}</PriceBox>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", textAlign: "center" }}
          >
            Enroll now for full lifetime access to all lessons
          </Typography>
          <ConfirmButton variant="contained" fullWidth onClick={onConfirm}>
            Confirm Enrollment
          </ConfirmButton>
        </Stack>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
        <Button onClick={onClose} sx={{ color: "text.secondary" }}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};
