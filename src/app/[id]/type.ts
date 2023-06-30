export interface Message {
  id: number;
  role: string;
  content: string;
  thread: number;
  created_at: Date;
}

const today = new Date();

export const MessageInit = {
  id: 0,
  role: "user",
  content: "",
  thread: 0,
  created_at: today,
};
