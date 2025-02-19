"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { TeamMember } from "@/lib/types"

const mockTeamMembers: TeamMember[] = [
  { id: 1, name: "Alice Johnson", role: "Frontend Developer" },
  { id: 2, name: "Bob Smith", role: "Backend Developer" },
  { id: 3, name: "Charlie Brown", role: "UI/UX Designer" },
]

interface TeamMemberListProps {
  onMemberClick: (member: TeamMember) => void
}

const TeamMemberList = ({ onMemberClick }: TeamMemberListProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {mockTeamMembers.map((member) => (
            <li
              key={member.id}
              className="cursor-pointer hover:bg-gray- p-2 rounded"
              onClick={() => onMemberClick(member)}
            >
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default TeamMemberList

