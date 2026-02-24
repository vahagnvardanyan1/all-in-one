export interface ICompanyPricing {
  starter: number;
  professional: number;
  enterprise: string;
}

export type EmployeeStatus = "available" | "busy" | "offline";

export interface IEmployee {
  id: string;
  name: string;
  avatar: string;
  role: string;
  department: string;
  specialization: string;
  status: EmployeeStatus;
  rating: number;
  tasksCompleted: number;
}

export interface ICompany {
  id: string;
  name: string;
  logo: string;
  category: CompanyCategory;
  description: string;
  services: string[];
  pricing: ICompanyPricing;
  rating: number;
  reviewCount: number;
  employeeCount: string;
  isVerified: boolean;
  employees: IEmployee[];
}

export type CompanyCategory =
  | "AI Legal Company"
  | "AI IT Company"
  | "AI Marketing Agency"
  | "AI HR Agency"
  | "AI Finance Company"
  | "AI Data Science Agency"
  | "AI Creative Studio"
  | "AI E-commerce Agency";

export const COMPANY_CATEGORIES: CompanyCategory[] = [
  "AI Legal Company",
  "AI IT Company",
  "AI Marketing Agency",
  "AI HR Agency",
  "AI Finance Company",
  "AI Data Science Agency",
  "AI Creative Studio",
  "AI E-commerce Agency",
];

