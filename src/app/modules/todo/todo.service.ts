import { Injectable } from '@angular/core';
import { RaveTodoItem, RaveTodoItemEnum, RaveTodoList } from './todo.model';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/observable';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TodoService {
  notificationSource = new Subject<string>();
  notificationReceived = this.notificationSource.asObservable();
  listChanges: Observable<RaveTodoList>;

  constructor() { 
    
  }

  notify(newMessage: string, item: RaveTodoItem) {
    this.notificationSource.next(newMessage);
    console.log(newMessage);

    let parent = this.getParentList(item);
    console.log("parentListId: " + parent.id);
    console.log(parent);

  }

  createList(): RaveTodoList {
    return {
      id: uuid(),
      parent: null,
      title: "This is the title of the List!",
      description: "With an awesome description",
      state: RaveTodoItemEnum.InProgress,
      priority: 1,
      children: new Array<RaveTodoItem>(),
      isCollapsed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    };
  }

  getParentList(item: RaveTodoItem): RaveTodoItem | RaveTodoList {
    let parent: RaveTodoItem | RaveTodoList = null;
    while(item.parent != null) {
      parent = item = item.parent
    }

    return parent;
  }


}
