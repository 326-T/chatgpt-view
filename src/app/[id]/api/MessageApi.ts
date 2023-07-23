import axios from "@/util/axios";
import { Message } from "../type";

export const fetchMessages = async (id: string) => {
  return axios.get(`/messages/topic?topic=${id}`);
};

export const postMessage = async (message: Message) => {
  return axios.post("/messages/respond", message);
};