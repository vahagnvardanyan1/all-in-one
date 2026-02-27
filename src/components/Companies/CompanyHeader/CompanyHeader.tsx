"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import GroupsIcon from "@mui/icons-material/Groups";
import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

import type { ICompany } from "@/data/companies";
import { Link } from "@/i18n/navigation";

import {
  HeaderCard,
  LogoWrapper,
  CategoryChip,
  ServiceChip,
  PricingBox,
  PricingItem,
  HireButton,
  BackLink,
} from "./styled";

interface CompanyHeaderProps {
  company: ICompany;
  isHired?: boolean;
  onHire?: () => void;
}

export const CompanyHeader = ({
  company,
  isHired,
  onHire,
}: CompanyHeaderProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Box sx={{ mb: 3 }}>
      <BackLink
        component={Link}
        href="/companies"
        startIcon={<ArrowBackIcon />}
      >
        Back to Companies
      </BackLink>
    </Box>

    <HeaderCard>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
        }}
      >
        <LogoWrapper>
          <Box
            component="img"
            src={company.logo}
            alt={company.name}
            sx={{ width: 100, height: 100, objectFit: "cover" }}
          />
        </LogoWrapper>

        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              {company.name}
            </Typography>
            {company.isVerified && (
              <CheckCircleIcon sx={{ fontSize: 24, color: "info.main" }} />
            )}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
            <CategoryChip label={company.category} size="small" />
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <StarIcon sx={{ fontSize: 18, color: "warning.main" }} />
              <Typography variant="body2" sx={{ color: "text.primary" }}>
                {company.rating}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                ({company.reviewCount} reviews)
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <GroupsIcon sx={{ fontSize: 18, color: "text.secondary" }} />
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {company.employeeCount}
              </Typography>
            </Box>
          </Box>

          <Typography
            variant="body1"
            sx={{ color: "text.secondary", lineHeight: 1.7, mb: 2.5 }}
          >
            {company.description}
          </Typography>

          <Stack
            direction="row"
            spacing={0.75}
            sx={{ flexWrap: "wrap", gap: 0.75, mb: 2.5 }}
          >
            {company.services.map((service) => (
              <ServiceChip key={service} label={service} size="small" />
            ))}
          </Stack>

          <PricingBox>
            <PricingItem>
              <Typography
                variant="caption"
                sx={{ color: "text.secondary", display: "block" }}
              >
                Starter
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "primary.light", fontWeight: 600 }}
              >
                ${company.pricing.starter}/mo
              </Typography>
            </PricingItem>
            <PricingItem>
              <Typography
                variant="caption"
                sx={{ color: "text.secondary", display: "block" }}
              >
                Professional
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "primary.light", fontWeight: 600 }}
              >
                ${company.pricing.professional}/mo
              </Typography>
            </PricingItem>
            <PricingItem>
              <Typography
                variant="caption"
                sx={{ color: "text.secondary", display: "block" }}
              >
                Enterprise
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "primary.light", fontWeight: 600 }}
              >
                {company.pricing.enterprise}
              </Typography>
            </PricingItem>
          </PricingBox>

          <Box sx={{ mt: 2 }}>
            {isHired ? (
              <Button
                variant="outlined"
                size="large"
                startIcon={<CheckCircleIcon />}
                sx={{
                  borderColor: "rgba(34, 197, 94, 0.4)",
                  color: "#22c55e",
                  pointerEvents: "none",
                }}
              >
                Hired
              </Button>
            ) : (
              <HireButton variant="contained" size="large" onClick={onHire}>
                Hire Agency
              </HireButton>
            )}
          </Box>
        </Box>
      </Box>
    </HeaderCard>
  </motion.div>
);
