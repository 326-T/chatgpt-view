import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

import { Message } from "@/app/[id]/type";

export default function MessageCard({ message }: { message: Message }) {
  const theme = useTheme();

  return (
    <Box
      sx={
        message.role === "user"
          ? {
              backgroundColor: theme.palette.background.default,
              color: theme.palette.common.black,
              borderTop: 1 / 2,
              borderBottom: 1 / 2,
              borderColor: "#DEDEDF",
            }
          : {
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.common.black,
              borderTop: 1 / 2,
              borderBottom: 1 / 2,
              borderColor: "#DEDEDF",
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
}
