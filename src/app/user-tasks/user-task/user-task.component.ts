import { Component, input, Input, output } from '@angular/core';
import type { Task, UserTaskEvent } from '../../models';
import { Card } from '../../shared/card/card';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-task',
  imports: [Card, DatePipe],
  templateUrl: './user-task.component.html',
  styleUrl: './user-task.component.css',
})
export class UserTask {
  public task = input.required<Task>();
  public onComplete = output<UserTaskEvent>();

  protected onCompletedClick(event: MouseEvent) {
    this.onComplete.emit({ event, task: this.task() });
  }
}
