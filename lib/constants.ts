import { DocumentIcon } from "@heroicons/react/24/outline";
import {
  AtomIcon,
  Code,
  CodeIcon,
  CogIcon,
  ImageIcon,
  LayoutDashboard,
  LayoutDashboardIcon,
  Lightbulb,
  LightbulbIcon,
  MessageSquare,
  MusicIcon,
  SettingsIcon,
  VideoIcon,
  ScrollText,
  MicIcon,
  BrainCircuit,
} from "lucide-react";

export const ideation = {
  label: "Ideation",
  icon: LightbulbIcon,
  description: "Ideate your next hackathon idea",
  href: "/ideation",
  color: "text-yellow-500",
  bgColor: "bg-yellow-500/10",
};

export const dashboard = {
  label: "Dashboard",
  icon: LayoutDashboardIcon,
  description: "Your dashboard for managing everything",
  href: "/dashboard",
  color: "text-sky-500",
  bgColor: "bg-sky-500/10",
};
// Features for Fresh Grad College Students
export const justChat = {
  label: "Let's Chat",
  icon: MessageSquare,
  description: "Feeling lost or uncertain about your career goals? Let's chat about what you want to do!",
  href: "/justChat",
  color: "text-purple-500",
  bgColor: "bg-purple-500/10",
};

export const learningPath = {
  label: "Learning Paths",
  icon: BrainCircuit,
  description: "Explore personalized learning paths to acquire the skills you need for your dream career.",
  href: "/learning",
  color: "text-pink-500",
  bgColor: "bg-pink-500/10",
};

export const resumeReview = {
  label: "Resume Review",
  icon: DocumentIcon,
  description: "Get your resume optimized with AI-powered feedback and increase your chances of getting noticed.",
  href: "/resumeReview",
  color: "text-green-500",
  bgColor: "bg-green-500/10",
};

export const interviewPrep = {
  label: "Interview Prep",
  icon: MicIcon,
  description: "Sharpen your interview skills through AI-powered mock interviews and gain self-confidence.",
  href: "/interviewPrep",
  color: "text-orange-500",
  bgColor: "bg-orange-500/10",
};

export const settings = {
  label: "Settings",
  icon: CogIcon,
  description: "Configure your app settings",
  href: "/settings",
  color: "text-white-500",
  bgColor: "bg-black-500/10",
};

export const routes = [
  dashboard,
  justChat,
  learningPath,
  resumeReview,
  interviewPrep,
  // ideation,
  // researchGeneration,
  // imageGeneration,
  // videoGeneration,
  // musicGeneration,
  // codeGeneration,
  settings,
];
