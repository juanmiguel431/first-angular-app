import { Component, computed, input } from '@angular/core';
import { UserTask } from './user-task/user-task.component';
import type { Task, User, UserTaskEvent, UserTaskFormDto } from '../models';
import { UserTaskForm } from './user-task-form/user-task-form';
import { TaskService } from './task.service';

@Component({
  selector: 'app-user-tasks',
  imports: [UserTask, UserTaskForm],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasks {
  public readonly user = input.required<User>();
  protected openCreateForm = false;
  private taskService: TaskService;

  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  protected activeTasks = computed(() => {
    return this.taskService.getActiveUserTasks(this.user().id);
  });

  protected onTaskCompleted(event: UserTaskEvent) {
    this.taskService.complete(event.task.id);
  }

  protected onAddTask(event: MouseEvent) {
    this.openCreateForm = true;
  }

  protected onFormClose() {
    this.openCreateForm = false;
  }

  protected onFormSubmit(event: UserTaskFormDto) {
    this.taskService.create(event, this.user().id);
    this.onFormClose();
  }
}
