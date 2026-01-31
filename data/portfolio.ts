// ===== PORTFOLIO DATA =====
// Easy to edit - Just update this file to add/remove demos

export interface Demo {
  id: string;
  title: string;
  description: string;
  image: string;
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
      "Push Notifications",
      "Payment Integration",
      "Play Store Publishing",
      "Regular Updates",
    ],

  },
];

// ===== YOUR DEMOS/PORTFOLIO =====
// Add your demo projects here
export const demos: Demo[] = [
  {
    id: "1",
    title: "Premium Salon Website",
    description:
      "High-end salon website with online booking, service menu, and stylist profiles.",
    image: "/demos/salon.jpg",
    category: "wellness",
    link: "#",
    tags: ["Salon", "Booking", "Wellness"],
    featured: true,
  },
  {
    id: "2",
    title: "Restaurant Ordering System",
    description:
      "Modern restaurant website with digital menu, table reservation, and online checkout.",
    image: "/demos/restaurant.jpg",
    category: "hospitality",
    link: "#",
    tags: ["Food", "Reservations", "Hospitality"],
    featured: true,
  },
  {
    id: "3",
    title: "Dental Clinic Portal",
    description:
      "Professional healthcare website for dental clinics with appointment scheduling and patient records.",
    image: "/demos/dentist.jpg",
    category: "healthcare",
    link: "#",
    tags: ["Dentist", "Clinic", "Healthcare"],
    featured: true,
  },
  {
    id: "4",
    title: "Coaching Center Platform",
    description:
      "Educational website for coaching centers with course listings, fee management, and student login.",
    image: "/demos/education.jpg",
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
    image: "/demos/realestate.jpg",
    category: "realestate",
    link: "#",
    tags: ["Property", "Real Estate", "Listings"],
    featured: true,
  },
  {
    id: "6",
    title: "Boutique E-commerce Store",
    description:
      "Premium fashion store for clothing and jewellery with advanced filters and secure checkout.",
    image: "/demos/boutique.jpg",
    category: "ecommerce",
    link: "#",
    tags: ["Fashion", "Cloth", "Jewellery"],
    featured: true,
  },
  {
    id: "7",
    title: "Beauty Parlour Website",
    description:
      "Modern beauty parlour website with gallery, price list, and WhatsApp booking.",
    image: "/demos/beauty.jpg",
    category: "wellness",
    link: "#",
    tags: ["Beauty", "Parlour", "Service"],
  },
  {
    id: "8",
    title: "Luxury Spa Booking",
    description:
      "Calm and professional spa website with membership features and service packages.",
    image: "/demos/spa.jpg",
    category: "wellness",
    link: "#",
    tags: ["Spa", "Wellness", "Booking"],
  },
  {
    id: "9",
    title: "Gym Member Portal",
    description:
      "Gym management website with plan subscription, trainer profiles, and workout tracking.",
    image: "/demos/gym.jpg",
    category: "wellness",
    link: "#",
    tags: ["Gym", "Fitness", "Workout"],
  },
  {
    id: "10",
    title: "City Hospital Management",
    description:
      "Healthcare portal for hospitals with doctor schedules, OPD booking, and emergency info.",
    image: "/demos/hospital.jpg",
    category: "healthcare",
    link: "#",
    tags: ["Hospital", "Health", "Management"],
  },
  {
    id: "11",
    title: "Tuition Class Portal",
    description:
      "Simple website for tuition classes with schedule, homework upload, and notice board.",
    image: "/demos/tuition.jpg",
    category: "education",
    link: "#",
    tags: ["Tuition", "Education", "Classes"],
  },
  {
    id: "12",
    title: "Grand Hotel Website",
    description:
      "Elegant hotel website with room gallery, online booking, and local tour packages.",
    image: "/demos/hotel.jpg",
    category: "hospitality",
    link: "#",
    tags: ["Hotel", "Hospitality", "Booking"],
  },
  {
    id: "13",
    title: "SaaS Product Landing",
    description:
      "High-converting landing page for a SaaS startup with dynamic pricing and feature highlights.",
    image: "/demos/saas.jpg",
    category: "saas",
    link: "#",
    tags: ["SaaS", "Tech", "Landing Page"],
  },
  {
    id: "14",
    title: "Online Shoe Store",
    description:
      "Modern e-commerce site for shoes with 3D product view and sizes filter.",
    image: "/demos/shoes.jpg",
    category: "ecommerce",
    link: "#",
    tags: ["Shoes", "Ecommerce", "Store"],
  },
  {
    id: "15",
    title: "Diamond Jewellery Boutique",
    description:
      "Exquisite jewellery store website with zoom-in features and certificate display.",
    image: "/demos/jewellery.jpg",
    category: "ecommerce",
    link: "#",
    tags: ["Jewellery", "Luxury", "Boutique"],
  },
];

// ===== YOUR INFO =====
export const personalInfo = {
  name: "Akash ",
  title: "Website & App Expert",
  tagline: "Building Digital Success for Your Business",
  experience: "3 Years",
  projectsCompleted: "25+",
  happyClients: "20+",
  email: "devakashpandey@gmail.com",
  phone: "+91 8709412383",
  whatsapp: "918709412383",
  location: "India",
  social: {
    github: "https://github.com/akky",
    linkedin: "https://linkedin.com/in/akky",
    twitter: "https://twitter.com/akky",
  },
};

// ===== TESTIMONIALS =====
export const testimonials = [
  {
    id: "1",
    name: "Rahul Sharma",
    business: "Sharma Kirana Store",
    feedback:
      "Akky delivered an amazing website for my grocery store. Now I receive online orders even from neighboring areas. Business has grown 40% since then!",
    rating: 5,
    avatar: "RS",
  },
  {
    id: "2",
    name: "Priya Patel",
    business: "Priya's Fashion Boutique",
    feedback:
      "The online store looks so premium! My customers love the easy checkout and I love the admin panel to manage everything.",
    rating: 5,
    avatar: "PP",
  },
  {
    id: "3",
    name: "Mohammad Irfan",
    business: "Irfan Electronics",
    feedback:
      "Very professional work. The website loads super fast and the EMI calculator feature has helped boost my sales significantly.",
    rating: 5,
    avatar: "MI",
  },
  {
    id: "4",
    name: "Dr. Anjali Gupta",
    business: "Gupta Dental Care",
    feedback:
      "The clinic portal is very user-friendly. My patients can now book appointments easily. Highly recommend Akky for healthcare projects!",
    rating: 5,
    avatar: "AG",
  },
  {
    id: "5",
    name: "Vikram Singh",
    business: "Elite Realty",
    feedback:
      "Our real estate portal has transformed how we show properties. The virtual tour integration is flawless. Professional and timely delivery.",
    rating: 5,
    avatar: "VS",
  },
  {
    id: "6",
    name: "Arjun Mehra",
    business: "The Power House Gym",
    feedback:
      "The gym app is exactly what we needed. Member management is now automated and the progress tracking feature is a hit with our clients.",
    rating: 5,
    avatar: "AM",
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
    title: "1. Discussion",
    description: "We start by understanding your business goals and creating a custom plan for your needs.",
  },
  {
    title: "2. Design",
    description: "We create a professional and modern design that your customers will love to use.",
  },
  {
    title: "3. Development",
    description: "We build your website or app using fast and secure coding standards.",
  },
  {
    title: "4. Launch & Support",
    description: "After going live, we provide 1 year of free technical support to keep things running smoothly.",
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
