import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user-tasks',
  imports: [],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasks {
  public readonly name = input.required<string>();
}
