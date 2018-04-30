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
  lists: Array<RaveTodoItem>;
  list: Array<RaveTodoItem>;
  title = 'app';
  emittedName;
  testList = [1,2,3];

  constructor() {
    this.list = new Array<RaveTodoItem>({
        title: "This is your first item!",
        description: "With an awesome description",
        state: RaveTodoItemEnum.InProgress,
        priority: 1,
        children: new Array<RaveTodoItem>(),
        isCollapsed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      });

    // let firstItemArr = new Array<RaveTodoItem>({
    //   title: "This is your first item!",
    //   description: "With an awesome description",
    //   state: RaveTodoItemEnum.InProgress,
    //   priority: 1,
    //   children: new Array<RaveTodoItem>(),
    //   isCollapsed: false,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // });
    // let secondItemArr = new Array<RaveTodoItem>({
    //   title: "This is your second item!",
    //   description: "With an awesome description",
    //   state: RaveTodoItemEnum.InProgress,
    //   priority: 1,
    //   children: new Array<RaveTodoItem>(),
    //   isCollapsed: false,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // });

    // this.lists = new Array<RaveTodoItem>();
    // this.lists.push({
    //   title: "Work",
    //   description: "Stuff for Work",
    //   state: RaveTodoItemEnum.InProgress,
    //   children: firstItemArr,
    //   priority: 1,
    //   isCollapsed: false,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // });
    // this.lists.push({
    //   title: "Home",
    //   description: "Stuff for home",
    //   state: RaveTodoItemEnum.InProgress,
    //   children: secondItemArr,
    //   isCollapsed: false,
    //   priority: 2,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // });

    
  }

  ngOnInit() {
    
  }


}
