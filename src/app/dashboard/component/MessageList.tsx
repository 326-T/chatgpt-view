import { Message } from "@/app/dashboard/type/Message";
import { List } from "@mui/material";
import React from "react";
import MessageCard from "@/app/dashboard/component/MessageCard";

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <List sx={{ p: 0 }}>
      {messages.map((message) => (
        <MessageCard message={message} />
      ))}
    </List>
  );
};

export default MessageList;
