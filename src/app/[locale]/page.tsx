import Box from "@mui/material/Box";

import {
  HeroSection,
  FeaturesSection,
  HowItWorksSection,
  PricingPreview,
  Footer,
} from "@/components/Landing";

const HomePage = async () => (
  <Box component="main">
    <HeroSection />
    <FeaturesSection />
    <HowItWorksSection />
    <PricingPreview />
    <Footer />
  </Box>
);

export default HomePage;
