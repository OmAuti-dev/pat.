"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users } from "lucide-react"

const teamsData = [
  {
    id: 1,
    name: "Development Team",
    progress: 75,
    members: [
      { name: "John Doe", avatar: "/avatars/john-doe.png" },
      { name: "Jane Smith", avatar: "/avatars/jane-smith.png" },
      { name: "Mike Johnson", avatar: "/avatars/mike-johnson.png" },
    ],
  },
  {
    id: 2,
    name: "Design Team",
    progress: 60,
    members: [
      { name: "Emily Brown", avatar: "/avatars/emily-brown.png" },
      { name: "Chris Lee", avatar: "/avatars/chris-lee.png" },
      { name: "Sarah Davis", avatar: "/avatars/sarah-davis.png" },
    ],
  },
  {
    id: 3,
    name: "Marketing Team",
    progress: 80,
    members: [
      { name: "Alex Wilson", avatar: "/avatars/alex-wilson.png" },
      { name: "Rachel Green", avatar: "/avatars/rachel-green.png" },
      { name: "Tom Baker", avatar: "/avatars/tom-baker.png" },
    ],
  },
]

export default function Teams() {
  const [selectedTeam, setSelectedTeam] = useState<(typeof teamsData)[0] | null>(null)

  return (
    <Card className="h-[400px] overflow-auto">
      <CardHeader className="p-4">
        <CardTitle className="flex items-center">
          <Users className="mr-2 h-4 w-4" />
          Teams
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <ul className="space-y-4">
          {teamsData.map((team) => (
            <li
              key={team.id}
              className="rounded-lg border p-4 transition-shadow hover:shadow-md cursor-pointer"
              onClick={() => setSelectedTeam(team)}
            >
              <h3 className="font-semibold mb-2">{team.name}</h3>
              <div className="flex items-center justify-between mb-2">
                <div className="flex -space-x-2">
                  {team.members.slice(0, 3).map((member, index) => (
                    <Avatar key={index} className="border-2 border-background">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  ))}
                  {team.members.length > 3 && (
                    <Avatar className="border-2 border-background">
                      <AvatarFallback>+{team.members.length - 3}</AvatarFallback>
                    </Avatar>
                  )}
                </div>
                <span className="text-sm text-muted-foreground">{team.progress}%</span>
              </div>
              <Progress value={team.progress} className="h-2" />
            </li>
          ))}
        </ul>
      </CardContent>
      <Dialog open={!!selectedTeam} onOpenChange={() => setSelectedTeam(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedTeam?.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Team Members</h3>
              <div className="flex flex-wrap gap-2">
                {selectedTeam?.members.map((member, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Avatar>
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span>{member.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Team Progress</h3>
              <Progress value={selectedTeam?.progress} className="h-2 mb-2" />
              <p>{selectedTeam?.progress}% Complete</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  )
}

