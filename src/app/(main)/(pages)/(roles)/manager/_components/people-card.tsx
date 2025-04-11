export function PeopleCard({
    avatar,
    name,
    title,
  }: {
    avatar: string
    name: string
    title: string
  }) {
    return (
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img src={avatar || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="font-medium">{name}</h3>
          <p />
        </div>
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-xs text-muted-foreground">{title}</p>
        </div>
      </div>
    )
  }
  
  