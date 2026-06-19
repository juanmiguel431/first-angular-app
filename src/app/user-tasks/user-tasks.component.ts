import { Component, computed, input, signal } from '@angular/core';
import { UserTask } from './user-task/user-task.component';
import type { Task, User, UserTaskEvent, UserTaskFormDto } from '../models';
import { DUMMY_TASKS } from '../constants';
import { UserTaskForm } from './user-task-form/user-task-form';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-user-tasks',
  imports: [UserTask, UserTaskForm],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasks {
  public readonly user = input.required<User>();
  private tasks = signal(DUMMY_TASKS);
  protected openCreateForm = false;

  protected activeTasks = computed(() => {
    return this.tasks().filter((t) => t.userId === this.user().id && !t.completed);
  });

  protected onTaskCompleted(event: UserTaskEvent) {
    this.tasks.update(tasks =>
      tasks.map((t) =>
        t.id === event.task.id ? { ...t, completed: true } : t
      ));
  }

  protected onAddTask(event: MouseEvent) {
    this.openCreateForm = true;
  }

  protected onFormClose() {
    this.openCreateForm = false;
  }

  protected onFormSubmit(event: UserTaskFormDto) {
    const newTask: Task = {
      userId: this.user().id,
      id: uuidv4(),
      title: event.title,
      summary: event.summary,
      completed: false,
      dueDate: event.dueDate,
    };

    this.tasks.update((tasks) => {
      return [...tasks, newTask];
    });

    this.onFormClose();
  }
}
