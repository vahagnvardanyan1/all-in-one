-----------------------------------
3D VIRTUAL AI COMPANY OFFICE (Investor Demo)
-----------------------------------

Goal: When a user clicks on an AI Company, they enter an immersive 3D virtual office
where they can see AI employees at their desks, walk around, click on people,
assign tasks, and chat — making it feel like a real company.

This is still a MOCKUP. No real backend. All data is mock.
Focus on the visual wow-factor and basic interactions for investor presentation.

---

WHAT EXISTS TODAY (DO NOT REBUILD):
- Companies listing page (/companies) with 8 AI companies, category filtering
- Company detail page (/companies/[id]) with header + employee cards in a flat grid
- CompanyCard component (logo, services, pricing, "Hire Agency" + "View Details" buttons)
- CompanyHeader component (full company info, pricing tiers, "Hire Agency" button)
- EmployeeCard component (avatar, role, department, status, rating, tasks completed)
- 8 companies in src/data/companies.ts, each with 4-8 employees
- Employee data has: id, name, avatar, role, department, specialization, status (available/busy/offline), rating, tasksCompleted
- Departments: Legal, Engineering, Marketing, HR, Finance, Design, Operations, QA, Data Science, Product

---

TECH APPROACH:

Use React Three Fiber (@react-three/fiber) + Drei (@react-three/drei) for the 3D scene.
These are React wrappers around Three.js — works natively with Next.js.

New dependencies needed:
  @react-three/fiber
  @react-three/drei
  three
  @types/three (dev)

Alternative lighter approach (if 3D is too heavy):
  Pure CSS 3D transforms + Framer Motion for an isometric 2.5D office view.
  Less immersive but faster to build and no new dependencies.

Choose ONE approach. The tasks below describe the full 3D approach.
If going with CSS isometric, adapt the office layout to use CSS transforms
(rotateX(45deg) rotateZ(45deg)) instead of a Three.js canvas.

---

TASK 1: Install 3D dependencies
Run: npm install @react-three/fiber @react-three/drei three
Run: npm install -D @types/three

---

TASK 2: Create 3D Office scene component
Files (ALL NEW):
  src/components/Companies/OfficeScene/OfficeScene.tsx
  src/components/Companies/OfficeScene/styled.tsx
  src/components/Companies/OfficeScene/index.ts

This is the main 3D canvas that renders the virtual office.

OfficeScene props:
  company: ICompany

Structure:
- Full-screen Canvas from @react-three/fiber
- OrbitControls from @react-three/drei (user can rotate/zoom the office)
  - Limit rotation angles so user can't flip upside down
  - Limit zoom range (min/max distance)
- Ambient light + directional light for realistic shadows
- A ground plane (office floor) with a subtle grid pattern or carpet texture
- Camera starts at an isometric-like angle looking down at the office

Office layout (simple geometric shapes — no complex 3D models):
- Floor: large flat plane with subtle color
- Walls: thin box geometries on 2-3 sides (glass/transparent feel)
- Desks: simple box shapes arranged by department zones
- Department labels: floating Text components (from drei) above each zone
- Company logo/name: floating above the entrance area

Department zones (arrange in office grid):
- Engineering zone (left side)
- Design zone (right side)
- QA zone (back left)
- Management zone (back right)
- Operations zone (center back)
- Map employee.department to the correct zone

Keep geometry simple — boxes, planes, cylinders. No imported 3D models.
The wow-factor comes from the concept + interactions, not photorealistic graphics.

---

TASK 3: Create 3D Employee avatar component
Files (ALL NEW):
  src/components/Companies/OfficeEmployee/OfficeEmployee.tsx
  src/components/Companies/OfficeEmployee/index.ts

A 3D representation of an employee sitting at a desk within the office scene.

Props:
  employee: IEmployee
  position: [x, y, z]
  onClick: () => void

Visual:
- Simple humanoid shape: sphere (head) + cylinder/box (body) sitting on a chair
- Color-coded by department (match existing department colors or use status colors)
- Status indicator: glowing ring around the avatar
  - Green glow = available
  - Amber glow = busy
  - Gray = offline
- Floating name tag above head (Text from drei, small font)
- Desk in front: simple box geometry with a small "monitor" rectangle
- Subtle idle animation: gentle floating/bobbing motion (useFrame hook)

On hover:
- Avatar glows brighter
- Cursor changes to pointer (via onPointerOver/onPointerOut)
- Name tag becomes more prominent

On click:
- Calls onClick → parent opens the employee detail panel

---

TASK 4: Create Employee interaction panel (2D overlay)
Files (ALL NEW):
  src/components/Companies/EmployeePanel/EmployeePanel.tsx
  src/components/Companies/EmployeePanel/styled.tsx
  src/components/Companies/EmployeePanel/index.ts

