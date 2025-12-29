"use client";

import { Avatar } from "@/components/retroui/Avatar";
import { Button } from "@/components/retroui/Button";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useAuth } from "@/providers/AuthProvider";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function MobileMenu({
  isOpen,
  setIsOpen,
  token,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  token: string | null;
}) {
  const { Logout } = useAuth();
  function handleClose() {
    setIsOpen(false);
  }
  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen} direction="right">
      <DrawerTitle className="hidden">Menu</DrawerTitle>
      <DrawerContent>
        {token ? (
          <div className="flex flex-col h-full">
            <div className="flex flex-col justify-start items-start p-4 gap-4">
              <div className="flex w-full justify-between items-center">
                <Avatar>
                  <Avatar.Image src="broken-link" alt="Arif Logs" />
                  <Avatar.Fallback className="text-neutral-50 text-sm">
                    A
                  </Avatar.Fallback>
                </Avatar>
                <div className="flex flex-col">Eduardo</div>
              </div>
              <DrawerTrigger>
                <div className="flex flex-col gap-2 justify-start items-start w-full">

                <Link href="/" className="text-md" onClick={handleClose}>
                  Home
                </Link>
                <Link href="/" className="  text-md" onClick={handleClose}>
                  Crie seu Blog
                </Link>
                <Link href="/" className="text-md" onClick={handleClose}>
                  Chat
                </Link>
                <Link href="/" className="text-md" onClick={handleClose}>
                  DashBoard
                </Link>
                <Link href="/login" className="text-md" onClick={handleClose}>
                  Perfil
                </Link>
                </div>
              </DrawerTrigger>
            </div>

            <div className="flex justify-end items-end p-4 h-full">
              <Button
                onClick={() => {
                  Logout();
                  handleClose();
                }}
              >
                <Icon icon="la:sign-out-alt" width={20} height={20} />
                Logout
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-end items-end p-4">
            <Link href="/login" onClick={handleClose}>Login</Link>
            <Link href="/register" onClick={handleClose}>Register</Link>
          </div>
        )}
      </DrawerContent>
    </Drawer>
  );
}
