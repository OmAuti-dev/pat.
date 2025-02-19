"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Zap } from "lucide-react";

// Define the Task interface directly in this file if not importing it
interface Task {
  _id: string;
  title: string;
  description: string;
  skillset: string[];
  deadline: string;
  priority: string;
  status: string;
  category: string;
  assignedUsers: string[];
  date: string;
}

interface TaskModalProps {
  task?: Task; // Make task optional with ?
}

export default function TaskModal({ task }: TaskModalProps) {
  // Early return with placeholder UI if no task is provided
  if (!task) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary" >View</Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl">
        <DialogTitle>No data</DialogTitle>
          <div className="p-4 text-center">
            <p>Task data not available</p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View</Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <div className="space-y-6">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <DialogTitle className="text-xl">{task.title}</DialogTitle>
                <Badge variant="default" className="bg-emerald-600">
                  {task.status}
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-1" />
                  Add
                </Button>
                <Button variant="outline" size="sm">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 mr-1" fill="currentColor">
                    <path d="M3 3h6v6H3V3zm12 0h6v6h-6V3zm-12 12h6v6H3v-6zm12 0h6v6h-6v-6z" />
                  </svg>
                  Apps
                </Button>
              </div>
            </div>
          </DialogHeader>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Description</h3>
              <Textarea
                placeholder="Add a description..."
                className="min-h-[100px] text-sm"
                value={task.description}
                readOnly
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold mb-4">Details</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-3 items-center gap-4">
                  <span className="text-sm text-muted-foreground">Assignee</span>
                  <div className="col-span-2 flex items-center gap-2">
                    <Avatar className="h-6 w-6 bg-cyan-500">
                      <span className="text-xs">OM</span>
                    </Avatar>
                    <span className="text-sm">OM</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 items-center gap-4">
                  <span className="text-sm text-muted-foreground">Priority</span>
                  <div className="col-span-2 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-red-500" />
                    <span className="text-sm">{task.priority}</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 items-center gap-4">
                  <span className="text-sm text-muted-foreground">Labels</span>
                  <div className="col-span-2 flex flex-wrap gap-1">
                    {task.skillset.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 items-center gap-4">
                  <span className="text-sm text-muted-foreground">Due date</span>
                  <span className="col-span-2 text-sm">{task.deadline}</span>
                </div>

                <div className="grid grid-cols-3 items-center gap-4">
                  <span className="text-sm text-muted-foreground">Category</span>
                  <span className="col-span-2 text-sm">{task.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}