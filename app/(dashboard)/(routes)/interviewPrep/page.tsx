import Header from "@/components/Header";
import { interviewPrep } from "@/lib/constants";
import React from "react";

const InterviewPrep = () => {
  return (
    <div className="">
      <Header
        title={interviewPrep.label}
        icon={interviewPrep.icon}
        description={interviewPrep.description}
        iconColor={interviewPrep.color}
        bgColor={interviewPrep.bgColor}
      ></Header>
      <h1 className="font-bold text-2xl item-center h-full w-full justify-center text-center">
        {" "}
        Coming soon...
      </h1>
    </div>
  );
};

export default InterviewPrep;
