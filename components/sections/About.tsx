import React from "react";
import Image from "next/image";

import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

import about from "@/public/about.svg";
import { Title, TitleSection } from "@/components/common/TitleSection";
interface AboutProps {
  content: {
    title: string;
    aboutContent?: string[] | any;
    button?: string | undefined;
    headTitle?: string | undefined;
    subTitle?: string | undefined;
  };
  data: string[];
}
const About: React.FC<AboutProps> = ({ content, data }) => {
  return (
    <section id="about">
      <div className="container">
        <TitleSection>
          <Title>{content.title}</Title>
        </TitleSection>

        <div className="mt-10 w-full flex justify-between items-center gap-10 flex-col md:flex-row">
          <Image
            src={about}
            alt="about"
            className="w-full sm:w-[450px] md:w-[500px] lg:w-[550px]"
          />

          <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
            {data.map((paragraph, index) => (
              <p
                key={index}
                className="text-slate-800 tracking-wider text-sm md:text-base lg:text-lg leading-8"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
