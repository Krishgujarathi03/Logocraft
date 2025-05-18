"use client";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  const { user } = useUser();
  return (
    <div className="px-10 lg:px-32 xl:px-48 2xl:px-55 p-4 flex justify-between items-center shadow-sm">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Logo"
          width={60}
          height={60}
          className="w-[100px] h-[60px]"
        />
      </Link>
      <div className="flex gap-3 items-center">
        {user ? (
          <Button className="bg-[#ed1e61] text-white">Dashboard</Button>
        ) : (
          <Button className="bg-[#ed1e61] text-white">Get Started</Button>
        )}
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
