// ===== PORTFOLIO DATA =====


export interface Demo {
  id: string;
  title: string;
  description: string;
  image: string;
  images?: string[];
  category: string;
  link?: string;
  tags: string[];
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];

}

// ===== OUR SERVICES =====
export const services: Service[] = [
  {
    id: "website",
    title: "Premium Websites",
    description:
      "Stunning, high-performance websites designed to establish your brand authority and convert visitors.",
    icon: "Globe",
    features: [
      "Mobile-First Responsive Design",
      "SEO & Performance Optimized",
      "WhatsApp & Social Integration",
      "Google Analytics & Tracking",
      "Domain & Hosting Management",
      "1-Year Priority Support",
    ],
  },
  {
    id: "webapp",
    title: "Full-Stack Web Apps",
    description:
      "Custom web applications with powerful admin dashboards and secure database architecture.",
    icon: "Zap",
    features: [
      "Custom Admin Dashboards",
      "Secure User Authentication",
      "Inventory & Order Management",
      "Real-time Data Analytics",
      "Cloud Infrastructure Setup",
      "SEO & Performance Optimized",
    ],
  },
  {
    id: "mobile",
    title: "Mobile App Dev",
    description:
      "Native-quality mobile experiences for Android and iOS that keep your users engaged 24/7.",
    icon: "Smartphone",
    features: [
      "Cross-Platform (iOS & Android)",
      "Push Notifications & Alerts",
      "Secure Payment Gateways",
      "App Store & Play Store Launch",
      "Offline Access Support",
      "AI Assistant Integration",
    ],
  },
  {
    id: "ai",
    title: "AI & Automation",
    description:
      "Smart AI solutions to automate repetitive tasks and bring intelligent features to your business.",
    icon: "Brain",
    features: [
      "Custom AI Chatbots",
      "Automated Business Workflows",
      "LLM & API Integrations",
      "Intelligent Search & Data",
      "Voice & Image Intelligence",
      "Predictive Analytics Tools",
    ],
  },
];

