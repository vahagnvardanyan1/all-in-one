"use client";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

import type { IPersonality } from "@/data/personalities";

interface ProfileHeaderProps {
  personality: IPersonality;
}

export const ProfileHeader = ({ personality }: ProfileHeaderProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Box
      sx={(t) => ({
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "center", md: "flex-start" },
        gap: 4,
        mb: 5,
        p: 4,
        background: t.vars?.palette.background.paper,
        border: `1px solid ${t.vars?.palette.divider}`,
        borderRadius: 4,
      })}
    >
      <Avatar
        src={personality.avatar}
        alt={personality.name}
        sx={{ width: 120, height: 120 }}
      />

      <Stack
        spacing={1.5}
        flex={1}
        alignItems={{ xs: "center", md: "flex-start" }}
      >
        <Typography variant="h3" sx={{ fontWeight: 800 }}>
          {personality.name}
        </Typography>

        <Stack
          direction="row"
          spacing={1.5}
          alignItems="center"
          flexWrap="wrap"
        >
          <Chip
            label={personality.category}
            size="small"
            sx={(t) => ({
              bgcolor: `rgba(${t.vars?.palette.primary.mainChannel} / 0.12)`,
              color: t.vars?.palette.primary.light,
              fontWeight: 600,
            })}
          />
          <Stack direction="row" spacing={0.5} alignItems="center">
            <Rating
              value={personality.rating}
              precision={0.1}
              readOnly
              size="small"
              sx={{ "& .MuiRating-iconFilled": { color: "warning.main" } }}
            />
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              ({personality.reviewCount.toLocaleString()} reviews)
            </Typography>
          </Stack>
        </Stack>

        <Typography
          variant="body1"
          sx={{ color: "text.secondary", maxWidth: 600, lineHeight: 1.7 }}
        >
          {personality.shortDescription}
        </Typography>
      </Stack>

      <Stack spacing={1.5} alignItems="center" sx={{ minWidth: 160 }}>
        <Typography variant="h4" sx={{ fontWeight: 800 }}>
          ${personality.price}
          <Typography
            component="span"
            variant="body2"
            sx={{ color: "text.secondary" }}
          >
            /mo
          </Typography>
        </Typography>
        <Button
          variant="contained"
          fullWidth
          sx={{
            background: "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
            py: 1.25,
            "&:hover": {
              background: "linear-gradient(135deg, #6d28d9 0%, #2563eb 100%)",
              boxShadow: "0 0 30px rgba(124, 58, 237, 0.4)",
            },
          }}
        >
          Subscribe
        </Button>
      </Stack>
    </Box>
  </motion.div>
);
