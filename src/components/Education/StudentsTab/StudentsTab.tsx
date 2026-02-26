"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import type { IStudent } from "@/data/education";

import { StudentAvatar, StudentCard, ProgressBar } from "./styled";

interface StudentsTabProps {
  students: IStudent[];
}

export const StudentsTab = ({ students }: StudentsTabProps) => {
  if (students.length === 0) {
    return (
      <Typography variant="body1" sx={{ color: "text.secondary" }}>
        No students enrolled yet.
      </Typography>
    );
  }

  return (
    <Grid container spacing={2}>
      {students.map((student) => (
        <Grid key={student.id} size={{ xs: 12, sm: 6 }}>
          <StudentCard>
            <StudentAvatar src={student.avatar} alt={student.name} />
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                {student.name}
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "text.secondary", mb: 0.5, display: "block" }}
              >
                Enrolled {student.enrolledDate}
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <ProgressBar variant="determinate" value={student.progress} />
                <Typography
                  variant="caption"
                  sx={{ fontWeight: 600, whiteSpace: "nowrap" }}
                >
                  {student.progress}%
                </Typography>
              </Stack>
            </Box>
          </StudentCard>
        </Grid>
      ))}
    </Grid>
  );
};
