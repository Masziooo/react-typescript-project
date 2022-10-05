import React from "react";
import { ButtonProps } from "./Button.models";
import "./Button.styles.scss";

const Button = ({ variant, title, ariaLabel }: ButtonProps) => {
  return (
    <button
      className={`button button--${variant}`}
      type="button"
      aria-label={ariaLabel}
    >
      {title}
    </button>
  );
};

export default Button;
