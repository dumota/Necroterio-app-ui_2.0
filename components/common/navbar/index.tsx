"use client";
import { Avatar } from "@/components/retroui/Avatar";
import { Button } from "@/components/retroui/Button";
import { Menu as MenuRetro } from "@/components/retroui/Menu";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
export default function Navbar() {
  const [isMobile, setisMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setisMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="flex items-center w-full justify-between  bg-neutral-950">
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
        
          {/* <div className="flex items-center gap-4">
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
                      AH
                    </Avatar.Fallback>
                  </Avatar>
                </MenuRetro.Trigger>
                <MenuRetro.Content>
                  <MenuRetro.Item>
                    <Link href="/login">Login</Link>
                  </MenuRetro.Item>
                  <MenuRetro.Item>
                    <Link href="/register">Register</Link>
                  </MenuRetro.Item>
                </MenuRetro.Content>
              </MenuRetro>
            </div>
          </div> */}
        </>
      ) : (
        <>
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
                      AH
                    </Avatar.Fallback>
                  </Avatar>
                </MenuRetro.Trigger>
                <MenuRetro.Content>
                  <MenuRetro.Item>
                    <Link href="/login">Login</Link>
                  </MenuRetro.Item>
                  <MenuRetro.Item>
                    <Link href="/register">Register</Link>
                  </MenuRetro.Item>
                </MenuRetro.Content>
              </MenuRetro>
            </div>
          </div>
        </>
      )}
        {/* {isOpen && (
            <div className="flex flex-col gap-4 fixed right-0">
              <div className="flex items-center gap-4">
                <Link href="/" className="text-neutral-50 text-sm">Home</Link>
              </div>
              <div className="flex items-center gap-4">
                <Link href="/" className="text-neutral-50 text-sm">Crie seu Blog</Link>
              </div>
              <div className="flex items-center gap-4">
                <Link href="/" className="text-neutral-50 text-sm">Chat</Link>
              </div>
              <div className="flex items-center gap-4">
                <Link href="/" className="text-neutral-50 text-sm">DashBoard</Link>
              </div>
            </div>
          )} */}
    </nav>
  );
}
