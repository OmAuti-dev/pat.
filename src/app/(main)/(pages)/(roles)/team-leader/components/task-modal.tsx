import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import type { Task } from "@/lib/types"

interface TaskModalProps {
  task: Task
  onClose: () => void
}

const TaskModal = ({ task, onClose }: TaskModalProps) => {
  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "bg-red-500"
      case "medium":
        return "bg-yellow-500"
      case "low":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <Dialog open={!!task} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{task.title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-2">
          <p>
            <strong>Deadline:</strong> {task.deadline.toLocaleDateString()}
          </p>
          <p>
            <strong>Assigned to:</strong> {task.assignee}
          </p>
          <div className="flex items-center">
            <strong className="mr-2">Priority:</strong>
            <Badge className={`${getPriorityColor(task.priority)} text-white`}>{task.priority}</Badge>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default TaskModal

