"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Bold, Italic, List, LinkIcon, Undo, Redo, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

interface TaskModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: (
    data: {
      title: string
      description: string
      points: string[]
      attachments: File[]
    },
    createMore: boolean,
  ) => void
  columnName: string
  initialData?: {
    title: string
    description: string
    points: string[]
    attachments: File[]
  }
  mode?: "create" | "edit"
}

export function TaskModal({ open, onOpenChange, onSubmit, columnName, initialData, mode = "create" }: TaskModalProps) {
  const [description, setDescription] = useState(initialData?.description || "")
  const [points, setPoints] = useState<string[]>(initialData?.points || [""])
  const [attachments, setAttachments] = useState<File[]>(initialData?.attachments || [])
  const [createMore, setCreateMore] = useState(false)
  const [selectionRange, setSelectionRange] = useState<{ start: number; end: number } | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleTextSelect = () => {
    const textarea = document.getElementById("description") as HTMLTextAreaElement
    if (textarea) {
      setSelectionRange({
        start: textarea.selectionStart,
        end: textarea.selectionEnd,
      })
    }
  }

  const applyFormat = (format: string) => {
    if (!selectionRange) return

    const text = description
    const prefix = format === "bold" ? "**" : "_"
    const newText =
      text.substring(0, selectionRange.start) +
      `${prefix}${text.substring(selectionRange.start, selectionRange.end)}${prefix}` +
      text.substring(selectionRange.end)

    setDescription(newText)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    // Filter out empty points
    const filteredPoints = points.filter((point) => point.trim() !== "")

    onSubmit(
      {
        title: formData.get("title") as string,
        description: description,
        points: filteredPoints,
        attachments,
      },
      createMore,
    )

    if (!createMore) {
      form.reset()
      setDescription("")
      setPoints([""])
      setAttachments([])
    } else {
      // Only reset title if creating more
      const titleInput = form.elements.namedItem("title") as HTMLInputElement
      titleInput.value = ""
      titleInput.focus()
    }
  }

  const handleAddPoint = () => {
    setPoints([...points, ""])
  }

  const handlePointChange = (index: number, value: string) => {
    const newPoints = [...points]
    newPoints[index] = value
    setPoints(newPoints)
  }

  const handleRemovePoint = (index: number) => {
    setPoints(points.filter((_, i) => i !== index))
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachments([...attachments, ...Array.from(e.target.files)])
    }
  }

  const handleRemoveFile = (index: number) => {
    setAttachments(attachments.filter((_, i) => i !== index))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-zinc-950 border-zinc-800 text-white">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>
              {mode === "create" ? "Create new task in" : "Edit task in"} {columnName}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="title">
                Add a title <span className="text-red-500">*</span>
              </Label>
              <Input
                id="title"
                name="title"
                required
                className="bg-zinc-900 border-zinc-800"
                defaultValue={initialData?.title}
              />
            </div>

            <div className="space-y-2">
              <Label>Add a description</Label>
              <div className="flex items-center gap-1 p-2 bg-zinc-900 border border-zinc-800 rounded-t-md">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => applyFormat("bold")}
                >
                  <Bold className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => applyFormat("italic")}
                >
                  <Italic className="h-4 w-4" />
                </Button>
                <div className="w-px h-4 bg-zinc-800 mx-1" />
                <Button type="button" variant="ghost" size="icon" className="h-8 w-8">
                  <List className="h-4 w-4" />
                </Button>
                <Button type="button" variant="ghost" size="icon" className="h-8 w-8">
                  <LinkIcon className="h-4 w-4" />
                </Button>
                <div className="flex-1" />
                <Button type="button" variant="ghost" size="icon" className="h-8 w-8">
                  <Undo className="h-4 w-4" />
                </Button>
                <Button type="button" variant="ghost" size="icon" className="h-8 w-8">
                  <Redo className="h-4 w-4" />
                </Button>
              </div>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                onSelect={handleTextSelect}
                placeholder="Type your description here..."
                className="min-h-[100px] bg-zinc-900 border-zinc-800 rounded-t-none"
              />
            </div>

            <div className="space-y-2">
              <Label>Points</Label>
              {points.map((point, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={point}
                    onChange={(e) => handlePointChange(index, e.target.value)}
                    placeholder="Add a point"
                    className="bg-zinc-900 border-zinc-800"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => handleRemovePoint(index)}
                    className="hover:bg-red-900/50 hover:text-red-400"
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={handleAddPoint}
                className="w-full bg-zinc-900 border-zinc-800 hover:bg-zinc-800"
              >
                Add Point
              </Button>
            </div>

            <div className="space-y-2">
              <Label>Attachments</Label>
              <div className="space-y-2">
                {attachments.map((file, index) => (
                  <div key={index} className="flex items-center gap-2 bg-zinc-900 p-2 rounded-md">
                    <span className="flex-1 truncate">{file.name}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => handleRemoveFile(index)}
                      className="hover:bg-red-900/50 hover:text-red-400"
                    >
                      Remove
                    </Button>
                  </div>
                ))}
                <input type="file" ref={fileInputRef} onChange={handleFileUpload} className="hidden" multiple />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full bg-zinc-900 border-zinc-800 hover:bg-zinc-800"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Files
                </Button>
              </div>
            </div>
          </div>
          <DialogFooter className="gap-2">
            {mode === "create" && (
              <div className="flex items-center gap-2">
                <Checkbox
                  id="create-more"
                  checked={createMore}
                  onCheckedChange={(checked) => setCreateMore(checked as boolean)}
                  className="border-zinc-700"
                />
                <Label htmlFor="create-more">Create more</Label>
              </div>
            )}
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800"
              >
                Cancel
              </Button>
              <Button type="submit" className="bg-green-600 hover:bg-green-700">
                {mode === "create" ? "Create" : "Save"}
              </Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

