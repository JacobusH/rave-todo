import { Observable } from 'rxjs';

export interface RaveTodoItem {
  title: string; 
  description?: string;
  state:RaveTodoItemEnum;
  priority: number;
  children: Array<RaveTodoItem>;
  isCollapsed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface RaveTodoList {
  title: string; 
  description?: string;
  state:RaveTodoItemEnum;
  priority: number;
  children: Array<RaveTodoItem>;
  isCollapsed: boolean;
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