import React, { useContext } from "react";
import Drawer from "@mui/material/Drawer";
import { Box } from "@mui/material";
import { DrawerContext } from "@/context/DrawerProvider";

interface CustomDrawerProps {
  children?: React.ReactNode;
}

const CustomDrawer: React.FC<CustomDrawerProps> = ({ children }) => {
  const drawerContext = useContext(DrawerContext);
  return (
    <Drawer
      PaperProps={{
        sx: { width: drawerContext.width },
      }}
      anchor="right"
      open={drawerContext.active}
      onClose={drawerContext.close}
    >
      <Box>{children}</Box>
    </Drawer>
  );
};

export default CustomDrawer;
