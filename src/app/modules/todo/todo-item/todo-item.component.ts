import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { RaveTodoItem, RaveTodoItemEnum, RaveTodoList } from '../todo.model';
import { DragulaService } from 'ng2-dragula';
import "rxjs/add/observable/of";

@Component({
  selector: 'rave-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input('list') list: RaveTodoItem;
  @Input('showHiddenContent') showHiddenContent:boolean = false;
  @Output() itemNameEmitted: EventEmitter<string> = new EventEmitter;
  @Output() itemStatusChanged: EventEmitter<string> = new EventEmitter;
  @Output() itemOrderChanged: EventEmitter<string> = new EventEmitter;
  

  constructor(private dragService: DragulaService) { 

  }  

  ngOnInit() { 
    // this.orderItemsByPriority();
  }

  myNameEmitted(name: string) {
    this.itemNameEmitted.next(name);
  }
  
  // orderItemsByPriority() {
  //   this.list = this.list.map((data) => {
  //     data.sort((a, b) => {
  //       return a.priority < b.priority ? -1 : 1;
  //     });
  //   return data;
  //   });
  // }

  addElement() {
    let testItem:RaveTodoItem = {
      title: "test",
      description: "testdesc",
      state: RaveTodoItemEnum.InProgress,
      priority: 1,
      items: new Array<RaveTodoItem>(),
      createdAt: new Date(),
      updatedAt: new Date()
    };

    // this.list.items.subscribe(items => {
    //   items.push(testItem);
    // });
    this.list.items.push(testItem);
  }

  addChild(item: RaveTodoItem) {
    let testChild:RaveTodoItem = {
      title: "testChild",
      description: "testdesc child",
      state: RaveTodoItemEnum.InProgress,
      priority: 1,
      items: new Array<RaveTodoItem>(),
      createdAt: new Date(),
      updatedAt: new Date()
    };

    item.items.push(testChild);
  }

}
