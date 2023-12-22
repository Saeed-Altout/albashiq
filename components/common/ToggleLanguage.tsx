import React from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";

const ToggleLanguage: React.FC = () => {
  const router = useRouter();
  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const changeTo = router.locale === "en" ? "ar" : "en";

  return (
    <Button
      size="sm"
      variant="outline"
      onClick={() => {
        onToggleLanguageClick(changeTo);
      }}
      className="text-secondary tracking-wide hover:text-primary fade-fast capitalize"
    >
      {changeTo}
    </Button>
  );
};

export default ToggleLanguage;
