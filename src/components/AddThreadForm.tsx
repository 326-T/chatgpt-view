import React from "react";
import axios from "axios";

import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AddCommentIcon from "@mui/icons-material/AddComment";

// export default function ThreadCard({ thread }: { thread: Thread }) {

export default function AddThreadForm() {
  const theme = useTheme();
  const post = async () => {
    await axios.post("http://localhost:8000/message_logs/threads/", {
      title: "New Chat",
    });
  };
  return (
    <Box
      component="form"
      onSubmit={post}
      sx={{
        width: 0.8,
        p: 0.5,
        border: 1,
        borderColor: theme.palette.primary.main,
        borderRadius: 1,
      }}
    >
      <Button type="submit" color="primary">
        <AddCommentIcon color="primary" />
        <Typography sx={{ ml: 2 }}>New Chat</Typography>
      </Button>
    </Box>
  );
}
