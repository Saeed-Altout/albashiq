import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

import {
  TitleSection,
  Title,
  SubTitle,
} from "@/components/common/TitleSection";

import areasUrl from "@/public/areas.svg";
interface AreasProps {
  content: {
    headTitle?: string | undefined;
    title: string;
    subTitle?: string | undefined;
    aboutContent?: string[] | any;
  };
  data: string[];
}
const Areas: React.FC<AreasProps> = ({ content, data }) => {
  return (
    <section id="areas">
      <div className="container">
        <TitleSection>
          <Title>{content.title}</Title>
          <SubTitle>{content.subTitle}</SubTitle>
        </TitleSection>

        <div className="mt-10 w-full flex justify-between items-center gap-10 flex-col md:flex-row">
          <ul className="grid w-full grid-flow-row grid-cols-2 gap-8">
            {data.map((area, index) => (
              <li key={index} className="flex justify-start items-center gap-2">
                <span className="text-[#27a8e0]">
                  <CheckCircle className="h-5 w-5" />
                </span>
                <p className="text-slate-800 capitalize tracking-wider text-sm md:text-base lg:text-lg leading-8">
                  {area}
                </p>
              </li>
            ))}
          </ul>

          <Image
            src={areasUrl}
            loading="eager"
            priority
            alt="areas website"
            className="w-full sm:w-[450px] md:w-[500px] lg:w-[550px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Areas;
