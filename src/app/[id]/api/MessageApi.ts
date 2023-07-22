import axios from "axios";
import { Message } from "../type";

export const fetchMessages = async (id: string) => {
  return axios.get(`http://localhost:8080/messages/topic?topic=${id}`);
};

export const postMessage = async (message: Message) => {
  return axios.post("http://localhost:8080/messages", message);
};