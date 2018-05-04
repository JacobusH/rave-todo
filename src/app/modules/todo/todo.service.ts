import { Injectable } from '@angular/core';
import { RaveTodoItem, RaveTodoItemEnum, RaveTodoList } from './todo.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TodoService {
  private notificationSource = new Subject<string>();
  public notificationReceived = this.notificationSource.asObservable();

  constructor() { }

  notify(newMessage: string) {
    this.notificationSource.next(newMessage);
    console.log(newMessage);
  }

}
