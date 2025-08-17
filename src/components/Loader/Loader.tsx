import React from "react";
import "./Loader.scss";

interface LoaderProps {
  size: number;
}

const Loader: React.FC<LoaderProps> = ({ size = 16 }) => {
  return <span className={`loader ${size}`} style={{ width: `${size}px`, height: `${size}px` }}></span>;
};

export default Loader;
