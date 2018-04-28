import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { DragulaModule } from 'ng2-dragula';
import { TodoComponent } from './todo-list.component';
import { MatCheckboxModule, MatInputModule } from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports: [
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    CommonModule,
    DragulaModule,
    MatCheckboxModule,
    MatInputModule
  ],
  declarations: [
    TodoComponent,
  ],
  exports: [
    TodoComponent,
  ]
})
export class TodoModule { }
