import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rave-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input('itemName') itemName: string = 'New Name';
  @Output() itemNameEmitted: EventEmitter<string> = new EventEmitter;

  constructor() { } 

  ngOnInit() {
  }

  myNameEmitted(name: string) {
    this.itemNameEmitted.next(name);
  }

}
