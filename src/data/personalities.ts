export interface IPersonality {
  id: string;
  name: string;
  avatar: string;
  category: PersonalityCategory;
  shortDescription: string;
  fullDescription: string;
  rating: number;
  reviewCount: number;
  price: number;
  features: string[];
  tags: string[];
  isPopular: boolean;
}

export type PersonalityCategory =
  | "Personal Growth"
  | "Fitness"
  | "Education"
  | "Emotional"
  | "Professional";

export const PERSONALITY_CATEGORIES: PersonalityCategory[] = [
  "Personal Growth",
  "Fitness",
  "Education",
  "Emotional",
  "Professional",
];

export const AI_PERSONALITIES: IPersonality[] = [
  // --- Personal Growth ---
  {
    id: "pg-001",
    name: "Zenith",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Zenith",
    category: "Personal Growth",
    shortDescription: "Your mindful habit-building companion.",
    fullDescription:
      "Zenith helps you design and maintain daily routines that stick. Using behavioral psychology and adaptive scheduling, it transforms your goals into actionable micro-habits that compound over time.",
    rating: 4.8,
    reviewCount: 2340,
    price: 12.99,
    features: [
      "Smart habit stacking",
      "Progress analytics dashboard",
      "Morning & evening routine builder",
      "Weekly reflection prompts",
    ],
    tags: ["habits", "routines", "mindfulness", "productivity"],
    isPopular: true,
  },
  {
    id: "pg-002",
    name: "Lumina",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Lumina",
    category: "Personal Growth",
    shortDescription: "Unlock your creative potential through journaling.",
    fullDescription:
      "Lumina is an AI journaling partner that guides introspective writing sessions. It uses narrative therapy techniques to help you uncover patterns, celebrate wins, and reframe challenges into growth opportunities.",
    rating: 4.6,
    reviewCount: 1870,
    price: 9.99,
    features: [
      "Guided journal prompts",
      "Mood pattern recognition",
      "Goal-aligned reflections",
      "Exportable journal entries",
    ],
    tags: ["journaling", "self-reflection", "creativity", "writing"],
    isPopular: false,
  },
  {
    id: "pg-003",
    name: "Catalyst",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Catalyst",
    category: "Personal Growth",
    shortDescription: "Accelerate your personal transformation journey.",
    fullDescription:
      "Catalyst combines goal-setting frameworks like OKRs with accountability check-ins to keep you on track. It adapts its coaching style based on your personality type and preferred pace of change.",
    rating: 4.5,
    reviewCount: 1120,
    price: 14.99,
    features: [
      "OKR-based goal tracking",
      "Personality-adapted coaching",
      "Accountability check-ins",
      "Milestone celebrations",
      "Vision board generator",
    ],
    tags: ["goals", "accountability", "coaching", "transformation"],
    isPopular: false,
  },
  {
    id: "pg-004",
    name: "Sage",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Sage",
    category: "Personal Growth",
    shortDescription: "Daily wisdom for a more intentional life.",
    fullDescription:
      "Sage draws from philosophy, stoicism, and modern psychology to deliver personalized daily insights. Each interaction is designed to sharpen your thinking and help you live with greater purpose and clarity.",
    rating: 4.7,
    reviewCount: 3150,
    price: 7.99,
    features: [
      "Daily philosophical insights",
      "Stoic exercises",
      "Decision-making frameworks",
      "Curated reading lists",
    ],
    tags: ["philosophy", "wisdom", "stoicism", "intentional-living"],
    isPopular: true,
  },

  // --- Fitness ---
  {
    id: "ft-001",
    name: "IronCore",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=IronCore",
    category: "Fitness",
    shortDescription: "AI-powered strength training coach.",
    fullDescription:
      "IronCore designs progressive overload programs tailored to your experience level and available equipment. It tracks your lifts, suggests deload weeks, and adjusts volume based on recovery signals.",
    rating: 4.9,
    reviewCount: 4200,
    price: 19.99,
    features: [
      "Custom workout programming",
      "Progressive overload tracking",
      "Recovery optimization",
      "Form check reminders",
      "Deload scheduling",
    ],
    tags: ["strength", "weightlifting", "gym", "muscle-building"],
    isPopular: true,
  },
  {
    id: "ft-002",
    name: "FlowState",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=FlowState",
    category: "Fitness",
    shortDescription: "Yoga and mobility intelligence.",
    fullDescription:
      "FlowState crafts personalized yoga sequences based on your flexibility goals, stress levels, and time constraints. It blends traditional asanas with modern mobility science for optimal movement health.",
    rating: 4.6,
    reviewCount: 1560,
    price: 11.99,
    features: [
      "Personalized yoga flows",
      "Mobility assessments",
      "Breathwork integration",
      "Flexibility progress tracking",
    ],
    tags: ["yoga", "mobility", "flexibility", "breathwork"],
    isPopular: false,
  },
  {
    id: "ft-003",
    name: "NutriSync",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=NutriSync",
    category: "Fitness",
    shortDescription: "Smart nutrition planning meets fitness goals.",
    fullDescription:
      "NutriSync aligns your meal plans with your training schedule and body composition targets. It generates grocery lists, meal prep guides, and adjusts macros dynamically based on workout intensity.",
    rating: 4.4,
    reviewCount: 2080,
    price: 15.99,
    features: [
      "Macro-aligned meal plans",
      "Grocery list generation",
      "Meal prep scheduling",
      "Supplement recommendations",
    ],
    tags: ["nutrition", "meal-planning", "macros", "diet"],
    isPopular: false,
  },
  {
    id: "ft-004",
    name: "SprintMaster",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=SprintMaster",
    category: "Fitness",
    shortDescription: "Run faster, recover smarter.",
    fullDescription:
      "SprintMaster builds periodized running programs from 5K to ultramarathon distances. It integrates heart rate data, adjusts pacing strategies, and provides race-day nutrition and hydration protocols.",
    rating: 4.7,
    reviewCount: 980,
    price: 13.99,
    features: [
      "Periodized run programs",
      "Heart rate zone training",
      "Race-day strategies",
      "Injury prevention tips",
    ],
    tags: ["running", "cardio", "marathon", "endurance"],
    isPopular: false,
  },

  // --- Education ---
  {
    id: "ed-001",
    name: "Polyglot",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Polyglot",
    category: "Education",
    shortDescription: "Master any language through immersive conversation.",
    fullDescription:
      "Polyglot simulates real-world conversations in 30+ languages, adapting difficulty to your proficiency. It corrects grammar in context, expands vocabulary through stories, and tracks fluency milestones.",
    rating: 4.8,
    reviewCount: 5600,
    price: 16.99,
    features: [
      "30+ language support",
      "Adaptive difficulty",
      "Contextual grammar correction",
      "Fluency milestone tracking",
      "Cultural context lessons",
    ],
    tags: ["languages", "learning", "conversation", "fluency"],
    isPopular: true,
  },
  {
    id: "ed-002",
    name: "CodeSensei",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=CodeSensei",
    category: "Education",
    shortDescription: "Learn to code through building real projects.",
    fullDescription:
      "CodeSensei teaches programming by guiding you through progressively complex projects. It explains concepts when you need them, reviews your code like a senior developer, and builds your portfolio as you learn.",
    rating: 4.9,
    reviewCount: 3890,
    price: 21.99,
    features: [
      "Project-based curriculum",
      "Real-time code review",
      "Multi-language support",
      "Portfolio builder",
    ],
    tags: ["programming", "coding", "projects", "portfolio"],
    isPopular: true,
  },
  {
    id: "ed-003",
    name: "HistoryLens",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=HistoryLens",
    category: "Education",
    shortDescription: "Experience history through interactive storytelling.",
    fullDescription:
      "HistoryLens transforms historical events into immersive narratives where you explore different perspectives. It connects past events to modern issues and uses spaced repetition to cement key facts.",
    rating: 4.3,
    reviewCount: 740,
    price: 8.99,
    features: [
      "Interactive historical narratives",
      "Multiple perspective exploration",
      "Spaced repetition quizzes",
      "Timeline visualizations",
    ],
    tags: ["history", "storytelling", "education", "interactive"],
    isPopular: false,
  },
  {
    id: "ed-004",
    name: "MathVault",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=MathVault",
    category: "Education",
    shortDescription: "From arithmetic to calculus, explained your way.",
    fullDescription:
      "MathVault adapts its teaching style to how you learn best. Whether you need visual proofs, step-by-step walkthroughs, or real-world applications, it meets you where you are and builds confidence systematically.",
    rating: 4.5,
    reviewCount: 2210,
    price: 12.99,
    features: [
      "Adaptive learning paths",
      "Visual proof explanations",
      "Step-by-step solutions",
      "Practice problem generator",
      "Exam preparation mode",
    ],
    tags: ["math", "calculus", "algebra", "tutoring"],
    isPopular: false,
  },

  // --- Emotional ---
  {
    id: "em-001",
    name: "Aura",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Aura",
    category: "Emotional",
    shortDescription: "Your empathetic emotional wellness companion.",
    fullDescription:
      "Aura provides a safe space for processing emotions through guided conversations. Using CBT and DBT techniques, it helps you identify thought patterns, build emotional resilience, and develop healthier coping strategies.",
    rating: 4.7,
    reviewCount: 6100,
    price: 14.99,
    features: [
      "CBT-based conversations",
      "Mood tracking & insights",
      "Coping strategy library",
      "Crisis resource integration",
    ],
    tags: ["mental-health", "CBT", "emotional-wellness", "coping"],
    isPopular: false,
  },
  {
    id: "em-002",
    name: "Dreamweaver",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Dreamweaver",
    category: "Emotional",
    shortDescription: "Guided meditation and sleep optimization.",
    fullDescription:
      "Dreamweaver creates personalized meditation sessions and sleep stories based on your stress levels and preferences. It tracks sleep quality patterns and adjusts bedtime routines for restorative rest.",
    rating: 4.6,
    reviewCount: 3400,
    price: 10.99,
    features: [
      "Personalized meditations",
      "Sleep story generation",
      "Sleep quality analytics",
      "Bedtime routine optimizer",
    ],
    tags: ["meditation", "sleep", "relaxation", "mindfulness"],
    isPopular: false,
  },
  {
    id: "em-003",
    name: "Harmony",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Harmony",
    category: "Emotional",
    shortDescription: "Navigate relationships with emotional intelligence.",
    fullDescription:
      "Harmony helps you build stronger relationships by improving communication skills and emotional awareness. It offers conflict resolution frameworks, attachment style insights, and conversation rehearsal tools.",
    rating: 4.4,
    reviewCount: 1680,
    price: 13.99,
    features: [
      "Communication skill building",
      "Conflict resolution guides",
      "Attachment style analysis",
      "Conversation rehearsal",
      "Relationship health check-ins",
    ],
    tags: [
      "relationships",
      "communication",
      "emotional-intelligence",
      "conflict-resolution",
    ],
    isPopular: false,
  },
  {
    id: "em-004",
    name: "Solace",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Solace",
    category: "Emotional",
    shortDescription: "Gentle support through grief and difficult transitions.",
    fullDescription:
      "Solace provides compassionate support during life transitions including grief, loss, and major changes. It uses narrative therapy and acceptance-based approaches to help you process experiences at your own pace.",
    rating: 4.8,
    reviewCount: 920,
    price: 11.99,
    features: [
      "Grief processing support",
      "Narrative therapy exercises",
      "Transition coping tools",
      "Memory preservation prompts",
    ],
    tags: ["grief", "transitions", "support", "healing"],
    isPopular: false,
  },

  // --- Professional ---
  {
    id: "pr-001",
    name: "Nexus",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Nexus",
    category: "Professional",
    shortDescription: "Strategic career navigation and growth.",
    fullDescription:
      "Nexus acts as your personal career strategist, analyzing market trends, optimizing your professional brand, and preparing you for pivotal moments. It crafts tailored career roadmaps from your current role to your dream position.",
    rating: 4.7,
    reviewCount: 2890,
    price: 24.99,
    features: [
      "Career roadmap generation",
      "Market trend analysis",
      "Personal brand optimization",
      "Interview preparation",
      "Salary negotiation coaching",
    ],
    tags: ["career", "strategy", "branding", "interviews"],
    isPopular: false,
  },
  {
    id: "pr-002",
    name: "Orator",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Orator",
    category: "Professional",
    shortDescription: "Become a confident, compelling public speaker.",
    fullDescription:
      "Orator transforms nervous speakers into confident presenters through structured practice sessions. It analyzes speech patterns, provides real-time feedback on pacing and clarity, and builds custom practice drills.",
    rating: 4.5,
    reviewCount: 1340,
    price: 17.99,
    features: [
      "Speech structure coaching",
      "Pacing & clarity feedback",
      "Presentation slide review",
      "Audience engagement techniques",
    ],
    tags: ["public-speaking", "presentations", "communication", "confidence"],
    isPopular: false,
  },
  {
    id: "pr-003",
    name: "Strategos",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Strategos",
    category: "Professional",
    shortDescription: "Leadership coaching powered by behavioral science.",
    fullDescription:
      "Strategos develops your leadership capabilities through scenario-based coaching and behavioral analysis. It helps you navigate team dynamics, make better decisions under pressure, and build a leadership style that inspires trust.",
    rating: 4.6,
    reviewCount: 870,
    price: 29.99,
    features: [
      "Scenario-based leadership training",
      "Team dynamics analysis",
      "Decision-making frameworks",
      "Feedback delivery coaching",
    ],
    tags: ["leadership", "management", "team-building", "decision-making"],
    isPopular: false,
  },
  {
    id: "pr-004",
    name: "Vendora",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Vendora",
    category: "Professional",
    shortDescription: "Close more deals with AI-driven sales coaching.",
    fullDescription:
      "Vendora sharpens your sales skills through simulated client interactions and deal analysis. It teaches consultative selling techniques, objection handling, and pipeline management strategies used by top performers.",
    rating: 4.4,
    reviewCount: 1560,
    price: 22.99,
    features: [
      "Sales simulation practice",
      "Objection handling drills",
      "Pipeline management tips",
      "Consultative selling frameworks",
      "Deal review analysis",
    ],
    tags: ["sales", "negotiation", "closing", "pipeline"],
    isPopular: false,
  },
];
