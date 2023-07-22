import React from "react";

import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AddCommentIcon from "@mui/icons-material/AddComment";
import { postTopic } from "@/app/api/TopicApi";
import { Topic } from "@/app/type";

export default function AddThreadForm({ topic }: { topic: Topic }) {
  const theme = useTheme();

  return (
    <Box
      component="form"
      onSubmit={() => postTopic(topic)}
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
