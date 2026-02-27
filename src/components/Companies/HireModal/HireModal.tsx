"use client";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import type { ICompany } from "@/data/companies";

import { ModalLogo, PriceBox, ConfirmButton } from "./styled";

interface HireModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  company: ICompany | null;
}

export const HireModal = ({
  open,
  onClose,
  onConfirm,
  company,
}: HireModalProps) => {
  if (!company) return null;

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
          <ModalLogo src={company.logo} alt={company.name} variant="rounded" />
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, textAlign: "center" }}
          >
            {company.name}
          </Typography>
          <PriceBox>
            ${company.pricing.starter}
            <Typography
              component="span"
              variant="body2"
              sx={{ color: "text.secondary", ml: 0.5 }}
            >
              /month (Starter)
            </Typography>
          </PriceBox>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", textAlign: "center" }}
          >
            Hire this AI agency to power your business
          </Typography>
          <ConfirmButton variant="contained" fullWidth onClick={onConfirm}>
            Confirm Hire
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
