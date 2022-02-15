import React from "react";
import ContainerTheme from "../ContainerTheme";

import * as El from "./Avatar.style.js";

const Avatar = ({ src, width = 100 }) => {
  return (
    <ContainerTheme>
      <El.Avatar src={src} width={width} />
    </ContainerTheme>
  );
};

export default Avatar;
