"use client";
import React, { ReactNode, useState } from "react";

type TooltipProps = {
  text: string; // Tooltip text
  children: ReactNode; // Element to hover over
  position?: "top" | "bottom" | "left" | "right"; // Tooltip position
};

const Tooltip: React.FC<TooltipProps> = ({
  text,
  children,
  position = "top",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Tooltip position classes
  const getPositionClasses = () => {
    switch (position) {
      case "top":
        return "bottom-full left-1/2 transform -translate-x-1/2 mb-2";
      case "bottom":
        return "top-full left-1/2 transform -translate-x-1/2 mt-2";
      case "left":
        return "right-full top-1/2 transform -translate-y-1/2 mr-2";
      case "right":
        return "left-full top-1/2 transform -translate-y-1/2 ml-2";
      default:
        return "top-full left-1/2 transform -translate-x-1/2 mt-2";
    }
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={`absolute ${getPositionClasses()} bg-slate-100 dark:bg-slate-950 text-slate-100  dark:text-white text-sm px-2 py-1 rounded shadow-lg z-10`}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
