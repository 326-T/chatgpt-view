import axios from "axios";

import { Topic } from "@/app/type";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { makeStyles } from "@mui/styles";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { deleteTopic } from "@/app/api/TopicApi";

const useStyles = makeStyles({
  link: {
    textDecoration: "none", // 下線を無効化
    color: "inherit", // 親要素の色を継承
  },
});

export default function TopicCard({
  topic,
  highlight,
}: {
  topic: Topic;
  highlight?: boolean;
}) {
  const classes = useStyles();

  return (
    <Box
      sx={
        highlight
          ? {
              display: "flex",
              justifyContent: "space-between",
              width: 1,
              p: 1.5,
              boxSizing: "border-box",
              backgroundColor: "#343541",
            }
          : {
              display: "flex",
              justifyContent: "space-between",
              width: 1,
              p: 1.5,
              boxSizing: "border-box",
            }
      }
    >
      <Link
        href={`/${topic.id}`}
        id={topic.id.toString()}
        className={classes.link}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ChatBubbleOutlineIcon style={{ fontSize: 16 }} />
          <Typography sx={{ ml: 1, mr: 1, fontSize: 14 }}>
            {topic.title}
          </Typography>
        </Box>
      </Link>
      <Box sx={{ display: "flex", alignItems: "centor" }}>
        <Button
          sx={{ p: 0, mr: 1, minWidth: 0, color: "inherit" }}
          onClick={() => {}}
        >
          <EditIcon style={{ fontSize: 16 }} />
        </Button>
        <Button
          sx={{ p: 0, minWidth: 0, color: "inherit" }}
          onClick={() => deleteTopic(topic.id)}
        >
          <DeleteForeverIcon style={{ fontSize: 16 }} />
        </Button>
      </Box>
    </Box>
  );
}
