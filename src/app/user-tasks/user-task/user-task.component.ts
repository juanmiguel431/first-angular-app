import { Component, input, Input } from '@angular/core';
import { Task } from '../../models';

@Component({
  selector: 'app-user-task',
  imports: [],
  templateUrl: './user-task.component.html',
  styleUrl: './user-task.component.css',
})
export class UserTask {
  public task = input.required<Task>();
}
