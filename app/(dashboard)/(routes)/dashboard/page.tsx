"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { routes } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import {
  ArrowRight,
  Code,
  ImageIcon,
  Lightbulb,
  MusicIcon,
  ScrollText,
  VideoIcon,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const tools = routes.slice(1, -1);
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-xl md:text-4xl font-bold text-center">
          Take Control of Your Career with ProSpecsAI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Your Path to Success Starts Here!
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card className="p-4 hover:shadow-md" key={tool.href}>
            <Link
              href={tool.href}
              className="flex flex-row items-center justify-between"
            >
              <div className="flex flex-row items-center gap-x-4">
                {/* Create a background circle */}
                <div className={cn("p-2 rounded-md w-fit", tool.bgColor)}>
                  {/* Add in the icon */}
                  <tool.icon className={`h-8 w-8 ${tool.color}`} />
                </div>
                <h1 className="font-semibold text-xl">{tool.label}</h1>
              </div>
              <ArrowRight className="w-6 h-6" />
            </Link>
          </Card>
        ))}
      </div>

      {/* <Button className="bg-red-500">Routes</Button>
      <UserButton afterSignOutUrl="/" /> */}
    </div>
  );
}
