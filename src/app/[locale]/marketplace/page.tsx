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

import { AICard, ChatModal, SubscribeModal } from "@/components/Marketplace";
import { AI_PERSONALITIES, PERSONALITY_CATEGORIES } from "@/data/personalities";
import type { IPersonality } from "@/data/personalities";
import { useAppStore, setAppStore } from "@/store";
import type { IAppStore } from "@/store";

const ALL_TAB = "All";
const CATEGORY_TABS = [ALL_TAB, ...PERSONALITY_CATEGORIES];

const subscribedSelector = (s: IAppStore) => s.subscribedIds;

const MarketplacePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(ALL_TAB);
  const [searchQuery, setSearchQuery] = useState("");
  const [chatModalOpen, setChatModalOpen] = useState(false);
  const [subscribeModalOpen, setSubscribeModalOpen] = useState(false);
  const [selectedPersonality, setSelectedPersonality] =
    useState<IPersonality | null>(null);

  const subscribedIds = useAppStore(subscribedSelector);

  const filteredPersonalities = useMemo(() => {
    const query = searchQuery.toLowerCase();

    return AI_PERSONALITIES.filter((p) => {
      const matchesCategory =
        selectedCategory === ALL_TAB || p.category === selectedCategory;
      const matchesSearch = !query || p.name.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCategoryChange = (_: React.SyntheticEvent, value: string) => {
    setSelectedCategory(value);
  };

  const handleDemoChat = (id: string) => {
    const personality = AI_PERSONALITIES.find((p) => p.id === id) ?? null;
    setSelectedPersonality(personality);
    setChatModalOpen(true);
  };

  const handleCloseChat = () => {
    setChatModalOpen(false);
  };

  const handleSubscribeClick = (id: string) => {
    const personality = AI_PERSONALITIES.find((p) => p.id === id) ?? null;
    setSelectedPersonality(personality);
    setSubscribeModalOpen(true);
  };

  const handleSubscribeConfirm = () => {
    if (!selectedPersonality) return;
    setAppStore((s) => ({
      subscribedIds: [...s.subscribedIds, selectedPersonality.id],
    }));
    setSubscribeModalOpen(false);
  };

  const handleSubscribeClose = () => {
    setSubscribeModalOpen(false);
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
            AI Marketplace
          </Typography>
          <Typography
            variant="h6"
            component="p"
            align="center"
            sx={{
              color: "text.secondary",
              mb: 5,
              maxWidth: 520,
              mx: "auto",
              fontWeight: 400,
            }}
          >
            Discover AI personalities tailored to your needs
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
              placeholder="Search AI personalities..."
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
          {filteredPersonalities.map((personality, index) => (
            <Grid key={personality.id} size={{ xs: 12, sm: 6, md: 4, xl: 3 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                style={{ height: "100%" }}
              >
                <AICard
                  personality={personality}
                  onDemoChat={handleDemoChat}
                  isSubscribed={subscribedIds.includes(personality.id)}
                  onSubscribe={handleSubscribeClick}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {filteredPersonalities.length === 0 && (
          <Box sx={{ textAlign: "center", py: 10 }}>
            <Typography variant="h6" sx={{ color: "text.secondary", mb: 1 }}>
              No AI personalities found
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Try adjusting your search or category filter
            </Typography>
          </Box>
        )}
      </Container>

      <ChatModal
        open={chatModalOpen}
        onClose={handleCloseChat}
        personality={selectedPersonality}
      />

      <SubscribeModal
        open={subscribeModalOpen}
        onClose={handleSubscribeClose}
        onConfirm={handleSubscribeConfirm}
        personality={selectedPersonality}
      />
    </Box>
  );
};

export default MarketplacePage;
