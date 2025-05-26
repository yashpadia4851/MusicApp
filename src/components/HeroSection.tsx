import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

export const HeroSection = () => {
  return (
    <>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-cneter relative overflow-hidden mx-auto py-10 md:py-0">
        <div className="p-4 relative z-10 w-full text-center mt-28 ">
          <h1 className="mt-0 md:mt-28 text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500">
            Master the class of Music
          </h1>

          <p className="mt-8 font-normal text-xl text-neutral-300 max-w-lg mx-auto">
            Dive into our comprehensive music courses and transform your musical
            journey today. Whether you&apos;re a beginner or looking to refine your
            skills, join us to unlock your true potential.
          </p>
          <div className="mt-24">
            <Link href={"/"}>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Explore Classes
              </Button>
            </Link>
          </div>
        </div>
        
      </div>
    </>
  );
};
