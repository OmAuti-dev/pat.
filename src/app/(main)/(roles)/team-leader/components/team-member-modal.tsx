import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { TeamMember, Task } from "@/lib/types"

interface TeamMemberModalProps {
  member: TeamMember
  onClose: () => void
}

const mockTasks: Task[] = [
  { id: 1, title: "Implement user authentication", deadline: new Date(2023, 5, 15), assignee: "Alice Johnson", priority:"high" },
  { id: 2, title: "Design landing page", deadline: new Date(2023, 5, 20), assignee: "Charlie Brown", priority:"low" },
  { id: 3, title: "Set up database schema", deadline: new Date(2023, 5, 18), assignee: "Bob Smith", priority:"medium"},
]

const TeamMemberModal = ({ member, onClose }: TeamMemberModalProps) => {
  const memberTasks = mockTasks.filter((task) => task.assignee === member.name)

  return (
    <Dialog open={!!member} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{member.name}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Role: {member.role}</h3>
          <h4 className="font-semibold mb-2">Assigned Tasks:</h4>
          <ul className="list-disc pl-5">
            {memberTasks.map((task) => (
              <li key={task.id}>
                {task.title} - Due: {task.deadline.toLocaleDateString()}
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default TeamMemberModal

