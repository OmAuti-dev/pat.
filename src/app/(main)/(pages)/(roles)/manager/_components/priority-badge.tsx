export function PriorityBadge({ priority }: { priority: "high" | "mid" | "low" }) {
    switch (priority) {
      case "high":
        return <span className="px-3 py-1 rounded-full bg-red-500 text-white text-xs font-medium">High</span>
      case "mid":
        return <span className="px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-medium">Mid</span>
      case "low":
        return <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-medium">Low</span>
    }
  }
  
  