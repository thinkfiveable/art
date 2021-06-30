// theme.js
import { extendTheme } from "@chakra-ui/react";
import Fonts from "./fonts";

const colors = {
  orange: "#F36D01",

  black: "#171717",
  smoke: "#e0e6ed",
  snow: "#f9fafc",
  white: "#ffffff",
};

const theme = extendTheme({
  fonts: {
    heading: "Rubik, sans-serif",
    body: "Rubik, sans-serif",
    mono: "Palmer Lake Print",
  },
  colors: {
    ...colors,
    text: colors.black,
    background: colors.white,
    elevated: colors.white,
    sheet: colors.snow,
    sunken: colors.smoke,
    border: colors.smoke,
    placeholder: colors.muted,
    secondary: colors.slate,
    primary: colors.orange,
    muted: colors.muted,
    accent: colors.blue,
  },
});

export default theme;
