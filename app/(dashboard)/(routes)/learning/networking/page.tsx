import ExpertiseLearningPath from "@/components/LearningTimeline";
import GridList from "@/components/GridList";
import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { learningPath } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Link, ArrowRight } from "lucide-react";
import React from "react";
import { expertiseBuildingTimeline, networkingTimeline } from "../constants";

const LearningPath = () => {
  return (
    <div className="">
      <Header
        title={learningPath.label}
        icon={learningPath.icon}
        description={learningPath.description}
        iconColor={learningPath.color}
        bgColor={learningPath.bgColor}
      ></Header>
      <div className="pl-4">
        <h2 className="text-xl md:text-4xl font-bold text-indigo-600">
          Networking Strategies
        </h2>
        <div className="py-10 mr-40">
          <ExpertiseLearningPath
            timeline={networkingTimeline}
          ></ExpertiseLearningPath>
        </div>
      </div>
    </div>
  );
};

export default LearningPath;
