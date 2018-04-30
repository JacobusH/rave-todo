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

}
