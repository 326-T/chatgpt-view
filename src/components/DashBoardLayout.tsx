import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import NavigationDrawer from "./NavigationDrawer";
import AppBar from "./AppBar";

const defaultTheme = createTheme();

interface DashBoardLayoutProps {
  children: React.ReactNode;
}

const DashBoardLayout: React.FC<DashBoardLayoutProps> = ({ children }) => {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <NavigationDrawer open={open} toggleDrawer={toggleDrawer} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: "100vh",
          }}
        >
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default DashBoardLayout;
