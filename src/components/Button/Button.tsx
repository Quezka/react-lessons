import React from "react";
import Loader from "../Loader/Loader";
import "./Button.scss";

interface ButtonProps {
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "error" | "warning" | "info" | "success" | "inherit" | "inherit(white)";
  style?: "contained" | "outlined" | "text";
  isDisabled?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  color = "primary",
  style = "contained",
  isDisabled = false,
  isLoading = false,
  children,
  onClick,
}) => {
  return (
    <button className={`button ${size} ${color} ${style}`} onClick={onClick} disabled={isDisabled}>
      {isLoading && <Loader size={16} />}
      {children}
    </button>
  );
};

export default Button;
