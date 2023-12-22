import type { Metadata } from "next";
import { Locale, i18n } from "@/i18n.config";

import "./globals.css";

import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import Bar from "@/components/common/Bar";

export const metadata: Metadata = {
  title: "Albashiq Cleaning Services",
  description:
    "We are a professional building cleaning services company committed to delivering exceptional cleanliness and hygiene for your spaces. With a dedicated team of skilled professionals and a customer-centric approach, we take pride in maintaining the pristine condition of your buildings. Our mission is to provide reliable and top-quality cleaning solutions tailored to your unique needs. Whether it's commercial or residential, we are your trusted partner in ensuring a cleaner, healthier environment for all.",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale: Locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang} dir={params.lang == "ar" ? "rtl" : "ltr"}>
      <body className={params.lang == "ar" ? "!font-tajawal" : "!font-poppins"}>
        <Navbar lang={params.lang} />
        <Bar />
        {children}
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
