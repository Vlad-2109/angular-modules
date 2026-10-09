import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './';
import { HeaderComponent } from './header';
import { UserComponent } from './user';
import { TasksComponent } from './tasks';
import { TaskComponent } from './tasks/task/task';
import { NewTaskComponent } from './tasks/new-task';
import { CardComponent } from './shared/card';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    CardComponent,
    TaskComponent,
    NewTaskComponent,
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule],
})
export class AppModule {}
