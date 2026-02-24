# SEO

The template includes localized SEO metadata, canonical URLs, and [next-sitemap](https://github.com/iamvishnusankar/next-sitemap) for robots.txt and sitemap generation.

## Metadata

The `generateMetadata` function in `src/app/[locale]/layout.tsx` reads flat translation keys and returns a Next.js `Metadata` object:

```typescript
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> => {
  const { locale } = await params;
  const translate = await getTranslations({ locale });

  return {
    title: {
      default: translate("seoTitle"),
      template: `%s | ${translate("appTitle")}`,
    },
    description: translate("seoDescription"),
    keywords: translate("seoKeywords"),
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
    },
    openGraph: {
      title: translate("seoTitle"),
      description: translate("seoDescription"),
      locale,
      type: "website",
      url: `${BASE_URL}/${locale}`,
    },
  };
};
```

## Translation Keys

SEO strings use flat keys (no nested objects) in each locale file (`messages/*.json`):

```json
{
  "appTitle": "Next Template",
  "seoTitle": "Next Template — Next.js Starter with MUI and TypeScript",
  "seoDescription": "A production-ready Next.js starter template with Material UI, internationalization, and theming. Skip the boilerplate and start building modern web apps.",
  "seoKeywords": "Next.js, React, MUI, Material UI, TypeScript, starter template"
}
```

> **Convention:** Translation files must stay flat — no nested objects. Use camelCase prefixes to group related keys (e.g. `seoTitle`, `seoDescription`).

| Key | Used For |
|-----|----------|
| `seoTitle` | `<title>`, Open Graph title |
| `seoDescription` | `<meta name="description">`, Open Graph description |
| `seoKeywords` | `<meta name="keywords">` |
| `appTitle` | Title template suffix (`%s | App Title`) |

### Title Length

Keep `seoTitle` between 40–60 characters for optimal search engine display.

### Description Length

Keep `seoDescription` between 140–160 characters to ensure full display in search results and maximize click-through rate.

## Canonical URL

Each locale page includes a canonical URL via `alternates.canonical`, preventing duplicate content issues across locales:

```html
<link rel="canonical" href="https://example.com/en" />
```

Set `NEXT_PUBLIC_BASE_URL` in your environment to configure the domain. Defaults to `http://localhost:3000`.

## Title Template

The `template` field (`%s | App Title`) formats page-level titles. If a child route exports its own `metadata.title`, it renders as:

```
Page Title | Next Template
```

If no page-level title is set, the `default` value (`seoTitle`) is used.

## Per-Page Metadata

Export `generateMetadata` from any page file to override layout defaults:

```typescript
// src/app/[locale]/about/page.tsx
import { getTranslations } from "next-intl/server";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  const translate = await getTranslations({ locale });

  return {
    title: translate("aboutPageTitle"),
  };
};
```

## next-sitemap

robots.txt and sitemap.xml are generated at build time by [next-sitemap](https://github.com/iamvishnusankar/next-sitemap). The `postbuild` npm script runs it automatically after `next build`.

### Configuration

`next-sitemap.config.mjs` at the project root:

```javascript
const LOCALES = ["en", "hy", "ru"];

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  additionalPaths: async () =>
    LOCALES.map((locale) => ({
      loc: `/${locale}`,
      changefreq: "weekly",
      priority: 1,
      lastmod: new Date().toISOString(),
    })),
};
```

### Generated Output

Files are written to `public/` and served statically:

- `public/robots.txt` — allows all crawlers, links to sitemap
- `public/sitemap.xml` — one entry per locale

Both files are listed in `.gitignore` since they're regenerated on every build.

### Adding Pages

When you add new routes, add them to `additionalPaths` in `next-sitemap.config.mjs`:

```javascript
additionalPaths: async () => [
  ...LOCALES.map((locale) => ({ loc: `/${locale}`, ... })),
  ...LOCALES.map((locale) => ({ loc: `/${locale}/about`, ... })),
],
```

## Environment Variable

| Variable | Purpose | Default |
|----------|---------|---------|
| `NEXT_PUBLIC_BASE_URL` | Domain for canonical URLs, sitemap, and robots.txt | `http://localhost:3000` |

## Heading Hierarchy

Pages must maintain proper heading hierarchy for SEO:

- **H1** — one per page (e.g. hero title)
- **H2** — major page sections
- **H3** — subsections within H2 blocks

In MUI, use `component` to set the semantic tag while keeping the visual style: `<Typography variant="h5" component="h2">`.

## What's Included

- **Title** with template pattern for child pages (40–60 chars recommended)
- **Description** meta tag (140–160 chars recommended) and **Keywords** meta tag
- **Canonical URL** per locale
- **Open Graph** (title, description, locale, type, url)
- **`lang` attribute** on `<html>` set by the locale layout
- **robots.txt** via next-sitemap (generated at build)
- **sitemap.xml** via next-sitemap (generated at build)

## See Also

- [next-sitemap docs](https://github.com/iamvishnusankar/next-sitemap)
- [Next.js Metadata docs](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Integrations](integrations.md) — next-intl configuration
