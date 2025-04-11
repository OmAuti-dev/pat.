"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const heroContent = [
    {
      title: "Automate Your Project Workflows",
      description: "Eliminate manual tasks and streamline your project management with intelligent automation",
     
      features: ["Reduce project delivery time by 40%", "Eliminate repetitive tasks", "Improve team collaboration"],
    },
    {
      title: "Intelligent Resource Allocation",
      description: "Our AI-powered system optimizes resource allocation across all your projects",
      
      features: ["Smart resource scheduling", "Workload balancing", "Capacity planning"],
    },
    {
      title: "Real-time Analytics & Insights",
      description: "Make data-driven decisions with comprehensive project analytics and reporting",
      
      features: ["Custom dashboards", "Performance metrics", "Predictive analytics"],
    },
  ]

  // Calculate opacity for each section
  const firstSectionOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const secondSectionOpacity = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0])
  const thirdSectionOpacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1])

  // Calculate scale for each section
  const firstSectionScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])
  const secondSectionScale = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0.8, 1, 1, 0.8])
  const thirdSectionScale = useTransform(scrollYProgress, [0.6, 0.7], [0.8, 1])

  // Calculate y position for each section
  const firstSectionY = useTransform(scrollYProgress, [0, 0.3], [0, -50])
  const secondSectionY = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [50, 0, 0, -50])
  const thirdSectionY = useTransform(scrollYProgress, [0.6, 0.7], [50, 0])

  return (
    <div
      ref={containerRef}
      className="relative h-[300vh] bg-gradient-to-b from-background via-background/90 to-background overflow-clip"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 py-12">
          <div className="space-y-8 flex flex-col justify-center">
            {/* First Section */}
            <motion.div
              className="space-y-8 absolute"
              style={{
                opacity: firstSectionOpacity,
                scale: firstSectionScale,
                y: firstSectionY,
              }}
            >
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium">
                  <span className="text-primary">Project Management Reimagined</span>
                  <div className="mx-2 h-1 w-1 rounded-full bg-primary/50"></div>
                  <span className="text-muted-foreground">v2.0 Now Available</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  {heroContent[0].title}
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {heroContent[0].description}
                </p>
              </div>

              <div className="space-y-4">
                {heroContent[0].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Watch Demo
                </Button>
              </div>
            </motion.div>

            {/* Second Section */}
            <motion.div
              className="space-y-8 absolute"
              style={{
                opacity: secondSectionOpacity,
                scale: secondSectionScale,
                y: secondSectionY,
              }}
            >
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium">
                  <span className="text-primary">AI-Powered Optimization</span>
                  <div className="mx-2 h-1 w-1 rounded-full bg-primary/50"></div>
                  <span className="text-muted-foreground">Smart Allocation</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  {heroContent[1].title}
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {heroContent[1].description}
                </p>
              </div>

              <div className="space-y-4">
                {heroContent[1].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Watch Demo
                </Button>
              </div>
            </motion.div>

            {/* Third Section */}
            <motion.div
              className="space-y-8 absolute"
              style={{
                opacity: thirdSectionOpacity,
                scale: thirdSectionScale,
                y: thirdSectionY,
              }}
            >
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium">
                  <span className="text-primary">Data-Driven Decisions</span>
                  <div className="mx-2 h-1 w-1 rounded-full bg-primary/50"></div>
                  <span className="text-muted-foreground">Actionable Insights</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  {heroContent[2].title}
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {heroContent[2].description}
                </p>
              </div>

              <div className="space-y-4">
                {heroContent[2].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Watch Demo
                </Button>
              </div>
            </motion.div>

        
          </div>

          {/* Image Sections */}
        
          
        </div>
      </div>
    </div>
  )
}

