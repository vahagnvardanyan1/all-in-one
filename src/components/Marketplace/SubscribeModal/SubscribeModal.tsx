"use client";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import type { IPersonality } from "@/data/personalities";

import { ModalAvatar, PriceBox, ConfirmButton } from "./styled";

interface SubscribeModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  personality: IPersonality | null;
}

export const SubscribeModal = ({
  open,
  onClose,
  onConfirm,
  personality,
}: SubscribeModalProps) => {
  if (!personality) return null;

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
          <ModalAvatar src={personality.avatar} alt={personality.name} />
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, textAlign: "center" }}
          >
            {personality.name}
          </Typography>
          <PriceBox>
            ${personality.price}
            <Typography
              component="span"
              variant="body2"
              sx={{ color: "text.secondary", ml: 0.5 }}
            >
              /month
            </Typography>
          </PriceBox>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", textAlign: "center" }}
          >
            Subscribe to unlock full AI sessions
          </Typography>
          <ConfirmButton variant="contained" fullWidth onClick={onConfirm}>
            Confirm Subscription
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
