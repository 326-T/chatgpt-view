import { Message } from "@/app/[id]/type";
import { Box, List } from "@mui/material";
import React from "react";
import MessageCard from "@/app/[id]/component/MessageCard";
import AddChatForm from "../../../components/AddThreadForm";

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <Box height="inherit" overflow="auto">
      <List sx={{ p: 0 }}>
        {messages.map((message) => (
          <MessageCard message={message} />
        ))}
      </List>
    </Box>
  );
};

export default MessageList;
