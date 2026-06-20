import { Component, inject, input } from '@angular/core';
import type { Task } from '../../models';
import { Card } from '../../shared/card/card';
import { DatePipe } from '@angular/common';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-user-task',
  imports: [Card, DatePipe],
  templateUrl: './user-task.component.html',
  styleUrl: './user-task.component.css',
})
export class UserTask {
  public task = input.required<Task>();
  private readonly taskService = inject(TaskService);

  protected onCompletedClick(event: MouseEvent) {
    this.taskService.complete(this.task().id);
  }
}
