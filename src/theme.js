import { createTheme } from "@mui/material/styles";

// Define light theme
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2196f3", // Adjust the primary color as needed
    },
    secondary: {
      main: "#ff4081", // Adjust the secondary color as needed
    },
    // Add any other light mode specific configurations here
  },
  typography: {
    // Add typography configurations for light mode
  },
  // Add any other common configurations for light mode here
});

// Define dark theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2196f3", // Adjust the primary color as needed
    },
    secondary: {
      main: "#ff4081", // Adjust the secondary color as needed
    },
    // Add any other dark mode specific configurations here
  },
  typography: {
    // Add typography configurations for dark mode
  },
  // Add any other common configurations for dark mode here
});

export { lightTheme, darkTheme };
