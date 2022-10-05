import React from "react";
import loadable from "@loadable/component";
import { toPascalCase } from "../../utils/toPascalCase";
import { iconNames, IconProps } from "./Icon.models";

const Icon = ({ name, className, ...delegated }: IconProps) => {
  if (!name || !iconNames.includes(name)) return null;

  const SvgComponent = loadable(() => import(`./icons/${toPascalCase(name)}`));

  return (
    <>
      <SvgComponent
        {...{ ...delegated, className, "aria-hidden": true, role: "img" }}
      />
    </>
  );
};

export default Icon;
