import { Zap, Cog, Code, Layers, LineChart, Command } from "lucide-react";
import FeatureCard from "./feature-card";

const features = [
  {
    icon: <Zap className="h-10 w-10 text-primary" />, 
    title: "Automated Workflows", 
    description: "Create custom workflows that automate repetitive tasks and processes across your projects."
  },
  {
    icon: <Cog className="h-10 w-10 text-primary" />, 
    title: "Intelligent Scheduling", 
    description: "AI-powered scheduling that optimizes resource allocation and project timelines."
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />, 
    title: "Code Integration", 
    description: "Seamlessly integrate with your development tools and repositories for end-to-end automation."
  },
  {
    icon: <Layers className="h-10 w-10 text-primary" />, 
    title: "Template Library", 
    description: "Access hundreds of pre-built templates to quickly set up common project types and workflows."
  },
  {
    icon: <LineChart className="h-10 w-10 text-primary" />, 
    title: "Advanced Analytics", 
    description: "Gain insights into project performance with comprehensive reporting and analytics."
  },
  {
    icon: <Command className="h-10 w-10 text-primary" />, 
    title: "Command Center", 
    description: "Centralized dashboard to monitor and control all your projects from a single interface."
  }
];

export default function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
      {features.map((feature, index) => (
        <FeatureCard
          key={index} 
          icon={feature.icon} 
          title={feature.title} 
          description={feature.description} 
        />
      ))}
    </div>
  );
}
