import React from "react";

import { Box, SxProps, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function UserCard({
  userName,
  sx,
}: {
  userName: string;
  sx?: SxProps;
}) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        p: 0,
        backgroundColor: theme.palette.primary.main,
        zIndex: 100,
        borderTop: 1 / 2,
        borderColor: "gray",
        ...sx,
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: 1,
          m: 2,
          boxSizing: "border-box",
        }}
      >
        <AccountCircleIcon fontSize="small" />
        <Typography sx={{ ml: 2, fontSize: 14 }}>{userName}</Typography>
      </Box>
    </Box>
  );
}
