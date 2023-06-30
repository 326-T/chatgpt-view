import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

import { Message } from "@/app/[id]/type";

interface MessageCardProps {
  message: Message;
}

const MessageCard: React.FC<MessageCardProps> = ({ message }) => {
  const theme = useTheme();

  return (
    <Box
      sx={
        message.role === "user"
          ? {
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.common.black,
            }
          : {
              backgroundColor: theme.palette.background.default,
              color: theme.palette.common.black,
            }
      }
    >
      <Box sx={{ width: 1, padding: 1 }}>
        <Box
          sx={{
            width: 0.6,
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