// ===== OUR DEMOS/PORTFOLIO =====
// Add your demo projects here
export const demos: Demo[] = [
  {
    id: "101",
    title: "Triveda Technologies",
    description: "A strategic technology partner helping organizations design, build, and scale impactful digital products.",
    image: "/newtri1.png?v=2",
    images: ["/newtri1.png?v=2", "/newtri2.png?v=2", "/newtri3.png?v=2", "/newtri4.png?v=2"],
    category: "saas",
    link: "https://new-triveda-technologies.vercel.app/",
    tags: ["Tech Partner", "AI Solutions", "Digital Products"],
    featured: true,
  },
  {
    id: "15",
    title: "Shopping Platform",
    description:
      "A high-end ecommerce platform with premium fashion collection, seamless shopping experience, and modern UI/UX design.",
    image: "/ecomm1.png?v=2",
    images: ["/ecomm1.png?v=2", "/ecomm2.png?v=2", "/ecomm3.png?v=2", "/ecomm4.png?v=2", "/ecomm5.png?v=2", "/ecomm6.png?v=2"],
    category: "ecommerce",
    // link: "https://unisex-store.vercel.app/",
    tags: ["Ecommerce", "Fashion", "Premium"],
    featured: true,
  },
  {
    id: "10",
    title: "City Hospital Management",
    description:
      "Healthcare portal for hospitals with doctor schedules, OPD booking, and emergency info.",
    image: "/hospi1.png?v=2",
    images: ["/hospi1.png?v=2", "/hospi2.png?v=2", "/hospi3.png?v=2", "/hospi4.png?v=2"],
    category: "healthcare",
    // link: "https://medvault-webapp.vercel.app/",
    tags: ["Hospital", "Health", "Management"],
    featured: true,
  },
  {
    id: "restro-cafe",
    title: "Restro & Cafe",
    description: "A premium restaurant and cafe platform with an elegant menu, reservations, and a warm dining atmosphere.",
    image: "/restro1.png?v=2",
    images: ["/restro1.png?v=2", "/restro2.png?v=2", "/restro3.png?v=2", "/restro4.png?v=2"],
    category: "hospitality",
    // link: "https://restro-cafe-webapp.vercel.app/",
    tags: ["Restaurant", "Cafe", "Premium"],
    featured: true,
  },
  {
    id: "9",
    title: "Gym Portal",
    description:
      "Gym management website with plan subscription, trainer profiles, and workout tracking.",
    image: "/gym1.png?v=2",
    images: ["/gym1.png?v=2", "/gym2.png?v=2", "/gym3.png?v=2", "/gym4.png?v=2"],
    category: "wellness",
    // link: "https://gym-portal-webapp.vercel.app/",
    tags: ["Gym", "Fitness", "Workout"],
    featured: true,
  },
  {
    id: "102",
    title: "SaaS Product Landing",
    description: "High-converting mordern landing page for a SaaS startup with dynamic pricing and feature highlights.",
    image: "/tri0.png?v=2",
    images: ["/tri0.png?v=2", "/tri1.png?v=2", "/tri2.png?v=2", "/tri3.png?v=2"],
    category: "saas",
    link: "https://triveda-technologies.vercel.app/",
    tags: ["SaaS", "Tech", "Landing Page"],
    featured: true,
  },
  {
    id: "2",
    title: "Jewelry Shop",
    description:
      "Premium jewelry e-commerce website with elegant product display and secure checkout.",
    image: "/jwell1.png?v=2",
    images: ["/jwell1.png?v=2", "/jwell2.png?v=2", "/jwell3.png?v=2", "/jwell4.png?v=2"],
    category: "ecommerce",
    // link: "https://jyoti-jewellers.vercel.app/",
    tags: ["Jewellery", "Luxury", "E-commerce"],
    featured: true,
  },
  {
    id: "1",
    title: "Premium Course Platform",
    description:
      "A complete education platform for selling and managing online courses with student dashboard.",
    image: "/course1.png?v=2",
    images: ["/course1.png?v=2", "/course2.png?v=2", "/course3.png?v=2"],
    category: "education",
    // link: "https://new-course-platform.vercel.app/",
    tags: ["Courses", "Education", "Learning"],
  },
  {
    id: "salon-premium",
    title: "Premium Unisex Salon",
    description:
      "A professional unisex salon website with service menu, expert stylists, and online appointment booking.",
    image: "/salon1.png?v=2",
    images: ["/salon1.png?v=2", "/salon2.png?v=2", "/salon3.png?v=2", "/salon4.png?v=2", "/salon5.png?v=2"],
    category: "wellness",
    // link: "https://luxe-salon-weapp.vercel.app/",
    tags: ["Salon", "Beauty", "Service"],
    featured: true,
  },
  {
    id: "16",
    title: "Green Ganga Associates",
    description:
      "A professional landscaping and gardening website, specializing in outdoor space design and maintenance.",
    image: "/greenganga1.png?v=2",
    images: ["/greenganga1.png?v=2", "/greenganga2.png?v=2", "/greenganga3.png?v=2"],
    category: "realestate",
    link: "https://www.greengangaassociates.com/",
    tags: ["Landscaping", "Gardening", "Design"],
    featured: true,
  },
  {
    id: "8",
    title: "Urban Cafe Bistro",
    description: "A premium cafe and bistro website with digital menu, online ordering, and table reservation system.",
    image: "/cafe1.png?v=2",
    images: ["/cafe1.png?v=2", "/cafe2.png?v=2", "/cafe3.png?v=2", "/cafe4.png?v=2"],
    category: "hospitality",
    // link: "https://my-cafe-webapp.vercel.app/",
    tags: ["Cafe", "Bistro", "Food"],
    featured: false,
  },
  {
    id: "4",
    title: "Coaching Center Platform",
    description:
      "Educational website for coaching centers with course listings, fee management, and student login.",
    image: "/demos/demo_coaching.png?v=2",
    category: "education",
    // link: "https://unisex-store.vercel.app/",
    tags: ["Coaching", "Education", "Learning"],
  },
  {
    id: "5",
    title: "Real Estate Property Portal",
    description:
      "Property listing website for agents with advanced search, virtual tours, and lead generation.",
    image: "/demos/demo_realestate.png?v=2",
    category: "realestate",
    // link: "#",
    tags: ["Property", "Real Estate", "Listings"],
    featured: true,
  },
  {
    id: "7",
    title: "Beauty Parlour Website",
    description:
      "Modern beauty parlour website with gallery, price list, and WhatsApp booking.",
    image: "/demos/demo_beauty.png?v=2",
    category: "wellness",
    // link: "#",
    tags: ["Beauty", "Parlour", "Service"],
  },
  {
    id: "12",
    title: "Grand Hotel Website",
    description:
      "Elegant hotel website with room gallery, online booking, and local tour packages.",
    image: "/demos/demo_hotel.png?v=2",
    category: "hospitality",
    // link: "#",
    tags: ["Hotel", "Hospitality", "Booking"],
  },
];

// ===== AGENCY INFO =====
export const personalInfo = {
  name: "Akash Pandey",
  founder: "Akash Pandey",
  brandName: "Akky Labs",
  title: "Software & App Developer",
  tagline: "Building AI-Powered Digital Success for Your Business",
  experience: "3+",
  projectsCompleted: "20+", 
  happyClients: "10+",
  email: "akkylabs@outlook.com",
  phone: "+91 8709412383",
  whatsapp: "918709412383",
  location: "India",
  social: {
    github: "https://github.com/devakashpandey",
    linkedin: "https://www.linkedin.com/in/devakashpandey/",
    instagram: "https://www.instagram.com/akkylabs/",
    portfolio: "https://developerakashpandey.vercel.app/",
  },
};

