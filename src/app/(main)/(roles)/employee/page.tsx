import TaskList from "./components/TaskList"
import ProgressChart from "./components/ProgressCharts"
import PerformanceMetrics from "./components/PerformanceMetrics"
import UpcomingDeadlines from "./components/UpcomingDeadlines"
import RecentNotifications from "./components/RecentNotifications"

export default function EmployeeDashboard() {
    return (
      <div className="container mx-auto p-4 space-y-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TaskList />
          <ProgressChart />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <PerformanceMetrics />
            <UpcomingDeadlines />
          </div>
          <RecentNotifications />
        </div>
      </div>
    )
  }