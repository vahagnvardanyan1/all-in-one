"use client";

import { useState } from "react";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { motion } from "framer-motion";

import type { ICourse } from "@/data/education";
import {
  getInstructorById,
  getStudentsForCourse,
  getReviewsForCourse,
} from "@/data/education";

import { CurriculumTab } from "../CurriculumTab";
import { InstructorTab } from "../InstructorTab";
import { ReviewsTab } from "../ReviewsTab";
import { StudentsTab } from "../StudentsTab";

import { TabsContainer } from "./styled";

interface CourseTabsProps {
  course: ICourse;
}

const tabSx = {
  color: "text.secondary",
  fontWeight: 600,
  "&.Mui-selected": { color: "primary.main" },
};

export const CourseTabs = ({ course }: CourseTabsProps) => {
  const [tab, setTab] = useState(0);

  const handleTabChange = (_: React.SyntheticEvent, value: number) => {
    setTab(value);
  };

  const instructor = getInstructorById(course.instructorId);
  const students = getStudentsForCourse(course.id);
  const reviews = getReviewsForCourse(course.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <TabsContainer>
        <Tabs
          value={tab}
          onChange={handleTabChange}
          sx={(t) => ({
            borderBottom: `1px solid ${t.vars?.palette.divider}`,
            px: 2,
            "& .MuiTabs-indicator": {
              background: "linear-gradient(90deg, #7c3aed, #3b82f6)",
            },
          })}
        >
          <Tab label="Curriculum" sx={tabSx} />
          <Tab label="Instructor" sx={tabSx} />
          <Tab label="Students" sx={tabSx} />
          <Tab label="Reviews" sx={tabSx} />
        </Tabs>

        <Box sx={{ p: 3, minHeight: 300 }}>
          {tab === 0 && <CurriculumTab modules={course.modules} />}
          {tab === 1 && instructor && <InstructorTab instructor={instructor} />}
          {tab === 2 && <StudentsTab students={students} />}
          {tab === 3 && <ReviewsTab reviews={reviews} />}
        </Box>
      </TabsContainer>
    </motion.div>
  );
};
