import React from "react";
import "./Button.scss";

interface ButtonProps {
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "danger";
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ size = "medium", color = "primary", children, onClick }) => {
  return (
    <button className={`button ${size} ${color}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
