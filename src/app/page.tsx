
import { ContainerScroll } from '@/app/components/global/containerscroll'

import Navbar from '@/app/components/global/navbar'


export default function Home() {
  //WIP: remove fault IMAge for home page
  return (
    <main>
    <Navbar/>
    <div className=" bg-black">
    <section className="  h-screen w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
    <div className="absolute inset-0  h-full w-full items-center px-5 "></div>
    <div className="container flex flex-col mt-[-500px] md:mt-[-50px]">
     <ContainerScroll 
     titleComponent = {
       <div className="flex items-center justify-center flex-col">
         
         <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                 Automate Your Work With PAT
               </h1>
       </div>
     }/>
    </div>
    </section>
    </div>
    <div className="pt-5">

   
    </div>
 

       
     
     
   </main>
 );
}