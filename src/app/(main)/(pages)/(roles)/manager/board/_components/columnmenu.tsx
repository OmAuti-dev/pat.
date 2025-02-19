"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Trash, CloudyIcon as Clear } from 'lucide-react'

interface ColumnMenuProps {
  onClearAll: () => void
  onRemoveColumn: () => void
}

export function ColumnMenu({ onClearAll, onRemoveColumn }: ColumnMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40 bg-zinc-900 border-zinc-800">
        <DropdownMenuItem onClick={onClearAll} className="text-zinc-400 hover:text-white hover:bg-zinc-800">
          <Clear className="h-4 w-4 mr-2" />
          Clear All
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onRemoveColumn} className="text-red-400 hover:text-red-300 hover:bg-zinc-800">
          <Trash className="h-4 w-4 mr-2" />
          Remove Column
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}