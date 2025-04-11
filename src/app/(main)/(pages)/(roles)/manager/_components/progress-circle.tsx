export function ProgressCircle({ progress }: { progress: number }) {
    const radius = 40
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (progress / 100) * circumference
  
    // Determine color based on progress
    let strokeColor = "stroke-blue-500"
    if (progress < 40) {
      strokeColor = "stroke-pink-500"
    } else if (progress > 70) {
      strokeColor = "stroke-blue-500"
    } else {
      strokeColor = "stroke-amber-500"
    }
  
    return (
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          className="stroke-muted opacity-20"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={strokeColor}
          transform="rotate(-90 50 50)"
        />
      </svg>
    )
  }
  
  