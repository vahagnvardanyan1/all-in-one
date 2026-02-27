"use client";

import { use, useState } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { CourseHeader } from "@/components/Education/CourseHeader";
import { CourseTabs } from "@/components/Education/CourseTabs";
import { EnrollModal } from "@/components/Education/EnrollModal";
import { AI_COURSES } from "@/data/education";
import { Link } from "@/i18n/navigation";
import { useAppStore, setAppStore } from "@/store";
import type { IAppStore } from "@/store";

interface CourseDetailPageProps {
  params: Promise<{ id: string }>;
}

const enrolledSelector = (s: IAppStore) => s.enrolledCourseIds;

const CourseDetailPage = ({ params }: CourseDetailPageProps) => {
  const { id } = use(params);
  const course = AI_COURSES.find((c) => c.id === id);
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);

  const enrolledCourseIds = useAppStore(enrolledSelector);
  const isEnrolled = course ? enrolledCourseIds.includes(course.id) : false;

  const handleEnrollConfirm = () => {
    if (!course) return;
    setAppStore((s) => ({
      enrolledCourseIds: [...s.enrolledCourseIds, course.id],
    }));
    setEnrollModalOpen(false);
  };

  if (!course) {
    return (
      <Container maxWidth="md" sx={{ py: 12, textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          Course Not Found
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
          The course you are looking for does not exist.
        </Typography>
        <Box
          component={Link}
          href="/education"
          sx={{
            color: "#7c3aed",
            textDecoration: "none",
            fontWeight: 600,
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Back to Education
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <CourseHeader
        course={course}
        isEnrolled={isEnrolled}
        onEnroll={() => setEnrollModalOpen(true)}
      />
      <CourseTabs course={course} />

      <EnrollModal
        open={enrollModalOpen}
        onClose={() => setEnrollModalOpen(false)}
        onConfirm={handleEnrollConfirm}
        course={course}
      />
    </Container>
  );
};

export default CourseDetailPage;
