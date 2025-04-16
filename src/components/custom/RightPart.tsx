import React from "react";

import { combinedInformation } from "@/lib/DynamicValues";
import DynamicSection from "./sub/DynamicSection";
import TopRightButtons from "./sub/TopRightButtons";

interface Props {}

const RightPart: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col w-full h-full bg-[#111] text-cyan-300">
      <div className="flex flex-col w-full h-full overflow-y-auto">
        {combinedInformation.routes.map((item, index) => {
          return <DynamicSection item={item} index={index} key={index} />;
        })}
      </div>
    </div>
  );
};

export default RightPart;
