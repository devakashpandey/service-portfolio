// ===== PORTFOLIO DATA =====
// Easy to edit - Just update this file to add/remove demos

export interface Demo {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "website" | "webapp" | "mobile";
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
  price: string;
}

// ===== YOUR SERVICES =====
export const services: Service[] = [
  {
    id: "website",
    title: "Website Development",
    description:
      "Professional, fast-loading websites that attract customers and boost your business online presence.",
    icon: "🌐",
    features: [
      "Responsive Design - Mobile First",
      "SEO Optimized",
      "Fast Loading Speed",
      "Contact Forms & WhatsApp Integration",
      "Google Analytics Setup",
      "1 Year Free Support",
    ],
    price: "Starting ₹15,000",
  },
  {
    id: "webapp",
    title: "Web Application",
    description:
      "Custom web apps with admin dashboard, inventory management, and online ordering systems.",
    icon: "⚡",
    features: [
      "Admin Dashboard",
      "Inventory Management",
      "Order Management System",
      "Customer Database",
      "Reports & Analytics",
      "Cloud Hosting Setup",
    ],
    price: "Starting ₹35,000",
  },
  {
    id: "mobile",
    title: "Mobile App",
    description:
      "Native-like mobile apps for Android & iOS to reach customers on their phones.",
    icon: "📱",
    features: [
      "Android & iOS Apps",
      "Push Notifications",
      "Offline Mode Support",
      "Payment Integration",
      "Play Store & App Store Publishing",
      "Regular Updates",
    ],
    price: "Starting ₹50,000",
  },
];

// ===== YOUR DEMOS/PORTFOLIO =====
// Add your demo projects here
export const demos: Demo[] = [
  {
    id: "1",
    title: "Grocery Store Website",
    description:
      "Complete e-commerce solution for a local grocery store with online ordering and delivery tracking.",
    image: "/demos/grocery-store.jpg",
    category: "website",
    link: "#", // Add your demo link
    tags: ["E-commerce", "Next.js", "Payments"],
    featured: true,
  },
  {
    id: "2",
    title: "Restaurant Ordering App",
    description:
      "Mobile-first web app for restaurant with QR menu, online ordering, and kitchen display system.",
    image: "/demos/restaurant-app.jpg",
    category: "webapp",
    link: "#",
    tags: ["Food & Beverage", "React", "Real-time"],
    featured: true,
  },
  {
    id: "3",
    title: "Fashion Boutique Store",
    description:
      "Elegant online store for a fashion boutique with size guide, wishlist, and COD support.",
    image: "/demos/fashion-store.jpg",
    category: "website",
    link: "#",
    tags: ["Fashion", "E-commerce", "Modern UI"],
    featured: true,
  },
  {
    id: "4",
    title: "Salon Booking App",
    description:
      "Mobile app for salon with appointment booking, service catalog, and loyalty points.",
    image: "/demos/salon-app.jpg",
    category: "mobile",
    link: "#",
    tags: ["Booking", "Flutter", "Notifications"],
  },
  {
    id: "5",
    title: "Electronics Shop",
    description:
      "Full e-commerce website with product comparison, EMI calculator, and inventory sync.",
    image: "/demos/electronics-shop.jpg",
    category: "website",
    link: "#",
    tags: ["Electronics", "Comparison", "EMI"],
  },
  {
    id: "6",
    title: "Pharmacy Delivery App",
    description:
      "Web app for pharmacy with prescription upload, medicine reminders, and doorstep delivery.",
    image: "/demos/pharmacy-app.jpg",
    category: "webapp",
    link: "#",
    tags: ["Healthcare", "Delivery", "PWA"],
  },
];

// ===== YOUR INFO =====
export const personalInfo = {
  name: "Akky",
  title: "Full Stack Developer",
  tagline: "Building Digital Success for Your Business",
  experience: "3+ Years",
  projectsCompleted: "25+",
  happyClients: "20+",
  email: "contact@akkydev.com", // Update this
  phone: "+91 8709412383", // Update this
  whatsapp: "918709412383", // Update this (without +)
  location: "India",
  social: {
    github: "https://github.com/akky", // Update
    linkedin: "https://linkedin.com/in/akky", // Update
    twitter: "https://twitter.com/akky", // Update
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
];

// ===== CATEGORY FILTERS =====
export const categories = [
  { id: "all", label: "All Projects" },
  { id: "website", label: "Websites" },
  { id: "webapp", label: "Web Apps" },
  { id: "mobile", label: "Mobile Apps" },
];
