import React from "react";
import { ThemeProvider } from "styled-components";

const colors = {
  primary: {
    "primary-100": "#FFF6D5",
    "primary-200": "#FFEAAC",
    "primary-300": "#FFDB83",
    "primary-400": "#FFCD64",
    primary: "#FFB531",
    "primary-600": "#DB9223",
    "primary-700": "#B77218",
    "primary-800": "#93550F",
  },
};

const theme = {
  colors: {
    ...colors.primary,
    secondary: "#EAE6C5",
    white: "#ffffff",
    main: "#fff",
    text: "#253D4E",
    textgray: "#838383",
  },
  button: {
    sizes: {
      sm: {},
      md: {},
      lg: {},
    },
    colors: {
      primary: {
        variants: {
          solid: {
            "background-color": colors.primary.primary,
            color: "white",
            border: `1px solid ${colors.primary.primary}`,

            "&:disabled": {
              "background-color": colors.primary["primary-400"],
            },
            "&:hover": {
              "background-color": colors.primary["primary-600"],
            },
          },
          bordered: {
            border: `1px solid ${colors.primary.primary}`,
            "background-color": "transparent",
            color: colors.primary.primary,
          },
          light: {
            border: "none",
            "background-color": "transparent",
            color: colors.primary.primary,
          },
        },
      },
    },
  },
};

const Theme = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
