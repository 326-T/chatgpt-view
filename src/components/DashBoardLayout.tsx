import React from "react";
import CustomDrawer from "./organisms/CustomDrawer";
import { Grid } from "@mui/material";
import SideBar from "./molecules/SideBar";

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
        <Grid item md={12 / 5} style={{ height: "100vh" }}>
          <SideBar id={id} />
        </Grid>
        <Grid item md={(12 * 4) / 5} style={{ height: "100vh" }}>
          {children}
        </Grid>
      </Grid>
    </>
  );
}
