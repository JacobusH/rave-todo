import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RaveTodoItem, RaveTodoItemEnum, RaveTodoList } from '../todo.model';
import { v4 as uuid } from 'uuid';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'rave-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input('list') list: RaveTodoList;
  @Output('change') change: EventEmitter<boolean> = new EventEmitter;
  
  test = [1,2,3, 4, 5, 6];

  constructor(private todoService: TodoService) {
    this.todoService.notificationReceived.subscribe(
      message => {
        // do something with message such as access API
      }
    );  
  }

  ngOnInit() {
    let test$ = Observable.of(this.test);

    test$.subscribe(x => {
      console.log(x);
    })
    
  }

  addToTest() {
    this.test.push(99);
  }

  addChild() {
    let testChild:RaveTodoItem = {
      id:uuid(),
      parent: this.list,
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
    let item: RaveTodoItem = {
      id: uuid(),
      parent: this.list,
      title: event.target.value,
      description: "description",
      state: RaveTodoItemEnum.NotStarted,
      priority: 1,
      children: new Array<RaveTodoItem>(),
      isCollapsed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.list.children.push(item);

    event.target.value = "";
    this.todoService.notify("New first level item: " + item.id, item);
  }

  onChange() {
    // this.change.emit(true);
  }

}
