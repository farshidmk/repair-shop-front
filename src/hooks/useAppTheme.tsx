import { vazirFont } from "@/ui/font";
import { createTheme } from "@mui/material";

const useAppTheme = () => {
  const theme = createTheme({
    direction: "rtl", // Right-to-left
    typography: {
      fontFamily: vazirFont.style.fontFamily,
    },
    palette: {
      primary: {
        main: "#1976D2", // Blue
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#FFA000", // Amber
        contrastText: "#000000",
      },
      background: {
        default: "#F4F6F8", // Light gray
        paper: "#FFFFFF",
      },
    },
  });
  return theme;
};

export default useAppTheme;
