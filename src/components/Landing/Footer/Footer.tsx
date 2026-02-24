"use client";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { Link } from "@/i18n/navigation";

import {
  FooterRoot,
  BrandName,
  FooterLink,
  BottomBar,
  SocialIcon,
} from "./styled";

const columns = [
  {
    title: "Product",
    links: [
      { label: "AI Personalities", href: "/marketplace" },
      { label: "AI Companies", href: "/marketplace" },
      { label: "AI Builder", href: "/builder" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/" },
      { label: "Blog", href: "/" },
      { label: "Careers", href: "/" },
      { label: "Contact", href: "/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/" },
      { label: "API Reference", href: "/" },
      { label: "Community", href: "/" },
      { label: "Status", href: "/" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/" },
      { label: "Terms of Service", href: "/" },
      { label: "Cookie Policy", href: "/" },
    ],
  },
];

const socialIcons = [
  { icon: <XIcon sx={{ fontSize: 18 }} />, label: "X" },
  { icon: <GitHubIcon sx={{ fontSize: 18 }} />, label: "GitHub" },
  { icon: <LinkedInIcon sx={{ fontSize: 18 }} />, label: "LinkedIn" },
];

export const Footer = () => (
  <FooterRoot component="footer">
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 3 }}>
          <BrandName variant="h5" sx={{ mb: 2 }}>
            AIverse
          </BrandName>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", lineHeight: 1.7, maxWidth: 280 }}
          >
            The next-generation platform for discovering, building, and
            deploying AI solutions at scale.
          </Typography>
        </Grid>

        {columns.map((column) => (
          <Grid size={{ xs: 6, sm: 3, md: 2.25 }} key={column.title}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 600,
                mb: 2,
                textTransform: "uppercase",
                letterSpacing: 1,
                fontSize: "0.75rem",
              }}
            >
              {column.title}
            </Typography>
            <Stack spacing={1.5}>
              {column.links.map((link) => (
                <FooterLink
                  key={link.label}
                  variant="body2"
                  component={Link}
                  href={link.href}
                  sx={{ textDecoration: "none" }}
                >
                  {link.label}
                </FooterLink>
              ))}
            </Stack>
          </Grid>
        ))}
      </Grid>

      <BottomBar>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          &copy; {new Date().getFullYear()} AIverse. All rights reserved.
        </Typography>

        <Stack direction="row" spacing={1}>
          {socialIcons.map((social) => (
            <SocialIcon
              key={social.label}
              component="a"
              href="/"
              aria-label={social.label}
            >
              {social.icon}
            </SocialIcon>
          ))}
        </Stack>
      </BottomBar>
    </Container>
  </FooterRoot>
);
