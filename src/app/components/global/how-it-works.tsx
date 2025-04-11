import React from 'react'

export const Howitworks = () => {
  return (
    <section id="how-it-works" className="bg-muted py-24">
    <div className="container space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
          Our platform simplifies project management through intelligent automation
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                1
              </div>
              <h3 className="text-xl font-bold">Define Your Project</h3>
            </div>
            <p className="text-muted-foreground pl-10">
              Set up your project parameters, goals, and requirements in our intuitive interface.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                2
              </div>
              <h3 className="text-xl font-bold">Configure Automation</h3>
            </div>
            <p className="text-muted-foreground pl-10">
              Select from pre-built automation templates or create custom workflows tailored to your needs.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                3
              </div>
              <h3 className="text-xl font-bold">Monitor & Optimize</h3>
            </div>
            <p className="text-muted-foreground pl-10">
              Track progress in real-time and let our AI suggest optimizations to improve efficiency.
            </p>
          </div>
        </div>

        <div className="relative h-[400px] rounded-xl overflow-hidden border bg-background">
      
      </div>
    </div>
    </div>
  </section>
  )
}
