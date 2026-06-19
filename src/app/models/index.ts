
export type User = {
  id: string;
  name: string;
  avatar: string;
}

export type Task = {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
  completed: boolean;
}

export type UserTaskEvent = {
  event: MouseEvent;
  task: Task;
};

export type UserTaskFormDto = {
  title: string;
  summary: string;
  dueDate: string;
};
