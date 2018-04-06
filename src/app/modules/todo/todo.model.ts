export interface RaveTodoItem {
  title: string; 
  description?: string;
  state:RaveTodoItemEnum;
  priority: number;
  children: Array<RaveTodoItem>;
  createdAt: Date;
  updatedAt: Date;
}

export enum RaveTodoItemEnum {
  NotStarted,
  InProgress,
  UnderReview,
  Testing,
  Finished,  
}