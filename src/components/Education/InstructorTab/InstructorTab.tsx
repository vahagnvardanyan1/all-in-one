"use client";

import GroupIcon from "@mui/icons-material/Group";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import type { IInstructor } from "@/data/education";

import { InstructorAvatar, ExpertiseChip } from "./styled";

interface InstructorTabProps {
  instructor: IInstructor;
}

export const InstructorTab = ({ instructor }: InstructorTabProps) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      gap: 4,
      alignItems: { xs: "center", md: "flex-start" },
    }}
  >
    <InstructorAvatar src={instructor.avatar} alt={instructor.name} />

    <Stack spacing={2} flex={1}>
      <Box>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          {instructor.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {instructor.title}
        </Typography>
      </Box>

      <Typography
        variant="body1"
        sx={{ color: "text.secondary", lineHeight: 1.8 }}
      >
        {instructor.bio}
      </Typography>

      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
        {instructor.expertise.map((skill) => (
          <ExpertiseChip
            key={skill}
            label={skill}
            variant="outlined"
            size="small"
          />
        ))}
      </Stack>

      <Stack direction="row" spacing={4} sx={{ color: "text.secondary" }}>
        <Stack direction="row" spacing={0.5} alignItems="center">
          <MenuBookIcon sx={{ fontSize: 18 }} />
          <Typography variant="body2">
            {instructor.coursesCount} courses
          </Typography>
        </Stack>
        <Stack direction="row" spacing={0.5} alignItems="center">
          <GroupIcon sx={{ fontSize: 18 }} />
          <Typography variant="body2">
            {instructor.studentsCount.toLocaleString()} students
          </Typography>
        </Stack>
        <Stack direction="row" spacing={0.5} alignItems="center">
          <StarIcon sx={{ fontSize: 18, color: "#facc15" }} />
          <Typography variant="body2">{instructor.rating} rating</Typography>
        </Stack>
      </Stack>
    </Stack>
  </Box>
);
