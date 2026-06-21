import { Component, inject, input } from '@angular/core';
import type { Task } from '../../models';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-user-task',
  templateUrl: './user-task.component.html',
  styleUrl: './user-task.component.css',
  standalone: false,
})
export class UserTask {
  public task = input.required<Task>();
  private readonly taskService = inject(TaskService);

  protected onCompletedClick(event: MouseEvent) {
    this.taskService.complete(this.task().id);
  }
}
