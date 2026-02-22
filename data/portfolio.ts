// ===== PORTFOLIO DATA =====
// Easy to edit - Just update this file to add/remove demos

export interface Demo {
  id: string;
  title: string;
  description: string;
  image: string;
  images?: string[];
  category: string;
  link: string;
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
    id: "8",
    title: "Premium Unisex Salon",
    description:
      "A professional unisex salon website with service menu, expert stylists, and online appointment booking.",
    image: "/salon1.png",
    images: ["/salon1.png", "/salon2.png", "/salon3.png", "/salon4.png", "/salon5.png"],
    category: "wellness",
    link: "https://luxe-salon-weapp.vercel.app/",
    tags: ["Salon", "Beauty", "Service"],
    featured: true,
  },
  {
    id: "9",
    title: "Gym Member Portal",
    description:
      "Gym management website with plan subscription, trainer profiles, and workout tracking.",
    image: "/gym1.png",
    images: ["/gym1.png", "/gym2.png", "/gym3.png", "/gym4.png"],
    category: "wellness",
    link: "https://gym-portal-webapp.vercel.app/",
    tags: ["Gym", "Fitness", "Workout"],
    featured: true,
  },
  {
    id: "2",
    title: "Luxurious Jewelry Shop",
    description:
      "Premium jewelry e-commerce website with elegant product display and secure checkout.",
    image: "/jwell1.png",
    images: ["/jwell1.png", "/jwell2.png", "/jwell3.png", "/jwell4.png"],
    category: "ecommerce",
    link: "https://jyoti-jewellers.vercel.app/",
    tags: ["Jewellery", "Luxury", "E-commerce"],
    featured: true,
  },
  {
    id: "1",
    title: "Premium Course Platform",
    description:
      "A complete education platform for selling and managing online courses with student dashboard.",
    image: "/course1.png",
    images: ["/course1.png", "/course2.png", "/course3.png"],
    category: "education",
    link: "#",
    tags: ["Courses", "Education", "Learning"],
  },
  {
    id: "3",
    title: "Urban Cafe & Bistro",
    description:
      "Modern cafe website with digital menu, online ordering, and table reservation system.",
    image: "/cafe1.png",
    images: ["/cafe1.png", "/cafe2.png", "/cafe3.png", "/cafe4.png"],
    category: "hospitality",
    link: "https://my-cafe-webapp.vercel.app/",
    tags: ["Cafe", "Food", "Hospitality"],
  },
  {
    id: "4",
    title: "Coaching Center Platform",
    description:
      "Educational website for coaching centers with course listings, fee management, and student login.",
    image: "/demos/demo_coaching.png",
    category: "education",
    link: "#",
    tags: ["Coaching", "Education", "Learning"],
  },

  {
    id: "5",
    title: "Real Estate Property Portal",
    description:
      "Property listing website for agents with advanced search, virtual tours, and lead generation.",
    image: "/demos/demo_realestate.png",
    category: "realestate",
    link: "#",
    tags: ["Property", "Real Estate", "Listings"],
    featured: true,
  },
 
  {
    id: "7",
    title: "Beauty Parlour Website",
    description:
      "Modern beauty parlour website with gallery, price list, and WhatsApp booking.",
    image: "/demos/demo_beauty.png",
    category: "wellness",
    link: "#",
    tags: ["Beauty", "Parlour", "Service"],
  },

  {
    id: "10",
    title: "City Hospital Management",
    description:
      "Healthcare portal for hospitals with doctor schedules, OPD booking, and emergency info.",
    image: "/demos/demo_hospital.png",
    category: "healthcare",
    link: "#",
    tags: ["Hospital", "Health", "Management"],
  },
  {
    id: "11",
    title: "Tuition Class Portal",
    description:
      "Simple website for tuition classes with schedule, homework upload, and notice board.",
    image: "/demos/demo_tuition.png",
    category: "education",
    link: "#",
    tags: ["Tuition", "Education", "Classes"],
  },
  {
    id: "12",
    title: "Grand Hotel Website",
    description:
      "Elegant hotel website with room gallery, online booking, and local tour packages.",
    image: "/demos/demo_hotel.png",
    category: "hospitality",
    link: "#",
    tags: ["Hotel", "Hospitality", "Booking"],
  },
  {
    id: "13",
    title: "SaaS Product Landing",
    description:
      "High-converting landing page for a SaaS startup with dynamic pricing and feature highlights.",
    image: "/demos/demo_saas.png",
    category: "saas",
    link: "#",
    tags: ["SaaS", "Tech", "Landing Page"],
  },
  {
    id: "14",
    title: "Online Shoe Store",
    description:
      "Modern e-commerce site for shoes with 3D product view and sizes filter.",
    image: "/demos/demo_shoes.png",
    category: "ecommerce",
    link: "#",
    tags: ["Shoes", "Ecommerce", "Store"],
  },
  
];

// ===== AGENCY INFO =====
export const personalInfo = {
  name: "Akash Pandey",
  founder: "Akash Pandey",
  brandName: "Akky Labs",
  title: "Web & App Developer",
  tagline: "Building AI-Powered Digital Success for Your Business",
  experience: "Premium",
  projectsCompleted: "15+", 
  happyClients: "6+",
  email: "devakashpandey04@gmail.com",
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
    name: "Sagar Tiwari",
    business: "Global Education Platform",
    feedback:
      "The EdTech platform Akky Labs built for us is world-class. The student dashboard and interactive learning features have completely transformed how we deliver our courses online.",
    rating: 5,
    avatar: "SS",
  },
  {
    id: "2",
    name: "Anurag Kashyap",
    business: "E-commerce Retail",
    feedback:
      "Our sales have significantly increased since launching the new store. The checkout process is seamless, and the mobile experience is incredibly smooth. Highly professional team!",
    rating: 5,
    avatar: "PK",
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
  },
  {
    id: "5",
    name: "Charchit Gupta",
    business: "Luxury Jewelry Brand",
    feedback:
      "The jewelry web app looks absolutely premium! The high-quality image rendering and the focus on details really help showcase our collection. Exceptional development work.",
    rating: 5,
    avatar: "CG",
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

