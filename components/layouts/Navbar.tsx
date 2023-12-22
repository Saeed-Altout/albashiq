import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Locale, i18n } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

import logo from "@/public/logo.svg";

import Routes from "@/components/common/Routes";

export type Route = {
  label: string;
  href: string;
};

const Navbar = async ({ lang }: { lang: Locale }) => {
  const { menu } = await getDictionary(lang);
  const currentLang = i18n.locales.filter((locale) => locale != lang);

  const routes: Route[] = [
    {
      label: menu.home,
      href: "/",
    },
    {
      label: menu.about,
      href: "/#about",
    },
    {
      label: menu.features,
      href: "/#features",
    },
    {
      label: menu.faqs,
      href: "/#faqs",
    },
    {
      label: menu["contact-us"],
      href: "/#contact-us",
    },
  ];

  return (
    <header>
      <nav className="border-b h-20 flex justify-center items-center">
        <div className="relative container mx-auto flex justify-between items-center bg-white h-full z-50">
          <Link href={`/${lang}`}>
            <Image src={logo} alt="logo" className="w-20" priority />
          </Link>
          <Routes lang={lang} currentLang={currentLang} routes={routes} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
