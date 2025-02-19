"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import CreateTaskForm from "./createtask"

export default function CreateTaskButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Card className="  justify-center items-center">
        
        
          <Button onClick={() => setIsOpen(true)} size="lg">
            Create Task
          </Button>
        
      </Card>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create New Task</DialogTitle>
          </DialogHeader>
          <CreateTaskForm onSuccess={() => setIsOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  )
}

