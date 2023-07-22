import React, { useContext } from "react";
import CustomDrawer from "./organisms/CustomDrawer";
import { Grid } from "@mui/material";
import ThreadList from "./organisms/ThreadList";

const drawerWidth: number = 300;

interface DashBoardLayoutProps {
  children: React.ReactNode;
}

export default function DashBoardLayout({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  return (
    <>
      <CustomDrawer />
      <Grid container>
        <Grid item md={2.4} style={{ height: "100vh" }}>
          <ThreadList id={id} />
        </Grid>
        <Grid item md={9.6} style={{ height: "100vh" }}>
          {children}
        </Grid>
      </Grid>
    </>
  );
}
