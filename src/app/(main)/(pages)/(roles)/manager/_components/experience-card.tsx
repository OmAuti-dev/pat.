export function ExperienceCard({
    logo,
    company,
    location,
    position,
    period,
    description,
  }: {
    logo: string
    company: string
    location: string
    position: string
    period: string
    description: string
  }) {
    return (
      <div className="flex gap-4">
        <div className="w-12 h-12 rounded-lg overflow-hidden bg-background flex items-center justify-center">
          <img src={logo || "/placeholder.svg"} alt={company} className="w-8 h-8 object-contain" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg">{company}</h3>
              <p className="text-sm text-muted-foreground">{location}</p>
              <p className="text-sm font-medium mt-1">{position}</p>
            </div>
            <span className="text-sm text-muted-foreground">{period}</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    )
  }
  
  