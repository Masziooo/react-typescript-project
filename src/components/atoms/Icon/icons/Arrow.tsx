import React from "react";

const Arrow = (
  props: React.PropsWithChildren<React.SVGProps<SVGSVGElement>>
) => (
  <svg
    {...props}
    width="8"
    height="13"
    viewBox="0 0 8 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.23807 6.80908L0.945176 2.51619C0.554652 2.12566 0.554652 1.4925 0.945176 1.10198C1.3357 0.711452 1.96886 0.711452 2.35939 1.10198L7.35939 6.10198C7.74991 6.4925 7.74991 7.12566 7.35939 7.51619L2.35939 12.5162C1.96886 12.9067 1.3357 12.9067 0.945176 12.5162C0.554652 12.1257 0.554652 11.4925 0.945176 11.102L5.23807 6.80908Z"
      fill="#29CC6A"
    />
  </svg>
);

export default Arrow;
