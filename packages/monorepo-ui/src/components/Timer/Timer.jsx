import React from "react";

import ContainerTheme from "../ContainerTheme";

import * as El from "./Timer.style";

export default function Timer({
  minuteLeft,
  minuteRight,
  secondLeft,
  secondRight,
  }) {

  return (
    <ContainerTheme>
      <El.TimerContainer>
        <El.Timer>
            <El.TimerNumber>{minuteLeft}</El.TimerNumber>
            <El.TimerNumber>{minuteRight}</El.TimerNumber>
        </El.Timer>
        <El.TimerText>:</El.TimerText>
        <El.Timer>
            <El.TimerNumber>{secondLeft}</El.TimerNumber>
            <El.TimerNumber>{secondRight}</El.TimerNumber>
        </El.Timer>
    </El.TimerContainer>
  </ContainerTheme>
  );
}
