import axios from "axios";
import { Topic } from "../type";

export const fetchTopics = async () => {
  return axios.get("http://localhost:8080/topics");
};

export const postTopic = async (topic: Topic) => {
  return axios.post("http://localhost:8080/topics", topic);
};

export const deleteTopic = async (id: number) => {
  axios.delete(
    `http://localhost:8080/topics/${id}`
  );
};
