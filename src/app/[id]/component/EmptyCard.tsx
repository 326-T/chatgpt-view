import React from "react";

import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

export default function EmptyCard() {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          color: theme.palette.common.black,
          borderTop: 1 / 2,
          borderColor: "#DEDEDF",
          height: 150,
        }}
      />
    </>
  );
}
