import { Injectable } from '@angular/core';
import { RaveTodoItem, RaveTodoItemEnum, RaveTodoList } from './todo.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TodoService {

  constructor() { }

  private notificationSource = new Subject<string>();

  public notificationReceived = this.notificationSource.asObservable();

  notify(newMessage: string) {
    this.notificationSource.next(newMessage);
    console.log(newMessage);
  }

}
