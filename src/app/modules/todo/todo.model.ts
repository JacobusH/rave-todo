import { Observable } from 'rxjs';

export interface RaveTodoList {
  title: string; 
  description?: string;
  items: Array<RaveTodoItem>
  state:RaveTodoItemEnum;
  priority: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface RaveTodoItem {
  title: string; 
  description?: string;
  state:RaveTodoItemEnum;
  priority: number;
  items: Array<RaveTodoItem>;
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