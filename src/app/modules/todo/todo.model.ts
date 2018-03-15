export interface RaveTodoItem {
  title: string; 
  description?: string;
  state:RaveTodoItemEnum;
  priority: number;
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