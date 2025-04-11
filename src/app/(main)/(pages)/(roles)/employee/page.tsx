import TaskList from "./_components/TaskList"
import ProgressChart from "./_components/ProgressCharts"
import PerformanceMetrics from "./_components/PerformanceMetrics"
import UpcomingDeadlines from "./_components/UpcomingDeadlines"
import RecentNotifications from "./_components/RecentNotifications"
import { SidebarDemo } from "../_components/sidebar"

export default function EmployeeDashboard() {
    return (
        <SidebarDemo>
      <div className=" mx-auto pt-16  space-y-6">
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
        </SidebarDemo>
    )
  }