import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, Clock, ArrowUp } from "lucide-react"
import { TaskData } from "@/app/utils"
import { createTask } from "@/action/createTask"
import toast from "react-hot-toast"


interface CreateTaskFormProps {
  onSuccess: () => void
}

const priorityOptions = [
  { value: "low", label: "Low", icon: Clock, color: "text-blue-500" },
  { value: "medium", label: "Medium", icon: ArrowUp, color: "text-yellow-500" },
  { value: "high", label: "High", icon: AlertCircle, color: "text-red-500" },
]

const CreateTaskForm: React.FC<CreateTaskFormProps> = ({ onSuccess }) => {
 


  const [task, setTask] = useState<TaskData>({
    title: "",
    description: "",
    category:"",
    skillset: [],
    deadline: "",
    priority: "medium",
    status: "todo",
    assignedUsers: [],
    date: new Date().toISOString(),
  });

  const handleChange = (name: string, value: string) => {
    setTask((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const result = await createTask(task)
      
      if (result?.success) {
        toast.success("Task created successfully!")
        onSuccess()
      } else {
        const errorMessage = result?.message || "Failed to create task"
        toast.error("Error creating task")
      }
    } catch (error) {
      
      toast.error("An unexpected error occurred.")
    }
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()
    // try {
    //   const result = await createTask(task, getToken)
      
    //   if (result?.ok) {
    //     toast.success("Task created successfully!", {
    //       description: task.title,
    //     })
    //     onSuccess()
    //   } else {
    //     const errorMessage = result?.message || "Failed to create task"
    //     toast.error("Error creating task", {
    //       description: errorMessage,
    //     })
    //   }
    // } catch (error) {
  //     console.error("Error:", error)
  //     toast.error("An unexpected error occurred.")
  //   }

  // }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={task.title}
          onChange={(e) => handleChange("title", e.target.value)}
          placeholder="Task title"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={task.description}
          onChange={(e) => handleChange("description", e.target.value)}
          placeholder="Task description"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="title">Category</Label>
        <Input
          id="title"
          value={task.category}
          onChange={(e) => handleChange("category", e.target.value)}
          placeholder="Task category"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="deadline">Deadline</Label>
        <Input
          id="deadline"
          type="date"
          value={task.deadline}
          onChange={(e) => handleChange("deadline", e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="priority">Priority</Label>
        <Select value={task.priority} onValueChange={(value) => handleChange("priority", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select priority" />
          </SelectTrigger>
          <SelectContent>
            {priorityOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                <div className="flex items-center">
                  <option.icon className={`mr-2 h-4 w-4 ${option.color}`} />
                  {option.label}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="skillset">Skillset</Label>
        <Input
          id="skillset"
          value={task.skillset}
          onChange={(e) => handleChange("skillset", e.target.value)}
          placeholder="e.g., nodejs, sql"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="status">Status</Label>
        <Select value={task.status} onValueChange={(value) => handleChange("status", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todo">Todo</SelectItem>
            <SelectItem value="inProgress">In Progress</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" className="w-full">
        Create Task
      </Button>
      
    </form>
  )
}

export default CreateTaskForm

