"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 text-[1.2rem]",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href="cources">
        <MenuItem setActive={setActive} active={active} item="Our Cources">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">All Cources</HoveredLink>
            <HoveredLink href="/">Basic Music theory</HoveredLink>
            <HoveredLink href="/">Advance composition</HoveredLink>
            <HoveredLink href="/">Song Writing</HoveredLink>
            <HoveredLink href="/">Music Production</HoveredLink>
          </div>
        </MenuItem>
        </Link>
        <Link href="contact">
          <MenuItem setActive={setActive} active={active} item="Contact">
            Contact
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
