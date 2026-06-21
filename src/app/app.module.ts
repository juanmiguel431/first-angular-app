import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Header } from './header/header';
import { UserComponent } from './user/user.component';
import { UserTasks } from './user-tasks/user-tasks.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserTask } from './user-tasks/user-task/user-task.component';
import { UserTaskForm } from './user-tasks/user-task-form/user-task-form';
import { FormsModule } from '@angular/forms';
import { Card } from './shared/card/card';
import { DatePipe, NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [AppComponent, Header, UserTasks, UserTaskForm, Card, UserTask, UserComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule, NgOptimizedImage],
})
export class AppModule {}
