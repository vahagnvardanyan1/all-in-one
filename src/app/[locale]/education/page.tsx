"use client";

import { useState, useMemo } from "react";

import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

import { CourseCard } from "@/components/Education/CourseCard";
import { AI_COURSES, COURSE_CATEGORIES } from "@/data/education";

const ALL_TAB = "All";
const CATEGORY_TABS = [ALL_TAB, ...COURSE_CATEGORIES];

const EducationPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(ALL_TAB);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = useMemo(() => {
    const query = searchQuery.toLowerCase();

    return AI_COURSES.filter((c) => {
      const matchesCategory =
        selectedCategory === ALL_TAB || c.category === selectedCategory;
      const matchesSearch = !query || c.title.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCategoryChange = (_: React.SyntheticEvent, value: string) => {
    setSelectedCategory(value);
  };

  return (
    <Box sx={{ minHeight: "100vh", pt: { xs: 10, md: 12 }, pb: 8 }}>
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 2,
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "3rem" },
              background:
                "linear-gradient(135deg, #7c3aed 0%, #3b82f6 50%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Education Hub
          </Typography>
          <Typography
            variant="h6"
            component="p"
            align="center"
            sx={{
              color: "text.secondary",
              mb: 5,
              maxWidth: 560,
              mx: "auto",
              fontWeight: 400,
            }}
          >
            Learn from AI instructors across academy, university, and bootcamp
            programs
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
            <Tabs
              value={selectedCategory}
              onChange={handleCategoryChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                "& .MuiTab-root": {
                  color: "rgba(255,255,255,0.5)",
                  fontWeight: 600,
                  textTransform: "none",
                  fontSize: "0.9rem",
                  minHeight: 40,
                  "&.Mui-selected": { color: "#a78bfa" },
                },
                "& .MuiTabs-indicator": {
                  background:
                    "linear-gradient(90deg, #7c3aed 0%, #3b82f6 100%)",
                  height: 3,
                  borderRadius: 2,
                },
              }}
            >
              {CATEGORY_TABS.map((cat) => (
                <Tab key={cat} label={cat} value={cat} />
              ))}
            </Tabs>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 5,
              px: { xs: 0, sm: 4 },
            }}
          >
            <TextField
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              size="small"
              sx={{
                width: { xs: "100%", sm: 420 },
                "& .MuiOutlinedInput-root": {
                  borderRadius: 3,
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  "& fieldset": {
                    borderColor: "rgba(124, 58, 237, 0.2)",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgba(124, 58, 237, 0.4)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#7c3aed",
                  },
                },
              }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: "rgba(255,255,255,0.3)" }} />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Box>
        </motion.div>

        <Grid container spacing={3}>
          {filteredCourses.map((course, index) => (
            <Grid key={course.id} size={{ xs: 12, sm: 6, md: 4, xl: 3 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                style={{ height: "100%" }}
              >
                <CourseCard course={course} />
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {filteredCourses.length === 0 && (
          <Box sx={{ textAlign: "center", py: 10 }}>
            <Typography variant="h6" sx={{ color: "text.secondary", mb: 1 }}>
              No courses found
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Try adjusting your search or category filter
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default EducationPage;
