"use client";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/retroui/Button";
import { Menu } from "@/components/retroui/Menu";

export function ModeToggle() {
  const { setTheme } = useTheme();
  return (
    <Menu>
      <Menu.Trigger asChild>
        <Button>
          {" "}
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </Button>
      </Menu.Trigger>
      <Menu.Content className="min-w-36">
        <Menu.Item onClick={() => setTheme("light")}>Light</Menu.Item>
        <Menu.Item onClick={() => setTheme("dark")}>Dark</Menu.Item>
        <Menu.Item onClick={() => setTheme("system")}>System</Menu.Item>
      </Menu.Content>
    </Menu>
  );
}
