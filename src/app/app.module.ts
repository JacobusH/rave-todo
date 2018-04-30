import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TodoModule } from './modules/todo/todo.module';


import { AppComponent } from './app.component';
// import { TodoComponent } from './modules/todo/todo.component';


@NgModule({
  declarations: [
    AppComponent,
    // TodoComponent
  ],
  imports: [
    BrowserModule,
    TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
