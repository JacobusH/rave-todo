import { Component, OnInit } from '@angular/core';
import { RaveTodoItem, RaveTodoItemEnum, RaveTodoList } from './modules/todo/todo.model';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { TodoService } from './modules/todo/todo.service';
import "rxjs/add/observable/of";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  list: RaveTodoList;

  constructor(private todoServie: TodoService) {
    this.list = this.todoServie.createList();
  }

  ngOnInit() {
    
  }

  onChange() {
    // console.log(this.list);
  }


}
