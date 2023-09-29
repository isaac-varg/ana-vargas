"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import { aboutButtonText, galleryButtonText, contactButtonText, servicesButtonText} from "@/configs/navigation";


const Navigation = () => {
  const [isNavigationSticky, setIsNavigationSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavigationSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 ${
        isNavigationSticky ? "shadow-md bg-white " : null
      } sm:h-16 h-24 z-10 `}
    >
      <header className="flex flex-row sm:flex-row justify-between items-center mx-auto px-4 sm:px-6 lg:px-8 h-full py-2 sm:py-0">
        <Logo />
        <nav className="flex space-x-8">
          <NavItem path="/about">{aboutButtonText}</NavItem>
          <NavItem path="/gallery">{galleryButtonText}</NavItem>
          <NavItem path="/services">{servicesButtonText}</NavItem>
          <NavItem path="/contact">{contactButtonText}</NavItem>

        </nav>
      </header>
    </div>
  );
};

export default Navigation;
