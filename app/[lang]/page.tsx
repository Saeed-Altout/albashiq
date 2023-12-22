import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

import About from "@/components/sections/About";
import Areas from "@/components/sections/Areas";
import Contact from "@/components/sections/Contact";
import Faqs from "@/components/sections/Faqs";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";

import customization from "@/public/features/Customization.svg";
import detail from "@/public/features/Detail.svg";
import diversity from "@/public/features/Diversity.svg";
import professionalism from "@/public/features/Professionalism.svg";
import quality from "@/public/features/Quality.svg";

export default async function Home({ params }: { params: { lang: Locale } }) {
  const { page } = await getDictionary(params.lang);
  const paragraphs = [
    page.about.aboutContent["paragraph-1"],
    page.about.aboutContent["paragraph-2"],
    page.about.aboutContent["paragraph-3"],
    page.about.aboutContent["paragraph-4"],
  ];
  const areas = [
    page.areas.area.hotels,
    page.areas.area["new-buildings"],
    page.areas.area.companies,
    page.areas.area.offices,
    page.areas.area.bedrooms,
    page.areas.area["living-rooms"],
    page.areas.area.pathroom,
    page.areas.area.kitchens,
    page.areas.area.carpets,
    page.areas.area.windows,
  ];
  const features = [
    {
      icon: professionalism,
      title: page.features.feature["feat-01"].title,
      description: page.features.feature["feat-01"].description,
    },
    {
      icon: diversity,
      title: page.features.feature["feat-02"].title,
      description: page.features.feature["feat-02"].description,
    },
    {
      icon: quality,
      title: page.features.feature["feat-03"].title,
      description: page.features.feature["feat-03"].description,
    },
    {
      icon: detail,
      title: page.features.feature["feat-04"].title,
      description: page.features.feature["feat-04"].description,
    },
    {
      icon: customization,
      title: page.features.feature["feat-05"].title,
      description: page.features.feature["feat-05"].description,
    },
  ];
  const questions = [
    {
      question: page.faqs.questions["q-1"].question,
      answer: page.faqs.questions["q-1"].answer,
    },
    {
      question: page.faqs.questions["q-2"].question,
      answer: page.faqs.questions["q-2"].answer,
    },
  ];
  return (
    <main>
      <Hero content={page.hero} />
      <About content={page.about} data={paragraphs} />
      <Areas content={page.areas} data={areas} />
      <Features content={page.features} data={features} />
      <Faqs content={page.faqs} data={questions} />
      <Contact page={page} />
    </main>
  );
}
