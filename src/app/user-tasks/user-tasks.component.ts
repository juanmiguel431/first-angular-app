import { Component, computed, input, signal } from '@angular/core';
import { UserTask } from './user-task/user-task.component';
import type { User, UserTaskEvent } from '../models';
import { DUMMY_TASKS } from '../constants';

@Component({
  selector: 'app-user-tasks',
  imports: [UserTask],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasks {
  public readonly user = input.required<User>();
  private tasks = signal(DUMMY_TASKS);

  protected activeTasks = computed(() => {
    return this.tasks().filter((t) => t.userId === this.user().id && !t.completed);
  });

  protected onTaskCompleted(event: UserTaskEvent) {
    this.tasks.update(tasks =>
      tasks.map((t) =>
        t.id === event.task.id ? { ...t, completed: true } : t
      ));
  }
}
