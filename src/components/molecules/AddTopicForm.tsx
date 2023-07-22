import React from "react";

import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import { postTopic } from "@/app/api/TopicApi";
import { Topic } from "@/app/type";

export default function AddThreadForm({ topic }: { topic: Topic }) {
  const theme = useTheme();

  return (
    <Box
      component="form"
      onSubmit={() => postTopic(topic)}
      sx={{
        width: 1,
        p: 0.5,
        boxSizing: "border-box",
        border: 1 / 2,
        borderColor: "gray",
        borderRadius: 1,
      }}
    >
      <Button type="submit" color="primary" sx={{ color: "inherit" }}>
        <AddIcon fontSize="small" />
        <Typography sx={{ ml: 1, fontSize: 14 }}>New chat</Typography>
      </Button>
    </Box>
  );
}
