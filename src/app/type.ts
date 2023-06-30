export interface Thread {
  id: number;
  title: string;
}

const today = new Date();

export const ThreadInit = {
  id: 0,
  title: "",
  created_at: today,
};
