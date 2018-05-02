import { Component, OnInit } from '@angular/core';
import { RaveTodoItem, RaveTodoItemEnum, RaveTodoList } from './modules/todo/todo.model';
import { Observable } from 'rxjs';
import "rxjs/add/observable/of";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  list: RaveTodoList;

  constructor() {
    this.list = {
      title: "This is the title of the List!",
      description: "With an awesome description",
      state: RaveTodoItemEnum.InProgress,
      priority: 1,
      children: new Array<RaveTodoItem>({
        title: "This is the fist Item!",
        description: "With an awesome description",
        state: RaveTodoItemEnum.InProgress,
        priority: 1,
        children: new Array<RaveTodoItem>(),
        isCollapsed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }),
      isCollapsed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    };
  }

  ngOnInit() {
    
  }

  onChange(list: RaveTodoList) {
    console.log(list);
  }


}
