import { Component, computed, input, signal } from '@angular/core';
import { UserTask } from './user-task/user-task.component';
import type { Task, User, UserTaskEvent } from '../models';

const DUMMY_TASKS: Task[] = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
    completed: false,
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
    completed: false,
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary: 'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
    completed: false,
  },
];

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
