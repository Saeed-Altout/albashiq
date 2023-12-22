import React from "react";
import Image from "next/image";

import {
  TitleSection,
  Title,
  SubTitle,
} from "@/components/common/TitleSection";
interface FeaturesProps {
  content: {
    headTitle?: string | undefined;
    title: string;
    subTitle?: string | undefined;
    aboutContent?: string[] | any;
  };
  data: {
    icon: string;
    title: string;
    description: string;
  }[];
}
const Features: React.FC<FeaturesProps> = ({ content, data }) => {
  return (
    <section id="features" className="bg-primary-foreground">
      <div className="container">
        <TitleSection>
          <Title>{content.title}</Title>
          <SubTitle>{content.subTitle}</SubTitle>
        </TitleSection>

        <div className="mt-10 grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {data.map(({ icon, title, description }, index) => (
            <div
              key={title}
              className="border border-muted bg-white flex flex-col rounded-md justify-start items-center"
            >
              <Image
                src={icon}
                alt={title}
                className="h-[200px] mt-10 w-[200px]"
                priority
                loading="eager"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold text-primary md:text-2xl py-2">
                  {index + 1}. {title}
                </h3>

                <p className="text-slate-800 tracking-wider text-sm md:text-base lg:text-lg leading-8">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
