export interface Message {
  id: number;
  role: string;
  content: string;
  created_at: Date;
}

const today = new Date();

export const MessageInit = {
  id: 0,
  role: "user",
  content: "",
  created_at: today,
};
