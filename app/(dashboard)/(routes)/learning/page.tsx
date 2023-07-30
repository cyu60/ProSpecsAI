import GridList from "@/components/GridList";
import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { learningPath } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Link, ArrowRight } from "lucide-react";
import React from "react";

const LearningPath = () => {
  return (
    <div className="">
      {/* <Header
        title={learningPath.label}
        icon={learningPath.icon}
        description={learningPath.description}
        iconColor={learningPath.color}
        bgColor={learningPath.bgColor}
      ></Header> */}
      <h2 className="text-xl md:text-4xl font-bold text-center text-indigo-600">
        Personal Development 
      </h2>
      <h2 className="text-xl md:text-4xl font-bold text-center text-indigo-600">
        & 
      </h2>
      <h2 className="text-xl md:text-4xl font-bold text-center text-indigo-600">
        Career Exploration
      </h2>
      <div className="px-20 py-10">
        <GridList />
      </div>
      {/* <h1 className="font-bold text-2xl item-center h-full w-full justify-center text-center">
        {" "}
        Coming soon...
      </h1> */}
    </div>
  );
};
// <div className="px-4 md:px-20 lg:px-32 space-y-4">
//   <Card className="p-4 hover:shadow-md">
//     <Link
//       href="/personal"
//       className="flex flex-row items-center justify-between"
//     >
//       {/* <div className="flex flex-row items-center gap-x-4"> */}
//         {/* Create a background circle */}
//         {/* <div className={cn("p-2 rounded-md w-fit", "bg-purple-500/10")}>
//             <tool.icon className={`h-8 w-8 text-purple-500`} />
//           </div> */}
//         <h1 className="font-semibold text-xl text-indigo-800">
//           Expertise Building
//         </h1>
//       {/* </div> */}
//       <ArrowRight className="w-6 h-6" />
//     </Link>
//   </Card>
// </div>

export default LearningPath;