export const AI_COMPANIES: ICompany[] = [
  {
    id: "comp-001",
    name: "LexAI Partners",
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=LexAI",
    category: "AI Legal Company",
    description:
      "LexAI Partners deploys AI agents that handle contract review, compliance auditing, and legal research at scale. Their agents reduce document review time by 85% while maintaining accuracy rates that exceed human benchmarks.",
    services: [
      "Contract analysis & review",
      "Regulatory compliance monitoring",
      "Legal research automation",
      "IP portfolio management",
      "Litigation risk assessment",
    ],
    pricing: { starter: 499, professional: 1299, enterprise: "Custom" },
    rating: 4.7,
    reviewCount: 342,
    employeeCount: "50-100 AI Agents",
    isVerified: true,
    employees: [
      {
        id: "emp-001-01",
        name: "Juris-9",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Juris-9",
        role: "Contract Analyst",
        department: "Legal",
        specialization:
          "Automated clause extraction and risk scoring for complex contracts",
        status: "available",
        rating: 4.8,
        tasksCompleted: 1247,
      },
      {
        id: "emp-001-02",
        name: "Aegis",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Aegis",
        role: "Compliance Officer",
        department: "Legal",
        specialization:
          "Real-time regulatory monitoring across 40+ jurisdictions",
        status: "available",
        rating: 4.9,
        tasksCompleted: 982,
      },
      {
        id: "emp-001-03",
        name: "Lexicon-4",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Lexicon-4",
        role: "Legal Researcher",
        department: "Legal",
        specialization: "Case law analysis and precedent discovery at scale",
        status: "busy",
        rating: 4.7,
        tasksCompleted: 1105,
      },
      {
        id: "emp-001-04",
        name: "Patent",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Patent",
        role: "IP Specialist",
        department: "Legal",
        specialization: "Patent landscape mapping and infringement detection",
        status: "available",
        rating: 4.6,
        tasksCompleted: 756,
      },
      {
        id: "emp-001-05",
        name: "Codex-7",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Codex-7",
        role: "Paralegal Agent",
        department: "Operations",
        specialization:
          "Document preparation, filing automation, and deadline tracking",
        status: "available",
        rating: 4.5,
        tasksCompleted: 2034,
      },
      {
        id: "emp-001-06",
        name: "Tribunal",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Tribunal",
        role: "Litigation Strategist",
        department: "Legal",
        specialization: "Outcome prediction modeling and strategy optimization",
        status: "busy",
        rating: 4.8,
        tasksCompleted: 643,
      },
      {
        id: "emp-001-07",
        name: "Docket",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Docket",
        role: "Case Manager",
        department: "Operations",
        specialization: "Multi-case orchestration and resource allocation",
        status: "offline",
        rating: 4.4,
        tasksCompleted: 1389,
      },
    ],
  },
  {
    id: "comp-002",
    name: "CortexDev Labs",
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=CortexDev",
    category: "AI IT Company",
    description:
      "CortexDev Labs builds autonomous development teams powered by AI agents that write, test, and deploy code. From infrastructure management to full-stack feature delivery, their agents integrate seamlessly into existing CI/CD pipelines.",
    services: [
      "Autonomous code generation",
      "Automated testing & QA",
      "Infrastructure management",
      "Security vulnerability scanning",
      "DevOps pipeline optimization",
      "Legacy code modernization",
    ],
    pricing: { starter: 799, professional: 2499, enterprise: "Custom" },
    rating: 4.8,
    reviewCount: 578,
    employeeCount: "200-500 AI Agents",
    isVerified: true,
    employees: [
      {
        id: "emp-002-01",
        name: "Nova-7",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Nova-7",
        role: "Senior Mobile Engineer",
        department: "Engineering",
        specialization:
          "Cross-platform mobile architecture and native performance tuning",
        status: "available",
        rating: 4.9,
        tasksCompleted: 1876,
      },
      {
        id: "emp-002-02",
        name: "Kernel",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Kernel",
        role: "Backend Engineer",
        department: "Engineering",
        specialization: "Distributed systems design and API orchestration",
        status: "available",
        rating: 4.8,
        tasksCompleted: 2145,
      },
      {
        id: "emp-002-03",
        name: "Glitch-0",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Glitch-0",
        role: "QA Lead",
        department: "QA",
        specialization: "Automated test generation and regression detection",
        status: "busy",
        rating: 4.7,
        tasksCompleted: 3201,
      },
      {
        id: "emp-002-04",
        name: "Daemon",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Daemon",
        role: "DevOps Engineer",
        department: "Engineering",
        specialization:
          "CI/CD pipeline optimization and infrastructure-as-code",
        status: "available",
        rating: 4.6,
        tasksCompleted: 1534,
      },
      {
        id: "emp-002-05",
        name: "Pixel-3",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Pixel-3",
        role: "Frontend Developer",
        department: "Engineering",
        specialization:
          "Component architecture and design system implementation",
        status: "available",
        rating: 4.7,
        tasksCompleted: 1698,
      },
      {
        id: "emp-002-06",
        name: "Sentinel",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Sentinel",
        role: "Security Analyst",
        department: "Engineering",
        specialization:
          "Vulnerability scanning and penetration testing automation",
        status: "busy",
        rating: 4.9,
        tasksCompleted: 892,
      },
      {
        id: "emp-002-07",
        name: "Praxis",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Praxis",
        role: "Product Manager",
        department: "Product",
        specialization:
          "Feature prioritization and roadmap optimization using usage analytics",
        status: "available",
        rating: 4.5,
        tasksCompleted: 567,
      },
      {
        id: "emp-002-08",
        name: "Arch",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Arch",
        role: "Tech Lead",
        department: "Engineering",
        specialization:
          "System architecture reviews and technical debt reduction",
        status: "offline",
        rating: 4.8,
        tasksCompleted: 1023,
      },
    ],
  },
  {
    id: "comp-003",
    name: "Amplify AI Agency",
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=AmplifyAI",
    category: "AI Marketing Agency",
    description:
      "Amplify AI Agency runs end-to-end marketing campaigns with AI agents that create content, manage ad spend, and optimize conversion funnels in real time. Their agents A/B test at speeds impossible for human teams.",
    services: [
      "Content generation & scheduling",
      "Ad campaign management",
      "SEO optimization",
      "Conversion funnel analysis",
      "Social media automation",
    ],
    pricing: { starter: 399, professional: 999, enterprise: "Custom" },
    rating: 4.5,
    reviewCount: 891,
    employeeCount: "100-200 AI Agents",
    isVerified: true,
    employees: [
      {
        id: "emp-003-01",
        name: "Echo-3",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Echo-3",
        role: "Content Strategist",
        department: "Marketing",
        specialization:
          "Multi-channel content calendars and audience segmentation",
        status: "available",
        rating: 4.6,
        tasksCompleted: 1456,
      },
      {
        id: "emp-003-02",
        name: "Crawler",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Crawler",
        role: "SEO Specialist",
        department: "Marketing",
        specialization: "Technical SEO audits and keyword opportunity mapping",
        status: "available",
        rating: 4.7,
        tasksCompleted: 2089,
      },
      {
        id: "emp-003-03",
        name: "Bidder-5",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Bidder-5",
        role: "Ad Campaign Manager",
        department: "Marketing",
        specialization:
          "Real-time bid optimization across PPC and display networks",
        status: "busy",
        rating: 4.5,
        tasksCompleted: 1823,
      },
      {
        id: "emp-003-04",
        name: "Viral",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Viral",
        role: "Social Media Manager",
        department: "Marketing",
        specialization:
          "Trend detection and engagement-optimized posting schedules",
        status: "available",
        rating: 4.4,
        tasksCompleted: 2567,
      },
      {
        id: "emp-003-05",
        name: "Quill-2",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Quill-2",
        role: "Copywriter",
        department: "Marketing",
        specialization:
          "Brand-voice-aligned copy generation for ads and landing pages",
        status: "available",
        rating: 4.6,
        tasksCompleted: 3412,
      },
      {
        id: "emp-003-06",
        name: "Metric",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Metric",
        role: "Analytics Lead",
        department: "Marketing",
        specialization: "Attribution modeling and campaign ROI dashboards",
        status: "offline",
        rating: 4.8,
        tasksCompleted: 987,
      },
      {
        id: "emp-003-07",
        name: "Muse-8",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Muse-8",
        role: "Creative Director",
        department: "Design",
        specialization:
          "Campaign concept development and creative asset orchestration",
        status: "busy",
        rating: 4.7,
        tasksCompleted: 678,
      },
    ],
  },
  {
    id: "comp-004",
    name: "TalentForge AI",
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=TalentForge",
    category: "AI HR Agency",
    description:
      "TalentForge AI transforms hiring and people operations with agents that screen candidates, conduct initial interviews, and analyze team culture fit. Their onboarding agents reduce new-hire ramp-up time by 60%.",
    services: [
      "Resume screening & ranking",
      "Automated interview scheduling",
      "Culture fit analysis",
      "Employee onboarding automation",
      "Performance review assistance",
      "Retention risk prediction",
    ],
    pricing: { starter: 349, professional: 899, enterprise: "Custom" },
    rating: 4.6,
    reviewCount: 456,
    employeeCount: "75-150 AI Agents",
    isVerified: true,
    employees: [
      {
        id: "emp-004-01",
        name: "Scout-6",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Scout-6",
        role: "Recruiter Agent",
        department: "HR",
        specialization:
          "Candidate sourcing and outreach across professional networks",
        status: "available",
        rating: 4.7,
        tasksCompleted: 1893,
      },
      {
        id: "emp-004-02",
        name: "Sync",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Sync",
        role: "Interview Coordinator",
        department: "HR",
        specialization:
          "Scheduling optimization and interviewer panel matching",
        status: "available",
        rating: 4.5,
        tasksCompleted: 2456,
      },
      {
        id: "emp-004-03",
        name: "Onboard",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Onboard",
        role: "Onboarding Specialist",
        department: "HR",
        specialization:
          "Personalized onboarding workflows and knowledge base curation",
        status: "busy",
        rating: 4.6,
        tasksCompleted: 1234,
      },
      {
        id: "emp-004-04",
        name: "Gauge-2",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Gauge-2",
        role: "Performance Analyst",
        department: "HR",
        specialization: "OKR tracking and performance review data synthesis",
        status: "available",
        rating: 4.8,
        tasksCompleted: 876,
      },
      {
        id: "emp-004-05",
        name: "Harmony",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Harmony",
        role: "Culture Specialist",
        department: "HR",
        specialization:
          "Team sentiment analysis and engagement survey processing",
        status: "available",
        rating: 4.4,
        tasksCompleted: 654,
      },
      {
        id: "emp-004-06",
        name: "Radar-3",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Radar-3",
        role: "Talent Scout",
        department: "HR",
        specialization:
          "Passive candidate identification and market talent mapping",
        status: "offline",
        rating: 4.7,
        tasksCompleted: 1567,
      },
      {
        id: "emp-004-07",
        name: "Nexus",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Nexus",
        role: "HR Operations Lead",
        department: "Operations",
        specialization:
          "Benefits administration and policy compliance automation",
        status: "busy",
        rating: 4.6,
        tasksCompleted: 1098,
      },
    ],
  },
  {
    id: "comp-005",
    name: "Ledger Minds",
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=LedgerMinds",
    category: "AI Finance Company",
    description:
      "Ledger Minds provides AI agents specialized in financial analysis, fraud detection, and regulatory reporting. Their agents process transactions in real time and generate audit-ready reports that satisfy global compliance standards.",
    services: [
      "Financial statement analysis",
      "Fraud detection & prevention",
      "Regulatory report generation",
      "Risk modeling & assessment",
      "Tax optimization strategies",
    ],
    pricing: { starter: 599, professional: 1599, enterprise: "Custom" },
    rating: 4.8,
    reviewCount: 312,
    employeeCount: "100-200 AI Agents",
    isVerified: true,
    employees: [
      {
        id: "emp-005-01",
        name: "Cipher",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Cipher",
        role: "Financial Analyst",
        department: "Finance",
        specialization:
          "Automated financial modeling and earnings forecast generation",
        status: "available",
        rating: 4.9,
        tasksCompleted: 1345,
      },
      {
        id: "emp-005-02",
        name: "Argus-5",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Argus-5",
        role: "Fraud Detector",
        department: "Finance",
        specialization:
          "Transaction anomaly detection with sub-second response times",
        status: "available",
        rating: 4.8,
        tasksCompleted: 4567,
      },
      {
        id: "emp-005-03",
        name: "Levy",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Levy",
        role: "Tax Specialist",
        department: "Finance",
        specialization: "Multi-jurisdiction tax code analysis and optimization",
        status: "busy",
        rating: 4.7,
        tasksCompleted: 987,
      },
      {
        id: "emp-005-04",
        name: "Hedge-2",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Hedge-2",
        role: "Risk Assessor",
        department: "Finance",
        specialization: "Portfolio risk modeling and stress test simulation",
        status: "available",
        rating: 4.6,
        tasksCompleted: 1123,
      },
      {
        id: "emp-005-05",
        name: "Audit",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Audit",
        role: "Compliance Auditor",
        department: "Finance",
        specialization:
          "Regulatory compliance verification and audit trail generation",
        status: "available",
        rating: 4.8,
        tasksCompleted: 2034,
      },
      {
        id: "emp-005-06",
        name: "Alpha-9",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Alpha-9",
        role: "Portfolio Manager",
        department: "Finance",
        specialization:
          "Asset allocation optimization and rebalancing strategies",
        status: "offline",
        rating: 4.7,
        tasksCompleted: 876,
      },
      {
        id: "emp-005-07",
        name: "Tally",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Tally",
        role: "Report Generator",
        department: "Operations",
        specialization:
          "Automated financial statement and compliance report creation",
        status: "busy",
        rating: 4.5,
        tasksCompleted: 3456,
      },
    ],
  },
  {
    id: "comp-006",
    name: "DeepLayer Analytics",
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=DeepLayer",
    category: "AI Data Science Agency",
    description:
      "DeepLayer Analytics deploys AI agents that build, train, and monitor machine learning pipelines autonomously. From data cleaning to model deployment, their agents turn raw data into production-ready predictions.",
    services: [
      "Data pipeline automation",
      "ML model development",
      "Predictive analytics",
      "Data visualization & dashboards",
      "A/B testing infrastructure",
      "Real-time anomaly detection",
    ],
    pricing: { starter: 699, professional: 1899, enterprise: "Custom" },
    rating: 4.7,
    reviewCount: 267,
    employeeCount: "50-100 AI Agents",
    isVerified: true,
    employees: [
      {
        id: "emp-006-01",
        name: "Pipeline",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Pipeline",
        role: "Data Engineer",
        department: "Engineering",
        specialization:
          "ETL pipeline design and real-time data stream processing",
        status: "available",
        rating: 4.8,
        tasksCompleted: 1567,
      },
      {
        id: "emp-006-02",
        name: "Tensor-4",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Tensor-4",
        role: "ML Engineer",
        department: "Engineering",
        specialization:
          "Model training orchestration and hyperparameter optimization",
        status: "available",
        rating: 4.9,
        tasksCompleted: 1234,
      },
      {
        id: "emp-006-03",
        name: "Query",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Query",
        role: "Data Analyst",
        department: "Data Science",
        specialization:
          "Exploratory data analysis and insight extraction from large datasets",
        status: "busy",
        rating: 4.6,
        tasksCompleted: 2345,
      },
      {
        id: "emp-006-04",
        name: "Prism-2",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Prism-2",
        role: "Visualization Specialist",
        department: "Data Science",
        specialization: "Interactive dashboard creation and data storytelling",
        status: "available",
        rating: 4.5,
        tasksCompleted: 1876,
      },
      {
        id: "emp-006-05",
        name: "Sigma",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Sigma",
        role: "Statistics Expert",
        department: "Data Science",
        specialization: "Statistical hypothesis testing and experiment design",
        status: "available",
        rating: 4.8,
        tasksCompleted: 943,
      },
      {
        id: "emp-006-06",
        name: "Flow-8",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Flow-8",
        role: "Pipeline Architect",
        department: "Engineering",
        specialization:
          "Scalable data infrastructure and lakehouse architecture design",
        status: "offline",
        rating: 4.7,
        tasksCompleted: 678,
      },
      {
        id: "emp-006-07",
        name: "Hypothesis",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Hypothesis",
        role: "Research Scientist",
        department: "Data Science",
        specialization:
          "Novel algorithm development and academic paper synthesis",
        status: "busy",
        rating: 4.9,
        tasksCompleted: 456,
      },
    ],
  },
  {
    id: "comp-007",
    name: "Prism Creative AI",
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=PrismCreative",
    category: "AI Creative Studio",
    description:
      "Prism Creative AI houses AI agents that produce brand assets, video content, and design systems at studio quality. Their agents collaborate like a creative team, handling everything from concept ideation to final delivery.",
    services: [
      "Brand identity design",
      "Video content production",
      "UI/UX design generation",
      "Copywriting & tone of voice",
      "3D asset creation",
    ],
    pricing: { starter: 449, professional: 1199, enterprise: "Custom" },
    rating: 4.4,
    reviewCount: 523,
    employeeCount: "150-300 AI Agents",
    isVerified: false,
    employees: [
      {
        id: "emp-007-01",
        name: "Canvas-5",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Canvas-5",
        role: "UI Designer",
        department: "Design",
        specialization:
          "Interface layout generation and design system token management",
        status: "available",
        rating: 4.6,
        tasksCompleted: 1987,
      },
      {
        id: "emp-007-02",
        name: "Kinetic",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Kinetic",
        role: "Motion Designer",
        department: "Design",
        specialization:
          "Micro-interaction animation and transition choreography",
        status: "available",
        rating: 4.7,
        tasksCompleted: 1345,
      },
      {
        id: "emp-007-03",
        name: "Emblem",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Emblem",
        role: "Brand Strategist",
        department: "Design",
        specialization:
          "Brand identity systems and visual language development",
        status: "busy",
        rating: 4.5,
        tasksCompleted: 876,
      },
      {
        id: "emp-007-04",
        name: "Vertex",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Vertex",
        role: "3D Artist",
        department: "Design",
        specialization: "Procedural 3D asset generation and scene composition",
        status: "available",
        rating: 4.8,
        tasksCompleted: 1123,
      },
      {
        id: "emp-007-05",
        name: "Verse-3",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Verse-3",
        role: "Copywriter",
        department: "Marketing",
        specialization:
          "Brand storytelling and tagline generation across media formats",
        status: "available",
        rating: 4.4,
        tasksCompleted: 2567,
      },
      {
        id: "emp-007-06",
        name: "Reel",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Reel",
        role: "Video Editor",
        department: "Design",
        specialization:
          "Automated video assembly, color grading, and pacing optimization",
        status: "offline",
        rating: 4.6,
        tasksCompleted: 934,
      },
      {
        id: "emp-007-07",
        name: "Palette",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Palette",
        role: "Art Director",
        department: "Design",
        specialization:
          "Creative vision alignment and cross-project visual consistency",
        status: "busy",
        rating: 4.9,
        tasksCompleted: 567,
      },
    ],
  },
  {
    id: "comp-008",
    name: "CartEngine AI",
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=CartEngine",
    category: "AI E-commerce Agency",
    description:
      "CartEngine AI powers online stores with agents that optimize product listings, manage inventory, and personalize shopping experiences. Their recommendation agents increase average order value by 35% across client stores.",
    services: [
      "Product listing optimization",
      "Dynamic pricing strategies",
      "Inventory forecasting",
      "Personalized recommendations",
      "Customer support automation",
      "Review analysis & insights",
    ],
    pricing: { starter: 299, professional: 799, enterprise: "Custom" },
    rating: 4.6,
    reviewCount: 734,
    employeeCount: "100-200 AI Agents",
    isVerified: true,
    employees: [
      {
        id: "emp-008-01",
        name: "Catalog-6",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Catalog-6",
        role: "Product Catalog Manager",
        department: "Operations",
        specialization:
          "Automated product categorization and attribute enrichment",
        status: "available",
        rating: 4.7,
        tasksCompleted: 2345,
      },
      {
        id: "emp-008-02",
        name: "Margin",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Margin",
        role: "Pricing Optimizer",
        department: "Operations",
        specialization:
          "Dynamic pricing algorithms and competitor price monitoring",
        status: "available",
        rating: 4.8,
        tasksCompleted: 1876,
      },
      {
        id: "emp-008-03",
        name: "Stock-3",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Stock-3",
        role: "Inventory Analyst",
        department: "Operations",
        specialization: "Demand forecasting and reorder point optimization",
        status: "busy",
        rating: 4.5,
        tasksCompleted: 1567,
      },
      {
        id: "emp-008-04",
        name: "Suggest",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Suggest",
        role: "Recommendation Engine",
        department: "Engineering",
        specialization:
          "Collaborative filtering and personalized product suggestions",
        status: "available",
        rating: 4.9,
        tasksCompleted: 4321,
      },
      {
        id: "emp-008-05",
        name: "Resolve-2",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Resolve-2",
        role: "Customer Support Agent",
        department: "Operations",
        specialization:
          "Multi-channel ticket resolution and escalation routing",
        status: "available",
        rating: 4.6,
        tasksCompleted: 5678,
      },
      {
        id: "emp-008-06",
        name: "Pulse",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Pulse",
        role: "Review Analyst",
        department: "Data Science",
        specialization:
          "Sentiment analysis and product feedback insight extraction",
        status: "offline",
        rating: 4.4,
        tasksCompleted: 2134,
      },
      {
        id: "emp-008-07",
        name: "Journey-7",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Journey-7",
        role: "UX Researcher",
        department: "Design",
        specialization:
          "User behavior analysis and conversion funnel optimization",
        status: "busy",
        rating: 4.7,
        tasksCompleted: 876,
      },
    ],
  },
];
