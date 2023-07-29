"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import React, { useEffect, useState } from "react";
import {
  AtomIcon,
  Code,
  ImageIcon,
  LayoutDashboard,
  Lightbulb,
  MessageSquare,
  MusicIcon,
  SettingsIcon,
  VideoIcon,
  ScrollText,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { routes } from "@/lib/constants";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="py-4 flex flex-col h-full bg-slate-900 text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center pl-3 mb-10">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="Logo" src="/path/to/prospecsai_logo.png"></Image>
          </div>
          <h1 className="text-2xl font-bold">ProSpecsAI</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              className={cn(
                "text-sm flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-white/10 rounded-lg transition group",
                pathname === route.href ? "bg-white/10" : "text-gray-400"
              )}
              href={route.href}
              key={route.href}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
