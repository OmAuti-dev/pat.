import { ChevronRight } from "lucide-react";
import { HeroScrollDemo } from "./components/global/containerscroll";
import FeatureGrid from "./components/global/featuregrid";
import HeroSection from "./components/global/hero";
import { Howitworks } from "./components/global/how-it-works";
import NavbarHome from "./components/global/navbar copy";

import React from "react";
import { Button } from "@/components/ui/button";
import { Footer } from "./components/global/footer";

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <NavbarHome />

      <div className=" bg- border ">
        <div className="  h-screen w-full   rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
          <div className="absolute inset-0  h-full w-full items-center px-5 ">
            <HeroScrollDemo />
            <HeroSection />
            <section id="features" className="container py-24 space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Powerful Features
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Streamline your project management with our comprehensive
                  automation tools
                </p>
                <FeatureGrid />
              </div>
            </section>
            <Howitworks />

            <section className="container py-24">
              <div className="rounded-xl bg-primary text-primary-foreground p-8 md:p-12 lg:p-16 flex flex-col md:flex-row gap-8 items-center justify-between">
                <div className="space-y-4 max-w-[600px]">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Ready to transform your project management?
                  </h2>
                  <p className="text-primary-foreground/80 md:text-xl/relaxed">
                    Join thousands of teams already using Project Automation to
                    streamline their workflows.
                  </p>
                </div>
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full md:w-auto"
                >
                  Get Started  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </section>
            <Footer/>
          </div>
        </div>
      </div>
    </main>
  );
}