When user clicks on a 3D employee, this 2D panel slides in from the right side.
It overlays on top of the 3D scene (position: fixed or absolute).

Props:
  employee: IEmployee | null
  open: boolean
  onClose: () => void
  onChat: () => void
  onAssignTask: () => void

Panel content:
- Close button (top right)
- Employee avatar (large, from Dicebear URL)
- Name + role
- Department chip + status indicator
- Specialization
- Rating (star display) + tasks completed count
- Stats section: small cards showing metrics
- "Chat with {name}" button (gradient, primary action)
- "Assign Task" button (outlined, secondary action)
- Slide-in animation from right (Framer Motion: x: 400 → x: 0)

---

TASK 5: Create Employee chat dialog
Files (ALL NEW):
  src/components/Companies/EmployeeChat/EmployeeChat.tsx
  src/components/Companies/EmployeeChat/styled.tsx
  src/components/Companies/EmployeeChat/index.ts

Dialog/modal for chatting with an AI employee. Similar pattern to the
marketplace ChatModal but themed for professional B2B context.

Props:
  open: boolean
  onClose: () => void
  employee: IEmployee | null

Features:
- Dialog header: employee avatar + name + role + status dot
- Chat messages area (scrollable)
- Input field + send button
- Mock responses specific to employee role/department:
  - Engineering employees respond about code, architecture, sprints
  - QA employees respond about testing, bugs, coverage
  - Design employees respond about UI, wireframes, prototypes
  - Management responds about timelines, resources, priorities
- Typing indicator (animated dots)
- Same interactive pattern as marketplace chat (type message → get mock response)

---

TASK 6: Add mock chat responses to employee data
File: src/data/companies.ts

- Add "mockResponses" field (string array) to IEmployee interface
- Add 4-6 role-specific responses per employee
- Examples:
  For an Engineer:
    "I've been working on the API refactor. The new endpoints should be ready by EOD."
    "Let me pull up the architecture diagram — we're using a microservices approach for this module."
    "Good news — all unit tests are passing. I'll start on integration tests next."
    "I'd recommend we use TypeScript strict mode for this project. Want me to set it up?"

  For a QA Engineer:
    "I found 3 critical bugs in the latest build. I've documented them with reproduction steps."
    "Test coverage is at 87% — we need to add more edge case tests for the payment flow."
    "The regression suite passed on staging. We're clear for the production deploy."
    "I'm setting up automated E2E tests with Playwright. Should cut our manual testing time in half."

  For a Designer:
    "Here's the updated wireframe for the dashboard. I've simplified the navigation based on user feedback."
    "I'm exploring two color palette options — one minimal and one with more brand expression."
    "The design system components are ready in Figma. Engineering can start implementing anytime."
    "User testing showed 90% task completion rate on the new checkout flow. Big improvement!"

  For a Product Manager:
    "Sprint velocity is looking good. We're on track to deliver all committed stories this week."
    "I've prioritized the backlog based on customer feedback — authentication improvements are top priority."
    "Let's schedule a stakeholder review for Friday. I'll prepare the demo environment."
    "The roadmap for Q2 is ready. I'll share it in our next all-hands meeting."

---

TASK 7: Create "Assign Task" dialog
Files (ALL NEW):
  src/components/Companies/AssignTaskDialog/AssignTaskDialog.tsx
  src/components/Companies/AssignTaskDialog/styled.tsx
  src/components/Companies/AssignTaskDialog/index.ts

A mock dialog for assigning a task to an AI employee.

Props:
  open: boolean
  onClose: () => void
  employee: IEmployee | null
  onAssign: (task: { title: string; priority: string; description: string }) => void

UI layout:
- Dialog header: "Assign Task to {employee.name}"
- Form fields (all mock, no validation needed):
  - Task title (TextField)
  - Priority selector (chips: Low, Medium, High, Urgent)
  - Description (TextField, multiline, 3 rows)
- "Assign Task" button (gradient)
- "Cancel" button

On assign:
- Brief success animation/snackbar: "Task assigned to {name}!"
- Close dialog
- Optionally update employee status to "busy" temporarily in local state

---

TASK 8: Create 3D Office page (new route)
File: src/app/[locale]/companies/[id]/office/page.tsx (NEW)

A new route: /companies/{id}/office that shows the 3D virtual office.

