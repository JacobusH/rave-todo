import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RaveTodoItem, RaveTodoItemEnum, RaveTodoList } from '../todo.model';

@Component({
  selector: 'rave-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input('list') list: RaveTodoList;
  @Output('change') change: EventEmitter<RaveTodoList> = new EventEmitter<RaveTodoList>();
  

  constructor() {
  }

  ngOnInit() {
    
  }

  addChild() {
    let testChild:RaveTodoItem = {
      title: "new task",
      description: "description",
      state: RaveTodoItemEnum.NotStarted,
      priority: 1,
      children: new Array<RaveTodoItem>(),
      isCollapsed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    this.list.children.push(testChild);
  }

  newItem(event: any) {
    this.list.children.push({
      title: event.target.value,
      description: "description",
      state: RaveTodoItemEnum.NotStarted,
      priority: 1,
      children: new Array<RaveTodoItem>(),
      isCollapsed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    event.target.value = "";
    this.onChange();
  }

  onChange() {
    this.change.emit(this.list);
  }

}
