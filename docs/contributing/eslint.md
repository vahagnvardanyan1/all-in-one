# ESLint Configuration

The project uses ESLint 9 (flat config) with `eslint-config-next` as the base. Custom rules are layered on top to enforce the [Engineering Principles](./code.md).

## Running

```bash
npm run lint          # check
npx eslint --fix      # auto-fix
```

## Rule Categories

### TypeScript First (Principle 9)

| Rule | Severity | Purpose |
|------|----------|---------|
| `@typescript-eslint/no-explicit-any` | error | Disallow `any` — use `unknown` instead |
| `@typescript-eslint/consistent-type-imports` | error | Enforce `import type` for type-only imports |
| `@typescript-eslint/no-unused-vars` | error | Catch unused variables (allows `_` prefix to ignore) |

### Import Ordering (Principle 8)

| Rule | Severity | Purpose |
|------|----------|---------|
| `import/order` | error | Enforce grouped, alphabetized imports |
| `import/newline-after-import` | error | Blank line after the last import |
| `import/no-duplicates` | error | Merge duplicate import sources |

Import groups are enforced in this order, separated by blank lines:

1. **Framework** — `react`, `next/*`, `next-intl/*`
2. **Third-party** — `@mui/*`, `zustand`, other packages
3. **Local** — `@/*` aliases, relative imports (`./`, `../`)

```typescript
// correct
import { useState } from "react";

import Box from "@mui/material/Box";

import { useAppStore } from "@/store";
import { CardRoot } from "./styled";
```

### Clean & Declarative Logic (Principle 4)

| Rule | Severity | Purpose |
|------|----------|---------|
| `max-depth` | warn (3) | Limit nesting depth — extract helpers instead |
| `complexity` | warn (10) | Limit cyclomatic complexity per function |

### One Responsibility per File (Principle 3)

| Rule | Severity | Purpose |
|------|----------|---------|
| `max-lines` | warn (250) | Keep files focused (blank lines and comments excluded) |

### General Quality

| Rule | Severity | Purpose |
|------|----------|---------|
| `no-console` | warn | Allow only `console.warn` and `console.error` |
| `prefer-const` | error | Use `const` when a variable is never reassigned |
| `no-var` | error | Use `let`/`const` instead of `var` |
| `eqeqeq` | error | Require `===` and `!==` |
| `curly` | error | Require braces for multi-line blocks |
| `no-nested-ternary` | error | No nested ternary expressions |

### React

| Rule | Severity | Purpose |
|------|----------|---------|
| `react/self-closing-comp` | error | `<Box />` not `<Box></Box>` |
| `react/jsx-boolean-value` | error | `<Input disabled />` not `<Input disabled={true} />` |
| `react/jsx-curly-brace-presence` | error | `"text"` not `{"text"}` for static values |
| `react/jsx-no-useless-fragment` | error | No unnecessary `<>...</>` wrappers |

### Inherited from eslint-config-next

The base `core-web-vitals` and `typescript` configs also provide:

- **react-hooks/rules-of-hooks** — enforce Hook rules
- **react-hooks/exhaustive-deps** — validate effect dependencies
- **jsx-a11y/** — accessibility checks (alt text, ARIA, etc.)
- **@next/next/** — Next.js best practices (no `<img>`, no sync scripts, etc.)

## Adding New Rules

Edit `eslint.config.mjs`. Place new rules under the appropriate section comment. Prefer `"error"` for rules that are auto-fixable and `"warn"` for rules that require manual judgment.

## Suppressing Rules

For legitimate exceptions, use inline comments:

```typescript
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const legacyData = response as any;
```

Avoid file-wide `/* eslint-disable */`. If a rule produces too many false positives, discuss adjusting it in the config instead.

## See Also

- [Code Rules (1-8)](./code.md) — engineering principles enforced by these rules
- [Architecture Rules (9-16)](./architecture.md) — TypeScript, state, naming conventions
