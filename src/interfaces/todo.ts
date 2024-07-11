export interface ITask {
  todo: string;
}

export interface IALLTasks extends ITask {
  id: string;
  todo: string;
  userId: string;
}
