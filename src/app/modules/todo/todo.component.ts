import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { RaveTodoItem, RaveTodoItemEnum } from './todo.model';
import "rxjs/add/observable/of";

@Component({
  selector: 'rave-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input('listName') listName: string = 'New Name';
  @Input('items') items: Observable<RaveTodoItem[]>;
  @Output() itemNameEmitted: EventEmitter<string> = new EventEmitter;
  @Output() itemStatusChanged: EventEmitter<string> = new EventEmitter;
  @Output() itemOrderChanged: EventEmitter<string> = new EventEmitter;
 

  constructor() { 
    
  } 

  ngOnInit() {
    this.orderItemsByPriority();
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

}
