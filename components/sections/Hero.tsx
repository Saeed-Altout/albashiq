"use client";
import React from "react";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

import { ArrowDown, FormInput } from "lucide-react";

import hero from "@/public/hero.svg";
import { Button } from "@/components/ui/button";

interface HeroProps {
  content: {
    title: string;
    subTitle: string;
    buttonBook: string;
    buttonGetStarted: string;
  };
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  const { lang } = useParams();

  return (
    <div
      id="hero"
      className="flex justify-center items-center min-h-screen pt-20 md:pt-0"
    >
      <div className="container mx-auto flex justify-center items-center gap-10 flex-col lg:flex-row">
        <div className="space-y-5">
          <h1 className="font-bold text-4xl capitalize lg:text-5xl xl:text-6xl 2xl:text-7xl xl:!leading-[85px] lg:!leading-[65px] !leading-[45px] tracking-wide">
            {content.title}
          </h1>

          <p className="text-slate-800 md:pb-10 tracking-wider text-sm md:text-base lg:text-lg leading-8">
            {content.subTitle}
          </p>

          <div className="flex justify-start items-center gap-5">
            <Link href={`/${lang}/#contact-us`}>
              <Button variant="default">
                <FormInput className="h-4 w-4 mx-2" />
                {content.buttonBook}
              </Button>
            </Link>
            <Link href={`/${lang}/#about`}>
              <Button variant="outline">
                <ArrowDown className="h-4 w-4 mx-2 animate-bounce" />
                {content.buttonGetStarted}
              </Button>
            </Link>
          </div>
        </div>

        <Image
          src={hero}
          alt="hero"
          className="w-full sm:w-[450px] md:w-[500px] lg:w-[550px]"
        />
      </div>
    </div>
  );
};

export default Hero;
