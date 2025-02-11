import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Briefcase } from "lucide-react"

const projectsData = [
  { id: 1, name: "Website Redesign", progress: 65, color: "bg-blue-500" },
  { id: 2, name: "Mobile App Development", progress: 40, color: "bg-green-500" },
  { id: 3, name: "Marketing Campaign", progress: 90, color: "bg-purple-500" },
  { id: 4, name: "E-commerce Platform", progress: 25, color: "bg-yellow-500" },
  { id: 5, name: "CRM Integration", progress: 50, color: "bg-pink-500" },
]

export default function ProjectProgress() {
  return (
    <Card className="h-[400px] overflow-auto">
      <CardHeader className="p-4">
        <CardTitle className="flex items-center">
          <Briefcase className="mr-2 h-4 w-4" />
          Project Progress
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <ul className="space-y-4">
          {projectsData.map((project) => (
            <li key={project.id} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">{project.name}</span>
                <span className="text-sm text-muted-foreground">{project.progress}%</span>
              </div>
              <Progress value={project.progress} className={`h-2 ${project.color}`} />
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

