import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent activity</CardTitle>
        <p className="text-sm text-muted-foreground">Stay up to date with whats happening across the project.</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-4">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm">
              <span className="font-medium">OM</span> updated 2 fields of{" "}
              <a href="#" className="text-primary underline">
                GTMS-7 - Create positioning and messaging for new feature
              </a>
            </p>
            <p className="text-xs text-muted-foreground">1 minute ago</p>
            <ul className="list-disc space-y-1 pl-4 text-sm">
              <li>Updated the Start date</li>
              <li>Changed the Due date to 12/Feb/25</li>
            </ul>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm">
              <span className="font-medium">OM</span> linked 2 issues
            </p>
            <p className="text-xs text-muted-foreground">9 minutes ago</p>
            <p className="text-sm">
              <a href="#" className="text-primary underline">
                GTMS-11 - Feature release email copy
              </a>{" "}
              is blocked by{" "}
              <a href="#" className="text-primary underline">
                GTMS-13 - Host webinar
              </a>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

