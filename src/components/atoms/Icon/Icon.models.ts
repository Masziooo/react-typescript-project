import React from "react";

export const iconNames = [
  "quote1",
  "quote2",
  "inVision",
  "androidGray",
  "checkGray",
  "sccissorsGray",
  "wheelGray",
  "arrow",
  "facebook",
  "linkedin",
  "twitter",
  "m",
  "github",
] as const;

export type IconNameType = typeof iconNames[number];

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name?: IconNameType;
  className?: string;
  ariaLabel?: string;
}
