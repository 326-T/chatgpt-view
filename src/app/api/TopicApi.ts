import axios from "@/util/axios";
import { Topic } from "../type";

export const fetchTopics = async () => {
  return axios.get("/topics");
};

export const postTopic = async (topic: Topic) => {
  return axios.post("/topics", topic);
};

export const deleteTopic = async (id: string) => {
  axios.delete(
    `/topics/${id}`
  );
};
