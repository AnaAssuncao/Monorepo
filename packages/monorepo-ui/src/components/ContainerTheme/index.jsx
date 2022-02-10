import React from "react";

import { ThemeProvider } from "styled-components";
import { Theme } from "../../style/Theme.js";

const ContainerTheme = ({ children }) => {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
};

export default ContainerTheme;
