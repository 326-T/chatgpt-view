import React, { useContext } from "react";
import CustomDrawer from "./organisms/CustomDrawer";
import { Grid } from "@mui/material";
import ThreadList from "./organisms/ThreadList";

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
