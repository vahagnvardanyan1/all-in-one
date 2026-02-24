"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { AccountSettings } from "@/components/Dashboard/AccountSettings";
import { CompaniesSection } from "@/components/Dashboard/CompaniesSection";
import { SubscriptionsSection } from "@/components/Dashboard/SubscriptionsSection";
import { WorkflowsSection } from "@/components/Dashboard/WorkflowsSection";

const DashboardPage = () => (
  <Container maxWidth="lg" sx={{ py: 6 }}>
    <Typography
      variant="h3"
      sx={{
        fontWeight: 800,
        mb: 5,
        background: "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      Dashboard
    </Typography>

    <SubscriptionsSection />
    <CompaniesSection />
    <WorkflowsSection />
    <AccountSettings />
  </Container>
);

export default DashboardPage;
