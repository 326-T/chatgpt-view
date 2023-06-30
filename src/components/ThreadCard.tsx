import { Thread } from "@/app/type";
import { ListItemText } from "@mui/material";
import Link from "next/link";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  link: {
    textDecoration: "none", // 下線を無効化
    color: "inherit", // 親要素の色を継承
  },
});

export default function ThreadCard({ thread }: { thread: Thread }) {
  const classes = useStyles();
  return (
    <Link
      href={`/${thread.id}`}
      id={thread.id.toString()}
      className={classes.link}
    >
      <ListItemText
        primary={thread.title}
        sx={{
          p: 2,
        }}
      />
    </Link>
  );
}
