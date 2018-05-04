import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { RaveTodoItem, RaveTodoItemEnum } from '../todo.model';
import { DragulaService } from 'ng2-dragula';
import { TodoService } from '../todo.service';
import { v4 as uuid } from 'uuid';
import "rxjs/add/observable/of";

@Component({
  selector: 'rave-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input('testArr') testArr: number[];
  @Input('list') list: RaveTodoItem;
  @Input('showHiddenContent') showHiddenContent:boolean = false;
  
  constructor(private dragService: DragulaService, private todoService: TodoService) { 
    
  }  

  ngOnInit() { 
    // this.orderItemsByPriority();
  }

  // orderItemsByPriority() {
  //   this.list = this.list.map((data) => {
  //     data.sort((a, b) => {
  //       return a.priority < b.priority ? -1 : 1;
  //     });
  //   return data;
  //   });
  // }

  addChild(item: RaveTodoItem) {
    let testChild:RaveTodoItem = {
      id: uuid(),
      title: "",
      description: "testdesc child",
      state: RaveTodoItemEnum.InProgress,
      priority: 1,
      children: new Array<RaveTodoItem>(),
      isCollapsed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    item.children.push(testChild);
    this.todoService.notify("New child added: " + testChild.id);
  }

  titleChanged(item: RaveTodoItem) {
    this.todoService.notify("Title changed: " + item.id);
  }

  collapse(item: RaveTodoItem) {
    this.list.isCollapsed = !this.list.isCollapsed;
    this.todoService.notify("Collapsed everything under: " + item.id);
  }

}
