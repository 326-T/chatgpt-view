import React from "react";
import { useRouter } from "next/navigation";

import { Box, Button, SxProps, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import { postTopic } from "@/app/api/TopicApi";
import { Topic } from "@/app/type";

export default function AddTopicCard({
  topic,
  sx,
}: {
  topic: Topic;
  sx?: SxProps;
}) {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Box
      sx={{
        display: "flex",
        p: 0,
        backgroundColor: theme.palette.primary.main,
        zIndex: 100,
        ...sx,
      }}
    >
      <Box
        component="form"
        onSubmit={() => router.push("/")}
        sx={{
          width: 1,
          p: 0.5,
          m: 1,
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
    </Box>
  );
}
