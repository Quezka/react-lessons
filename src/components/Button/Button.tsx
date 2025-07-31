import React from "react";
import "./Button.scss";

interface ButtonProps {
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "error" | "warning" | "info" | "success" | "inherit" | "inherit(white)";
  style?: "contained" | "outlined" | "text";
  isDisabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ size = "medium", color = "primary", style = "contained", isDisabled = "false", children, onClick }) => {
  return (
    <button className={`button ${size} ${color} ${style} ${isDisabled}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
