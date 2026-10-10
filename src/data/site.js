// Central data source for Bendalo Technology & Innovation.
// Update this file to add/edit projects, services, or values — no component edits needed.

import {
  FiMonitor,
  FiCode,
  FiSmartphone,
  FiLayers,
  FiZap,
  FiAward,
  FiShield,
  FiUsers,
  FiLink,
  FiTrendingUp,
} from "react-icons/fi";

export const navigation = [
  ["Home", "#home"],
  ["About Us", "#about"],
  ["Services", "#services"],
  ["Our Work", "#work"],
  ["Request a Quote", "#contact"],
];

export const projects = [
  {
    number: "01",
    name: "R573 Platform",
    category: "Platform · Web Application",
    description:
      "A digital platform connecting car wash services, food, events and customer experiences.",
    image: "/images/projects/r573 (1).png",
    url: "https://mthokozisi-mtshweni.github.io/r573-car-wash/",
    live: true,
  },
  {
    number: "02",
    name: "Etjanini",
    category: "Restaurant · Digital Experience",
    description:
      "A modern digital experience for a restaurant, wedding and events venue.",
    image: "/images/projects/etjanini.jpg.png",
    url: "https://etjanini.vercel.app/",
    live: true,
  },
  {
    number: "03",
    name: "Vhutec Med",
    category: "Healthcare · Management System",
    description:
      "A hospital appointment and patient queue management platform.",
    image: "/images/projects/Vhutec.png",
    url: null,
    live: false,
  },
  {
    number: "04",
    name: "Speak & Grow AI",
    category: "AI · Education Platform",
    description:
      "An AI-powered platform for English communication and personal development.",
    image: "/images/projects/speak-grow.png",
    url: "https://speak-and-grow-ai-3mt1-pi.vercel.app/",
    live: true,
  },
  {
    number: "05",
    name: "Taste Path",
    category: "Restaurant · Digital Experience",
    description:
      "A digital platform for exploring and discovering food experiences.",
    image: "/images/projects/Rastaurant.png",
    url: "https://taste-path-app.lovable.app/",
    live: true,
  },
];

export const services = [
  {
    number: "01",
    title: "Website Design & Development",
    description:
      "Professional, responsive websites that help your business build trust and stand out online.",
    icon: FiMonitor,
  },
  {
    number: "02",
    title: "Custom Software Development",
    description:
      "Custom systems that simplify everyday tasks and solve real business problems.",
    icon: FiCode,
  },
  {
    number: "03",
    title: "Web Applications & Business Systems",
    description:
      "Digital platforms and applications designed around your business and its users.",
    icon: FiSmartphone,
  },
  {
    number: "04",
    title: "E-Commerce Solutions",
    description:
      "Online shopping experiences that make it easier for customers to buy your products.",
    icon: FiLayers,
  },
];

export const values = [
  {
    title: "Innovation",
    description: "We look for better ways to solve real problems.",
    icon: FiZap,
  },
  {
    title: "Quality",
    description: "We build carefully and test thoroughly.",
    icon: FiAward,
  },
  {
    title: "Integrity",
    description: "We are honest about what is possible.",
    icon: FiShield,
  },
  {
    title: "Customer Focus",
    description: "We design around your goals, not ours.",
    icon: FiUsers,
  },
  {
    title: "Collaboration",
    description: "We work with you, not just for you.",
    icon: FiLink,
  },
  {
    title: "Continuous Improvement",
    description: "We keep learning and refining our craft.",
    icon: FiTrendingUp,
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "We learn about your business, goals and requirements.",
  },
  {
    number: "02",
    title: "Plan & Design",
    description: "We plan the structure and shape the user experience.",
  },
  {
    number: "03",
    title: "Build",
    description: "We develop and test a solution around your needs.",
  },
  {
    number: "04",
    title: "Launch",
    description: "We prepare your digital product for real-world use.",
  },
];

// ⚠️ REPLACE PLACEHOLDER VALUES BELOW BEFORE GOING LIVE
export const contact = {
  email: "mthosbudah03@gmail.com",
  phone: "+27 62 411 2278",           // ← your real phone
  phoneDisplay: "+27 62 411 2278",     // ← how it should look on screen
  whatsapp: "+27 82 330 8964",         // ← your real WhatsApp
  whatsappLink: "https://wa.me/27823305964", // ← digits only, no +
  location: "Emalahleni, Mpumalanga, South Africa",
};

export const socials = [
  // Replace each "#" with your real profile URL
  {
    name: "WhatsApp",
    url: "https://wa.me/27823305964", // ← same as whatsappLink above
  },
  { name: "TikTok", url: "https://www.tiktok.com/@bendalotech" },
  { name: "Instagram", url: "#" },
  { name: "LinkedIn", url: "#" },
];

export const serviceOptions = [
  "Website Design & Development",
  "Custom Software Development",
  "Web Applications & Business Systems",
  "E-Commerce Solutions",
  "Not sure yet — need advice",
];

export const budgetOptions = [
  "Under R5,000",
  "R5,000 – R15,000",
  "R15,000 – R40,000",
  "R40,000 – R100,000",
  "R100,000+",
  "Not sure yet",
];