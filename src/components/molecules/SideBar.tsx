import { useState, useEffect } from "react";

import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AddTopicCard from "@/components/molecules/AddTopicCard";
import { Topic, TopicInit } from "@/app/type";
import { fetchTopics } from "@/app/api/TopicApi";
import TopicList from "../organisms/TopicList";
import UserCard from "./UserCard";

export default function SideBar({ id }: { id: string }) {
  const theme = useTheme();
  const [topic, setTopic] = useState<Topic>(TopicInit);
  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    fetchTopics().then((result) => setTopics(result.data));
  }, []);

  return (
    <Box
      overflow="auto"
      sx={{
        width: 1,
        height: 1,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      }}
    >
      <AddTopicCard
        topic={topic}
        sx={{
          width: 1 / 5,
          position: "absolute",
        }}
      />
      <UserCard
        userName="佐藤 太郎"
        sx={{
          width: 1 / 5,
          position: "absolute",
          bottom: 0,
        }}
      />
      <Box sx={{ height: 60 }} />
      <TopicList id={id} />
      <Box sx={{ height: 60 }} />
    </Box>
  );
}
