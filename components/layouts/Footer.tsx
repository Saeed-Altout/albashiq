import { Locale } from "@/i18n.config";
import React from "react";

const Footer = ({ lang }: { lang: Locale }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="mb-40 md:mb-5 h-[150px]">
      <div className="container text-center">
        {lang === "en" ? (
          <p className="text-slate-800 tracking-wider text-sm md:text-base lg:text-lg leading-8 mx-auto w-fit py-4">
            Copyright Ⓒ {year}
            <span className="mx-1 text-primary font-semibold">
              Al Bashiq Company
            </span>
            All rights reserved.
          </p>
        ) : (
          <p className="text-slate-800 tracking-wider text-sm md:text-base lg:text-lg leading-8 mx-auto w-fit py-4">
            كل الحقوق محفوظة Ⓒ
            <span className="mx-1 text-primary">شركة الباشق</span>
            {year}
          </p>
        )}
      </div>
    </footer>
  );
};

export default Footer;
