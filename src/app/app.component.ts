import { Component, OnInit } from '@angular/core';
import { RaveTodoItem, RaveTodoItemEnum } from './modules/todo/todo-list.model';
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

  lists: Array<RaveTodoItem[]>;

  constructor() {
    this.lists = new Array<RaveTodoItem[]>();
    this.lists.push([{
      title: "Work",
      description: "",
      state: RaveTodoItemEnum.InProgress,
      priority: 10,
      children: new Array<RaveTodoItem>(),
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
    this.lists.push([{
      title: "title2",
      description: "desc2",
      state: RaveTodoItemEnum.InProgress,
      priority: 10,
      children: new Array<RaveTodoItem>(),
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
    this.lists.push([{
      title: "title3",
      description: "desc3",
      state: RaveTodoItemEnum.InProgress,
      priority: 10,
      children: new Array<RaveTodoItem>(),
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
    this.lists.push([{
      title: "title4",
      description: "desc4",
      state: RaveTodoItemEnum.InProgress,
      priority: 10,
      children: new Array<RaveTodoItem>(),
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

    // this.itemObby = Observable.of(this.itemArr);
    
  }

  ngOnInit() {
    
  }


}
