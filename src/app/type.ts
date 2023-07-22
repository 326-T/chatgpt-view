export interface Topic {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
}

const today = new Date();

export const TopicInit = {
  id: "",
  title: "",
  createdAt: today,
  updatedAt: today,
  version: 0,
};
