"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Circle, Plus, Pencil } from "lucide-react"
import { TaskModal } from "./taskmodal"
import { ColumnMenu } from "./columnmenu"

interface Task {
  id: string
  title: string
  description: string
  points: string[]
  attachments: File[]
  status: string
}

interface Column {
  id: string
  title: string
  color: string
}

export default function Kanbanboard() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [columns, setColumns] = useState<Column[]>([
    { id: "todo", title: "Todo", color: "text-green-500" },
    { id: "inProgress", title: "In Progress", color: "text-yellow-500" },
    { id: "done", title: "Done", color: "text-purple-500" },
  ])
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const [editingTask, setEditingTask] = useState<Task | null>(null)
  const [editingColumn, setEditingColumn] = useState<string | null>(null)

  const handleDragStart = (e: React.DragEvent, taskId: string) => {
    e.dataTransfer.setData("taskId", taskId)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent, status: string) => {
    e.preventDefault()
    const taskId = e.dataTransfer.getData("taskId")
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, status } : task)))
  }

  const addTask = (
    columnId: string,
    data: { title: string; description: string; points: string[]; attachments: File[] },
    createMore: boolean,
  ) => {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(36).substr(2, 9),
        status: columnId,
        ...data,
      },
    ])
    if (!createMore) {
      setActiveModal(null)
    }
  }

  const updateTask = (
    taskId: string,
    data: { title: string; description: string; points: string[]; attachments: File[] },
  ) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, ...data } : task)))
    setEditingTask(null)
  }

  const clearColumn = (columnId: string) => {
    setTasks(tasks.filter((task) => task.status !== columnId))
  }

  const removeColumn = (columnId: string) => {
    setColumns(columns.filter((col) => col.id !== columnId))
    setTasks(tasks.filter((task) => task.status !== columnId))
  }

  const addColumn = () => {
    const newColumn = {
      id: `column-${columns.length + 1}`,
      title: `Column ${columns.length + 1}`,
      color: "text-blue-500",
    }
    setColumns([...columns, newColumn])
  }

  const updateColumnTitle = (columnId: string, newTitle: string) => {
    setColumns(columns.map((col) => (col.id === columnId ? { ...col, title: newTitle } : col)))
    setEditingColumn(null)
  }

  return (
    <div className="min-h-screen  p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-end mb-4">
          <Button onClick={addColumn} className="bg-white hover:bg-gray-300">
            <Plus className="h-4 w-4 mr-2" />
            Add Column
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {columns.map((column) => {
            const columnTasks = tasks.filter((task) => task.status === column.id)

            return (
              <Card key={column.id} className="bg-zinc-950 border-zinc-800 text-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                  <div className="flex items-center gap-2">
                    <Circle className={`h-4 w-4 ${column.color}`} fill="currentColor" />
                    {editingColumn === column.id ? (
                      <Input
                        autoFocus
                        defaultValue={column.title}
                        className="h-7 w-[150px] bg-zinc-900 border-zinc-800"
                        onBlur={(e) => updateColumnTitle(column.id, e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            updateColumnTitle(column.id, e.currentTarget.value)
                          }
                        }}
                      />
                    ) : (
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-sm font-medium">
                          {column.title}
                          <span className="ml-2 text-zinc-400">{columnTasks.length}/5</span>
                        </CardTitle>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-4 w-4 hover:bg-zinc-800"
                          onClick={() => setEditingColumn(column.id)}
                        >
                          <Pencil className="h-3 w-3" />
                        </Button>
                      </div>
                    )}
                  </div>
                  <ColumnMenu
                    onClearAll={() => clearColumn(column.id)}
                    onRemoveColumn={() => removeColumn(column.id)}
                  />
                </CardHeader>
                <CardContent
                  className="min-h-[400px]"
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, column.id)}
                >
                  {columnTasks.map((task) => (
                    <div
                      key={task.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, task.id)}
                      className="mb-2 rounded-md bg-zinc-800 p-3 cursor-move hover:bg-zinc-700 transition-colors"
                      onClick={() => setEditingTask(task)}
                    >
                      <div className="font-medium">{task.title}</div>
                      {task.description && (
                        <div
                          className="mt-2 text-sm text-zinc-400"
                          dangerouslySetInnerHTML={{
                            __html: task.description
                              .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                              .replace(/_(.*?)_/g, "<em>$1</em>"),
                          }}
                        />
                      )}
                      {task.points.length > 0 && (
                        <div className="mt-2 space-y-1">
                          {task.points.map((point, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-zinc-400">
                              <span>•</span>
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      {task.attachments.length > 0 && (
                        <div className="mt-2 flex gap-2">
                          {task.attachments.map((file, index) => (
                            <div key={index} className="px-2 py-1 bg-zinc-700 rounded text-xs text-zinc-300">
                              {file.name}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-zinc-400 hover:text-white"
                    onClick={() => setActiveModal(column.id)}
                  >
                    + Add item
                  </Button>
                </CardFooter>
                <TaskModal
                  open={activeModal === column.id}
                  onOpenChange={(open) => setActiveModal(open ? column.id : null)}
                  onSubmit={(data, createMore) => addTask(column.id, data, createMore)}
                  columnName={column.title}
                />
                {editingTask && editingTask.status === column.id && (
                  <TaskModal
                    open={true}
                    mode="edit"
                    onOpenChange={() => setEditingTask(null)}
                    onSubmit={(data) => updateTask(editingTask.id, data)}
                    columnName={column.title}
                    initialData={editingTask}
                  />
                )}
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}

