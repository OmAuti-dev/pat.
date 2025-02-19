
import type { Employee } from "../../mock/mockData"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface EmployeeListProps {
  employees: Employee[]
  onAssign: (employeeId: number) => void
}

export function EmployeeList({ employees, onAssign }: EmployeeListProps) {
  const { toast } = useToast()

  const handleAssign = (employeeId: number) => {
    onAssign(employeeId)
    toast({
      title: "Task Assigned",
      description: "Task has been successfully assigned to the employee.",
    })
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Assign</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Availability Date</TableHead>
          <TableHead>Immediately Available</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {employees.map((employee) => (
          <TableRow key={employee.id}>
            <TableCell>
              <Button variant="ghost" size="icon" onClick={() => handleAssign(employee.id)}>
                <Plus className="h-4 w-4" />
              </Button>
            </TableCell>
            <TableCell>{employee.name}</TableCell>
            <TableCell>{employee.availabilityDate || "N/A"}</TableCell>
            <TableCell>{employee.immediatelyAvailable ? "Yes" : "No"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

