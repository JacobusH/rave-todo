import { Component, OnInit } from '@angular/core';
import { RaveTodoItem, RaveTodoItemEnum } from './modules/todo/todo.model';
import { Observable } from 'rxjs';
import "rxjs/add/observable/of";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'app';
  itemArr: Array<RaveTodoItem> = new Array;
  itemObby: Observable<RaveTodoItem[]>;
  emittedName;

  constructor() {
    let item1:RaveTodoItem = {
      title: "title1",
      description: "desc1",
      state: RaveTodoItemEnum.InProgress,
      priority: 10,
      children: new Array<RaveTodoItem>(),
      createdAt: new Date(),
      updatedAt: new Date()
    };
    let item2:RaveTodoItem = {
      title: "title2",
      description: "desc2",
      state: RaveTodoItemEnum.Testing,
      priority: 11,
      children: new Array<RaveTodoItem>(),
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.itemArr.push(item1, item2);

    this.itemObby = Observable.of(this.itemArr);
    
  }

  ngOnInit() {
    
  }


}
