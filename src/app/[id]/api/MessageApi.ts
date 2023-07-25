import axios from "@/util/axios";
import { Message, PostMessageCondition } from "../type";

export const fetchMessages = async (id: string) => {
  return axios.get(`/messages/topic?topic=${id}`);
};

export const postMessage = async (message: Message, condition: PostMessageCondition) => {
  return axios.post(`/messages?respond=${condition.respond}&use-memory=${condition.useMemory}`, message);
};