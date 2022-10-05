import React from "react";
import "./PlusIcon.styles.scss";
import { PlusIconProps } from "./PlusIcon.models";

const PlusIcon = ({ open }: PlusIconProps) => (
  <>
    <div className={`plus-icon ${open && "active"}`}>
      <span></span>
      <span></span>
    </div>
  </>
);

export default PlusIcon;
