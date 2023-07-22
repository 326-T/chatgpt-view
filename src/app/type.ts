export interface Topic {
  id: number;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
}

const today = new Date();

export const TopicInit = {
  id: 0,
  title: "",
  createdAt: today,
  updatedAt: today,
  version: 0,
};
