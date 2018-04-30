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
  lists: Array<RaveTodoList>;
  title = 'app';
  emittedName;


  constructor() {
    let firstItemArr = new Array<RaveTodoItem>();
    firstItemArr.push({
      title: "first",
      description: "testdesc",
      state: RaveTodoItemEnum.InProgress,
      priority: 1,
      items: new Array<RaveTodoItem>(),
      createdAt: new Date(),
      updatedAt: new Date()
    });

    this.lists = new Array<RaveTodoList>();
    this.lists.push({
      title: "Work",
      description: "Stuff for Work",
      state: RaveTodoItemEnum.InProgress,
      items: firstItemArr,
      priority: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    this.lists.push({
      title: "Home",
      description: "Stuff for home",
      state: RaveTodoItemEnum.InProgress,
      items: firstItemArr,
      priority: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    this.lists.push({
      title: "School",
      description: "Stuff for school",
      state: RaveTodoItemEnum.InProgress,
      items: firstItemArr,
      priority: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    this.lists.push({
      title: "Play",
      description: "Stuff for Play",
      state: RaveTodoItemEnum.InProgress,
      items: firstItemArr,
      priority: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    
  }

  ngOnInit() {
    
  }


}
