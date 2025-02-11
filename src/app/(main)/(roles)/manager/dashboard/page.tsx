import React from 'react'
import Chart from '@/components/global/chart'
import {Trackprogress} from '@/components/global/track-progress'
import CreateTask from '@/components/global/createtask'
import Teams from '../components/teams'
import ProjectProgress from '../components/project-progress'
import Meetings from '../components/meetings'
import CreateTaskButton from '@/components/global/create-taskbutton'
type Props = {}

const DashboardPage = () => {
    return (
      <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CreateTaskButton />
        <Teams />
        <ProjectProgress />
      </div>
      <Meetings />
    </div>
      )
}



export default DashboardPage
