export function TeamAvatars({ count = 4 }: { count?: number }) {
    return (
      <div className="flex -space-x-2">
        {Array.from({ length: count }).map((_, i) => (
          <img
            key={i}
            src={`/placeholder.svg?height=32&width=32`}
            alt={`Team member ${i + 1}`}
            className="w-8 h-8 rounded-full border-2 border-background"
          />
        ))}
      </div>
    )
  }
  
  