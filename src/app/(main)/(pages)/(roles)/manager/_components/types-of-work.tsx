import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function TypesOfWork() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Types of work</CardTitle>
        <p className="text-sm text-muted-foreground">
          Get a breakdown of issues by their types.{" "}
          <a href="#" className="text-primary underline">
            View all items
          </a>
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm font-medium">Task (2)</span>
            </div>
            <span className="text-sm text-muted-foreground">63%</span>
          </div>
          <Progress value={63} />
        </div>
        <div>
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm font-medium">Sub-task (2)</span>
            </div>
            <span className="text-sm text-muted-foreground">37%</span>
          </div>
          <Progress value={37} />
        </div>
      </CardContent>
    </Card>
  )
}

