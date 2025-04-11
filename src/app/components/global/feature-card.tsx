import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm p-6 hover:shadow-md hover:shadow-primary/5 transition-all duration-300">
      <div className="space-y-4">
        <div className="p-2 w-fit rounded-lg bg-primary/10">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="absolute inset-0 border-2 border-primary/0 rounded-lg group-hover:border-primary/10 transition-all duration-300"></div>
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary/40 to-primary group-hover:w-full transition-all duration-700"></div>
    </div>
  )
}

