"use client";

import { use, useState } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { ProfileHeader } from "@/components/AIProfile/ProfileHeader";
import { ProfileTabs } from "@/components/AIProfile/ProfileTabs";
import { SubscribeModal } from "@/components/Marketplace";
import { AI_PERSONALITIES } from "@/data/personalities";
import { Link } from "@/i18n/navigation";
import { useAppStore, setAppStore } from "@/store";
import type { IAppStore } from "@/store";

interface AIProfilePageProps {
  params: Promise<{ id: string }>;
}

const subscribedSelector = (s: IAppStore) => s.subscribedIds;

const AIProfilePage = ({ params }: AIProfilePageProps) => {
  const { id } = use(params);
  const personality = AI_PERSONALITIES.find((p) => p.id === id);
  const [subscribeModalOpen, setSubscribeModalOpen] = useState(false);

  const subscribedIds = useAppStore(subscribedSelector);
  const isSubscribed = personality
    ? subscribedIds.includes(personality.id)
    : false;

  const handleSubscribeConfirm = () => {
    if (!personality) return;
    setAppStore((s) => ({
      subscribedIds: [...s.subscribedIds, personality.id],
    }));
    setSubscribeModalOpen(false);
  };

  if (!personality) {
    return (
      <Container maxWidth="md" sx={{ py: 12, textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          AI Personality Not Found
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
          The personality you are looking for does not exist.
        </Typography>
        <Box
          component={Link}
          href="/marketplace"
          sx={{
            color: "#7c3aed",
            textDecoration: "none",
            fontWeight: 600,
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Back to Marketplace
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <ProfileHeader
        personality={personality}
        isSubscribed={isSubscribed}
        onSubscribe={() => setSubscribeModalOpen(true)}
      />
      <ProfileTabs personality={personality} />

      <SubscribeModal
        open={subscribeModalOpen}
        onClose={() => setSubscribeModalOpen(false)}
        onConfirm={handleSubscribeConfirm}
        personality={personality}
      />
    </Container>
  );
};

export default AIProfilePage;
