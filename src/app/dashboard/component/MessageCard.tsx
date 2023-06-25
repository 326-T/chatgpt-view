import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

import { Box } from "@mui/material";

import { Message } from "@/app/dashboard/type/Message";

interface MessageCardProps {
  message: Message;
}

const MessageCard: React.FC<MessageCardProps> = ({ message }) => {
  return (
    <Box
      sx={
        message.role === "user"
          ? { backgroundColor: "#4527a0", color: "white" }
          : { backgroundColor: "#ede7f6" }
      }
    >
      <Box sx={{ width: 1, padding: 1 }}>
        <Box
          sx={{
            width: 0.8,
            minWidth: 200,
            m: "auto",
          }}
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {message.content}
          </ReactMarkdown>
        </Box>
      </Box>
    </Box>
  );
};

export default MessageCard;
