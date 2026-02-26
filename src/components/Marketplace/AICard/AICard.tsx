"use client";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

import type { IPersonality } from "@/data/personalities";

import {
  StyledCard,
  StyledAvatar,
  CategoryChip,
  PopularChip,
  PriceText,
  SubscribeButton,
  SubscribedButton,
  DemoChatButton,
} from "./styled";

interface AICardProps {
  personality: IPersonality;
  onDemoChat: (id: string) => void;
  isSubscribed: boolean;
  onSubscribe: (id: string) => void;
}

export const AICard = ({
  personality,
  onDemoChat,
  isSubscribed,
  onSubscribe,
}: AICardProps) => {
  const handleDemoChat = () => {
    onDemoChat(personality.id);
  };

  const handleSubscribe = () => {
    onSubscribe(personality.id);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ height: "100%" }}
    >
      <StyledCard>
        {personality.isPopular && <PopularChip label="Popular" size="small" />}

        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
          <StyledAvatar src={personality.avatar} alt={personality.name} />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
              {personality.name}
            </Typography>
            <CategoryChip
              label={personality.category}
              size="small"
              variant="outlined"
              sx={{ mt: 0.5 }}
            />
          </Box>
        </Stack>

        <Typography
          variant="body2"
          sx={{ color: "text.secondary", mb: 2, lineHeight: 1.6, flex: 1 }}
        >
          {personality.shortDescription}
        </Typography>

        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
          <Rating
            value={personality.rating}
            precision={0.1}
            readOnly
            size="small"
            sx={{
              "& .MuiRating-iconFilled": { color: "#facc15" },
              "& .MuiRating-iconEmpty": { color: "rgba(250, 204, 21, 0.3)" },
            }}
          />
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            {personality.rating} ({personality.reviewCount.toLocaleString()})
          </Typography>
        </Stack>

        <PriceText sx={{ mb: 2 }}>
          ${personality.price}
          <Typography
            component="span"
            variant="caption"
            sx={{ color: "text.secondary", ml: 0.5 }}
          >
            /month
          </Typography>
        </PriceText>

        <Stack direction="row" spacing={1.5}>
          {isSubscribed ? (
            <SubscribedButton
              variant="contained"
              size="small"
              startIcon={<CheckCircleIcon />}
            >
              Subscribed
            </SubscribedButton>
          ) : (
            <SubscribeButton
              variant="contained"
              size="small"
              onClick={handleSubscribe}
            >
              Subscribe
            </SubscribeButton>
          )}
          <DemoChatButton
            variant="outlined"
            size="small"
            onClick={handleDemoChat}
          >
            Demo Chat
          </DemoChatButton>
        </Stack>
      </StyledCard>
    </motion.div>
  );
};
