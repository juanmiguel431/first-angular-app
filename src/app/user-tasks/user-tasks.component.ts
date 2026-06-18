import { Component, input } from '@angular/core';
import { UserTask } from './user-task/user-task.component';

@Component({
  selector: 'app-user-tasks',
  imports: [UserTask],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasks {
  public readonly name = input.required<string>();
}
