import { NgModule } from '@angular/core';
import { UserTasks } from './user-tasks.component';
import { UserTaskForm } from './user-task-form/user-task-form';
import { UserTask } from './user-task/user-task.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [UserTasks, UserTaskForm, UserTask],
  imports: [FormsModule, SharedModule, DatePipe],
  exports: [UserTasks],
})
export class TasksModule {}
