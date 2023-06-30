import React, { useContext } from "react";
import CustomDrawer from "./CustomDrawer";
import { Grid } from "@mui/material";
import ThreadList from "./ThreadList";

const drawerWidth: number = 300;

interface DashBoardLayoutProps {
  children: React.ReactNode;
}

const DashBoardLayout: React.FC<DashBoardLayoutProps> = ({ children }) => {
  return (
    <>
      <CustomDrawer />
      <Grid container>
        <Grid item md={2} style={{ height: "100vh" }}>
          <ThreadList />
        </Grid>
        <Grid item md={10} style={{ height: "100vh" }}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default DashBoardLayout;
