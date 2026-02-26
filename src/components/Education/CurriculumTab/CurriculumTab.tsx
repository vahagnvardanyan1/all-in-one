"use client";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import QuizIcon from "@mui/icons-material/Quiz";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import type { IModule, ILesson } from "@/data/education";

import {
  StyledAccordion,
  StyledAccordionSummary,
  StyledAccordionDetails,
  LessonRow,
} from "./styled";

interface CurriculumTabProps {
  modules: IModule[];
}

const LESSON_ICONS: Record<ILesson["type"], React.ReactNode> = {
  video: <OndemandVideoIcon sx={{ fontSize: 18, color: "#7c3aed" }} />,
  quiz: <QuizIcon sx={{ fontSize: 18, color: "#f59e0b" }} />,
  exercise: <MenuBookIcon sx={{ fontSize: 18, color: "#10b981" }} />,
  reading: <MenuBookIcon sx={{ fontSize: 18, color: "#3b82f6" }} />,
};

export const CurriculumTab = ({ modules }: CurriculumTabProps) => (
  <Box>
    {modules.map((mod, modIndex) => (
      <StyledAccordion key={mod.title} defaultExpanded={modIndex === 0}>
        <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              {mod.title}
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              {mod.lessons.length} lessons
            </Typography>
          </Box>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          {mod.lessons.map((lesson) => (
            <LessonRow key={lesson.title}>
              {LESSON_ICONS[lesson.type]}
              <Typography variant="body2" sx={{ flex: 1 }}>
                {lesson.title}
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "text.secondary", whiteSpace: "nowrap" }}
              >
                {lesson.duration}
              </Typography>
            </LessonRow>
          ))}
        </StyledAccordionDetails>
      </StyledAccordion>
    ))}
  </Box>
);
