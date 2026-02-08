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

// ===== YOUR SERVICES =====
export const services: Service[] = [
  {
    id: "website",
    title: "Website Development",
    description:
      "Professional, fast-loading websites that attract customers and boost your business online presence.",
    icon: "Globe",
    features: [
      "Responsive Design - Mobile First",
      "SEO Optimized",
      "Fast Loading Speed",
      "Contact Forms & WhatsApp Integration",
      "Google Analytics Setup",
      "1 Year Free Support",
    ],

  },
  {
    id: "webapp",
    title: "Web Application",
    description:
      "Custom web apps with admin dashboard, inventory management, and online ordering systems.",
    icon: "Zap",
    features: [
      "AI Powered Dashboards",
      "Admin Dashboard",
      "Inventory Management",
      "Order Management System",
      "Customer Database",
      "Reports & Analytics",
      "Cloud Hosting Setup",
    ],

  },
  {
    id: "mobile",
    title: "Mobile App",
    description:
      "Native-like mobile apps for Android to reach customers on their phones.",
    icon: "Smartphone",
    features: [
      "Android Apps",
      "AI Voice/Chat Integration",
      "Push Notifications",
      "Payment Integration",
      "Play Store Publishing",
      "Regular Updates",
    ],

  },
  {
    id: "ai",
    title: "AI & Automation",
    description:
      "Integrating cutting-edge AI models like OpenAI, Gemini, and custom LLMs into your business workflow.",
    icon: "Brain",
    features: [
      "Custom AI Chatbots",
      "AI Image/Video Generation",
      "Automated Workflows",
      "LLM Integrations",
     "Intelligent Search Support",
      "Voice-to-Text Features",
    ],
  },
];

// ===== YOUR DEMOS/PORTFOLIO =====
// Add your demo projects here
export const demos: Demo[] = [
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
    featured: true,
  },
  {
    id: "2",
    title: "Luxurious Jewelry Shop",
    description:
      "Premium jewelry e-commerce website with elegant product display and secure checkout.",
    image: "/jwell1.png",
    images: ["/jwell1.png", "/jwell2.png"],
    category: "ecommerce",
    link: "#",
    tags: ["Jewellery", "Luxury", "E-commerce"],
    featured: true,
  },
  {
    id: "3",
    title: "Urban Cafe & Bistro",
    description:
      "Modern cafe website with digital menu, online ordering, and table reservation system.",
    image: "/cafe1.png",
    images: ["/cafe1.png", "/cafe2.png"],
    category: "hospitality",
    link: "#",
    tags: ["Cafe", "Food", "Hospitality"],
    featured: true,
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
    featured: true,
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
    id: "9",
    title: "Gym Member Portal",
    description:
      "Gym management website with plan subscription, trainer profiles, and workout tracking.",
    image: "/demos/demo_gym.png",
    category: "wellness",
    link: "#",
    tags: ["Gym", "Fitness", "Workout"],
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

// ===== YOUR INFO =====
export const personalInfo = {
  name: "Akash Pandey",
  brandName: "Akky Labs",
  title: "Web & App Developer",
  tagline: "Building AI-Powered Digital Success for Your Business",
  experience: "3 Years",
  projectsCompleted: "15+", 
  happyClients: "6+",
  email: "devakashpandey@gmail.com",
  phone: "+91 8709412383",
  whatsapp: "918709412383",
  location: "India",
  social: {
    github: "https://github.com/devakashpandey",
    linkedin: "https://www.linkedin.com/in/devakashpandey/",
    instagram: "https://www.instagram.com/firstclasscode/",
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
      "The EdTech platform Akky built for us is world-class. The student dashboard and interactive learning features have completely transformed how we deliver our courses online.",
    rating: 5,
    avatar: "SS",
  },
  {
    id: "2",
    name: "Anurag Kashyap",
    business: "E-commerce Retail",
    feedback:
      "Our sales have significantly increased since launching the new store. The checkout process is seamless, and the mobile experience is incredibly smooth. Highly professional work!",
    rating: 5,
    avatar: "PK",
  },
  {
    id: "3",
    name: "Rohit Singh",
    business: "AI Video Tech Startup",
    feedback:
      "Working with Akky on our AI video generator was a great experience. He understood the complex technical requirements perfectly and produced a high-performance web app our users love.",
    rating: 5,
    avatar: "RS",
  },
  {
    id: "4",
    name: "Kumar Shikhar",
    business: "Course Selling Platform",
    feedback:
      "I needed a robust platform to sell my digital courses, and Akky delivered exactly that. The integration with payment gateways and the content security features are top-notch.",
    rating: 5,
    avatar: "KS",
  },
  {
    id: "5",
    name: "Charchit Gupta",
    business: "Luxury Jewelry Brand",
    feedback:
      "The jewelry web app looks absolutely premium! The high-quality image rendering and the focus on details really help showcase our collection. Exceptional UI work.",
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
    description: "Our team crafts modern, high-conversion designs that establish brand authority and captivate your audience.",
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
    answer: "A basic website takes 5-7 days. Custom web applications and mobile apps take 15-30 days.",
  },
  {
    question: "Do you provide support after launch?",
    answer: "Yes, every project comes with 1 year of free technical support for any issues.",
  },
];
