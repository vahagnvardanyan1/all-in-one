"use client";

import { use, useMemo, useState } from "react";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { AnimatePresence, motion } from "framer-motion";

import { CompanyHeader, EmployeeCard, HireModal } from "@/components/Companies";
import { AI_COMPANIES } from "@/data/companies";
import { Link } from "@/i18n/navigation";
import { useAppStore, setAppStore } from "@/store";
import type { IAppStore } from "@/store";

interface CompanyDetailPageProps {
  params: Promise<{ id: string }>;
}

const ALL_DEPARTMENTS = "All";

const hiredSelector = (s: IAppStore) => s.hiredCompanyIds;

const CompanyDetailPage = ({ params }: CompanyDetailPageProps) => {
  const { id } = use(params);
  const company = AI_COMPANIES.find((c) => c.id === id);
  const [activeDepartment, setActiveDepartment] = useState(ALL_DEPARTMENTS);
  const [hireModalOpen, setHireModalOpen] = useState(false);

  const hiredCompanyIds = useAppStore(hiredSelector);
  const isHired = company ? hiredCompanyIds.includes(company.id) : false;

  const departments = useMemo(() => {
    if (!company?.employees) return [ALL_DEPARTMENTS];
    const unique = [...new Set(company.employees.map((e) => e.department))];
    return [ALL_DEPARTMENTS, ...unique];
  }, [company]);

  const filteredEmployees = useMemo(() => {
    if (!company?.employees) return [];
    if (activeDepartment === ALL_DEPARTMENTS) return company.employees;
    return company.employees.filter((e) => e.department === activeDepartment);
  }, [company, activeDepartment]);

  const handleHireConfirm = () => {
    if (!company) return;
    setAppStore((s) => ({
      hiredCompanyIds: [...s.hiredCompanyIds, company.id],
    }));
    setHireModalOpen(false);
  };

  if (!company) {
    return (
      <Container maxWidth="md" sx={{ py: 12, textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          Company Not Found
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
          The company you are looking for does not exist.
        </Typography>
        <Box
          component={Link}
          href="/companies"
          sx={{
            color: "#7c3aed",
            textDecoration: "none",
            fontWeight: 600,
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Back to Companies
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <CompanyHeader
        company={company}
        isHired={isHired}
        onHire={() => setHireModalOpen(true)}
      />

      {company.employees && company.employees.length > 0 && (
        <Box sx={{ mt: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 1,
                background: "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Team Members
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
              Meet the AI agents powering {company.name}
            </Typography>
          </motion.div>

          <Box
            sx={{
              display: "flex",
              gap: 1,
              flexWrap: "wrap",
              mb: 4,
            }}
          >
            {departments.map((dept) => (
              <Chip
                key={dept}
                label={dept}
                size="small"
                onClick={() => setActiveDepartment(dept)}
                sx={{
                  fontWeight: 500,
                  background:
                    activeDepartment === dept
                      ? "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)"
                      : "rgba(124, 58, 237, 0.08)",
                  color: activeDepartment === dept ? "#fff" : "#a78bfa",
                  border: `1px solid ${
                    activeDepartment === dept
                      ? "transparent"
                      : "rgba(124, 58, 237, 0.25)"
                  }`,
                  "&:hover": {
                    background:
                      activeDepartment === dept
                        ? "linear-gradient(135deg, #6d28d9 0%, #2563eb 100%)"
                        : "rgba(124, 58, 237, 0.15)",
                  },
                }}
              />
            ))}
          </Box>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeDepartment}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <Grid container spacing={2.5}>
                {filteredEmployees.map((employee, index) => (
                  <Grid
                    key={employee.id}
                    size={{ xs: 12, sm: 6, md: 4, xl: 3 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.07,
                      }}
                      style={{ height: "100%" }}
                    >
                      <EmployeeCard employee={employee} />
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </AnimatePresence>
        </Box>
      )}

      <HireModal
        open={hireModalOpen}
        onClose={() => setHireModalOpen(false)}
        onConfirm={handleHireConfirm}
        company={company}
      />
    </Container>
  );
};

export default CompanyDetailPage;
