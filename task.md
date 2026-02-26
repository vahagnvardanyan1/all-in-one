You are a senior full-stack engineer and UI/UX designer.

Build a modern web application mockup (not fully functional backend) for an AI platform called "AIverse".

This is Phase 1 presentation mockup.

Tech stack:
- material ui
- Framer Motion
- React Flow (for workflow builder)
- Use mock data only (no real backend)

-----------------------------------
MAIN CONCEPT
-----------------------------------

The platform has 2 main sections:

1) B2C – AI Personalities Marketplace
2) B2B – AI Companies & AI Agency Builder

-----------------------------------
GLOBAL REQUIREMENTS
-----------------------------------

- Dark modern UI
- Futuristic AI design
- Gradient accents (purple/blue)
- Fully responsive
- Animated cards
- Clean dashboard layout
- Sidebar navigation
- Hero landing page
- Pricing page (mock pricing)
- Login/Register UI (fake auth)
- Use mock JSON data

-----------------------------------
LANDING PAGE
-----------------------------------

Include:
- Hero section with futuristic design
- "Find Your AI" CTA button
- "Build Your AI Company" CTA button
- Features section
- How It Works section
- Pricing section
- Footer

-----------------------------------
B2C SECTION
-----------------------------------

Create a marketplace page where users can browse AI personalities.

Categories:
- Personal Growth
- Fitness
- Education
- Emotional
- Professional

Each AI card must include:
- Avatar
- Name
- Short description
- Rating
- Subscribe button
- Demo chat button (open modal with fake chat UI)

Create at least 20 mock AI personalities.

Clicking on AI opens profile page:
- Description
- Features
- Pricing
- Chat UI mock

-----------------------------------
B2B SECTION
-----------------------------------

Create a marketplace for AI Companies.

Categories:
- AI Legal Company
- AI IT Company
- AI Marketing Agency
- AI HR Agency
- AI Finance Company
- AI Data Science Agency
- AI Creative Studio
- AI E-commerce Agency

Each company card includes:
- Logo placeholder
- Description
- Services
- Pricing
- "Hire Agency" button

-----------------------------------
CUSTOM AI COMPANY BUILDER
-----------------------------------

Create a page called "AI Builder".

Use React Flow to create a drag-and-drop workflow canvas.

Include nodes:
- Input Node
- AI Brain Node
- Condition Node
- API Node
- Memory Node
- Output Node

Allow:
- Drag from sidebar
- Connect nodes visually
- Save workflow to local state
- Export workflow JSON (mock function)

-----------------------------------
DASHBOARD
-----------------------------------

User dashboard with:
- My AI Subscriptions
- My AI Companies
- Saved Workflows
- Account settings

-----------------------------------
IMPORTANT
-----------------------------------

This is mockup only.
No real database.
No real AI API.
Use static JSON and local state.
Focus on beautiful UI and structure.
Write clean, modular, production-style code.

Generate full project structure and main files.

-----------------------------------
AI ACADEMY (Education Hub)
-----------------------------------

lets add some another minds like create it academy when user want to learn software engineering he can go here and start lesson he can see teacher, another students .etc so fake ai academy, lets add that in sidebar should be education tab .etc please start doing it and also reminder this is mockup nothing else

-----------------------------------
INTERACTIVE AI MARKETPLACE (Investor Demo)
-----------------------------------

Goal: Make the AI Marketplace fully interactive so investors can experience the product hands-on.
This is still a mockup — no real backend or AI API. All responses are pre-defined mock data.
Focus on the B2C marketplace flow: Browse → Subscribe → Chat.

---

WHAT EXISTS TODAY (DO NOT REBUILD):
- Marketplace page with 20 AI personalities, search, category filters
- AICard component with Subscribe + Demo Chat buttons (buttons exist but do nothing)
- ChatModal component (shows hardcoded static messages, input does nothing)
- AI Profile detail page (/marketplace/[id]) with ProfileTabs (Description, Features, Chat tabs)
- Chat tab in ProfileTabs (same hardcoded static messages, input does nothing)
- Zustand store with UI slice (sidebarOpen, counter)

---

TASK 1: Add mock chat responses to personality data
File: src/data/personalities.ts

- Add a "mockResponses" field (string array) to the IPersonality interface
- For each of the 20 AI personalities, add 6-8 contextual responses
  that match the personality's specialty
- Example for "Zenith" (habit-building AI):
  "Let's start by identifying your top 3 goals for this week. What matters most to you right now?"
  "I noticed you mentioned morning routines — have you tried the 2-minute rule? Start with just 2 minutes of any habit."
  "Great progress! You've been consistent for 5 days. That's when habits start to stick."
  "Let's do a quick reflection: what went well this week, and what felt challenging?"
  "I recommend stacking your new habit onto something you already do daily. What's your most automatic daily routine?"
  "Remember, progress isn't linear. A missed day doesn't erase your streak — just pick up where you left off."
- Responses should feel natural and specific to each AI's domain
- They will cycle through when the user keeps chatting

---

TASK 2: Create marketplace Zustand slice
File: src/store/slices/marketplace.ts (NEW)

Create a new store slice following the existing pattern in src/store/slices/ui.ts.

State shape:
  subscribedIds: string[]          — IDs of AI personalities the user has subscribed to
  chatMessages: Record<string, IMessage[]>  — messages per personality ID
  typingPersonalityId: string | null        — which AI is currently "typing"

