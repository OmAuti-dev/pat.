export function ProgressBar({
    progress,
    color = "bg-blue-500",
  }: {
    progress: number
    color?: string
  }) {
    return (
      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
        <div className={`h-full ${color} rounded-full`} style={{ width: `${progress}%` }} />
      </div>
    )
  }
  
  