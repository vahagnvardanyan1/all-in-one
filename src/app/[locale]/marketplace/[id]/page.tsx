"use client";

import { use } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { ProfileHeader } from "@/components/AIProfile/ProfileHeader";
import { ProfileTabs } from "@/components/AIProfile/ProfileTabs";
import { AI_PERSONALITIES } from "@/data/personalities";
import { Link } from "@/i18n/navigation";

interface AIProfilePageProps {
  params: Promise<{ id: string }>;
}

const AIProfilePage = ({ params }: AIProfilePageProps) => {
  const { id } = use(params);
  const personality = AI_PERSONALITIES.find((p) => p.id === id);

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
      <ProfileHeader personality={personality} />
      <ProfileTabs personality={personality} />
    </Container>
  );
};

export default AIProfilePage;
