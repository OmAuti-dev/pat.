import React from 'react'
import { ProgressCircle } from '../progress-circle';

const ProgressCharts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
    <ProgressCard title="" progress={38} />
    <ProgressCard title="Brand Identity" progress={74} />
    <ProgressCard title="Logo Design" progress={56} />
  </div>

  )
}

export default ProgressCharts

function ProgressCard({ title, progress }: { title: string; progress: number }) {
    return (
      <div className="bg-card rounded-lg p-6 border border-border flex flex-col items-center">
        <div className="relative mb-4">
          <ProgressCircle progress={progress} />
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-3xl font-bold">{progress}</span>
            <span className="text-xs text-muted-foreground">%</span>
          </div>
        </div>
        <div className="flex justify-between w-full text-xs text-muted-foreground">
          <span>0%</span>
          <span>100%</span>
        </div>
        <h3 className="mt-4 font-medium">{title}</h3>
      </div>
    )
  }