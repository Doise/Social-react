import { createMuiTheme } from "@material-ui/core";

export const useTheme = () => {
  return createMuiTheme({
    palette: {
      primary: {
        light: "#4dabf5",
        main: "#2196f3",
        dark: "#1769aa",
      },
      secondary: {
        light: "#ff6333",
        main: "#ff3d00",
        dark: "#b22a00",
      },
      background: {
        default: "#F0F2F5",
        paper: "#FFFFFF",
      },
    },
    typography: {
      fontFamily: ["Roboto Mono", "monospace"].join(","),
    },
  });
};
