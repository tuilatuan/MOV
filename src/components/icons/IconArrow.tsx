import classNames from "classnames";
import React, { ComponentProps } from "react";

const IconArrow = (
  { classnames = "" }: { classnames?: string } = {},
  props: ComponentProps<"svg">,
) => {
  return (
    <svg
      width="20"
      height="8"
      viewBox="0 0 20 8"
      fill="none"
      className={classnames}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.646446 3.64644C0.451185 3.84171 0.451185 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.73079 4.34027 7.73079 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976309 4.7308 0.659727 4.53553 0.464465C4.34027 0.269203 4.02369 0.269203 3.82843 0.464465L0.646446 3.64644ZM20 3.5L1 3.5L1 4.5L20 4.5L20 3.5Z"
        fill="#003CA4"
        className={classnames}
      />
    </svg>
  );
};

export default IconArrow;
