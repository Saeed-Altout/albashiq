import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  TitleSection,
  Title,
  SubTitle,
} from "@/components/common/TitleSection";

interface FaqsProps {
  content: {
    headTitle?: string | undefined;
    title: string;
    subTitle?: string | undefined;
    aboutContent?: string[] | any;
  };
  data: {
    question: string;
    answer: string;
  }[];
}
const Faqs: React.FC<FaqsProps> = ({ content, data }) => {
  return (
    <section id="faqs">
      <div className="container">
        <TitleSection>
          <Title>{content.title}</Title>
          <SubTitle>{content.subTitle}</SubTitle>
        </TitleSection>

        <Accordion
          type="single"
          collapsible
          className="mt-20 max-w-4xl mx-auto"
        >
          {data.map((question, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-xl md:text-2xl font-semibold text-primary py-2  cursor-pointer">
                {question.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-800 tracking-wider text-sm md:text-base lg:text-lg leading-8 p-4">
                {question.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faqs;