IMessage interface:
  id: string
  text: string
  isUser: boolean
  timestamp: number

File: src/store/index.ts
- Import and compose the new marketplace slice with the existing UI slice
- Update IAppStore type to include IMarketplaceStore

Follow project conventions:
- Slices hold state only, no setters
- Mutations via setAppStore()
- Selectors defined outside components

---

TASK 3: Create useChat hook
File: src/hooks/useChat.ts (NEW)

Custom hook that powers the interactive chat for both ChatModal and ProfileTabs.

Input: personalityId (string)
Returns: { messages: IMessage[], sendMessage: (text: string) => void, isTyping: boolean }

Behavior:
1. On first call for a personality, initialize chat with a greeting message:
   "Hi there! I'm {name}. How can I help you today?"
   Store this in chatMessages[personalityId]
2. sendMessage(text):
   a. Create user message, add to store
   b. Set typingPersonalityId to current personality
   c. After 1000-1500ms random delay, add next mock response from personality.mockResponses
   d. Clear typingPersonalityId
   e. Cycle through mockResponses array (when reaching the end, start from beginning)
3. Messages persist in store during the session — navigating between
   ChatModal and Profile page shows same conversation
4. Use useRef to track which response index to use next

Follow project conventions:
- Function expressions only (const useChat = ...)
- camelCase hook naming with "use" prefix
- Object parameter if 2+ params

---

TASK 4: Make ChatModal interactive
File: src/components/Marketplace/ChatModal/ChatModal.tsx

Replace the hardcoded getMockMessages with the useChat hook.

Changes:
- Add local state for input text (useState)
- Use useChat(personality.id) to get messages, sendMessage, isTyping
- Wire input field: controlled value, onChange updates local state
- Send message on Enter key press or Send button click
- Clear input after sending
- Show typing indicator when isTyping is true (animated 3 dots)
- Auto-scroll messages area to bottom when new messages arrive (useRef on MessagesArea + useEffect)
- Disable send button when input is empty or AI is typing

File: src/components/Marketplace/ChatModal/styled.tsx
- Add TypingIndicator styled component (3 animated dots with pulse/bounce animation)

---

TASK 5: Make ProfileTabs chat tab interactive
File: src/components/AIProfile/ProfileTabs/ProfileTabs.tsx

Same changes as ChatModal but within the Chat tab:
- Use useChat(personality.id) hook
- Add input state, send handler, typing indicator
- Auto-scroll on new messages
- Messages are shared with ChatModal (same store key) — if user chatted
  in the modal, those messages appear here too

---

TASK 6: Add subscribe flow to AICard
File: src/components/Marketplace/AICard/AICard.tsx

- Add new props: isSubscribed (boolean), onSubscribe (callback)
- When NOT subscribed: show "Subscribe" button as-is (calls onSubscribe on click)
- When subscribed: show "Subscribed" button with a CheckCircle icon,
  different style (e.g. outlined with green tint or muted gradient), non-clickable

File: src/components/Marketplace/AICard/styled.tsx
- Add SubscribedButton styled component (visual distinction from Subscribe)

---

TASK 7: Create SubscribeModal component
Files (ALL NEW):
  src/components/Marketplace/SubscribeModal/SubscribeModal.tsx
  src/components/Marketplace/SubscribeModal/styled.tsx
  src/components/Marketplace/SubscribeModal/index.ts

A confirmation dialog shown when user clicks "Subscribe" on a card.

Props:
  open: boolean
  onClose: () => void
  onConfirm: () => void
  personality: IPersonality | null

UI layout:
- MUI Dialog, compact (maxWidth="xs")
- Personality avatar + name at top
- Price display: "$X.XX/month"
- Brief text: "Subscribe to unlock full AI sessions"
- "Confirm Subscription" button (gradient, full width)
- "Cancel" text button

On confirm: calls onConfirm → parent adds personality ID to subscribedIds in store → closes modal

Follow component pattern:
- styled.tsx has "use client" directive
- index.ts has named re-export
- Use styled() from @mui/material/styles

---

TASK 8: Wire everything in marketplace page
File: src/app/[locale]/marketplace/page.tsx

- Import useAppStore, setAppStore, SubscribeModal
- Add state for subscribe modal (open/close, selected personality)
- Read subscribedIds from store via selector (defined outside component)
- Pass isSubscribed and onSubscribe to each AICard
- Handle subscribe confirm: add ID to subscribedIds via setAppStore
- Render SubscribeModal component

---

TASK 9: Update barrel export
File: src/components/Marketplace/index.ts
- Add: export { SubscribeModal } from "./SubscribeModal"

---

IMPORTANT REMINDERS:
- This is a MOCKUP. No real AI API, no real payments, no real auth.
- All chat responses come from pre-defined mock data in personalities.ts.
- Follow all existing code conventions (see CLAUDE.md at project root).
- "use client" directive on all client components and styled files.
- ESLint: max 250 lines per file, max nesting 3, no console.log.
- Function expressions only (const fn = () => {}), never function declarations.
- Zustand selectors defined OUTSIDE components.
- Import order: Framework > Third-party > Local.
- Keep the dark futuristic aesthetic with purple/blue gradients.
- All animations via Framer Motion.
- Run `npm run build` and `npm run lint` to verify no errors.