// ===== TESTIMONIALS =====
export const testimonials = [
  {
    id: "1",
    name: "Govind Singh",
    business: "Global Education Platform",
    feedback:
      "The EdTech platform Akky Labs built for us is world-class. The student dashboard and interactive learning features have completely transformed how we deliver our courses online.",
    rating: 5,
    avatar: "GS",
  },

  {
    id: "3",
    name: "Rohit Singh",
    business: "AI Video Tech Startup",
    feedback:
      "Working with Akky Labs on our AI video generator was a great experience. They understood the complex technical requirements perfectly and produced a high-performance web app our users love.",
    rating: 5,
    avatar: "RS",
  },
  {
    id: "4",
    name: "Kumar Shikhar",
    business: "Course Selling Platform",
    feedback:
      "I needed a robust platform to sell my digital courses, and the team at Akky Labs delivered exactly that. The integration with payment gateways and the content security features are top-notch.",
    rating: 5,
    avatar: "KS",
    image: "/clients/shikhar.jpeg",
  },
  {
    id: "5",
    name: "Charchit Gupta",
    business: "Luxury Jewelry Brand",
    feedback:
      "The jewelry web app looks absolutely premium! The high-quality image rendering and the focus on details really help showcase our collection. Exceptional development work.",
    rating: 5,
    avatar: "CG",
    image: "/clients/charchit.jpeg",
  },
  {
    id: "6",
    name: "Raushan Kumar",
    business: "Cafe & Lounge",
    feedback:
      "The table reservation system has automated our entire booking process. Our customers find it very easy to use, and it has significantly improved our cafe's daily operations.",
    rating: 5,
    avatar: "RK",
  },
  {
    id: "7",
    name: "Aditya Sharma",
    business: "Landscaping & Gardening Service",
    feedback:
      "Akky Labs delivered our landscaping website incredibly fast! The smooth animations, clean UI, and on-page SEO give it a truly premium feel. Highly recommended!",
    rating: 5,
    avatar: "AS",
    image: "/clients/adityasharma.jpeg",
  },
  {
    id: "8",
    name: "Suraj Singh",
    business: "Triveda Technologies",
    feedback:
      "Akky Labs delivered a high-tech modern 3D website for us with amazing speed. The site is incredibly smooth and speed-optimized, perfectly showcasing our AI solutions and tech services.",
    rating: 5,
    avatar: "TT",
  },
];

// ===== CATEGORY FILTERS =====
export const categories = [
  { id: "all", label: "All Projects" },
  { id: "wellness", label: "Wellness & Gym" },
  { id: "hospitality", label: "Hospitality" },
  { id: "healthcare", label: "Healthcare" },
  { id: "education", label: "Education" },
  { id: "realestate", label: "Real Estate" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "saas", label: "SaaS & Tech" },
];

export const workSteps = [
  {
    title: "1. Strategy & Planning",
    description: "We start with a detailed consultation to align with your business goals and define a personalized digital roadmap.",
  },
  {
    title: "2. Premium Design",
    description: "We craft modern, high-conversion designs that establish brand authority and captivate your audience.",
  },
  {
    title: "3. Precision Build",
    description: "We develop fast, secure, and mobile-optimized solutions using the latest technology and industry best practices.",
  },
  {
    title: "4. Launch & Support",
    description: "We ensure a flawless deployment followed by 1 year of dedicated technical support to guarantee your long-term success.",
  },
];

export const faqs = [
  {
    question: "What if I don't like the design?",
    answer: "We offer unlimited basic revisions until you are 100% satisfied with the final look.",
  },
  {
    question: "Is Domain and Hosting included?",
    answer: "Yes, our packages include a free Domain (.com/.in) and Cloud Hosting for the first year.",
  },
  {
    question: "How long does it take to build?",
    answer: "It depends on the features you need. A basic website normally takes 7-10 days, but if you add more custom features or complex animations, it will take time accordingly.",
  },
  {
    question: "Do you provide support after launch?",
    answer: "Yes, every project comes with 1 year of free technical support for any issues.",
  },
  {
    question: "Can I update the website myself?",
    answer: "Yes, I build websites with easy-to-use dashboards so you can update text, images, and other content without any coding knowledge.",
  },
 
  {
    question: "What information do I need to get started?",
    answer: "You just need to provide your business details, goals, and any specific preferences you have. I'll handle the rest, from planning to launch.",
  },
];

export const whyUs = [
  {
    title: "Revenue-Focused Development",
    description: "Every website we build is designed to generate leads, increase conversions, and deliver measurable business results, not just look good.",
    icon: "Award",
  },
  {
    title: "Performance & Speed",
    description: "Fast load times and optimized performance to improve SEO, user experience, and customer retention.",
    icon: "Clock",
  },
  {
    title: "Clear & Transparent Process",
    description: "No hidden surprises. Defined timelines, milestone updates, and complete clarity from start to launch.",
    icon: "ShieldCheck",
  },
  {
    title: "Ongoing Growth Support",
    description: "Beyond launch we help you maintain, improve, and scale your digital presence as your business grows.",
    icon: "BrainCircuit",
  },
  {
    title: "Simple to Manage",
    description: "Get a website that is incredibly easy for you to update yourself without needing any technical knowledge.",
    icon: "BarChart3",
  },
  {
    title: "Premium Brand Image",
    description: "We give your business a high-end look that builds instant trust and makes customers choose you over others.",
    icon: "BadgePercent",
  },
];

