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
  caseStudy?: {
    problem: string;
    solution: string;
    result: string;
    whyItWorks: string[];
  };
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
    caseStudy: {
      problem: "Triveda needed a world-class digital presence to match their high-end technology consulting services.",
      solution: "Built a high-performance 3D-integrated website with interactive service modules and smooth motion geometry.",
      result: "Achieved a 200% increase in inbound partnership enquiries within the first quarter of launch.",
      whyItWorks: ["Advanced Framer Motion", "Bento-grid Layout", "Trust-focused UI"],
    }
  },
  {
    id: "15",
    title: "Shopping Platform",
    description:
      "A high-end ecommerce platform with premium fashion collection, seamless shopping experience, and modern UI/UX design.",
    image: "/ecomm1.png?v=2",
    images: ["/ecomm1.png?v=2", "/ecomm2.png?v=2", "/ecomm3.png?v=2", "/ecomm4.png?v=2", "/ecomm5.png?v=2", "/ecomm6.png?v=2"],
    category: "ecommerce",
    // link: "https://modern-ecommerce.vercel.app/",
    tags: ["Ecommerce", "Fashion", "Premium"],
    featured: true,
    caseStudy: {
       problem: "Low customer retention due to a slow, cluttered mobile shopping experience.",
       solution: "Redesigned with mobile-first approach, 1-click checkout, and high-res optimized product galleries.",
       result: "Reduced cart abandonment by 60% and increased mobile revenue by 45%.",
       whyItWorks: ["Lightning-fast checkout", "Visual hierarchy", "Social proof integration"],
    }
  },
  {
    id: "10",
    title: "Hospital & Clinic Portal",
    description:
      "Healthcare portal for hospitals with doctor schedules, OPD booking, and emergency info.",
    image: "/hospi1.png?v=2",
    images: ["/hospi1.png?v=2", "/hospi2.png?v=2", "/hospi3.png?v=2", "/hospi4.png?v=2"],
    category: "healthcare",
    tags: ["Hospital", "Health", "Management"],
    featured: true,
    caseStudy: {
       problem: "Patients faced long wait times and difficulty in checking doctor availability.",
       solution: "Implemented a real-time booking system and digital OPD schedule accessible via WhatsApp.",
       result: "Over 500 appointments booked digitally in the first month, reducing front-desk load by 40%.",
       whyItWorks: ["Clean interface for all ages", "Urgent CTA placement", "Trust-building doctor profiles"],
    }
  },
  {
    id: "restro-cafe",
    title: "Restro & Cafe",
    description: "A premium restaurant and cafe platform with an elegant menu, reservations, and a warm dining atmosphere.",
    image: "/restro1.png?v=2",
    images: ["/restro1.png?v=2", "/restro2.png?v=2", "/restro3.png?v=2", "/restro4.png?v=2"],
    category: "hospitality",
    tags: ["Restaurant", "Cafe", "Premium"],
    featured: true,
    caseStudy: {
       problem: "The cafe lacked a digital menu and had to process all reservations via phone manually.",
       solution: "Designed a stunning visual menu and integrated a seamless table reservation system.",
       result: "Weekend reservations doubled and staff manual work reduced by 15 hours per week.",
       whyItWorks: ["Appetizing visual design", "Instant booking confirmation", "Mobile-optimized menu"],
    }
  },
  {
    id: "9",
    title: "Elite Gym Portal",
    description:
      "Gym management website with plan subscription, trainer profiles, and workout tracking.",
    image: "/gym1.png?v=2",
    images: ["/gym1.png?v=2", "/gym2.png?v=2", "/gym3.png?v=2", "/gym4.png?v=2"],
    category: "wellness",
    tags: ["Gym", "Fitness", "Workout"],
    featured: true,
    caseStudy: {
       problem: "Struggling to convert walk-ins into long-term members without a digital plan showcase.",
       solution: "Created a premium membership portal with interactive plan comparison and trainer bio pages.",
       result: "Increased membership sign-ups by 30% through focused lead-capture forms.",
       whyItWorks: ["High-energy aesthetic", "Compelling membership tiers", "Fast lead turnaround"],
    }
  },
 
  {
    id: "2",
    title: "Luxury Jewelry Shop",
    description:
      "Premium jewelry e-commerce website with elegant product display and secure checkout.",
    image: "/jwell1.png?v=2",
    images: ["/jwell1.png?v=2", "/jwell2.png?v=2", "/jwell3.png?v=2", "/jwell4.png?v=2"],
    category: "ecommerce",
    tags: ["Jewellery", "Luxury", "E-commerce"],
    featured: true,
    caseStudy: {
       problem: "The client needed a website that looked as expensive and trustworthy as their jewelry.",
       solution: "Implemented a 'gold & dark' theme with micro-animations and ultra-high-res zooming.",
       result: "Brand perception shifted significantly, leading to higher average order values.",
       whyItWorks: ["Premium typography", "Minimalist luxury UX", "Refined animations"],
    }
  },
    
  {
    id: "102",
    title: "SaaS Product Landing",
    description: "High-converting mordern landing page for a SaaS startup with dynamic pricing and feature highlights.",
    image: "/nex1.png?v=2",
    images: ["/nex1.png?v=2", "/nex2.png?v=2", "/nex3.png?v=2", "/nex4.png?v=2"],
    category: "saas",
    link: "https://triveda-technologies.vercel.app/",
    tags: ["SaaS", "Tech", "Landing Page"],
    featured: true,
  },

  {
    id: "1",
    title: "Premium Course Platform",
    description:
      "A complete education platform for selling and managing online courses with student dashboard.",
    image: "/course1.png",
    images: ["/course1.png", "/course2.png", "/course3.png", "/course4.png", "/course5.png", "/course6.png", "/course7.png"],
    category: "education",
    featured: true,
    tags: ["Courses", "Education", "Learning"],
    caseStudy: {
       problem: "Difficulty in managing multiple courses and handling student payments manually.",
       solution: "Built a custom LMS with automated enrollment and a personalized learning dashboard.",
       result: "Successfully scaled to 1000+ students without increasing administrative staff.",
       whyItWorks: ["Structured learning flow", "Progress tracking", "Secure payment gateway"],
    }
  },
  {
    id: "salon-premium",
    title: "Premium Unisex Salon",
    description:
      "A professional unisex salon website with service menu, expert stylists, and online appointment booking.",
    image: "/salon1.png?v=2",
    images: ["/salon1.png?v=2", "/salon2.png?v=2", "/salon3.png?v=2", "/salon4.png?v=2", "/salon5.png?v=2"],
    category: "wellness",
    tags: ["Salon", "Beauty", "Service"],
    featured: true,
    caseStudy: {
       problem: "Operating at 40% capacity because customers didn't know the full service list.",
       solution: "Designed a digital catalog and 'Book Now' WhatsApp integration for every service.",
       result: "Booking enquiries increased by 60% within 30 days of launch.",
       whyItWorks: ["Visual-heavy gallery", "Direct WhatsApp CTA", "Professional service cards"],
    }
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
    caseStudy: {
       problem: "The client lacked a digital footprint to showcase their luxury landscaping projects to high-end clients.",
       solution: "Built a visual-heavy portfolio with high-resolution galleries and project-specific breakdown modules.",
       result: "Secured 5 major landscaping contracts for luxury estates within months of launch.",
       whyItWorks: ["Premium visual story", "Trust-building project logs", "Fast mobile experience"],
    }
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
    caseStudy: {
       problem: "Manual reservation management led to overbooking and missed customer calls during peak hours.",
       solution: "Implemented a real-time table booking system and a high-contrast digital mobile menu.",
       result: "Staff manual work reduced by 15 hours per week and peak-hour efficiency improved by 40%.",
       whyItWorks: ["Instant confirmation logic", "Visual menu hierarchy", "Optimized for mobile footfall"],
    }
  },
  {
    id: "4",
    title: "Coaching Center Platform",
    description:
      "Educational website for coaching centers with course listings, fee management, and student login.",
    image: "/education1.png?v=2",
    images: ["/education1.png?v=2", "/education2.png?v=2", "/education3.png?v=2", "/education4.png?v=2", "/education5.png?v=2", "/education6.png?v=2", "/education7.png?v=2"],
    category: "education",
    // link: "https://education-system-webapp.vercel.app/",
    tags: ["Coaching", "Education", "Learning"],
    featured: true,
    caseStudy: {
       problem: "The center struggled with manual fee collection tracking and notifying students about new course schedules.",
       solution: "Developed a secure student-teacher portal with automated enrollment and a fee management dashboard.",
       result: "Administrative overhead reduced by 40%, allowing the staff to focus more on student success.",
       whyItWorks: ["Simplified fee management", "Student-focused UX", "Secure data handling"],
    }
  },
  {
    id: "tattoo-studio",
    title: "Premium Tattoo Studio",
    description: "A professional tattoo studio web application featuring a stunning portfolio, artist profiles, and a modern, edgy design.",
    image: "/tattoo1.png?v=2",
    images: ["/tattoo1.png?v=2", "/tattoo2.png?v=2", "/tattoo3.png?v=2", "/tattoo4.png?v=2", "/tattoo5.png?v=2"],
    category: "wellness",
    tags: ["Tattoo Studio", "Portfolio", "Appointment"],
    featured: false,
    caseStudy: {
       problem: "Artists were spending too much time showing portfolios in person instead of consulting.",
       solution: "Created a high-impact digital gallery with artist-specific collections and an edgy dark mode design.",
       result: "Increased digital portfolio sharing, leading to 3x more pre-consulted and high-intent clients.",
       whyItWorks: ["Edgy dark mode design", "High-contrast visuals", "Artist authority cues"],
    }
  },
 
  {
    id: "7",
    title: "Beauty Parlour Website",
    description:
      "Modern beauty parlour website with gallery, price list, and WhatsApp booking.",
    image: "/beauty1.png",
    images: ["/beauty1.png", "/beauty2.png", "/beauty3.png", "/beauty4.png", "/beauty5.png"],
    category: "wellness",
    tags: ["Beauty", "Parlour", "Service"],
    caseStudy: {
       problem: "Customers were confused about service pricing and booking procedures, leading to dropped leads.",
       solution: "Simplified the pricing table and added a high-converting 3-step digital booking guide.",
       result: "Increased monthly booking enquiries by 2.5x within just 30 days of launch.",
       whyItWorks: ["Clear CTA placement", "Trust elements", "Mobile optimized"],
    }
  },
  {
    id: "12",
    title: "Grand Hotel Website",
    description:
      "Elegant hotel website with room gallery, online booking, and local tour packages.",
    image: "/hotel1.png",
    images: ["/hotel1.png", "/hotel2.png", "/hotel3.png", "/hotel4.png", "/hotel5.png", "/hotel6.png", "/hotel7.png"],
    category: "hospitality",
    tags: ["Hotel", "Hospitality", "Booking"],
    caseStudy: {
       problem: "The hotel was losing revenue due to high commission fees paid to third-party booking platforms.",
       solution: "Built a premium direct booking experience with room showcase sliders and exclusive offers.",
       result: "Achieved a 40% share in direct bookings within 2 months, saving thousands in commissions.",
       whyItWorks: ["Premium room gallery", "Fast loading speeds", "Scarcity/Offer elements"],
    }
  },

   {
    id: "5",
    title: "Property Portal",
    description:
      "Property listing website for agents with advanced search, virtual tours, and lead generation.",
    image: "/demos/demo_realestate.png?v=2",
    category: "realestate",
    tags: ["Property", "Real Estate", "Listings"],
    featured: true,
    caseStudy: {
       problem: "The agent received numerous low-quality leads, wasting time for the sales team.",
       solution: "Implemented a multi-step property preference form with smart filtering for high-intent buyers.",
       result: "The conversion rate from lead to property viewing increased by 4x.",
       whyItWorks: ["Strategic form design", "Visual property filters", "Authority positioning"],
    }
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
  projectsCompleted: "25+", 
  happyClients: "15+",
  email: "akkylabs@outlook.com",
  phone: "+91 8709412383",
  whatsapp: "918709412383",
  location: "Bengaluru, India",
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
      "Akky Labs built a great EdTech platform for us. The student dashboard and interactive features are very easy to use. Our online courses are running much better now.",
    rating: 5,
    avatar: "GS",
  },
  {
    id: "3",
    name: "Rohit Singh",
    business: "AI Video Tech Startup",
    feedback:
      "The team really understood our complex AI video startup needs. They delivered a high-quality web app that is fast and very smooth. Highly satisfied with their work.",
    rating: 5,
    avatar: "RS",
  },
  {
    id: "4",
    name: "Kumar Shikhar",
    business: "Course Selling Platform",
    feedback:
      "Akky Labs built a great course platform for me. The separate dashboards for student learning and owner management work perfectly. I can easily upload courses and blogs now. Great work!",
    rating: 5,
    avatar: "KS",
    image: "/clients/shikhar.jpeg",
  },
  {
    id: "5",
    name: "Charchit Gupta",
    business: "Luxury Jewelry Brand",
    feedback:
      "Our jewelry web app looks really premium and elegant. The images look sharp and every detail is captured perfectly. It's exactly what our luxury brand needed.",
    rating: 5,
    avatar: "CG",
    image: "/clients/charchit.jpeg",
  },
  {
    id: "6",
    name: "Raushan Kumar",
    business: "Cafe & Lounge",
    feedback:
      "Cafe ke liye table reservation system mast banaya hai. Booking process ab ekdum auto ho gaya hai aur customers ko bhi use karne me maza aata hai. Kaam fast ho gaya!",
    rating: 5,
    avatar: "RK",
  },
  {
    id: "7",
    name: "Aditya Sharma",
    business: "Landscaping & Gardening Service",
    feedback:
      "Akky Labs made our landscaping site very quickly. Animations are smooth and the UI is very clean. Even the SEO part was handled well. Definitely worth the investment.",
    rating: 5,
    avatar: "AS",
    image: "/clients/adityasharma.jpeg",
  },
  {
    id: "8",
    name: "Suraj Singh",
    business: "Triveda Technologies",
    feedback:
      "They built a modern 3D website for our tech agency. The site is super fast and looks very professional. Our clients are really impressed with the new look.",
    rating: 5,
    avatar: "TT",
  },
  {
    id: "9",
    name: "Satish Keshari",
    business: "Premium Tattoo Studio",
    feedback:
      "Tattoo studio ke liye ekdum modern webapp banaya hai. Booking aur price estimator ka system bahut helpful hai. SEO ki wajah se log humein ab asaani se search kar paa rahe hain.",
    rating: 5,
    avatar: "SK",
    image: "/clients/satish.png",
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

export const templates = [
  {
    title: "Premium Salon Template",
    category: "Wellness",
    features: ["WhatsApp Booking", "Service Menu", "Expert Profiles", "Stunning Gallery"],
    image: "/salon1.png",
    delivery: "3 Days"
  },
  {
    title: "Elite Gym Template",
    category: "Fitness",
    features: ["Plan Comparison", "Trainer Bios", "Lead Management", "Mobile Optimized"],
    image: "/gym1.png",
    delivery: "4 Days"
  },
  {
    title: "Luxury Hotel Template",
    category: "Hospitality",
    features: ["Direct Booking UI", "Room Showcases", "Area Guide", "Trust Badging"],
    image: "/hotel1.png",
    delivery: "5 Days"
  },
  {
    title: "Professional Clinic Template",
    category: "Healthcare",
    features: ["Doctor Schedules", "Patient Lead Forms", "Service Details", "Google Maps"],
    image: "/hospi1.png",
    delivery: "3 Days"
  }
];

