import { DUMMY_TASKS } from '../constants';
import type { Task, UserTaskFormDto } from '../models';
import { v4 as uuidv4 } from 'uuid';
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks = signal(DUMMY_TASKS);

  public getActiveUserTasks(userId: string) {
    return this.tasks().filter(t => t.userId === userId && !t.completed);
  }

  public create(model: UserTaskFormDto, userId: string) {
    const newTask: Task = {
      userId: userId,
      id: uuidv4(),
      title: model.title,
      summary: model.summary,
      completed: false,
      dueDate: model.dueDate,
    };

    this.tasks.update(tasks => {
      return [...tasks, newTask];
    });

    return newTask;
  }

  public complete(taskId: string) {
    this.tasks.update(tasks =>
      tasks.map((t) => (t.id === taskId ? { ...t, completed: true } : t)),
    );
  }
}
