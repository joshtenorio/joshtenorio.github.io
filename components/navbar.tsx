"use client";
import { useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { ModeToggle } from "./ui/mode-toggle";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const navItems = [
  { name: "Skills/Experience", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/posts" },
  //{ name: "Resume", href: "/resume" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-screen flex flex-row space-x-2 px-4 items-center">
      <Link href="/">
        <div className="text-2xl rounded-md hover:underline">jxorio.dev</div>
      </Link>

      <NavigationMenu className="hidden w-screen md:flex flex-row justify-between space-x-2 py-2">
        <NavigationMenuList>
          {navItems.map((item, idx) => (
            <NavigationMenuItem key={idx}>
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
        {/**
      <div className="grow justify-self-end">
        <ModeToggle />
      </div>
      */}
      </NavigationMenu>

      {/* mobile */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon" aria-label="Menu">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[80%] sm:w-[350px]">
          <div className="flex flex-col gap-4 mt-8">
            {navItems.map((item, idx) => (
              <div key={idx}>
                <Link href={item.href} legacyBehavior passHref>
                  <div className={navigationMenuTriggerStyle()}>
                    {item.name}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
