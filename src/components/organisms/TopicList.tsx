import { useState, useEffect } from "react";
import { Topic, TopicInit } from "@/app/type";
import { Box, List } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import TopicCard from "@/components/molecules/TopicCard";
import AddTopicForm from "@/components/molecules/AddTopicCard";
import { fetchTopics } from "@/app/api/TopicApi";

export default function TopicList({ id }: { id: string }) {
  const theme = useTheme();

  const [topic, setTopic] = useState<Topic>(TopicInit);
  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    fetchTopics().then((result) => setTopics(result.data));
  }, []);

  return (
    <Box overflow="auto" sx={{ width: 1, p: 1, boxSizing: "border-box" }}>
      {topics.map((topic) => (
        <TopicCard topic={topic} highlight={id === topic.id} />
      ))}
    </Box>
  );
}
