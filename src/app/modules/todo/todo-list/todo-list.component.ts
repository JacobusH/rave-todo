import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RaveTodoItem, RaveTodoItemEnum, RaveTodoList } from '../todo.model';

@Component({
  selector: 'rave-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input('list') list: RaveTodoList;

  constructor() { 
   
  }

  ngOnInit() {
  
  }

  addFirstOrderItem() {
    console.log('in list');
    this.list.items.push({
      title: "test",
      description: "testdesc",
      state: RaveTodoItemEnum.InProgress,
      priority: 1,
      items: new Array<RaveTodoItem>(),
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }

}
 