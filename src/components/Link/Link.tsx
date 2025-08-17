import React from "react";
import "./Link.scss";

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ href = "#", children }) => {
  return (
    <a href={href} className={`Link`} target="_blank">
      {children}
    </a>
  );
};

export default Link;
