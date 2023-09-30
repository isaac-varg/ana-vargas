"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import {
  aboutButtonText,
  galleryButtonText,
  contactButtonText,
  servicesButtonText,
} from "@/configs/navigation";
import { TbMenu2, TbX } from "react-icons/tb";


const Navigation = () => {
  const [isNavigationSticky, setIsNavigationSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

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
        <div className="sm:hidden">
          <div onClick={handleMobileMenuClick}>

          <TbMenu2  className="text-2xl"/>
          </div>
        </div>
        <nav className={`sm:flex sm:space-x-8 sm:w-auto ${isMobileMenuOpen ? "fixed top-0 inset-0 w-full h-full bg-white flex flex-col items-center justify-center p-8" : 'hidden'} `} >
          <div onClick={handleMobileMenuClick} className={`sm:hidden ${isMobileMenuOpen ? " mb-5" : ""}`}>
            <TbX className="text-2xl"/>
          </div>
          <NavItem path="/about" isMobileOpen={isMobileMenuOpen} onMobileClick={handleMobileMenuClick}>{aboutButtonText}</NavItem>
          <NavItem path="/gallery" isMobileOpen={isMobileMenuOpen} onMobileClick={handleMobileMenuClick}>{galleryButtonText}</NavItem>
          <NavItem path="/services" isMobileOpen={isMobileMenuOpen} onMobileClick={handleMobileMenuClick}>{servicesButtonText}</NavItem>
          <NavItem path="/contact" isMobileOpen={isMobileMenuOpen} onMobileClick={handleMobileMenuClick}>{contactButtonText}</NavItem>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
