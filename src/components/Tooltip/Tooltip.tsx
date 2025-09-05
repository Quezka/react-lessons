import React from "react";
import Loader from "../Loader/Loader";
import "./Tooltip.scss";

interface TooltipProps {
  direction?: "none" | "up" | "right" | "down" | "left";
  text: string;
}

const Tooltip: React.FC<TooltipProps> = ({ direction = "none", text }) => {
  return (
    <div className={`tooltip ${direction}`}>
      {text}
      {direction != "none" && <div className="tooltipArrow"></div>}
    </div>
  );
};

export default Tooltip;
