import { Component, output } from '@angular/core';
import { UserTaskFormDto } from '../../models';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-task-form',
  imports: [FormsModule],
  templateUrl: './user-task-form.html',
  styleUrl: './user-task-form.css',
})
export class UserTaskForm {
  protected title: string = '';
  protected summary: string = '';
  protected dueDate: string = '';

  public onClose = output();
  public onSubmit = output<UserTaskFormDto>();

  public onFormClose() {
    this.onClose.emit();
  }

  protected onFormSubmit() {
    this.onSubmit.emit({
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate,
    });
  }
}
