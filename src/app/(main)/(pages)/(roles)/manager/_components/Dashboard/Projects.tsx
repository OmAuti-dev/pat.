import React from 'react'
import { ProgressBar } from '../progress-bar'
import { MoreHorizontal } from 'lucide-react'

const Projects = () => {
  return (
    <div className="bg-card rounded-lg p-4 border border-border">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Projects</h2>
          <button>
            <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>

        <div className="space-y-4">
          <TaskItem
            title="Mobile App"
            category="App"
            progress={68}
          />
          <TaskItem
            title="Website Redesign"
            category="Web dev"
            progress={91}
            bgColor="bg-pink-100 dark:bg-pink-950"
            progressColor="bg-pink-500"
          />
          <TaskItem
            title="Task Net"
            category="Android"
            progress={42}
            bgColor="bg-amber-100 dark:bg-amber-950"
            progressColor="bg-amber-500"
          />
        </div>
      </div>
  )
}

export default Projects

function TaskItem({
  title,
  category,
  progress,
  bgColor = "bg-blue-100 dark:bg-blue-950",
  progressColor = "bg-blue-500",
}: {
  title: string
  category: string
  progress: number
  bgColor?: string
  progressColor?: string
}) {
  return (
    <div className={`rounded-full ${bgColor} p-1 pr-4`}>
      <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
       
        <div className="flex-1 pl-4 min-w-[120px]">
          <h3 className="font-medium">{title}</h3>
          <p className="text-xs">{category}</p>
        </div>
        <div className="w-full md:w-1/2">
          <ProgressBar progress={progress} color={progressColor} />
        </div>
        <div className="text-lg font-medium">{progress}%</div>
      </div>
    </div>
  )
}