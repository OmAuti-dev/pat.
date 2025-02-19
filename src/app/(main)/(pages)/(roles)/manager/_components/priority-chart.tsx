"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PriorityChart() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Priority breakdown</CardTitle>
          <p className="text-sm text-muted-foreground">
            Get a holistic view of how work is being prioritized.{" "}
            <a href="#" className="text-primary underline">
              See what your team's been focusing on
            </a>
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="h-[200px] w-full">
            <div className="flex h-full items-end gap-2">
              <div className="flex w-full flex-col justify-end">
                <div className="h-4 bg-gray-200 dark:bg-gray-800" />
                <div className="mt-2 text-center text-xs">Highest</div>
              </div>
              <div className="flex w-full flex-col justify-end">
                <div className="h-8 bg-gray-200 dark:bg-gray-800" />
                <div className="mt-2 text-center text-xs">High</div>
              </div>
              <div className="flex w-full flex-col justify-end">
                <div className="h-32 bg-gray-200 dark:bg-gray-800" />
                <div className="mt-2 text-center text-xs">Medium</div>
              </div>
              <div className="flex w-full flex-col justify-end">
                <div className="h-24 bg-gray-200 dark:bg-gray-800" />
                <div className="mt-2 text-center text-xs">Low</div>
              </div>
              <div className="flex w-full flex-col justify-end">
                <div className="h-4 bg-gray-200 dark:bg-gray-800" />
                <div className="mt-2 text-center text-xs">Lowest</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

