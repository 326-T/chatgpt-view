import { Message } from "@/app/[id]/type";
import { Box } from "@mui/material";
import React from "react";
import MessageCard from "@/app/[id]/component/MessageCard";
import EmptyCard from "./EmptyCard";

export default function MessageList({ messages }: { messages: Message[] }) {
  return (
    <Box height="inherit" overflow="auto">
      {messages.map((message) => (
        <MessageCard message={message} />
      ))}
      <EmptyCard />
    </Box>
  );
}
