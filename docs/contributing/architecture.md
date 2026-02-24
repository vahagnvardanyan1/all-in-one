# Engineering Principles — Architecture Rules (9–16)

Architecture and quality rules for next-template. For code-level rules, see [Part 1](./code.md).

## 9. TypeScript First

Everything must be typed. Avoid `any`.

- Explicit return types for public APIs
- Union types over enums when appropriate
- `unknown` over `any` for unknown values
- Interfaces for component props

```typescript
// ✅
interface UserBadgeProps {
  name: string;
  role: "admin" | "editor" | "viewer";
}

const UserBadge = ({ name, role }: UserBadgeProps): React.ReactElement => (
  <Chip label={`${name} (${role})`} />
);

// ❌
const UserBadge = ({ name, role }: any) => (
  <Chip label={`${name} (${role})`} />
);
```

## 10. Predictable State Management

Keep state minimal and normalized. Derive state instead of duplicating it.

- **Local state** for UI-only concerns (`useState`)
- **Hooks** for shared logic across components
- **External stores** (Zustand) only when truly needed

```typescript
// ✅ Derived state
const selector = (store: IAppStore) => ({ items: store.items });

const ItemList = () => {
  const { items } = useAppStore(selector);
  const count = items.length; // derived, not stored
};
```

See [Store](../reference/store.md) for the full Zustand pattern.

## 11. Side Effects Discipline

Side effects must be **explicit**, **isolated**, and **easy to reason about**.

- Never trigger side effects during render
- Keep `useEffect` focused and dependency-accurate
- Extract complex effects into custom hooks

```typescript
// ✅ Isolated, focused effect
useEffect(() => {
  const controller = new AbortController();
  fetchData({ signal: controller.signal });
  return () => controller.abort();
}, [fetchData]);

// ❌ Side effect during render
const Component = () => {
  localStorage.setItem("visited", "true"); // runs every render!
  return <div />;
};
```

## 12. Performance by Design

Optimize by default, not after bugs appear.

- Avoid unnecessary re-renders
- Memoize only when it matters — prefer composition over premature memoization
- Use external selectors to prevent Zustand re-renders
- Use `next/dynamic` for heavy components

```typescript
const selector = (store: IAppStore) => ({ counter: store.counter });

const HeavyChart = dynamic(() => import("@/components/HeavyChart"), {
  loading: () => <Skeleton variant="rectangular" height={300} />,
});
```

## 13. Naming & Semantics

Names must describe **intent**, not implementation. Avoid abbreviations.

| Item | Pattern | Example |
|------|---------|---------|
| Components | PascalCase | `UserCard`, `CounterDemo` |
| Hooks | camelCase, `use` prefix | `useTranslator`, `useAuth` |
| Utilities | camelCase | `formatDate`, `parseQuery` |
| Constants | UPPER_SNAKE_CASE | `MAX_RETRIES` |
| Types/Interfaces | PascalCase, `I` prefix for store | `UserCardProps`, `IAppStore` |
| Styled components | PascalCase | `CardRoot`, `TitleBar` |

## 14. Testing Mindset

Logic must be testable by design. Prefer testing:

- **Hooks** — in isolation
- **Utilities** — pure functions with clear inputs/outputs
- **Business rules** — validation, transformations, permissions

UI tests should validate **behavior**, not implementation details.

```typescript
const canAccess = ({ role, resource }: AccessParams): boolean =>
  PERMISSIONS[role]?.includes(resource) ?? false;

expect(canAccess({ role: "admin", resource: "settings" })).toBe(true);
```

## 15. Code Is a Shared Asset

Write code for the next engineer, not just yourself. Optimize for:

- **Readability** — clear names, small functions, obvious flow
- **Consistency** — follow project conventions
- **Maintainability** — easy to change, delete, or extend

## 16. Lazy Loading & Code Splitting

Use lazy loading for route-level components, heavy UI, and non-critical features.

```typescript
// Next.js dynamic import
import dynamic from "next/dynamic";

const HeavyEditor = dynamic(() => import("@/components/HeavyEditor"), {
  loading: () => <EditorSkeleton />,
  ssr: false,
});

// React.lazy + Suspense (client components)
const LazyModal = lazy(() => import("./ConfirmModal"));

<Suspense fallback={<CircularProgress />}>
  {showModal && <LazyModal />}
</Suspense>
```

Always provide meaningful loading and error fallbacks.

## See Also

- [Part 1 — Code Rules (1–8)](./code.md)
- [Component Structure](./component-structure.md) — how to organize components
- [Store](../reference/store.md) — Zustand state management
- [Getting Started](../getting-started/getting-started.md) — project overview
