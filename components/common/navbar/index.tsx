"use client";
import { Button } from "@/components/retroui/Button";
import { useAuth } from "@/providers/AuthProvider";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useEffect, useState } from "react";

import DesktopMenu from "./components/desktopMenu";
import LogoAnimate from "./components/logoAnimate";
import MobileMenu from "./components/mobileMenu";
export default function Navbar() {
  const [isMobile, setisMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { token } = useAuth();
  useEffect(() => {
    const handleResize = () => {
      setisMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 



  return (
    <nav className="flex items-center w-full justify-between  bg-neutral-950 px-8" id="navbar">
      <div className="flex items-center gap-4">
        <LogoAnimate />
      </div>
      {isMobile ? (
        <>
          <Button variant="outline" size="icon" onClick={() => setIsOpen(!isOpen)}>
            <Icon icon="la:bars" width={30} height={30} className="text-neutral-50" />
          </Button>
          <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} token={token} />
 
        </>
      ) : (
        <>
        {token ? (
          <DesktopMenu />
        ) : (
          <div className="flex items-center gap-4 text-neutral-50">
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </div>
        )}
        </>
      )}
      
    </nav>
  );
}
