"use client";

import { useState } from "react";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

import { CompanyCard, HireModal } from "@/components/Companies";
import { AI_COMPANIES, COMPANY_CATEGORIES } from "@/data/companies";
import type { ICompany } from "@/data/companies";
import { useAppStore, setAppStore } from "@/store";
import type { IAppStore } from "@/store";

const hiredSelector = (s: IAppStore) => s.hiredCompanyIds;

const CompaniesPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [hireModalOpen, setHireModalOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<ICompany | null>(null);

  const hiredCompanyIds = useAppStore(hiredSelector);

  const filteredCompanies =
    activeCategory === "All"
      ? AI_COMPANIES
      : AI_COMPANIES.filter((c) => c.category === activeCategory);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  const handleHireClick = (id: string) => {
    const company = AI_COMPANIES.find((c) => c.id === id) ?? null;
    setSelectedCompany(company);
    setHireModalOpen(true);
  };

  const handleHireConfirm = () => {
    if (!selectedCompany) return;
    setAppStore((s) => ({
      hiredCompanyIds: [...s.hiredCompanyIds, selectedCompany.id],
    }));
    setHireModalOpen(false);
  };

  const handleHireClose = () => {
    setHireModalOpen(false);
  };

  return (
    <Box sx={{ minHeight: "100vh", pt: { xs: 10, md: 12 }, pb: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 2,
              fontSize: { xs: "2rem", md: "3rem" },
              background:
                "linear-gradient(135deg, #7c3aed 0%, #3b82f6 50%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            AI Companies
          </Typography>
          <Typography
            variant="h6"
            component="p"
            align="center"
            sx={{ color: "text.secondary", mb: 6, maxWidth: 600, mx: "auto" }}
          >
            Partner with AI-powered agencies for your business
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Stack
            direction="row"
            spacing={1}
            sx={{
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 1,
              mb: 6,
            }}
          >
            <CategoryFilterChip
              label="All"
              isActive={activeCategory === "All"}
              onClick={() => handleCategoryClick("All")}
            />
            {COMPANY_CATEGORIES.map((category) => (
              <CategoryFilterChip
                key={category}
                label={category}
                isActive={activeCategory === category}
                onClick={() => handleCategoryClick(category)}
              />
            ))}
          </Stack>
        </motion.div>

        <Grid container spacing={3}>
          {filteredCompanies.map((company) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={company.id}>
              <CompanyCard
                company={company}
                isHired={hiredCompanyIds.includes(company.id)}
                onHire={handleHireClick}
              />
            </Grid>
          ))}
        </Grid>

        {filteredCompanies.length === 0 && (
          <Typography
            variant="h6"
            align="center"
            sx={{ color: "text.secondary", mt: 8 }}
          >
            No companies found in this category.
          </Typography>
        )}
      </Container>

      <HireModal
        open={hireModalOpen}
        onClose={handleHireClose}
        onConfirm={handleHireConfirm}
        company={selectedCompany}
      />
    </Box>
  );
};

interface CategoryFilterChipProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const CategoryFilterChip = ({
  label,
  isActive,
  onClick,
}: CategoryFilterChipProps) => (
  <Chip
    label={label}
    onClick={onClick}
    sx={{
      fontWeight: 500,
      cursor: "pointer",
      background: isActive
        ? "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)"
        : "rgba(124, 58, 237, 0.1)",
      color: isActive ? "#fff" : "#a78bfa",
      border: isActive
        ? "1px solid transparent"
        : "1px solid rgba(124, 58, 237, 0.2)",
      "&:hover": {
        background: isActive
          ? "linear-gradient(135deg, #6d28d9 0%, #2563eb 100%)"
          : "rgba(124, 58, 237, 0.2)",
      },
    }}
  />
);

export default CompaniesPage;
