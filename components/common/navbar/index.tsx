"use client";
import { Avatar } from "@/components/retroui/Avatar";
import { Button } from "@/components/retroui/Button";
import { Menu as MenuRetro } from "@/components/retroui/Menu";
import { useAuth } from "@/providers/AuthProvider";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileMenu from "./components/mobileMenu";
export default function Navbar() {
  const [isMobile, setisMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { token, Logout } = useAuth();
  useEffect(() => {
    const handleResize = () => {
      setisMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 



  return (
    <nav className="flex items-center w-full justify-between  bg-neutral-950 px-8">
      <div className="flex items-center gap-4">
        <Link href="/" className="h-[100px] w-[100px]">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="h-[100px] w-[100px]"
          />
        </Link>
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
          <div className="flex items-center gap-4">
            <Link href="/" className="text-neutral-50 text-sm">
              Home
            </Link>
            <Link href="/" className="text-neutral-50 text-sm">
              Crie seu Blog
            </Link>
            <Link href="/" className="text-neutral-50 text-sm">
              Chat
            </Link>
            <Link href="/" className="text-neutral-50 text-sm">
              DashBoard
            </Link>
            <div>
              <MenuRetro>
                <MenuRetro.Trigger>
                  <Avatar>
                    <Avatar.Image src="broken-link" alt="Arif Logs" />
                    <Avatar.Fallback className="text-neutral-50 text-sm">
                      A
                    </Avatar.Fallback>
                  </Avatar>
                </MenuRetro.Trigger>
                <MenuRetro.Content align="start" side="bottom" alignOffset={-10}>
                  <MenuRetro.Item>
                    <Link href="/login">Perfil</Link>
                  </MenuRetro.Item>
                  <MenuRetro.Item>
                    <button onClick={Logout}>Logout</button>
                  </MenuRetro.Item>
                </MenuRetro.Content>
              </MenuRetro>
            </div>
          </div>
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
