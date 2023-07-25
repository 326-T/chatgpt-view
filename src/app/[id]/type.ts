export interface Message {
  id: string;
  role: string;
  content: string;
  topicId: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
}

const today = new Date();

export const MessageInit = {
  id: "",
  role: "user",
  content: "",
  topicId: "",
  createdAt: today,
  updatedAt: today,
  version: 0,
};

export interface PostMessageCondition {
  useMemory: boolean;
  respond: boolean;
}

export const PostMessageConditionInit = {
  useMemory: false,
  respond: true,
};