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
  const [linkActive, setLinkActive] = useState("/");
  const [menuActive, setMenuActive] = useState(false);

  const handleActiveLink = (value: string) => {
    setLinkActive(value);
    localStorage.setItem("linkActive", value);
  };

  useEffect(() => {
    const currentLinkActive = localStorage.getItem("linkActive");
    if (currentLinkActive) {
      setLinkActive(currentLinkActive);
    }
  }, []);

  return (
    <div>
      <>
        <div className="md:flex justify-center items-center gap-5 hidden">
          {routes.map(({ label, href }) => (
            <Link
              key={href}
              href={`/${lang}/${href}`}
              className={`text-muted-foreground capitalize hover:text-primary transition ${
                linkActive === href && "!text-primary"
              }`}
              onClick={() => handleActiveLink(href)}
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
          <div className="flex justify-center items-center gap-5 md:hidden absolute top-16 left-0 right-0 bg-white flex-col min-h-screen -z-10">
            {routes.map(({ label, href }) => (
              <Link
                key={href}
                href={`/${lang}/${href}`}
                className={`text-muted-foreground capitalize hover:text-primary transition ${
                  linkActive === href && "!text-primary"
                }`}
                onClick={() => {
                  handleActiveLink(href);
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
          {menuActive ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </>
    </div>
  );
};

export default Routes;