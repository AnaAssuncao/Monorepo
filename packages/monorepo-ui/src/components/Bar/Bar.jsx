import React from "react";
import ContainerTheme from "../ContainerTheme";

import * as El from "./Bar.style";

export default function Bar({ widht, left, value }) {
  return (
    <ContainerTheme>
      <El.BarContainer>
        <El.Bar width={widht}>
          <El.BarValue left={`${left}%`}>{value}</El.BarValue>
        </El.Bar>
      </El.BarContainer>
    </ContainerTheme>
  );
}
