"use client";
import { useState, useEffect } from "react";
import {
  Message,
  MessageInit,
  PostMessageCondition,
  PostMessageConditionInit,
} from "@/app/[id]/type";

import DashBoardLayout from "@/components/DashBoardLayout";
import MessageList from "./component/MessageList";
import Form from "./component/Form";
import { Box } from "@mui/material";
import { fetchMessages, postMessage } from "./api/MessageApi";

export default function DashBoardPage({ params }: { params: { id: string } }) {
  const [message, setMessage] = useState<Message>(MessageInit);
  const [messages, setMessages] = useState<Message[]>([]);
  const [postMessageCondition, setPostMessageCondition] =
    useState<PostMessageCondition>(PostMessageConditionInit);

  useEffect(() => {
    fetchMessages(params.id).then((result) => setMessages(result.data));
  }, []);

  return (
    <DashBoardLayout id={params.id}>
      <MessageList messages={messages} />
      <Box sx={{ width: 4 / 5, position: "absolute", bottom: 20 }}>
        <Form
          content={message.content}
          onChange={(e) => setMessage({ ...message, content: e.target.value })}
          handleSubmit={() => {
            setMessage(MessageInit);
            postMessage(
              { ...message, topicId: params.id },
              postMessageCondition
            ).then(() => {
              fetchMessages(params.id).then((result) =>
                setMessages(result.data)
              );
            });
          }}
          condition={postMessageCondition}
          setCondition={setPostMessageCondition}
        />
      </Box>
    </DashBoardLayout>
  );
}
