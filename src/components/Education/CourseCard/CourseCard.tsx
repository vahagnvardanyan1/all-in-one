"use client";

import GroupIcon from "@mui/icons-material/Group";
import StarIcon from "@mui/icons-material/Star";
import TimerIcon from "@mui/icons-material/Timer";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

import type { ICourse } from "@/data/education";
import { DIFFICULTY_COLORS, getInstructorById } from "@/data/education";
import type { CourseDifficulty } from "@/data/education";
import { Link } from "@/i18n/navigation";

import {
  StyledCard,
  InstructorAvatar,
  DifficultyChip,
  CategoryChip,
  PopularChip,
  PriceText,
} from "./styled";

interface CourseCardProps {
  course: ICourse;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  const instructor = getInstructorById(course.instructorId);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ height: "100%" }}
    >
      <StyledCard>
        {course.isPopular && <PopularChip label="Popular" size="small" />}

        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
          {instructor && (
            <InstructorAvatar src={instructor.avatar} alt={instructor.name} />
          )}
          <Box>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              {instructor?.name}
            </Typography>
          </Box>
        </Stack>

        <Typography
          variant="h6"
          sx={{ fontWeight: 700, mb: 1, lineHeight: 1.3 }}
        >
          {course.title}
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "text.secondary", mb: 2, flex: 1, lineHeight: 1.6 }}
        >
          {course.shortDescription}
        </Typography>

        <Stack direction="row" spacing={1} sx={{ mb: 2 }} flexWrap="wrap">
          <DifficultyChip
            label={course.difficulty}
            variant="outlined"
            size="small"
            difficultyColor={
              DIFFICULTY_COLORS[course.difficulty as CourseDifficulty]
            }
          />
          <CategoryChip
            label={course.category}
            variant="outlined"
            size="small"
          />
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ mb: 2, color: "text.secondary" }}
        >
          <Stack direction="row" spacing={0.5} alignItems="center">
            <StarIcon sx={{ fontSize: 16, color: "#facc15" }} />
            <Typography variant="caption" sx={{ fontWeight: 600 }}>
              {course.rating}
            </Typography>
            <Typography variant="caption">
              ({course.reviewCount.toLocaleString()})
            </Typography>
          </Stack>
          <Stack direction="row" spacing={0.5} alignItems="center">
            <GroupIcon sx={{ fontSize: 16 }} />
            <Typography variant="caption">
              {course.studentsEnrolled.toLocaleString()}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={0.5} alignItems="center">
            <TimerIcon sx={{ fontSize: 16 }} />
            <Typography variant="caption">{course.duration}</Typography>
          </Stack>
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <PriceText>${course.price}</PriceText>
          <Box
            component={Link}
            href={`/education/${course.id}`}
            sx={{
              color: "#7c3aed",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.875rem",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Enroll Now →
          </Box>
        </Stack>
      </StyledCard>
    </motion.div>
  );
};
