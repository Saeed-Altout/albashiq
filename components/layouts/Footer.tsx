import { Locale } from "@/i18n.config";
import React from "react";

const Footer = ({ lang }: { lang: Locale }) => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container mb-20 md:mb-5">
        {lang === "en" ? (
          <p className="text-slate-800 tracking-wider text-sm md:text-base lg:text-lg leading-8 mx-auto w-fit py-4">
            Copyright Ⓒ {year}
            <span className="mx-1 text-primary font-semibold">Al Bashiq</span>
            All rights reserved.
          </p>
        ) : (
          <p className="text-slate-800 tracking-wider text-sm md:text-base lg:text-lg leading-8 mx-auto w-fit py-4">
            كل الحقوق محفوظة Ⓒ<span className="mx-1 text-primary">الباشق</span>
            {year}
          </p>
        )}
      </div>
    </footer>
  );
};

export default Footer;
