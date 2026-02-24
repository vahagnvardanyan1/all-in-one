"use client";

import StarIcon from "@mui/icons-material/Star";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

import type { IEmployee } from "@/data/companies";

import {
  StyledEmployeeCard,
  StatusAvatar,
  DepartmentChip,
  StatusDot,
  BottomRow,
} from "./styled";

interface EmployeeCardProps {
  employee: IEmployee;
}

const STATUS_COLORS: Record<IEmployee["status"], string> = {
  available: "#10b981",
  busy: "#f59e0b",
  offline: "#6b7280",
};

const STATUS_LABELS: Record<IEmployee["status"], string> = {
  available: "Available",
  busy: "Busy",
  offline: "Offline",
};

export const EmployeeCard = ({ employee }: EmployeeCardProps) => {
  const statusColor = STATUS_COLORS[employee.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      style={{ height: "100%" }}
    >
      <StyledEmployeeCard>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
          <StatusAvatar
            src={employee.avatar}
            alt={employee.name}
            statusColor={statusColor}
          />
          <Box sx={{ minWidth: 0 }}>
            <Typography
              variant="body1"
              noWrap
              sx={{ fontWeight: 600, color: "text.primary" }}
            >
              {employee.name}
            </Typography>
            <Typography variant="body2" noWrap sx={{ color: "text.secondary" }}>
              {employee.role}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
          <DepartmentChip
            label={employee.department}
            size="small"
            variant="outlined"
          />
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <StatusDot statusColor={statusColor} />
            <Typography
              variant="caption"
              sx={{ color: statusColor, fontWeight: 500 }}
            >
              {STATUS_LABELS[employee.status]}
            </Typography>
          </Box>
        </Box>

        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            lineHeight: 1.5,
            mb: 2,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {employee.specialization}
        </Typography>

        <BottomRow>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <StarIcon sx={{ fontSize: 16, color: "warning.main" }} />
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              {employee.rating}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <TaskAltIcon sx={{ fontSize: 16, color: "text.secondary" }} />
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              {employee.tasksCompleted} tasks
            </Typography>
          </Box>
        </BottomRow>
      </StyledEmployeeCard>
    </motion.div>
  );
};
