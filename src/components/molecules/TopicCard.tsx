import axios from "axios";

import { Topic } from "@/app/type";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { makeStyles } from "@mui/styles";
import CommentIcon from "@mui/icons-material/Comment";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { deleteTopic } from "@/app/api/TopicApi";

const useStyles = makeStyles({
  link: {
    textDecoration: "none", // 下線を無効化
    color: "inherit", // 親要素の色を継承
  },
});

export default function TopicCard({ topic }: { topic: Topic }) {
  const classes = useStyles();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: 1,
        p: 1.5,
      }}
    >
      <Link
        href={`/${topic.id}`}
        id={topic.id.toString()}
        className={classes.link}
      >
        <Box sx={{ display: "flex" }}>
          <CommentIcon />
          <Typography sx={{ ml: 2, mr: 2 }}>{topic.title}</Typography>
        </Box>
      </Link>
      <Box>
        <Button sx={{ p: 0, minWidth: 0 }} onClick={() => {}}>
          <EditIcon />
        </Button>
        <Button
          sx={{ p: 0, minWidth: 0 }}
          onClick={() => deleteTopic(topic.id)}
        >
          <DeleteForeverIcon />
        </Button>
      </Box>
    </Box>
  );
}
