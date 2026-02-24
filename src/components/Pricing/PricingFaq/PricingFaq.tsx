"use client";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import type { Theme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

const FAQ_ITEMS = [
  {
    question: "Can I switch plans at any time?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, the credit will be applied to your next billing cycle.",
  },
  {
    question: "What happens when I reach my AI Personality limit?",
    answer:
      "You'll receive a notification when you're close to your limit. You can either upgrade your plan or remove existing personalities to make room for new ones.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, all new users get a 14-day free trial of the Pro plan. No credit card required. After the trial, you'll be moved to the Starter plan unless you choose to upgrade.",
  },
  {
    question: "How does the Enterprise plan work?",
    answer:
      "The Enterprise plan is fully customizable to your organization's needs. Contact our sales team for a personalized demo and pricing based on your usage requirements, team size, and integration needs.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and wire transfers for Enterprise plans. All payments are processed securely through Stripe.",
  },
];

const accordionSx = (t: Theme) => ({
  background: t.vars?.palette.background.paper,
  border: `1px solid ${t.vars?.palette.divider}`,
  borderRadius: "12px !important",
  mb: 1.5,
  "&:before": { display: "none" },
  "&:hover": {
    borderColor: `rgba(${t.vars?.palette.primary.mainChannel} / 0.3)`,
  },
});

export const PricingFaq = () => (
  <Box sx={{ mt: 12, maxWidth: 800, mx: "auto" }}>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: 700, mb: 5 }}
        className="gradient-text"
      >
        Frequently Asked Questions
      </Typography>

      {FAQ_ITEMS.map((faq) => (
        <Accordion key={faq.question} sx={accordionSx}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "text.secondary" }} />}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", lineHeight: 1.8 }}
            >
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </motion.div>
  </Box>
);
