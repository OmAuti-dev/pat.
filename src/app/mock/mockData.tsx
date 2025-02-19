export interface Employee {
    id: number
    name: string
    availabilityDate: string | null
    immediatelyAvailable: boolean
  }
  
  export const employees: Employee[] = [
    { id: 1, name: "John Doe", availabilityDate: "2023-07-15", immediatelyAvailable: false },
    { id: 2, name: "Jane Smith", availabilityDate: null, immediatelyAvailable: true },
    { id: 3, name: "Mike Johnson", availabilityDate: "2023-07-20", immediatelyAvailable: false },
    { id: 4, name: "Emily Brown", availabilityDate: null, immediatelyAvailable: true },
    { id: 5, name: "Chris Wilson", availabilityDate: "2023-07-18", immediatelyAvailable: false },
  ]
  