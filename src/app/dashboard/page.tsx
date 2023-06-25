"use client";
import axios from "axios";
import { useState, useEffect } from "react";

import { Message, MessageInit } from "@/app/dashboard/type/Message";

import DashBoardLayout from "@/components/DashBoardLayout";
import MessageList from "./component/MessageList";
import Form from "./component/Form";
import { Box } from "@mui/material";

export default function DashBoardPage() {
  const [message, setMessage] = useState<Message>(MessageInit);
  const [messages, setMessages] = useState<Message[]>([]);

  const fetch = async () => {
    await axios
      .get("http://localhost:8000/message_logs/message_logs/")
      .then((result) => {
        setMessages(result.data);
      });
  };

  const post = async () => {
    await axios.post(
      "http://localhost:8000/message_logs/message_logs/",
      message
    );
    await fetch();
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <DashBoardLayout>
      <MessageList messages={messages} />
      <Form
        content={message.content}
        onChange={(e) => setMessage({ ...message, content: e.target.value })}
        handleSubmit={post}
      />
    </DashBoardLayout>
  );
}
