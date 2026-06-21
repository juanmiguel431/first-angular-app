import { Component, output, signal } from '@angular/core';
import { UserTaskFormDto } from '../../models';

@Component({
  selector: 'app-user-task-form',
  templateUrl: './user-task-form.html',
  styleUrl: './user-task-form.css',
  standalone: false,
})
export class UserTaskForm {
  protected title = signal('');
  protected summary = signal('');
  protected dueDate = signal('');

  public onClose = output();
  public onSubmit = output<UserTaskFormDto>();

  public onFormClose() {
    this.onClose.emit();
  }

  protected onFormSubmit() {
    this.onSubmit.emit({
      title: this.title(),
      summary: this.summary(),
      dueDate: this.dueDate(),
    });
  }
}
