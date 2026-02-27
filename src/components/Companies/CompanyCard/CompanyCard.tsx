"use client";

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
  StyledCard,
  CardHeader,
  LogoWrapper,
  CategoryChip,
  ServiceChip,
  StatsRow,
  HireButton,
  DetailsButton,
} from "./styled";

interface CompanyCardProps {
  company: ICompany;
  isHired?: boolean;
  onHire?: (id: string) => void;
}

export const CompanyCard = ({ company, isHired, onHire }: CompanyCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    whileHover={{ y: -6 }}
    style={{ height: "100%" }}
  >
    <StyledCard>
      <CardHeader>
        <LogoWrapper>
          <Box
            component="img"
            src={company.logo}
            alt={company.name}
            sx={{ width: 80, height: 80, objectFit: "cover" }}
          />
        </LogoWrapper>

        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 0.5 }}
          >
            <Typography variant="h6" noWrap sx={{ fontSize: "1.05rem" }}>
              {company.name}
            </Typography>
            {company.isVerified && (
              <CheckCircleIcon sx={{ fontSize: 18, color: "info.main" }} />
            )}
          </Box>
          <CategoryChip label={company.category} size="small" />
        </Box>
      </CardHeader>

      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          lineHeight: 1.6,
          mb: 2,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {company.description}
      </Typography>

      <Stack
        direction="row"
        spacing={0.5}
        sx={{ flexWrap: "wrap", gap: 0.5, mb: 2 }}
      >
        {company.services.slice(0, 3).map((service) => (
          <ServiceChip key={service} label={service} size="small" />
        ))}
      </Stack>

      <StatsRow>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <GroupsIcon sx={{ fontSize: 16, color: "text.secondary" }} />
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            {company.employeeCount}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <StarIcon sx={{ fontSize: 16, color: "warning.main" }} />
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            {company.rating} ({company.reviewCount})
          </Typography>
        </Box>
      </StatsRow>

      <Typography
        variant="body2"
        sx={{
          mb: 2,
          color: "primary.light",
          fontWeight: 600,
        }}
      >
        From ${company.pricing.starter}/mo
      </Typography>

      <Stack direction="row" spacing={1.5} sx={{ mt: "auto" }}>
        {isHired ? (
          <Button
            variant="outlined"
            size="small"
            sx={{
              flex: 1,
              borderColor: "rgba(34, 197, 94, 0.4)",
              color: "#22c55e",
              pointerEvents: "none",
            }}
            startIcon={<CheckCircleIcon sx={{ fontSize: 16 }} />}
          >
            Hired
          </Button>
        ) : (
          <HireButton
            variant="contained"
            size="small"
            sx={{ flex: 1 }}
            onClick={() => onHire?.(company.id)}
          >
            Hire Agency
          </HireButton>
        )}
        <DetailsButton
          variant="outlined"
          size="small"
          sx={{ flex: 1 }}
          component={Link}
          href={`/companies/${company.id}`}
        >
          View Details
        </DetailsButton>
      </Stack>
    </StyledCard>
  </motion.div>
);
