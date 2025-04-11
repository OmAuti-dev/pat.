import { CheckCircle, Clock, AlignJustify, RotateCw } from "lucide-react"

export function StatusBadge({ status }: { status: "completed" | "review" | "queue" | "progress" }) {
  switch (status) {
    case "completed":
      return (
        <div className="flex items-center gap-1 text-sm">
          <span className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white">
            <CheckCircle className="w-3 h-3" />
          </span>
          <span>Completed</span>
        </div>
      )
    case "review":
      return (
        <div className="flex items-center gap-1 text-sm">
          <span className="w-5 h-5 rounded-full bg-pink-500 flex items-center justify-center text-white">
            <Clock className="w-3 h-3" />
          </span>
          <span>On Review</span>
        </div>
      )
    case "queue":
      return (
        <div className="flex items-center gap-1 text-sm">
          <span className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center text-white">
            <AlignJustify className="w-3 h-3" />
          </span>
          <span>In Queue</span>
        </div>
      )
    case "progress":
      return (
        <div className="flex items-center gap-1 text-sm">
          <span className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white">
            <RotateCw className="w-3 h-3" />
          </span>
          <span>In Progress</span>
        </div>
      )
  }
}

