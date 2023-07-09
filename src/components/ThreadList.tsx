import { useState, useEffect } from "react";
import axios from "axios";
import { Thread, ThreadInit } from "@/app/type";
import { Box, List } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import ThreadCard from "@/components/ThreadCard";
import AddThreadForm from "@/components/AddThreadForm";

export default function ThreadList({}: {}) {
  const theme = useTheme();

  const [thread, setThread] = useState<Thread>(ThreadInit);
  const [threads, setThreads] = useState<Thread[]>([]);

  const fetch = async () => {
    await axios
      .get("http://localhost:8000/message_logs/threads/")
      .then((result) => {
        setThreads(result.data);
      });
  };

  const post = async () => {
    await axios.post("http://localhost:8000/message_logs/threads/", thread);
    await fetch();
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <List sx={{ height: 1, p: 0 }}>
      <AddThreadForm />

      {threads.map((thread) => (
        <ThreadCard thread={thread} />
      ))}
    </List>
  );
}
