"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";

import { Locale } from "@/i18n.config";
import { Route } from "@/components/layouts/Navbar";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";

const Routes = ({
  currentLang,
  lang,
  routes,
}: {
  currentLang: any;
  lang: Locale;
  routes: Route[];
}) => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div>
      <div className="md:flex justify-center items-center gap-5 hidden">
        {routes.map(({ label, href }) => (
          <Link
            key={href}
            href={`/${lang}/${href}`}
            className="capitalize hover:text-primary transition"
          >
            {label}
          </Link>
        ))}

        <Link href={`/${currentLang}`} className="capitalize">
          <Button variant="outline" className="capitalize" size="sm">
            {currentLang}
          </Button>
        </Link>
      </div>
      {menuActive && (
        <div className="shadow-xl flex justify-center items-center gap-5 md:hidden absolute top-16 left-0 right-0 bg-white flex-col h-[400px] -z-10">
          {routes.map(({ label, href }) => (
            <Link
              key={href}
              href={`/${lang}/${href}`}
              className="capitalize hover:text-primary transition"
              onClick={() => {
                setMenuActive(false);
              }}
            >
              {label}
            </Link>
          ))}

          <Link href={`/${currentLang}`} className="capitalize">
            <Button variant="outline" className="capitalize" size="sm">
              {currentLang}
            </Button>
          </Link>
        </div>
      )}
      <Button
        size="sm"
        variant="outline"
        type="button"
        className="block md:hidden"
        onClick={() => setMenuActive((prev: boolean) => !prev)}
      >
        {menuActive ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
    </div>
  );
};

export default Routes;
