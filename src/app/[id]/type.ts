export interface Message {
  id: number;
  role: string;
  content: string;
  topicId: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
}

const today = new Date();

export const MessageInit = {
  id: 0,
  role: "user",
  content: "",
  topicId: "",
  createdAt: today,
  updatedAt: today,
  version: 0,
};
