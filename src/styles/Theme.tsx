import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#FF7B31",
    secondary: "#EAE6C5",
    main: "#fff",
    text: "#253D4E",
    textgray: "#838383",
    btn: {
      primary: {
        bg: "#FF7B31",
        border: "#FFB531",
        hover: "#f3850d",
        disabled: "#fcd98b",
        text: "#fff",
      },
      secondary: {
        bg: "",
        border: "",
        hover: "",
        disabled: "",
      },
      outline: {
        bg: "transparent",
        border: "#253D4E",
        text: "#253D4E",
        hover: "#e0e0e0",
        disabled: "",
      },
      icon: {
        bg: "transparent",
        border: "none",
        text: "#253D4E",
        hover: "#e0e0e0",
        hovertext: "#FFB531",
        disabled: "",
      },
    },
  },
};

const Theme = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