Page structure:
- Full viewport height (100vh), no scroll
- Top bar overlay: company name + "Back to Company" link + minimap toggle
- OfficeScene component fills the remaining space
- EmployeePanel (slides in on employee click)
- EmployeeChat dialog (opens from panel's "Chat" button)
- AssignTaskDialog (opens from panel's "Assign Task" button)

State management:
- selectedEmployee: IEmployee | null
- panelOpen: boolean
- chatOpen: boolean
- assignTaskOpen: boolean
- All local state (useState) — no need for Zustand for this page

Flow:
1. User navigates to /companies/{id}/office
2. 3D office loads with all employees at their desks
3. User can orbit/zoom the camera
4. Click on an employee → EmployeePanel slides in
5. Click "Chat" → EmployeeChat dialog opens → interactive mock chat
6. Click "Assign Task" → AssignTaskDialog opens → fill form → success feedback
7. "Back to Company" → returns to /companies/[id] detail page

---

TASK 9: Add "Enter Office" button to existing pages
File: src/components/Companies/CompanyCard/CompanyCard.tsx
- Change "Hire Agency" button to "Enter Office" (or add alongside)
- Link to /companies/{id}/office

File: src/components/Companies/CompanyHeader/CompanyHeader.tsx
- Change "Hire Agency" button to "Enter Office"
- Link to /companies/{id}/office
- Make it prominent — this is the main CTA for the investor demo

File: src/app/[locale]/companies/[id]/page.tsx
- Add "Enter Virtual Office" button/banner near the top
- Style it as a gradient call-to-action that stands out

---

TASK 10: Add office-related Zustand state (optional)
File: src/store/slices/companies.ts (NEW — only if needed)

If interactions need to persist across navigation:
  hiredCompanyIds: string[]
  assignedTasks: Record<string, IAssignedTask[]>  — employeeId → tasks

Only create this if tasks/assignments need to persist.
For MVP demo, local state on the office page is sufficient.

---

TASK 11: Update barrel exports
File: src/components/Companies/index.ts
- Add exports for all new components:
  export { OfficeScene } from "./OfficeScene"
  export { OfficeEmployee } from "./OfficeEmployee"
  export { EmployeePanel } from "./EmployeePanel"
  export { EmployeeChat } from "./EmployeeChat"
  export { AssignTaskDialog } from "./AssignTaskDialog"

---

VISUAL DESIGN GUIDELINES:

3D Office Aesthetic:
- Dark floor with subtle grid lines (matches the app's dark theme)
- Glass-like transparent walls with faint purple/blue tint
- Neon accent lights along walls and desks (purple #7c3aed, blue #3b82f6)
- Soft ambient lighting — not harsh
- Desks and furniture in dark gray tones
- Employee avatars should glow subtly to draw attention
- Floating department labels with the signature gradient text
- Particle effects or subtle fog for atmosphere (optional, drei has these)

2D Overlay Panels:
- Match existing app design (dark backgrounds, purple/blue accents)
- Glass-morphism effect on the employee panel (backdrop-filter: blur)
- Consistent with other modals/dialogs in the app
- Framer Motion animations for all transitions

---

IMPORTANT REMINDERS:
- This is a MOCKUP. No real AI, no real task management, no real chat.
- All data comes from src/data/companies.ts (mock employees, mock responses).
- Follow all existing code conventions (see CLAUDE.md at project root).
- "use client" on all client components — Three.js canvas must be client-side.
- ESLint: max 250 lines per file, max nesting depth 3, no console.log.
- Function expressions only (const fn = () => {}).
- Import order: Framework > Third-party > Local.
- Keep the dark futuristic aesthetic consistent with the rest of the app.
- The 3D scene MUST be performant — keep polygon count low, use simple geometries.
- Test on both desktop and mobile (OrbitControls supports touch).
- Run `npm run build` and `npm run lint` to verify no errors.

---

FILE SUMMARY:

| Action | File |
|--------|------|
| New | src/components/Companies/OfficeScene/OfficeScene.tsx |
| New | src/components/Companies/OfficeScene/styled.tsx |
| New | src/components/Companies/OfficeScene/index.ts |
| New | src/components/Companies/OfficeEmployee/OfficeEmployee.tsx |
| New | src/components/Companies/OfficeEmployee/index.ts |
| New | src/components/Companies/EmployeePanel/EmployeePanel.tsx |
| New | src/components/Companies/EmployeePanel/styled.tsx |
| New | src/components/Companies/EmployeePanel/index.ts |
| New | src/components/Companies/EmployeeChat/EmployeeChat.tsx |
| New | src/components/Companies/EmployeeChat/styled.tsx |
| New | src/components/Companies/EmployeeChat/index.ts |
| New | src/components/Companies/AssignTaskDialog/AssignTaskDialog.tsx |
| New | src/components/Companies/AssignTaskDialog/styled.tsx |
| New | src/components/Companies/AssignTaskDialog/index.ts |
| New | src/app/[locale]/companies/[id]/office/page.tsx |
| Edit | src/data/companies.ts — add mockResponses to IEmployee |
| Edit | src/components/Companies/CompanyCard/CompanyCard.tsx — add "Enter Office" |
| Edit | src/components/Companies/CompanyHeader/CompanyHeader.tsx — add "Enter Office" |
| Edit | src/app/[locale]/companies/[id]/page.tsx — add office CTA |
| Edit | src/components/Companies/index.ts — barrel exports |
