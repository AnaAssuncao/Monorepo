import React from "react";
// import { ThemeProvider } from "styled-components";
// import { Theme } from "../../style/Theme.js";
// import GlobalStyle from "../../style/Global.js";

import * as El from "./Avatar.style.js";

const Avatar = ({ src, width }) => {
  return (
    <>
      <El.Avatar src={src} width={width} />
      Avatar
    </>
  );
};

export default Avatar;
