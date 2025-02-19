"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function StatusChart() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Status overview</CardTitle>
          <p className="text-sm text-muted-foreground">
            Get a snapshot of the status of your issues.{" "}
            <a href="#" className="text-primary underline">
              View all issues
            </a>
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative flex aspect-square w-full max-w-[200px] mx-auto">
          <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
            <circle
              className="stroke-[10] stroke-primary fill-none"
              r="45"
              cx="50"
              cy="50"
              strokeDasharray="70 282.7"
            />
            <circle
              className="stroke-[10] stroke-orange-500 fill-none"
              r="45"
              cx="50"
              cy="50"
              strokeDasharray="50 282.7"
              strokeDashoffset="-70"
            />
            <circle
              className="stroke-[10] stroke-pink-500 fill-none"
              r="45"
              cx="50"
              cy="50"
              strokeDasharray="40 282.7"
              strokeDashoffset="-120"
            />
            <circle
              className="stroke-[10] stroke-blue-500 fill-none"
              r="45"
              cx="50"
              cy="50"
              strokeDasharray="30 282.7"
              strokeDashoffset="-160"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold">22</div>
              <div className="text-xs text-muted-foreground">Total issues</div>
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-primary" />
            <div className="text-sm">To Do: 10</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-orange-500" />
            <div className="text-sm">Ready: 4</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-pink-500" />
            <div className="text-sm">In Progress: 5</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-blue-500" />
            <div className="text-sm">Launched: 3</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

