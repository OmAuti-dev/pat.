"use client"
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Toaster } from "@/components/ui/toaster"
import { EmployeeList } from "./employeeList"
import { employees } from "../../mock/mockData"


type TaskProps = {
  
  _id: string;
  title: string;
  description: string;
  deadline: string;
  priority: string;
  
  onDelete: (id: string) => void; // Callback to handle deletion
};



const TaskCard: React.FC<TaskProps> = ({
  _id,
  title,
  description,
  deadline,
  priority,
  onDelete,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleAssign = (employeeId: number) => {
    // Here you would typically update your state or make an API call
    console.log(`Task assigned to employee with ID: ${employeeId}`)
    // Optionally close the modal after assignment
    setIsOpen(false)
  }
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <p>
            <strong>Deadline:</strong> {new Date(deadline).toLocaleDateString()}
          </p>
          <p>
            <strong>Priority:</strong> {priority}
          </p>
          <p>
            <strong>Status:</strong> {priority}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Assign</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>Employee Availability</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <EmployeeList employees={employees} onAssign={handleAssign} />
          </div>
        </DialogContent>
      </Dialog>
        <Button variant="destructive" onClick={() => onDelete(_id)}>
          Delete
        </Button>
      </CardFooter>
      <Toaster />
    </Card>
  );
};

export default TaskCard;
