import { LucideIcon, ZapIcon, TargetIcon, TrendingUpIcon } from "lucide-react";
import work5 from "../assets/work5.jpg";
import work4 from "../assets/Work4.png";
import work6 from "../assets/work6.png";
import work7 from "../assets/work7.png";

export interface ProjectMetric {
  icon: LucideIcon;
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  metrics: ProjectMetric[];
  liveUrl: string;
  codeUrl: string;
  image: string;
}

export const featuredProjects: Project[] = [
  {
    id: "Enterprise Managment Sytem",
    title: "Enterprise Managment Sytem- Hillside Dams",
    subtitle: "Hillside Dams",
    description:
      "A  demo enterprise management system built to support operational workflows at Hillside Dams, including membership management, financial transactions, reporting, and administration.The platform was designed with scalability, reliability, and maintainability in mind, following enterprise architecture patterns and production best practices.",
    tech: [ "Angular","TypeScript","Express","MySQL"],
    metrics: [
      {
        icon: ZapIcon,
        label: "Login Credentials",
        value: "username :J.Simanga password #pass123",
      },
      {
        icon: TargetIcon,
        label: "Design",
        value: "Instant calculations with progressive form validation",
      },
      {
        icon: TrendingUpIcon,
        label: "States",
        value: "Robust handling",
      },
    ],
    liveUrl: "https://hillisde-dams-frontend.vercel.app/auth/login",
    codeUrl: "https://github.com/jaybee21/hillisde_dams_frontend",
    image: work4,
  },

  {
    id: "gruma-chatbot",
    title: "WhatsApp Chatbot",
    subtitle: "Global Risk Underwritting Managers",
    description:
      "Built a WhatsApp-based system that allows users to submit insurance claims directly via chat and receive email notifications as their claim status changes (e.g. pending, approved, rejected).Included an Angular admin panel for managing claims, updating statuses, and monitoring submissions.",
    tech: ["Angular", "Express", "MySQL", "META-API"],
    metrics: [
      {
        icon: ZapIcon,
        label: "Status",
        value: "In Production",
      },
      {
        icon: TargetIcon,
        label: "Focus",
        value: "WhatsApp Chatbot",
      },
      {
        icon: TrendingUpIcon,
        label: "Performance",
        value: " 99% Uptime",
      },
    ],
    liveUrl: "https://wa.link/r5239j",
    codeUrl: "",
    image: work5,
  },
  {
    id: "healthcare",
    title: "Healthcare Appointment & Patient Management System",
    subtitle: "Patient Managment System",
    description:
      "A modern healthcare patient management platform that enables patients to register, book, and manage doctor appointments, with a dedicated admin interface for scheduling and operational control.The system was designed with scalability, usability, and reliability in mind, supporting real-world healthcare workflows and automated communication",
    tech: ["Next.js", "React", "TailwindCSS", "Vercel","TypeScript"],
    metrics: [
      {
        icon: ZapIcon,
        label: "Backend Integration",
        value: "Next.js API routes with Appwrite services",
      },
      {
        icon: TargetIcon,
        label: "Notifications",
        value: "Twilio SMS & transactional email workflows",
      },
      {
        icon: TrendingUpIcon,
        label: "Performance",
        value: "Optimized data fetching & server-side rendering",
      },
    ],
    liveUrl: "https://jhealthcare.vercel.app/",
    codeUrl: "https://github.com/jaybee21/jhealthcare",
    image: work6,
  },

  {
    id: "Car Rental",
    title: "Car Rental Website",
    subtitle: "Rental Site",
    description:
      "A modern car showcase platform built with Next.js, designed to present a large catalogue of vehicles with advanced filtering, pagination, and SEO-friendly server-side rendering. The application focuses on performance, discoverability, and a smooth browsing experience across devices.",
    tech: ["React", "TailwindCSS", "JavaScript","TypeScript"],
    metrics: [
      {
        icon: ZapIcon,
        label: "Rendering Strategy",
        value: "Server-Side Rendering (Next.js)",
      },
      {
        icon: TargetIcon,
        label: "Data Exploration",
        value: "Advanced filtering & pagination from external APIs",
      },
      {
        icon: TrendingUpIcon,
        label: "SEO & Performance",
        value: "Optimized metadata & responsive design",
      },
    ],
    liveUrl: "https://jrentals.vercel.app/",
    codeUrl: "https://github.com/jaybee21/jrentals",
    image: work7,
  },
];
