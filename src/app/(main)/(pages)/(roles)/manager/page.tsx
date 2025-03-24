import { CheckCircle, Clock, FileEdit, PlusCircle } from "lucide-react"
import { MetricCard } from "./_components/metric-card"
import { StatusChart } from "./_components/status-chart"
import { PriorityChart } from "./_components/priority-chart"
import { TypesOfWork } from "./_components/types-of-work"
import { RecentActivity } from "./_components/recent-activity"

export default function Page() {
  return (
    <div className="min-h-screen ">
        
        <div className="flex flex-col pt-20   p-4">
        <div>

        </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <button>
        <MetricCard
          count={3}
          label="to-do"
          timeframe="in the last 7 days"
          icon={<CheckCircle className="h-4 w-4 text-green-500" />}
        />
        </button>
        
        <button>

        <MetricCard
          count={22}
          label="pending"
          timeframe="in the last 7 days"
          icon={<FileEdit className="h-4 w-4 text-blue-500" />}
        />
        </button>
        <button>

        <MetricCard
          count={22}
          label="completed"
          timeframe="in the last 7 days"
          icon={<PlusCircle className="h-4 w-4 text-purple-500" />}
        />
        </button>
        <button>
        <MetricCard
          count={0}
          label="unassigned"
          timeframe="in the next 7 days"
          icon={<Clock className="h-4 w-4 text-yellow-500" />}
        />

        </button>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <StatusChart />
        <RecentActivity />
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <PriorityChart />
        <TypesOfWork />
      </div>
    </div>
    
    
    </div>
  )
}

