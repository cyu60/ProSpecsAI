import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { settings } from "@/lib/constants";
import { SignOutButton } from "@clerk/nextjs";
import React from "react";

const Settings = () => {
  return (
    <div className="">
      <Header
        title={settings.label}
        icon={settings.icon}
        description={settings.description}
        // iconColor={settings.color}
        // bgColor={settings.bgColor}
      ></Header>
      <Button>
        <SignOutButton>Sign out</SignOutButton>
      </Button>
      {/* <h1 className='font-bold text-2xl item-center h-full w-full justify-center text-center'> Coming soon...</h1> */}
    </div>
  );
};

export default Settings;
