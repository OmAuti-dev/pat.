
import { HeroScrollDemo } from "./components/global/containerscroll";
import NavbarHome from "./components/global/navbar copy";

import React from "react";

export default function Home() {

  
  return (
    <main className="h-screen w-screen">
      <NavbarHome/>
      
      <div className=" bg-black border ">
        <section className="  h-screen w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
          <div className="absolute inset-0  h-full w-full items-center px-5 ">
            <HeroScrollDemo />
          </div>
          <div className="container flex flex-col mt-[-500px] md:mt-[-50px]"></div>
        </section>
       
      </div>
    </main>
  );
}
