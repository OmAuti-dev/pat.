import { Card, CardContent } from "@/components/ui/card"
import type React from "react"

interface MetricCardProps {
  count: number
  label: string
  timeframe: string
  icon: React.ReactNode
}

export function MetricCard({ count, label, timeframe, icon }: MetricCardProps) {
  return (
    <Card>
      <CardContent className="flex items-center gap-4 p-4">
        <div className="flex h-8 w-8 items-center justify-center">{icon}</div>
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold">{count}</span>
            <span className="text-sm text-muted-foreground">{label}</span>
          </div>
          <p className="text-xs text-muted-foreground">{timeframe}</p>
        </div>
      </CardContent>
    </Card>
  )
}

