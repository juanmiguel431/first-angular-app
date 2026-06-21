import { Component, computed, input } from '@angular/core';
import type { User, UserTaskFormDto } from '../models';
import { TaskService } from './task.service';

@Component({
  selector: 'app-user-tasks',
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  standalone: false,
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
