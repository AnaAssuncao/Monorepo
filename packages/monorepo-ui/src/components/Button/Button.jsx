import React from "react";
import ContainerTheme from "../ContainerTheme";

import * as El from "./Button.style";

export default function Button({
  children,
  color,
  backgroundColor,
  onClick,
  height,
  border,
  isDisabled = false,
}) {
  return (
    <ContainerTheme>
      <El.Button
        onClick={() => onClick()}
        backgroundColor={backgroundColor}
        border={border}
        isDisabled={isDisabled}
        color={color}
        height={height}
      >
        {children}
      </El.Button>
    </ContainerTheme>
  );
}
