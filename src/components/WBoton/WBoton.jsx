import React from "react";
import "./styles/WBoton.css";

export default function WBoton({
  variant = "primary",
  type = "button",
  children,
  onClick,
  ...props
}) {
  return (
    <button
      type={type}
      className={`wbtn wbtn-${variant}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
