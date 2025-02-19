
import React from "react";
import { ContainerScroll } from "../../../components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white dark:text-white">
              Automate your work with <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              Project Automation Tool
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/code.avif`}
          alt="hero"
          height={768}
          width={1480}
          className=" rounded-2xl object-cover w-full h-full bg-black"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
