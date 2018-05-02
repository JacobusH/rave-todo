import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { RaveTodoItem, RaveTodoItemEnum } from '../todo.model';
import { DragulaService } from 'ng2-dragula';
import { TodoService } from '../todo.service';
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
  @Output('change') change: EventEmitter<boolean> = new EventEmitter;
  
  constructor(private dragService: DragulaService, private todoService: TodoService) { 
    
  }  

  ngOnInit() { 
    // this.orderItemsByPriority();
  }

  onChange() {
    this.todoService.notify("I have a message");
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
    // this.onChange();
  }

  collapse(item: RaveTodoItem) {
    this.list.isCollapsed = !this.list.isCollapsed;
    // this.onChange();
  }

}
