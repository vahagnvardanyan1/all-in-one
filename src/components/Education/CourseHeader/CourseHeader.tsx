"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import GroupIcon from "@mui/icons-material/Group";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import TimerIcon from "@mui/icons-material/Timer";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

import type { ICourse } from "@/data/education";
import { DIFFICULTY_COLORS, getInstructorById } from "@/data/education";
import type { CourseDifficulty } from "@/data/education";
import { Link } from "@/i18n/navigation";

import { HeaderAvatar, EnrollButton } from "./styled";

interface CourseHeaderProps {
  course: ICourse;
  isEnrolled?: boolean;
  onEnroll?: () => void;
}

export const CourseHeader = ({
  course,
  isEnrolled,
  onEnroll,
}: CourseHeaderProps) => {
  const instructor = getInstructorById(course.instructorId);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        component={Link}
        href="/education"
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: 0.5,
          color: "#7c3aed",
          textDecoration: "none",
          fontWeight: 600,
          fontSize: "0.875rem",
          mb: 3,
          "&:hover": { textDecoration: "underline" },
        }}
      >
        <ArrowBackIcon sx={{ fontSize: 18 }} />
        Back to Education
      </Box>

      <Box
        sx={(t) => ({
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          p: 4,
          mb: 4,
          background: t.vars?.palette.background.paper,
          border: `1px solid ${t.vars?.palette.divider}`,
          borderRadius: 4,
        })}
      >
        <Stack spacing={2} flex={1}>
          <Typography variant="h3" sx={{ fontWeight: 800 }}>
            {course.title}
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "text.secondary", lineHeight: 1.7, maxWidth: 640 }}
          >
            {course.shortDescription}
          </Typography>

          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Chip
              label={course.difficulty}
              size="small"
              sx={{
                fontWeight: 700,
                borderColor:
                  DIFFICULTY_COLORS[course.difficulty as CourseDifficulty],
                color: DIFFICULTY_COLORS[course.difficulty as CourseDifficulty],
              }}
              variant="outlined"
            />
            <Chip
              label={course.category}
              size="small"
              sx={(t) => ({
                fontWeight: 600,
                bgcolor: `rgba(${t.vars?.palette.primary.mainChannel} / 0.12)`,
                color: t.vars?.palette.primary.light,
              })}
            />
          </Stack>

          {instructor && (
            <Stack direction="row" spacing={1.5} alignItems="center">
              <HeaderAvatar src={instructor.avatar} alt={instructor.name} />
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  {instructor.name}
                </Typography>
                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                  {instructor.title}
                </Typography>
              </Box>
            </Stack>
          )}

          <Stack direction="row" spacing={1} alignItems="center">
            <Rating
              value={course.rating}
              precision={0.1}
              readOnly
              size="small"
              sx={{ "& .MuiRating-iconFilled": { color: "#facc15" } }}
            />
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {course.rating} ({course.reviewCount.toLocaleString()} reviews)
            </Typography>
          </Stack>

          <Stack direction="row" spacing={3} sx={{ color: "text.secondary" }}>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <GroupIcon sx={{ fontSize: 18 }} />
              <Typography variant="body2">
                {course.studentsEnrolled.toLocaleString()} students
              </Typography>
            </Stack>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <TimerIcon sx={{ fontSize: 18 }} />
              <Typography variant="body2">{course.duration}</Typography>
            </Stack>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <MenuBookIcon sx={{ fontSize: 18 }} />
              <Typography variant="body2">
                {course.lessonsCount} lessons
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack spacing={1.5} alignItems="center" sx={{ minWidth: 180 }}>
          <Typography variant="h4" sx={{ fontWeight: 800 }}>
            ${course.price}
          </Typography>
          {isEnrolled ? (
            <Button
              variant="outlined"
              fullWidth
              startIcon={<CheckCircleIcon />}
              sx={{
                borderColor: "rgba(34, 197, 94, 0.4)",
                color: "#22c55e",
                pointerEvents: "none",
                py: 1.25,
              }}
            >
              Enrolled
            </Button>
          ) : (
            <EnrollButton variant="contained" fullWidth onClick={onEnroll}>
              Enroll Now
            </EnrollButton>
          )}
          <Typography
            variant="caption"
            sx={{ color: "text.secondary", textAlign: "center" }}
          >
            Full lifetime access
          </Typography>
        </Stack>
      </Box>
    </motion.div>
  );
};
