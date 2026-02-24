export interface ITeamRole {
  type: string;
  label: string;
  avatar: string;
  color: string;
  department: string;
  description: string;
}

export interface ISampleTeam {
  id: string;
  name: string;
  description: string;
  memberCount: number;
}

export const TEAM_ROLES: ITeamRole[] = [
  {
    type: "productManager",
    label: "Product Manager",
    avatar: "https://api.dicebear.com/9.x/bottts/svg?seed=PM-Alpha",
    color: "#f59e0b",
    department: "Management",
    description:
      "Defines product vision, writes specs, and prioritizes the backlog.",
  },
  {
    type: "uiDesigner",
    label: "UI/UX Designer",
    avatar: "https://api.dicebear.com/9.x/bottts/svg?seed=Design-Pixel",
    color: "#ec4899",
    department: "Design",
    description: "Creates wireframes, prototypes, and polished UI designs.",
  },
  {
    type: "frontendEngineer",
    label: "Frontend Engineer",
    avatar: "https://api.dicebear.com/9.x/bottts/svg?seed=FE-React",
    color: "#3b82f6",
    department: "Engineering",
    description:
      "Builds web interfaces with React, handles state and API integration.",
  },
  {
    type: "mobileEngineer",
    label: "Mobile Engineer",
    avatar: "https://api.dicebear.com/9.x/bottts/svg?seed=Mobile-Swift",
    color: "#06b6d4",
    department: "Engineering",
    description: "Writes native iOS/Android code and delivers mobile apps.",
  },
  {
    type: "backendEngineer",
    label: "Backend Engineer",
    avatar: "https://api.dicebear.com/9.x/bottts/svg?seed=BE-Node",
    color: "#10b981",
    department: "Engineering",
    description: "Designs APIs, builds microservices, and manages databases.",
  },
  {
    type: "qaEngineer",
    label: "QA Engineer",
    avatar: "https://api.dicebear.com/9.x/bottts/svg?seed=QA-Bug",
    color: "#ef4444",
    department: "Quality",
    description: "Tests features, writes automated tests, and reports bugs.",
  },
  {
    type: "devOps",
    label: "DevOps Engineer",
    avatar: "https://api.dicebear.com/9.x/bottts/svg?seed=DevOps-Cloud",
    color: "#8b5cf6",
    department: "Operations",
    description: "Manages CI/CD pipelines, infrastructure, and deployments.",
  },
  {
    type: "dataAnalyst",
    label: "Data Analyst",
    avatar: "https://api.dicebear.com/9.x/bottts/svg?seed=Data-Chart",
    color: "#f97316",
    department: "Analytics",
    description: "Analyzes metrics, builds dashboards, and provides insights.",
  },
];

export const SAMPLE_TEAMS: ISampleTeam[] = [
  {
    id: "team-001",
    name: "Mobile App Team",
    description: "Full mobile dev squad with PM, designers, engineers, and QA.",
    memberCount: 6,
  },
  {
    id: "team-002",
    name: "Full-Stack Web Team",
    description: "End-to-end web team from design to deployment.",
    memberCount: 8,
  },
  {
    id: "team-003",
    name: "Data Platform Team",
    description: "Backend-heavy team focused on data pipelines and analytics.",
    memberCount: 5,
  },
];
