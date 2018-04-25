import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { RaveTodoItem, RaveTodoItemEnum } from './todo-list.model';
import "rxjs/add/observable/of";

@Component({
  selector: 'rave-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoComponent implements OnInit {
  @Input('items') items: Observable<RaveTodoItem[]>;
  @Output() itemNameEmitted: EventEmitter<string> = new EventEmitter;
  @Output() itemStatusChanged: EventEmitter<string> = new EventEmitter;
  @Output() itemOrderChanged: EventEmitter<string> = new EventEmitter;
 

  constructor() { 
    
  }  

  ngOnInit() {
    // this.orderItemsByPriority();
  }

  myNameEmitted(name: string) {
    this.itemNameEmitted.next(name);
  }
  
  orderItemsByPriority() {
    this.items = this.items.map((data) => {
      data.sort((a, b) => {
        return a.priority < b.priority ? -1 : 1;
      });
    return data;
    });
  }

  addElement() {
    let testItem:RaveTodoItem = {
      title: "test",
      description: "testdesc",
      state: RaveTodoItemEnum.InProgress,
      priority: 1,
      children: new Array<RaveTodoItem>(),
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.items.subscribe(items => {
      items.push(testItem);
    });
  }

  addChild(item: RaveTodoItem) {
    let testChild:RaveTodoItem = {
      title: "testChild",
      description: "testdesc child",
      state: RaveTodoItemEnum.InProgress,
      priority: 1,
      children: new Array<RaveTodoItem>(),
      createdAt: new Date(),
      updatedAt: new Date()
    };

    item.children.push(testChild);
  }

}
