import { Component, computed, input } from '@angular/core';
import { UserTask } from './user-task/user-task.component';
import { Task, User } from '../models';

const DUMMY_TASKS: Task[] = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary: 'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
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

  protected tasks = computed(() => {
    return DUMMY_TASKS.filter(t => t.userId === this.user().id);
  });
}
