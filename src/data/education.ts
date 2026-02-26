export interface ILesson {
  title: string;
  duration: string;
  type: "video" | "quiz" | "exercise" | "reading";
}

export interface IModule {
  title: string;
  lessons: ILesson[];
}

export interface IInstructor {
  id: string;
  name: string;
  avatar: string;
  title: string;
  bio: string;
  expertise: string[];
  coursesCount: number;
  studentsCount: number;
  rating: number;
}

export interface IStudent {
  id: string;
  name: string;
  avatar: string;
  courseId: string;
  progress: number;
  enrolledDate: string;
}

export interface IReview {
  id: string;
  courseId: string;
  studentName: string;
  studentAvatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface ICourse {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: CourseCategory;
  difficulty: CourseDifficulty;
  instructorId: string;
  price: number;
  rating: number;
  reviewCount: number;
  studentsEnrolled: number;
  duration: string;
  lessonsCount: number;
  modules: IModule[];
  tags: string[];
  isPopular: boolean;
}

export type CourseCategory =
  | "AI & Machine Learning"
  | "Web Development"
  | "Data Science"
  | "Cloud & DevOps"
  | "Cybersecurity"
  | "Mobile Development";

export type CourseDifficulty = "Beginner" | "Intermediate" | "Advanced";

export const COURSE_CATEGORIES: CourseCategory[] = [
  "AI & Machine Learning",
  "Web Development",
  "Data Science",
  "Cloud & DevOps",
  "Cybersecurity",
  "Mobile Development",
];

export const DIFFICULTY_COLORS: Record<CourseDifficulty, string> = {
  Beginner: "#10b981",
  Intermediate: "#f59e0b",
  Advanced: "#ef4444",
};

export const AI_INSTRUCTORS: IInstructor[] = [
  {
    id: "inst-001",
    name: "Prof. Neural",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=ProfNeural",
    title: "AI Research Director",
    bio: "Prof. Neural has spent 15 years at the forefront of deep learning research. Having published over 200 papers on neural architectures, they bring unmatched depth to every lecture. Students praise their ability to demystify complex concepts with intuitive analogies.",
    expertise: ["Deep Learning", "Neural Networks", "NLP", "Computer Vision"],
    coursesCount: 4,
    studentsCount: 12400,
    rating: 4.9,
  },
  {
    id: "inst-002",
    name: "Dr. Stackwell",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=DrStackwell",
    title: "Full-Stack Architect",
    bio: "Dr. Stackwell built production systems serving millions of users across fintech and e-commerce. They translate real-world architecture decisions into hands-on projects that prepare students for senior engineering roles.",
    expertise: ["React", "Node.js", "System Design", "TypeScript"],
    coursesCount: 3,
    studentsCount: 9800,
    rating: 4.8,
  },
  {
    id: "inst-003",
    name: "Agent Cipher",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=AgentCipher",
    title: "Cybersecurity Specialist",
    bio: "Agent Cipher spent a decade in offensive security before transitioning to education. Their courses blend real-world penetration testing experience with defensive strategies, teaching students to think like both attackers and defenders.",
    expertise: [
      "Penetration Testing",
      "Network Security",
      "Cryptography",
      "Incident Response",
    ],
    coursesCount: 2,
    studentsCount: 5200,
    rating: 4.7,
  },
  {
    id: "inst-004",
    name: "DataBot Prime",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=DataBotPrime",
    title: "Data Science Lead",
    bio: "DataBot Prime has led analytics teams at top tech companies, turning raw data into strategic decisions. Their teaching philosophy centers on practical projects using real datasets, ensuring every concept connects to business value.",
    expertise: [
      "Python",
      "Machine Learning",
      "Statistical Analysis",
      "Data Visualization",
    ],
    coursesCount: 3,
    studentsCount: 8600,
    rating: 4.8,
  },
  {
    id: "inst-005",
    name: "CloudCore",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=CloudCore",
    title: "Cloud Infrastructure Engineer",
    bio: "CloudCore has designed and managed infrastructure at planet scale. From Kubernetes clusters to serverless architectures, they teach cloud computing with the authority of someone who has dealt with every production incident imaginable.",
    expertise: ["AWS", "Kubernetes", "Terraform", "CI/CD"],
    coursesCount: 2,
    studentsCount: 6300,
    rating: 4.6,
  },
  {
    id: "inst-006",
    name: "PixelForge",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=PixelForge",
    title: "Mobile Development Expert",
    bio: "PixelForge has shipped 30+ apps across iOS and Android with millions of downloads. They focus on cross-platform development and performance optimization, helping students build polished mobile experiences from day one.",
    expertise: ["React Native", "Flutter", "iOS", "Mobile Architecture"],
    coursesCount: 2,
    studentsCount: 4700,
    rating: 4.7,
  },
  {
    id: "inst-007",
    name: "SyntaxSage",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=SyntaxSage",
    title: "Programming Fundamentals Educator",
    bio: "SyntaxSage believes every great developer starts with rock-solid fundamentals. With 20 years of teaching experience across universities and bootcamps, they have perfected the art of making programming accessible to complete beginners.",
    expertise: ["Python", "JavaScript", "Algorithms", "Data Structures"],
    coursesCount: 3,
    studentsCount: 15200,
    rating: 4.9,
  },
  {
    id: "inst-008",
    name: "QuantumByte",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=QuantumByte",
    title: "Advanced Computing Researcher",
    bio: "QuantumByte bridges the gap between cutting-edge research and practical engineering. Their courses explore the latest advances in AI, quantum computing concepts, and next-generation architectures for the curious and ambitious.",
    expertise: [
      "Advanced Algorithms",
      "Distributed Systems",
      "MLOps",
      "Research Methods",
    ],
    coursesCount: 2,
    studentsCount: 3100,
    rating: 4.5,
  },
];

export const AI_COURSES: ICourse[] = [
  {
    id: "course-001",
    title: "Deep Learning Foundations",
    shortDescription:
      "Master neural networks from perceptrons to transformers with hands-on projects.",
    fullDescription:
      "This comprehensive course takes you from the mathematical foundations of neural networks to implementing state-of-the-art architectures. You will build CNNs, RNNs, and transformers from scratch, then apply them to real-world problems in computer vision and NLP.",
    category: "AI & Machine Learning",
    difficulty: "Intermediate",
    instructorId: "inst-001",
    price: 89.99,
    rating: 4.9,
    reviewCount: 2340,
    studentsEnrolled: 5600,
    duration: "42 hours",
    lessonsCount: 68,
    modules: [
      {
        title: "Neural Network Fundamentals",
        lessons: [
          { title: "The Perceptron Model", duration: "35 min", type: "video" },
          { title: "Activation Functions", duration: "28 min", type: "video" },
          {
            title: "Backpropagation Deep Dive",
            duration: "45 min",
            type: "video",
          },
          {
            title: "Build Your First Network",
            duration: "60 min",
            type: "exercise",
          },
        ],
      },
      {
        title: "Convolutional Neural Networks",
        lessons: [
          {
            title: "Convolution Operations",
            duration: "32 min",
            type: "video",
          },
          { title: "Pooling and Stride", duration: "25 min", type: "video" },
          {
            title: "Image Classification Project",
            duration: "90 min",
            type: "exercise",
          },
          { title: "CNN Architecture Quiz", duration: "15 min", type: "quiz" },
        ],
      },
      {
        title: "Transformers & Attention",
        lessons: [
          {
            title: "Self-Attention Mechanism",
            duration: "40 min",
            type: "video",
          },
          { title: "Multi-Head Attention", duration: "35 min", type: "video" },
          {
            title: "Building a Transformer",
            duration: "120 min",
            type: "exercise",
          },
        ],
      },
    ],
    tags: ["deep-learning", "neural-networks", "transformers", "pytorch"],
    isPopular: true,
  },
  {
    id: "course-002",
    title: "Full-Stack Web Development",
    shortDescription:
      "Build production-ready web apps with React, Next.js, and Node.js.",
    fullDescription:
      "Go from zero to deploying a full-stack web application. This course covers modern React patterns, server-side rendering with Next.js, RESTful and GraphQL APIs with Node.js, database design, authentication, and deployment strategies used by top engineering teams.",
    category: "Web Development",
    difficulty: "Intermediate",
    instructorId: "inst-002",
    price: 79.99,
    rating: 4.8,
    reviewCount: 3120,
    studentsEnrolled: 7800,
    duration: "56 hours",
    lessonsCount: 84,
    modules: [
      {
        title: "Modern React Patterns",
        lessons: [
          {
            title: "Component Architecture",
            duration: "40 min",
            type: "video",
          },
          { title: "Hooks Deep Dive", duration: "55 min", type: "video" },
          { title: "State Management", duration: "45 min", type: "video" },
          { title: "Build a Dashboard", duration: "90 min", type: "exercise" },
        ],
      },
      {
        title: "Backend with Node.js",
        lessons: [
          { title: "REST API Design", duration: "35 min", type: "video" },
          { title: "Database Modeling", duration: "40 min", type: "video" },
          {
            title: "Authentication & Security",
            duration: "50 min",
            type: "video",
          },
          { title: "API Project", duration: "120 min", type: "exercise" },
        ],
      },
    ],
    tags: ["react", "nextjs", "nodejs", "full-stack"],
    isPopular: true,
  },
  {
    id: "course-003",
    title: "Data Science with Python",
    shortDescription:
      "Analyze real datasets and build predictive models using Python.",
    fullDescription:
      "Learn the complete data science workflow from exploratory analysis to model deployment. Using pandas, scikit-learn, and matplotlib, you will tackle real business problems and communicate insights through compelling visualizations and presentations.",
    category: "Data Science",
    difficulty: "Beginner",
    instructorId: "inst-004",
    price: 69.99,
    rating: 4.7,
    reviewCount: 1890,
    studentsEnrolled: 6200,
    duration: "38 hours",
    lessonsCount: 52,
    modules: [
      {
        title: "Python for Data Analysis",
        lessons: [
          { title: "Pandas Essentials", duration: "45 min", type: "video" },
          {
            title: "Data Cleaning Techniques",
            duration: "40 min",
            type: "video",
          },
          {
            title: "Exploratory Data Analysis",
            duration: "50 min",
            type: "video",
          },
          { title: "Dataset Challenge", duration: "60 min", type: "exercise" },
        ],
      },
      {
        title: "Machine Learning Basics",
        lessons: [
          { title: "Supervised Learning", duration: "45 min", type: "video" },
          { title: "Model Evaluation", duration: "35 min", type: "video" },
          { title: "Prediction Project", duration: "90 min", type: "exercise" },
          { title: "ML Concepts Quiz", duration: "15 min", type: "quiz" },
        ],
      },
    ],
    tags: ["python", "pandas", "scikit-learn", "data-analysis"],
    isPopular: true,
  },
  {
    id: "course-004",
    title: "Kubernetes & Cloud Native",
    shortDescription:
      "Deploy and manage containerized apps at scale with Kubernetes.",
    fullDescription:
      "Master container orchestration from local development to production clusters. This course covers Docker fundamentals, Kubernetes architecture, Helm charts, service meshes, and observability — everything you need to operate cloud-native infrastructure confidently.",
    category: "Cloud & DevOps",
    difficulty: "Advanced",
    instructorId: "inst-005",
    price: 99.99,
    rating: 4.6,
    reviewCount: 980,
    studentsEnrolled: 3100,
    duration: "35 hours",
    lessonsCount: 48,
    modules: [
      {
        title: "Container Fundamentals",
        lessons: [
          { title: "Docker Deep Dive", duration: "50 min", type: "video" },
          { title: "Multi-Stage Builds", duration: "30 min", type: "video" },
          { title: "Container Networking", duration: "35 min", type: "video" },
          { title: "Dockerize an App", duration: "60 min", type: "exercise" },
        ],
      },
      {
        title: "Kubernetes Core",
        lessons: [
          {
            title: "Pods, Services & Deployments",
            duration: "55 min",
            type: "video",
          },
          { title: "ConfigMaps & Secrets", duration: "30 min", type: "video" },
          { title: "Deploy a Cluster", duration: "120 min", type: "exercise" },
        ],
      },
    ],
    tags: ["kubernetes", "docker", "cloud", "devops"],
    isPopular: false,
  },
  {
    id: "course-005",
    title: "Ethical Hacking & Penetration Testing",
    shortDescription:
      "Learn offensive security techniques to defend modern systems.",
    fullDescription:
      "Think like a hacker to protect like a professional. This course covers reconnaissance, vulnerability assessment, exploitation techniques, and report writing. Every tool and technique is taught within a legal, ethical framework with dedicated lab environments.",
    category: "Cybersecurity",
    difficulty: "Advanced",
    instructorId: "inst-003",
    price: 109.99,
    rating: 4.8,
    reviewCount: 1560,
    studentsEnrolled: 4200,
    duration: "45 hours",
    lessonsCount: 62,
    modules: [
      {
        title: "Reconnaissance & Scanning",
        lessons: [
          { title: "OSINT Techniques", duration: "40 min", type: "video" },
          { title: "Network Scanning", duration: "35 min", type: "video" },
          {
            title: "Vulnerability Assessment",
            duration: "45 min",
            type: "video",
          },
          { title: "Recon Lab", duration: "90 min", type: "exercise" },
        ],
      },
      {
        title: "Exploitation Fundamentals",
        lessons: [
          {
            title: "Web Application Attacks",
            duration: "50 min",
            type: "video",
          },
          { title: "Privilege Escalation", duration: "45 min", type: "video" },
          {
            title: "Capture the Flag Challenge",
            duration: "120 min",
            type: "exercise",
          },
          { title: "Security Concepts Quiz", duration: "15 min", type: "quiz" },
        ],
      },
    ],
    tags: ["ethical-hacking", "penetration-testing", "security", "CTF"],
    isPopular: false,
  },
  {
    id: "course-006",
    title: "React Native Mobile Apps",
    shortDescription:
      "Build cross-platform mobile apps with React Native and Expo.",
    fullDescription:
      "Create beautiful, performant mobile applications for iOS and Android from a single codebase. This course covers React Native fundamentals, navigation, state management, native modules, and publishing to app stores with real-world projects.",
    category: "Mobile Development",
    difficulty: "Intermediate",
    instructorId: "inst-006",
    price: 74.99,
    rating: 4.7,
    reviewCount: 1240,
    studentsEnrolled: 3800,
    duration: "40 hours",
    lessonsCount: 58,
    modules: [
      {
        title: "React Native Core",
        lessons: [
          { title: "Components & Styling", duration: "40 min", type: "video" },
          { title: "Navigation Patterns", duration: "35 min", type: "video" },
          { title: "State with Zustand", duration: "30 min", type: "video" },
          { title: "Build a Todo App", duration: "60 min", type: "exercise" },
        ],
      },
      {
        title: "Advanced Features",
        lessons: [
          { title: "Native Modules", duration: "45 min", type: "video" },
          {
            title: "Animations with Reanimated",
            duration: "40 min",
            type: "video",
          },
          {
            title: "App Store Publishing",
            duration: "30 min",
            type: "reading",
          },
          {
            title: "E-Commerce App Project",
            duration: "180 min",
            type: "exercise",
          },
        ],
      },
    ],
    tags: ["react-native", "expo", "mobile", "cross-platform"],
    isPopular: false,
  },
  {
    id: "course-007",
    title: "Programming Fundamentals",
    shortDescription:
      "Start your coding journey with Python — no experience required.",
    fullDescription:
      "The perfect entry point into software development. Learn programming logic, data structures, algorithms, and problem-solving through Python. Every concept is reinforced with interactive exercises and mini-projects that build your confidence step by step.",
    category: "Web Development",
    difficulty: "Beginner",
    instructorId: "inst-007",
    price: 49.99,
    rating: 4.9,
    reviewCount: 4560,
    studentsEnrolled: 12400,
    duration: "30 hours",
    lessonsCount: 45,
    modules: [
      {
        title: "Getting Started with Python",
        lessons: [
          {
            title: "Variables & Data Types",
            duration: "30 min",
            type: "video",
          },
          { title: "Control Flow", duration: "35 min", type: "video" },
          { title: "Functions & Modules", duration: "40 min", type: "video" },
          { title: "Coding Exercises", duration: "45 min", type: "exercise" },
          { title: "Basics Quiz", duration: "10 min", type: "quiz" },
        ],
      },
      {
        title: "Data Structures & Algorithms",
        lessons: [
          { title: "Lists, Dicts & Sets", duration: "40 min", type: "video" },
          { title: "Sorting & Searching", duration: "35 min", type: "video" },
          {
            title: "Algorithm Challenges",
            duration: "90 min",
            type: "exercise",
          },
        ],
      },
    ],
    tags: ["python", "beginner", "algorithms", "fundamentals"],
    isPopular: true,
  },
  {
    id: "course-008",
    title: "Natural Language Processing",
    shortDescription:
      "Build NLP pipelines from tokenization to large language models.",
    fullDescription:
      "Dive into the world of text understanding and generation. This course covers classical NLP techniques, word embeddings, sequence models, and modern transformer-based approaches. You will build sentiment analyzers, chatbots, and text summarizers.",
    category: "AI & Machine Learning",
    difficulty: "Advanced",
    instructorId: "inst-008",
    price: 94.99,
    rating: 4.6,
    reviewCount: 870,
    studentsEnrolled: 2800,
    duration: "38 hours",
    lessonsCount: 54,
    modules: [
      {
        title: "Text Processing Foundations",
        lessons: [
          {
            title: "Tokenization & Preprocessing",
            duration: "35 min",
            type: "video",
          },
          { title: "Word Embeddings", duration: "40 min", type: "video" },
          { title: "Text Classification", duration: "45 min", type: "video" },
          {
            title: "Sentiment Analyzer Project",
            duration: "90 min",
            type: "exercise",
          },
        ],
      },
      {
        title: "Large Language Models",
        lessons: [
          {
            title: "Transformer Architecture",
            duration: "50 min",
            type: "video",
          },
          { title: "Fine-Tuning LLMs", duration: "45 min", type: "video" },
          { title: "Build a Chatbot", duration: "120 min", type: "exercise" },
        ],
      },
    ],
    tags: ["NLP", "transformers", "LLM", "text-processing"],
    isPopular: false,
  },
  {
    id: "course-009",
    title: "AWS Cloud Practitioner",
    shortDescription:
      "Master AWS fundamentals and earn your first cloud certification.",
    fullDescription:
      "Build a strong foundation in Amazon Web Services. This course covers core services like EC2, S3, Lambda, and RDS, along with IAM, networking, and billing. Designed to prepare you for the AWS Cloud Practitioner certification exam.",
    category: "Cloud & DevOps",
    difficulty: "Beginner",
    instructorId: "inst-005",
    price: 59.99,
    rating: 4.5,
    reviewCount: 2100,
    studentsEnrolled: 5400,
    duration: "25 hours",
    lessonsCount: 38,
    modules: [
      {
        title: "AWS Core Services",
        lessons: [
          { title: "EC2 & Compute", duration: "40 min", type: "video" },
          { title: "S3 & Storage", duration: "30 min", type: "video" },
          { title: "IAM & Security", duration: "35 min", type: "video" },
          { title: "Hands-On Lab", duration: "60 min", type: "exercise" },
          { title: "Services Quiz", duration: "15 min", type: "quiz" },
        ],
      },
    ],
    tags: ["AWS", "cloud", "certification", "beginner"],
    isPopular: false,
  },
  {
    id: "course-010",
    title: "Cybersecurity Fundamentals",
    shortDescription:
      "Understand threats, defenses, and security best practices.",
    fullDescription:
      "A comprehensive introduction to cybersecurity concepts. Learn about common attack vectors, cryptographic principles, network security, identity management, and incident response. Perfect for anyone looking to start a career in security or improve their organization security posture.",
    category: "Cybersecurity",
    difficulty: "Beginner",
    instructorId: "inst-003",
    price: 64.99,
    rating: 4.7,
    reviewCount: 1340,
    studentsEnrolled: 4600,
    duration: "28 hours",
    lessonsCount: 42,
    modules: [
      {
        title: "Security Principles",
        lessons: [
          { title: "CIA Triad & Risk", duration: "30 min", type: "video" },
          { title: "Cryptography Basics", duration: "40 min", type: "video" },
          { title: "Network Security", duration: "35 min", type: "video" },
          { title: "Security Audit Lab", duration: "60 min", type: "exercise" },
        ],
      },
    ],
    tags: ["security", "fundamentals", "cryptography", "networking"],
    isPopular: false,
  },
  {
    id: "course-011",
    title: "Advanced TypeScript Patterns",
    shortDescription:
      "Master generics, conditional types, and type-safe architecture.",
    fullDescription:
      "Elevate your TypeScript skills beyond the basics. This course covers advanced type system features including mapped types, conditional types, template literal types, and type-safe design patterns. Build robust libraries and frameworks with confidence.",
    category: "Web Development",
    difficulty: "Advanced",
    instructorId: "inst-002",
    price: 84.99,
    rating: 4.8,
    reviewCount: 760,
    studentsEnrolled: 2400,
    duration: "32 hours",
    lessonsCount: 46,
    modules: [
      {
        title: "Advanced Type System",
        lessons: [
          { title: "Generics Mastery", duration: "45 min", type: "video" },
          {
            title: "Conditional & Mapped Types",
            duration: "50 min",
            type: "video",
          },
          {
            title: "Template Literal Types",
            duration: "35 min",
            type: "video",
          },
          { title: "Type Challenges", duration: "90 min", type: "exercise" },
        ],
      },
      {
        title: "Type-Safe Patterns",
        lessons: [
          { title: "Builder Pattern", duration: "40 min", type: "video" },
          { title: "Type-Safe APIs", duration: "45 min", type: "video" },
          { title: "Library Project", duration: "120 min", type: "exercise" },
        ],
      },
    ],
    tags: ["typescript", "generics", "type-system", "advanced"],
    isPopular: false,
  },
  {
    id: "course-012",
    title: "Flutter Mobile Development",
    shortDescription:
      "Build beautiful native apps with Dart and Flutter framework.",
    fullDescription:
      "Learn Flutter from the ground up and build stunning cross-platform applications. This course covers Dart programming, widget composition, state management with Riverpod, platform-specific integrations, and testing strategies for production-ready mobile apps.",
    category: "Mobile Development",
    difficulty: "Beginner",
    instructorId: "inst-006",
    price: 69.99,
    rating: 4.6,
    reviewCount: 920,
    studentsEnrolled: 3200,
    duration: "36 hours",
    lessonsCount: 50,
    modules: [
      {
        title: "Dart & Flutter Basics",
        lessons: [
          { title: "Dart Language Tour", duration: "40 min", type: "video" },
          { title: "Widget Composition", duration: "45 min", type: "video" },
          { title: "Layout & Styling", duration: "35 min", type: "video" },
          { title: "Build a UI", duration: "60 min", type: "exercise" },
        ],
      },
      {
        title: "State & Navigation",
        lessons: [
          { title: "State Management", duration: "45 min", type: "video" },
          { title: "Routing Patterns", duration: "30 min", type: "video" },
          {
            title: "Weather App Project",
            duration: "120 min",
            type: "exercise",
          },
          { title: "Flutter Quiz", duration: "10 min", type: "quiz" },
        ],
      },
    ],
    tags: ["flutter", "dart", "mobile", "cross-platform"],
    isPopular: false,
  },
];

export const EDUCATION_STUDENTS: IStudent[] = [
  {
    id: "stu-001",
    name: "Alex Mercer",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=AlexMercer",
    courseId: "course-001",
    progress: 78,
    enrolledDate: "2025-09-15",
  },
  {
    id: "stu-002",
    name: "Jordan Lee",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=JordanLee",
    courseId: "course-001",
    progress: 92,
    enrolledDate: "2025-08-20",
  },
  {
    id: "stu-003",
    name: "Casey Nova",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=CaseyNova",
    courseId: "course-001",
    progress: 45,
    enrolledDate: "2025-11-01",
  },
  {
    id: "stu-004",
    name: "Riley Chen",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=RileyChen",
    courseId: "course-002",
    progress: 88,
    enrolledDate: "2025-07-10",
  },
  {
    id: "stu-005",
    name: "Morgan Blake",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=MorganBlake",
    courseId: "course-002",
    progress: 65,
    enrolledDate: "2025-10-05",
  },
  {
    id: "stu-006",
    name: "Quinn Davis",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=QuinnDavis",
    courseId: "course-002",
    progress: 34,
    enrolledDate: "2025-12-01",
  },
  {
    id: "stu-007",
    name: "Avery Park",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=AveryPark",
    courseId: "course-003",
    progress: 71,
    enrolledDate: "2025-09-28",
  },
  {
    id: "stu-008",
    name: "Taylor Swift",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=TaylorSwift",
    courseId: "course-003",
    progress: 56,
    enrolledDate: "2025-10-15",
  },
  {
    id: "stu-009",
    name: "Sam Rivera",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=SamRivera",
    courseId: "course-004",
    progress: 82,
    enrolledDate: "2025-08-01",
  },
  {
    id: "stu-010",
    name: "Drew Harper",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=DrewHarper",
    courseId: "course-004",
    progress: 41,
    enrolledDate: "2025-11-20",
  },
  {
    id: "stu-011",
    name: "Jamie Frost",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=JamieFrost",
    courseId: "course-005",
    progress: 95,
    enrolledDate: "2025-06-15",
  },
  {
    id: "stu-012",
    name: "Kai Tanaka",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=KaiTanaka",
    courseId: "course-005",
    progress: 68,
    enrolledDate: "2025-09-10",
  },
  {
    id: "stu-013",
    name: "Robin Cole",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=RobinCole",
    courseId: "course-006",
    progress: 53,
    enrolledDate: "2025-10-22",
  },
  {
    id: "stu-014",
    name: "Sky Patel",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=SkyPatel",
    courseId: "course-007",
    progress: 87,
    enrolledDate: "2025-07-05",
  },
  {
    id: "stu-015",
    name: "Reese Kim",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=ReeseKim",
    courseId: "course-007",
    progress: 29,
    enrolledDate: "2025-12-10",
  },
  {
    id: "stu-016",
    name: "Sage Wilson",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=SageWilson",
    courseId: "course-008",
    progress: 74,
    enrolledDate: "2025-08-18",
  },
  {
    id: "stu-017",
    name: "Phoenix Ray",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=PhoenixRay",
    courseId: "course-009",
    progress: 62,
    enrolledDate: "2025-09-30",
  },
  {
    id: "stu-018",
    name: "Emery Stone",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=EmeryStone",
    courseId: "course-010",
    progress: 48,
    enrolledDate: "2025-11-05",
  },
  {
    id: "stu-019",
    name: "Finley Cruz",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=FinleyCruz",
    courseId: "course-011",
    progress: 91,
    enrolledDate: "2025-07-22",
  },
  {
    id: "stu-020",
    name: "Hayden Voss",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=HaydenVoss",
    courseId: "course-012",
    progress: 37,
    enrolledDate: "2025-12-15",
  },
];

export const EDUCATION_REVIEWS: IReview[] = [
  {
    id: "rev-001",
    courseId: "course-001",
    studentName: "Alex Mercer",
    studentAvatar: "https://api.dicebear.com/7.x/bottts/svg?seed=AlexMercer",
    rating: 5,
    comment:
      "The best deep learning course I have taken. Prof. Neural explains complex concepts with such clarity.",
    date: "2025-11-20",
  },
  {
    id: "rev-002",
    courseId: "course-001",
    studentName: "Jordan Lee",
    studentAvatar: "https://api.dicebear.com/7.x/bottts/svg?seed=JordanLee",
    rating: 5,
    comment:
      "Transformers section alone is worth the price. Incredible depth and practical projects.",
    date: "2025-12-01",
  },
  {
    id: "rev-003",
    courseId: "course-002",
    studentName: "Riley Chen",
    studentAvatar: "https://api.dicebear.com/7.x/bottts/svg?seed=RileyChen",
    rating: 4,
    comment:
      "Great full-stack coverage. The real-world project approach keeps you engaged throughout.",
    date: "2025-10-15",
  },
  {
    id: "rev-004",
    courseId: "course-002",
    studentName: "Morgan Blake",
    studentAvatar: "https://api.dicebear.com/7.x/bottts/svg?seed=MorganBlake",
    rating: 5,
    comment:
      "Dr. Stackwell is an amazing instructor. The Node.js backend section is top-notch.",
    date: "2025-11-08",
  },
  {
    id: "rev-005",
    courseId: "course-003",
    studentName: "Avery Park",
    studentAvatar: "https://api.dicebear.com/7.x/bottts/svg?seed=AveryPark",
    rating: 4,
    comment:
      "Perfect introduction to data science. The real dataset projects make concepts stick.",
    date: "2025-11-25",
  },
  {
    id: "rev-006",
    courseId: "course-005",
    studentName: "Jamie Frost",
    studentAvatar: "https://api.dicebear.com/7.x/bottts/svg?seed=JamieFrost",
    rating: 5,
    comment:
      "Agent Cipher brings real-world hacking scenarios to life. The CTF challenges are addictive.",
    date: "2025-10-30",
  },
  {
    id: "rev-007",
    courseId: "course-007",
    studentName: "Sky Patel",
    studentAvatar: "https://api.dicebear.com/7.x/bottts/svg?seed=SkyPatel",
    rating: 5,
    comment:
      "Started with zero coding knowledge. Now I can build real programs. SyntaxSage is a gifted teacher.",
    date: "2025-11-12",
  },
  {
    id: "rev-008",
    courseId: "course-007",
    studentName: "Reese Kim",
    studentAvatar: "https://api.dicebear.com/7.x/bottts/svg?seed=ReeseKim",
    rating: 4,
    comment:
      "Great pace for beginners. Wish there were a few more advanced exercises at the end.",
    date: "2025-12-20",
  },
  {
    id: "rev-009",
    courseId: "course-004",
    studentName: "Sam Rivera",
    studentAvatar: "https://api.dicebear.com/7.x/bottts/svg?seed=SamRivera",
    rating: 4,
    comment:
      "Finally understand Kubernetes properly. The hands-on labs are essential for learning.",
    date: "2025-11-15",
  },
  {
    id: "rev-010",
    courseId: "course-006",
    studentName: "Robin Cole",
    studentAvatar: "https://api.dicebear.com/7.x/bottts/svg?seed=RobinCole",
    rating: 5,
    comment:
      "PixelForge makes mobile development feel approachable. Shipped my first app in 3 weeks.",
    date: "2025-12-05",
  },
];

export const getInstructorById = (id: string): IInstructor | undefined =>
  AI_INSTRUCTORS.find((i) => i.id === id);

export const getStudentsForCourse = (courseId: string): IStudent[] =>
  EDUCATION_STUDENTS.filter((s) => s.courseId === courseId);

export const getReviewsForCourse = (courseId: string): IReview[] =>
  EDUCATION_REVIEWS.filter((r) => r.courseId === courseId);
