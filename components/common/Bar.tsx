import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
const Bar = () => {
  return (
    <div
      dir="ltr"
      className="fixed bottom-0 left-0 flex justify-center items-center w-full h-16 md:bg-transparent md:border-none bg-white border-t z-40"
    >
      <div className="container">
        <div className="z-10">
          <div className="flex justify-between md:justify-end items-center gap-5">
            <Link
              href={"https://api.whatsapp.com/send?phone=+971568026177"}
              target="_blank"
              className="text-primary"
            >
              <Button variant="ghost" size="icon">
                <FaWhatsapp size={30} />
              </Button>
            </Link>
            <Link
              href={"tel:+971568026177"}
              target="_blank"
              className="text-primary"
            >
              <Button variant="ghost" size="icon">
                <FaPhone size={25} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bar;
